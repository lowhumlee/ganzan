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
  // Build a pool directly from FORTUNES entries so we never get undefined.
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

  // Each fortune is added to the pool N times based on its type weight.
  // This guarantees we always pick an actual fortune object.
  const weightedPool = [];
  FORTUNES.forEach(function(fortune) {
    const w = weights[fortune.type] || 1;
    for (let i = 0; i < w; i++) {
      weightedPool.push(fortune);
    }
  });

  // Absolute safety fallback
  if (!weightedPool.length) {
    return FORTUNES[Math.floor(Math.random() * FORTUNES.length)];
  }

  return weightedPool[Math.floor(Math.random() * weightedPool.length)];
}

// ===========================
// RENDER FORTUNE
// ===========================
function renderFortune(fortune) {
  const typeInfo = FORTUNE_TYPES[fortune.type];
  const slip = document.getElementById('omikujiSlip');

  // Remove any previous fortune class
  slip.className = 'omikuji-slip';
  slip.classList.add(typeInfo.cls);

  document.getElementById('slipNumber').textContent = fortune.number;
  document.getElementById('fortuneKanji').textContent   = typeInfo.kanji;
  document.getElementById('fortuneRomaji').textContent  = typeInfo.romaji;
  document.getElementById('fortuneEnglish').textContent = typeInfo.english;

  document.getElementById('verseJapanese').textContent    = fortune.verse.japanese;
  document.getElementById('verseReading').textContent     = fortune.verse.reading;
  document.getElementById('verseTranslation').textContent = fortune.verse.english;

  // Aspects
  const grid = document.getElementById('aspectsGrid');
  grid.innerHTML = '';
  ASPECTS.forEach(function(aspect) {
    const data = fortune.aspects[aspect.key];
    if (!data) return;
    const div = document.createElement('div');
    div.classList.add('aspect-item');
    div.innerHTML =
      '<div class="aspect-label">' + aspect.label + '</div>' +
      '<div class="aspect-value ' + data.rating + '">' + data.text + '</div>';
    grid.appendChild(div);
  });

  // Tie note
  document.getElementById('tieNote').textContent = TIE_NOTES[fortune.type] || '';
}

// ===========================
// STATE MACHINE
// ===========================
var currentFortune = null;

function showSection(id) {
  ['intro', 'shakingScreen', 'resultScreen'].forEach(function(s) {
    var el = document.getElementById(s);
    if (el) el.style.display = 'none';
  });
  var target = document.getElementById(id);
  if (target) target.style.display = '';
}

function drawOmikuji() {
  showSection('shakingScreen');
  createSticks();
  window.scrollTo({ top: 0, behavior: 'smooth' });

  // Shaking animation duration: 2.0 – 3.2 seconds
  var shakeDuration = 2000 + Math.random() * 1200;

  setTimeout(function() {
    try {
      currentFortune = pickFortune();
      if (!currentFortune) {
        throw new Error('pickFortune returned nothing');
      }
      renderFortune(currentFortune);
    } catch (err) {
      console.error('Omikuji render error:', err);
      // Hard fallback: use the very first fortune so we never stay stuck
      currentFortune = FORTUNES[0];
      try { renderFortune(currentFortune); } catch(e2) { console.error(e2); }
    }
    showSection('resultScreen');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, shakeDuration);
}

function resetApp() {
  currentFortune = null;
  showSection('intro');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function shareResult() {
  if (!currentFortune) return;
  var typeInfo = FORTUNE_TYPES[currentFortune.type];
  var text = '\uD83C\uDF8B My Omikuji (\u5143\u4E09\u5927\u5E2B\u767E\u7C3D) result:\n' +
    typeInfo.kanji + ' \u2014 ' + typeInfo.english + ' (' + typeInfo.romaji + ')\n\n' +
    '"' + currentFortune.verse.english + '"\n\n' +
    'Try your luck at the Ganzan Daishi Hyakusen Omikuji app!';

  if (navigator.share) {
    navigator.share({ title: 'My Omikuji Fortune', text: text })
      .catch(function() { fallbackCopy(text); });
  } else {
    fallbackCopy(text);
  }
}

function fallbackCopy(text) {
  if (navigator.clipboard) {
    navigator.clipboard.writeText(text)
      .then(function() { showToast('Fortune copied to clipboard!'); })
      .catch(function() { showToast('Could not copy to clipboard'); });
  } else {
    showToast('Share: ' + text.substring(0, 60) + '\u2026');
  }
}

function showToast(msg) {
  var toast = document.getElementById('toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast';
    toast.style.cssText = [
      'position:fixed', 'bottom:2rem', 'left:50%', 'transform:translateX(-50%)',
      'background:rgba(245,237,224,0.95)', 'color:#1a1208',
      'padding:0.75rem 1.5rem', "font-family:'Cormorant Garamond',serif",
      'font-size:1rem', 'z-index:999', 'border-radius:2px',
      'box-shadow:0 4px 20px rgba(0,0,0,0.3)', 'transition:opacity 0.3s ease'
    ].join(';');
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.style.opacity = '1';
  setTimeout(function() { toast.style.opacity = '0'; }, 3000);
}

// ===========================
// INIT
// ===========================
document.addEventListener('DOMContentLoaded', function() {
  createPetals();
  showSection('intro');
});
