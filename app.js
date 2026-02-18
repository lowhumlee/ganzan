/**
 * Omikuji App — app.js
 * Ganzan Daishi Hyakusen
 */

// ===========================
// PETAL GENERATOR
// ===========================
function createPetals() {
  const container = document.getElementById('petals');
  const count = window.innerWidth < 600 ? 12 : 22;
  for (let i = 0; i < count; i++) {
    const petal = document.createElement('div');
    petal.classList.add('petal');
    const left = Math.random() * 100;
    const delay = Math.random() * 15;
    const duration = 8 + Math.random() * 12;
    const size = 6 + Math.random() * 8;
    petal.style.cssText = `
      left: ${left}vw;
      animation-delay: ${delay}s;
      animation-duration: ${duration}s;
      width: ${size}px;
      height: ${size * 1.2}px;
      transform: rotate(${Math.random() * 360}deg);
    `;
    container.appendChild(petal);
  }
}

// ===========================
// CYLINDER STICKS
// ===========================
function createSticks() {
  const container = document.getElementById('stickContainer');
  container.innerHTML = '';
  const numSticks = 9;
  for (let i = 0; i < numSticks; i++) {
    const stick = document.createElement('div');
    stick.classList.add('stick');
    const height = 60 + Math.random() * 60;
    const delay = Math.random() * 0.15;
    stick.style.cssText = `height: ${height}px; animation-delay: ${delay}s;`;
    container.appendChild(stick);
  }
}

// ===========================
// PICK RANDOM FORTUNE
// ===========================
function pickFortune() {
  // Weighted distribution matching traditional Ganzan Daishi Hyakusen
  // The distribution across 100 sticks (approximate):
  // 大吉 17, 吉 14 (but some sources say fewer), 中吉 12, 小吉 13, 半吉 10, 末吉 12, 末小吉 8, 凶 14
  const weights = {
    daikichi:    17,
    kichi:       14,
    chukichi:    12,
    shokichi:    13,
    hankichi:    10,
    suekichi:    12,
    sueshokichi:  8,
    kyo:         14,
  };

  const weightedPool = [];
  FORTUNES.forEach(f => {
    const w = weights[f.type] || 1;
    // Each fortune gets added proportionally; we scale to fortune count
    weightedPool.push(f);
  });

  // Weighted random pick by type frequency
  const typePool = [];
  Object.entries(weights).forEach(([type, w]) => {
    for (let i = 0; i < w; i++) typePool.push(type);
  });

  const rolledType = typePool[Math.floor(Math.random() * typePool.length)];
  const ofType = FORTUNES.filter(f => f.type === rolledType);
  return ofType[Math.floor(Math.random() * ofType.length)];
}

// ===========================
// RENDER FORTUNE
// ===========================
function renderFortune(fortune) {
  const typeInfo = FORTUNE_TYPES[fortune.type];
  const slip = document.getElementById('omikujiSlip');

  // Remove any previous fortune class
  slip.className = 'omikuji-slip';
  slip.classList.add(typeInfo.class);

  document.getElementById('slipNumber').textContent = fortune.number;
  document.getElementById('fortuneKanji').textContent  = typeInfo.kanji;
  document.getElementById('fortuneRomaji').textContent = typeInfo.romaji;
  document.getElementById('fortuneEnglish').textContent = typeInfo.english;

  document.getElementById('verseJapanese').textContent    = fortune.verse.japanese;
  document.getElementById('verseReading').textContent     = fortune.verse.reading;
  document.getElementById('verseTranslation').textContent = fortune.verse.english;

  // Aspects
  const grid = document.getElementById('aspectsGrid');
  grid.innerHTML = '';
  ASPECTS.forEach(aspect => {
    const data = fortune.aspects[aspect.key];
    if (!data) return;
    const div = document.createElement('div');
    div.classList.add('aspect-item');
    div.innerHTML = `
      <div class="aspect-label">${aspect.label}</div>
      <div class="aspect-value ${data.rating}">${data.text}</div>
    `;
    grid.appendChild(div);
  });

  // Tie note
  document.getElementById('tieNote').textContent = TIE_NOTES[fortune.type] || '';
}

// ===========================
// STATE MACHINE
// ===========================
let currentFortune = null;

function showSection(id) {
  ['intro', 'shakingScreen', 'resultScreen'].forEach(s => {
    const el = document.getElementById(s);
    el.style.display = 'none';
  });
  document.getElementById(id).style.display = '';
}

function drawOmikuji() {
  showSection('shakingScreen');
  createSticks();
  window.scrollTo({ top: 0, behavior: 'smooth' });

  // Shaking animation duration
  const shakeDuration = 2000 + Math.random() * 1200;

  setTimeout(() => {
    currentFortune = pickFortune();
    renderFortune(currentFortune);
    showSection('resultScreen');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, shakeDuration);
}

function resetApp() {
  showSection('intro');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function shareResult() {
  if (!currentFortune) return;
  const typeInfo = FORTUNE_TYPES[currentFortune.type];
  const text = `🎋 My Omikuji (元三大師百籤) result:\n${typeInfo.kanji} — ${typeInfo.english} (${typeInfo.romaji})\n\n"${currentFortune.verse.english}"\n\nTry your luck at the Ganzan Daishi Hyakusen Omikuji app!`;

  if (navigator.share) {
    navigator.share({ title: 'My Omikuji Fortune', text }).catch(() => fallbackCopy(text));
  } else {
    fallbackCopy(text);
  }
}

function fallbackCopy(text) {
  if (navigator.clipboard) {
    navigator.clipboard.writeText(text).then(() => {
      showToast('Fortune copied to clipboard!');
    }).catch(() => showToast('Could not copy'));
  } else {
    showToast('Share: ' + text.substring(0, 40) + '…');
  }
}

function showToast(msg) {
  let toast = document.getElementById('toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast';
    toast.style.cssText = `
      position: fixed; bottom: 2rem; left: 50%; transform: translateX(-50%);
      background: rgba(245,237,224,0.95); color: #1a1208;
      padding: 0.75rem 1.5rem; font-family: 'Cormorant Garamond', serif;
      font-size: 1rem; z-index: 999; border-radius: 2px;
      box-shadow: 0 4px 20px rgba(0,0,0,0.3);
      transition: opacity 0.3s ease;
    `;
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.style.opacity = '1';
  setTimeout(() => { toast.style.opacity = '0'; }, 3000);
}

// ===========================
// INIT
// ===========================
document.addEventListener('DOMContentLoaded', () => {
  createPetals();
  showSection('intro');
});
