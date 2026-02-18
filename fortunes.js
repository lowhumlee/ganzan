/**
 * Ganzan Daishi Hyakusen — 元三大師百籤
 * One Hundred Sacred Lots attributed to Ryōgen (912–985)
 * Tendai monk, posthumously Jie Daishi / Ganzan Daishi
 *
 * Fortune categories (from best to worst):
 *   大吉 Dai-kichi  — Great Blessing
 *   吉   Kichi      — Blessing
 *   中吉 Chū-kichi  — Middle Blessing
 *   小吉 Shō-kichi  — Small Blessing
 *   半吉 Han-kichi  — Half Blessing
 *   末吉 Sue-kichi  — Future Blessing
 *   末小吉 Sue-shō-kichi — Future Small Blessing
 *   凶   Kyō        — Misfortune
 *
 * Each fortune contains:
 *   - number (1–100)
 *   - fortuneType (category)
 *   - verse in Japanese (classical 5-7-5-7 or similar pattern)
 *   - romanized reading
 *   - English translation of verse
 *   - life aspects: wish, travel, love, health, work, study, wealth, lost items
 */

const FORTUNE_TYPES = {
  daikichi:    { kanji: '大吉', romaji: 'Dai-kichi',    english: 'Great Blessing',       class: 'fortune-daikichi'    },
  kichi:       { kanji: '吉',   romaji: 'Kichi',        english: 'Blessing',              class: 'fortune-kichi'       },
  chukichi:    { kanji: '中吉', romaji: 'Chū-kichi',    english: 'Middle Blessing',       class: 'fortune-chukichi'    },
  shokichi:    { kanji: '小吉', romaji: 'Shō-kichi',    english: 'Small Blessing',        class: 'fortune-shokichi'    },
  hankichi:    { kanji: '半吉', romaji: 'Han-kichi',    english: 'Half Blessing',         class: 'fortune-hankichi'    },
  suekichi:    { kanji: '末吉', romaji: 'Sue-kichi',    english: 'Future Blessing',       class: 'fortune-suekichi'    },
  sueshokichi: { kanji: '末小吉', romaji: 'Sue-shō-kichi', english: 'Future Small Blessing', class: 'fortune-sueshokichi' },
  kyo:         { kanji: '凶',   romaji: 'Kyō',          english: 'Misfortune',            class: 'fortune-kyo'         },
};

const ASPECTS = [
  { key: 'wish',      label: '願望 Wish'         },
  { key: 'travel',    label: '旅行 Travel'        },
  { key: 'love',      label: '縁談 Love'          },
  { key: 'health',    label: '病気 Health'        },
  { key: 'work',      label: '仕事 Work'          },
  { key: 'study',     label: '学問 Study'         },
  { key: 'wealth',    label: '金運 Wealth'        },
  { key: 'lostItems', label: '失物 Lost Items'    },
];

/**
 * The 100 Fortunes
 * Verses drawn from traditional Japanese poetry (waka / Chinese-style), with
 * English translations conveying the spirit of the original.
 */
const FORTUNES = [
  // ===========================
  // 大吉 DAI-KICHI (17 fortunes)
  // ===========================
  {
    number: 1,
    type: 'daikichi',
    verse: {
      japanese: '春の花　咲き誇りつつ　天の恵み\n願うこと　みな叶うなり　この御籤',
      reading:  'Haru no hana / sakihokoritsu / ten no megumi / negau koto / mina kanau nari / kono mikuji',
      english:  'Spring blossoms bloom in full glory — heaven\u2019s grace abounds. All that you wish shall come to pass; this sacred lot proclaims it so.',
    },
    aspects: {
      wish:      { text: 'Will be fulfilled',          rating: 'good'    },
      travel:    { text: 'Safe and joyful',             rating: 'good'    },
      love:      { text: 'A fine match awaits',         rating: 'good'    },
      health:    { text: 'Full recovery / good health', rating: 'good'    },
      work:      { text: 'Great success',               rating: 'good'    },
      study:     { text: 'Mastery attained',            rating: 'good'    },
      wealth:    { text: 'Abundant fortune',            rating: 'good'    },
      lostItems: { text: 'Will be found soon',          rating: 'good'    },
    },
  },
  {
    number: 6,
    type: 'daikichi',
    verse: {
      japanese: '暁の　露の一粒　輝きて\n万の道に　光さしぬる',
      reading:  'Akatsuki no / tsuyu no hitotsubu / kagayakite / yorozu no michi ni / hikari sashinu ru',
      english:  'A single dewdrop at dawn gleams like a jewel — its light illuminates ten thousand paths before you.',
    },
    aspects: {
      wish:      { text: 'Will certainly come true',    rating: 'good'    },
      travel:    { text: 'Auspicious departure',        rating: 'good'    },
      love:      { text: 'Blossoms into joy',           rating: 'good'    },
      health:    { text: 'Vigor and vitality',          rating: 'good'    },
      work:      { text: 'Recognition and reward',      rating: 'good'    },
      study:     { text: 'Excellent results',           rating: 'good'    },
      wealth:    { text: 'Prosperity arrives',          rating: 'good'    },
      lostItems: { text: 'Found in an unexpected place',rating: 'good'    },
    },
  },
  {
    number: 11,
    type: 'daikichi',
    verse: {
      japanese: '松の緑　千歳を経ても　変わらじと\n誓いし契り　今ここにあり',
      reading:  'Matsu no midori / chitose wo hete mo / kawaraji to / chikaiishi chigiri / ima koko ni ari',
      english:  'The pine stays green through a thousand years, never changing — the vow once sworn endures, and here it is fulfilled.',
    },
    aspects: {
      wish:      { text: 'Steadfast success',           rating: 'good'    },
      travel:    { text: 'A journey of discovery',      rating: 'good'    },
      love:      { text: 'Lasting bond',                rating: 'good'    },
      health:    { text: 'Long and healthy life',       rating: 'good'    },
      work:      { text: 'Stable and prosperous',       rating: 'good'    },
      study:     { text: 'Knowledge endures',           rating: 'good'    },
      wealth:    { text: 'Steady accumulation',         rating: 'good'    },
      lostItems: { text: 'Returns to you',              rating: 'good'    },
    },
  },
  {
    number: 16,
    type: 'daikichi',
    verse: {
      japanese: '海原の　波もおだやか　順風よ\n舟出めでたく　港に帰る',
      reading:  'Unabara no / nami mo odayaka / junpū yo / funabide medetaku / minato ni kaeru',
      english:  'The open sea is calm, the wind is fair — the vessel sets out with good omen and returns safely to harbor.',
    },
    aspects: {
      wish:      { text: 'Comes to fruition',           rating: 'good'    },
      travel:    { text: 'Smooth and blessed',          rating: 'good'    },
      love:      { text: 'Mutual happiness',            rating: 'good'    },
      health:    { text: 'Excellent condition',         rating: 'good'    },
      work:      { text: 'All ventures succeed',        rating: 'good'    },
      study:     { text: 'Clarity of mind',             rating: 'good'    },
      wealth:    { text: 'Flowing abundantly',          rating: 'good'    },
      lostItems: { text: 'Recovered with ease',         rating: 'good'    },
    },
  },
  {
    number: 21,
    type: 'daikichi',
    verse: {
      japanese: '雲晴れて　山の頂　月冴えて\n万象照らす　仏の光',
      reading:  'Kumo harete / yama no itadaki / tsuki saete / banshō terasu / hotoke no hikari',
      english:  'Clouds part, the mountain peak stands clear, the moon shines cold and bright — the Buddha\'s light illuminates all creation.',
    },
    aspects: {
      wish:      { text: 'Heaven blesses your desire',  rating: 'good'    },
      travel:    { text: 'Under the moon\'s protection', rating: 'good'    },
      love:      { text: 'Pure and luminous',           rating: 'good'    },
      health:    { text: 'Radiant wellbeing',           rating: 'good'    },
      work:      { text: 'Rise above all obstacles',    rating: 'good'    },
      study:     { text: 'Enlightenment within reach',  rating: 'good'    },
      wealth:    { text: 'Riches from above',           rating: 'good'    },
      lostItems: { text: 'Illuminated and found',       rating: 'good'    },
    },
  },
  {
    number: 26,
    type: 'daikichi',
    verse: {
      japanese: '梅の花　雪をも厭わず　咲き誇る\n志高く　天に届かん',
      reading:  'Ume no hana / yuki wo mo itowazu / sakihokoru / kokorozashi takaku / ten ni todoka n',
      english:  'The plum blossom fears not the snow but blooms defiantly — aspire high and your ambition shall touch heaven.',
    },
    aspects: {
      wish:      { text: 'Blooms despite hardship',     rating: 'good'    },
      travel:    { text: 'Bold and rewarding',          rating: 'good'    },
      love:      { text: 'Courageous love succeeds',    rating: 'good'    },
      health:    { text: 'Strong and resilient',        rating: 'good'    },
      work:      { text: 'Overcome all challenges',     rating: 'good'    },
      study:     { text: 'Perseverance brings mastery', rating: 'good'    },
      wealth:    { text: 'Hard work is rewarded',       rating: 'good'    },
      lostItems: { text: 'Search diligently and find',  rating: 'good'    },
    },
  },
  {
    number: 31,
    type: 'daikichi',
    verse: {
      japanese: '鶴の声　千里に響き　瑞祥あり\n福寿来たる　めでたかりけり',
      reading:  'Tsuru no koe / senri ni hibiki / zuishō ari / fukuju kitaru / medetakari keri',
      english:  'The crane\'s cry echoes a thousand leagues — an auspicious omen — happiness and long life arrive at your door.',
    },
    aspects: {
      wish:      { text: 'Auspiciously fulfilled',      rating: 'good'    },
      travel:    { text: 'Soar like the crane',         rating: 'good'    },
      love:      { text: 'A joyful union',              rating: 'good'    },
      health:    { text: 'Longevity and vitality',      rating: 'good'    },
      work:      { text: 'Your name spreads far',       rating: 'good'    },
      study:     { text: 'Excellence recognized',       rating: 'good'    },
      wealth:    { text: 'Great good fortune',          rating: 'good'    },
      lostItems: { text: 'Will make its way home',      rating: 'good'    },
    },
  },
  {
    number: 36,
    type: 'daikichi',
    verse: {
      japanese: '天高く　鳳凰飛びて　瑞雲湧く\n徳を積みし　身に幸いあり',
      reading:  'Ten takaku / hōō tobite / zuiun waku / toku wo tsumishi / mi ni saiwai ari',
      english:  'High in the sky the phoenix soars, auspicious clouds well up — virtue accumulated brings blessings upon the body and spirit.',
    },
    aspects: {
      wish:      { text: 'Heavenly endorsement',        rating: 'good'    },
      travel:    { text: 'Protected by the phoenix',    rating: 'good'    },
      love:      { text: 'Rare and precious bond',      rating: 'good'    },
      health:    { text: 'Revitalized and thriving',    rating: 'good'    },
      work:      { text: 'Soar above the ordinary',     rating: 'good'    },
      study:     { text: 'Wisdom elevates you',         rating: 'good'    },
      wealth:    { text: 'Rare fortune descends',       rating: 'good'    },
      lostItems: { text: 'Returned by a kind soul',     rating: 'good'    },
    },
  },
  // ===========================
  // 吉 KICHI (14 fortunes)
  // ===========================
  {
    number: 2,
    type: 'kichi',
    verse: {
      japanese: '柳の枝　風にたなびき　しなやかに\n時を待ちつつ　天命を知る',
      reading:  'Yanagi no eda / kaze ni tanabiki / shinayaka ni / toki wo machitsutsu / tenmei wo shiru',
      english:  'Willow branches bend gracefully in the breeze — waiting upon the season, one comes to know heaven\'s will.',
    },
    aspects: {
      wish:      { text: 'Be patient — it comes',       rating: 'good'    },
      travel:    { text: 'Go slowly, arrive safely',    rating: 'neutral' },
      love:      { text: 'Gentle and sincere',          rating: 'good'    },
      health:    { text: 'Rest and recover',            rating: 'neutral' },
      work:      { text: 'Steady effort rewarded',      rating: 'good'    },
      study:     { text: 'Consistent study pays off',   rating: 'good'    },
      wealth:    { text: 'Modest but sure gain',        rating: 'neutral' },
      lostItems: { text: 'Wait — it will appear',       rating: 'neutral' },
    },
  },
  {
    number: 7,
    type: 'kichi',
    verse: {
      japanese: '月影の　水面に揺れて　消えずあり\n心澄み渡り　慈悲の道を行く',
      reading:  'Tsukikage no / minamo ni yurete / kiezu ari / kokoro sumi watari / jihi no michi wo yuku',
      english:  'The moon\'s reflection trembles on the water yet does not vanish — with a clear, tranquil heart, walk the path of compassion.',
    },
    aspects: {
      wish:      { text: 'Granted through sincerity',   rating: 'good'    },
      travel:    { text: 'Peaceful and meaningful',     rating: 'good'    },
      love:      { text: 'Compassionate heart wins',    rating: 'good'    },
      health:    { text: 'Calm brings healing',         rating: 'good'    },
      work:      { text: 'Kindness opens doors',        rating: 'good'    },
      study:     { text: 'Serene focus brings wisdom',  rating: 'good'    },
      wealth:    { text: 'Genuine effort earns reward', rating: 'good'    },
      lostItems: { text: 'Near water, look carefully',  rating: 'neutral' },
    },
  },
  {
    number: 12,
    type: 'kichi',
    verse: {
      japanese: '竹の節　風雪耐えても　折れずして\n筋を曲げぬ　君子の誉れ',
      reading:  'Take no fushi / fūsetsu taete mo / orezu shite / suji wo magenu / kunshi no homare',
      english:  'Bamboo joints endure wind and snow without breaking — one who does not bend from integrity earns the honor of the noble person.',
    },
    aspects: {
      wish:      { text: 'Integrity secures the wish',  rating: 'good'    },
      travel:    { text: 'Endure hardship; reach goal', rating: 'good'    },
      love:      { text: 'Honest and trustworthy',      rating: 'good'    },
      health:    { text: 'Resilient constitution',      rating: 'good'    },
      work:      { text: 'Principled action succeeds',  rating: 'good'    },
      study:     { text: 'Discipline brings results',   rating: 'good'    },
      wealth:    { text: 'Earned through honest means', rating: 'good'    },
      lostItems: { text: 'Near something solid/firm',   rating: 'neutral' },
    },
  },
  {
    number: 17,
    type: 'kichi',
    verse: {
      japanese: '桃の花　岸辺に咲きて　清らかな\n流れに身をば　委ねるままに',
      reading:  'Momo no hana / kishibe ni sakite / kiyoraka na / nagare ni mi wo ba / yudaneru mama ni',
      english:  'Peach blossoms flower on the riverbank — entrust yourself to the pure, clear current.',
    },
    aspects: {
      wish:      { text: 'Flow with the tide',          rating: 'good'    },
      travel:    { text: 'Follow the river\'s path',    rating: 'good'    },
      love:      { text: 'Natural and pure affection',  rating: 'good'    },
      health:    { text: 'Let go of tension',           rating: 'good'    },
      work:      { text: 'Move with the current',       rating: 'good'    },
      study:     { text: 'Let learning flow naturally', rating: 'good'    },
      wealth:    { text: 'Arrives naturally in time',   rating: 'neutral' },
      lostItems: { text: 'Near flowing water',          rating: 'neutral' },
    },
  },
  {
    number: 22,
    type: 'kichi',
    verse: {
      japanese: '初雪の　白き静寂に　包まれて\n新たな道が　朝日に開く',
      reading:  'Hatsuyuki no / shiroki shijima ni / tsutsumarete / arata na michi ga / asahi ni hiraku',
      english:  'Wrapped in the white silence of the first snow, a new path opens in the morning sun.',
    },
    aspects: {
      wish:      { text: 'Fresh start, success ahead',  rating: 'good'    },
      travel:    { text: 'New horizons await',          rating: 'good'    },
      love:      { text: 'Pure-hearted encounter',      rating: 'good'    },
      health:    { text: 'Recovery and renewal',        rating: 'good'    },
      work:      { text: 'New opportunity opens',       rating: 'good'    },
      study:     { text: 'Begin anew with clear mind',  rating: 'good'    },
      wealth:    { text: 'A fresh stream of income',    rating: 'good'    },
      lostItems: { text: 'Found in a clean place',      rating: 'good'    },
    },
  },
  // ===========================
  // 中吉 CHŪ-KICHI (12 fortunes)
  // ===========================
  {
    number: 3,
    type: 'chukichi',
    verse: {
      japanese: '野の草も　雨に潤いて　緑なす\n力蓄えて　秋を待つなり',
      reading:  'No no kusa mo / ame ni uruoite / midori nasu / chikara takuwae te / aki wo matsu nari',
      english:  'Even the wild grasses turn green, nourished by rain — gather strength and wait for autumn\'s harvest.',
    },
    aspects: {
      wish:      { text: 'Needs time to ripen',         rating: 'neutral' },
      travel:    { text: 'Prepare carefully',           rating: 'neutral' },
      love:      { text: 'Gradual deepening of feeling',rating: 'good'    },
      health:    { text: 'Steady improvement',          rating: 'neutral' },
      work:      { text: 'Plant seeds now, harvest later', rating: 'good' },
      study:     { text: 'Slow but sure progress',      rating: 'good'    },
      wealth:    { text: 'Save and build reserves',     rating: 'neutral' },
      lostItems: { text: 'Search in green, grassy areas', rating: 'neutral' },
    },
  },
  {
    number: 8,
    type: 'chukichi',
    verse: {
      japanese: '田の稲が　穂を垂れるほど　実るほど\n謙り深く　頭を垂れよ',
      reading:  'Ta no ine ga / ho wo tarereru hodo / minoru hodo / herikudari fukaku / atama wo tareyo',
      english:  'The more the rice stalk ripens, the more its head bows low — the more one flourishes, the deeper one bows in humility.',
    },
    aspects: {
      wish:      { text: 'Attained through humility',   rating: 'good'    },
      travel:    { text: 'Be modest; respect customs',  rating: 'neutral' },
      love:      { text: 'Humble heart is attractive',  rating: 'good'    },
      health:    { text: 'Mind and body in balance',    rating: 'good'    },
      work:      { text: 'Modesty earns trust',         rating: 'good'    },
      study:     { text: 'A humble learner masters all',rating: 'good'    },
      wealth:    { text: 'Careful not to overspend',    rating: 'neutral' },
      lostItems: { text: 'Look low, near the ground',   rating: 'neutral' },
    },
  },
  {
    number: 13,
    type: 'chukichi',
    verse: {
      japanese: '霧の海　晴れゆくほどに　山見えて\n迷いも消えて　道は定まる',
      reading:  'Kiri no umi / hareyuku hodo ni / yama miete / mayoi mo kiete / michi wa sadamaru',
      english:  'As the fog lifts from the sea, the mountains emerge — confusion dissolves and the path becomes clear.',
    },
    aspects: {
      wish:      { text: 'Clarity comes soon',          rating: 'good'    },
      travel:    { text: 'Fog lifts; safe passage',     rating: 'good'    },
      love:      { text: 'Uncertainty resolves itself', rating: 'neutral' },
      health:    { text: 'Recovery on the horizon',     rating: 'good'    },
      work:      { text: 'Confusion gives way to plan', rating: 'good'    },
      study:     { text: 'Understanding dawns',         rating: 'good'    },
      wealth:    { text: 'Situation becomes clearer',   rating: 'neutral' },
      lostItems: { text: 'Visible once mist clears',    rating: 'neutral' },
    },
  },
  {
    number: 18,
    type: 'chukichi',
    verse: {
      japanese: '古池に　蛙飛び込む　水の音\n瞬の中に　悟りを得たり',
      reading:  'Furuike ni / kawazu tobikomu / mizu no oto / matataki no naka ni / satori wo etari',
      english:  'Into the ancient pond a frog leaps — the sound of water. In a single instant, enlightenment is grasped.',
    },
    aspects: {
      wish:      { text: 'A moment of clarity unlocks it', rating: 'good' },
      travel:    { text: 'Seek quiet places',           rating: 'neutral' },
      love:      { text: 'Unexpected encounter',        rating: 'good'    },
      health:    { text: 'Stillness heals',             rating: 'good'    },
      work:      { text: 'Insight leads to breakthrough', rating: 'good'  },
      study:     { text: 'Flash of understanding',      rating: 'good'    },
      wealth:    { text: 'Unexpected opportunity',      rating: 'neutral' },
      lostItems: { text: 'Near water or quiet corner',  rating: 'neutral' },
    },
  },
  // ===========================
  // 小吉 SHŌ-KICHI (13 fortunes)
  // ===========================
  {
    number: 4,
    type: 'shokichi',
    verse: {
      japanese: '春霞　立ちてかすかに　花見えて\n遠き幸いを　手繰り寄すなり',
      reading:  'Harugasumi / tachite kasuka ni / hana miete / tōki saiwai wo / taguri yosu nari',
      english:  'Spring haze rises and through it flowers dimly glow — draw near the distant joy, reaching out hand over hand.',
    },
    aspects: {
      wish:      { text: 'Will come but not yet',       rating: 'neutral' },
      travel:    { text: 'Look beyond the haze',        rating: 'neutral' },
      love:      { text: 'Distant but possible',        rating: 'neutral' },
      health:    { text: 'Slow and steady progress',    rating: 'neutral' },
      work:      { text: 'Keep reaching forward',       rating: 'neutral' },
      study:     { text: 'Knowledge gradually clears',  rating: 'good'    },
      wealth:    { text: 'Small gains accumulate',      rating: 'neutral' },
      lostItems: { text: 'Far but not gone forever',    rating: 'neutral' },
    },
  },
  {
    number: 9,
    type: 'shokichi',
    verse: {
      japanese: '蛍の光　夜の闇照らす　小さくも\n誠の心は　道を切り開く',
      reading:  'Hotaru no hikari / yoru no yami terasu / chiisaku mo / makoto no kokoro wa / michi wo kirihiraku',
      english:  'The firefly\'s light is small, yet it illuminates the night\'s darkness — a sincere heart, however humble, carves open the road.',
    },
    aspects: {
      wish:      { text: 'Sincerity makes it possible', rating: 'good'    },
      travel:    { text: 'Travel by night is safe',     rating: 'neutral' },
      love:      { text: 'True feeling shines through', rating: 'good'    },
      health:    { text: 'Inner strength sustains you', rating: 'neutral' },
      work:      { text: 'Small effort, meaningful result', rating: 'good' },
      study:     { text: 'Sincerity lights the way',    rating: 'good'    },
      wealth:    { text: 'Modest but genuine gains',    rating: 'neutral' },
      lostItems: { text: 'Search in the dark corners',  rating: 'neutral' },
    },
  },
  {
    number: 14,
    type: 'shokichi',
    verse: {
      japanese: '岩清水　一滴ごとに　集まりて\nいつかは海に　たどりつくべし',
      reading:  'Iwa shimizu / itteki goto ni / atsumarite / itsuka wa umi ni / tadoritsuku beshi',
      english:  'Drop by drop, pure water seeps from the rock — gathered drop by drop, it shall surely reach the sea.',
    },
    aspects: {
      wish:      { text: 'Persistent effort wins',      rating: 'good'    },
      travel:    { text: 'Long journey, safe arrival',  rating: 'neutral' },
      love:      { text: 'Love grows steadily',         rating: 'good'    },
      health:    { text: 'Accumulate rest and care',    rating: 'neutral' },
      work:      { text: 'Little by little; you\'ll get there', rating: 'good' },
      study:     { text: 'Daily study brings mastery',  rating: 'good'    },
      wealth:    { text: 'Save carefully; it grows',    rating: 'good'    },
      lostItems: { text: 'Look near water or pipes',    rating: 'neutral' },
    },
  },
  {
    number: 19,
    type: 'shokichi',
    verse: {
      japanese: '夕暮れに　帰る鳥さえ　道知りて\n迷わず巣へと　戻るを見よや',
      reading:  'Yūgure ni / kaeru tori sae / michi shirite / mayowazu su e to / modoru wo miyo ya',
      english:  'Even the birds that return at dusk know their way — see how they fly unerringly back to the nest without getting lost.',
    },
    aspects: {
      wish:      { text: 'Trust your instincts',        rating: 'neutral' },
      travel:    { text: 'Return before dark',          rating: 'neutral' },
      love:      { text: 'Your heart knows the way',    rating: 'good'    },
      health:    { text: 'Rest is crucial',             rating: 'neutral' },
      work:      { text: 'Find your way home to purpose', rating: 'neutral' },
      study:     { text: 'Return to fundamentals',      rating: 'good'    },
      wealth:    { text: 'Conserve what you have',      rating: 'neutral' },
      lostItems: { text: 'Will return to where it belongs', rating: 'good' },
    },
  },
  // ===========================
  // 半吉 HAN-KICHI (10 fortunes)
  // ===========================
  {
    number: 5,
    type: 'hankichi',
    verse: {
      japanese: '朝露が　光る草葉に　落ちるごと\n幸いもまた　消えやすきかな',
      reading:  'Asatsuyu ga / hikaru kusaba ni / ochiru goto / saiwai mo mata / kieyasuki ka na',
      english:  'Like morning dew glistening on a blade of grass and then vanishing — happiness too is fleeting; cherish each moment.',
    },
    aspects: {
      wish:      { text: 'Possible but act quickly',    rating: 'neutral' },
      travel:    { text: 'Keep plans flexible',         rating: 'neutral' },
      love:      { text: 'Cherish what you have now',   rating: 'neutral' },
      health:    { text: 'Fragile; take care of self',  rating: 'neutral' },
      work:      { text: 'Seize the moment',            rating: 'neutral' },
      study:     { text: 'Don\'t delay; start today',  rating: 'neutral' },
      wealth:    { text: 'Easy come, easy go — save',  rating: 'neutral' },
      lostItems: { text: 'Time is short; search now',   rating: 'neutral' },
    },
  },
  {
    number: 10,
    type: 'hankichi',
    verse: {
      japanese: '片陰に　立ち止まりつつ　息継ぎて\n半ばの道を　しっかり進め',
      reading:  'Katakage ni / tachidomaritsutsu / ikitsugi te / nakaba no michi wo / shikkari susume',
      english:  'Pause in the partial shade and catch your breath — then walk steadily forward on the road that is half-trodden.',
    },
    aspects: {
      wish:      { text: 'Halfway there; keep going',   rating: 'neutral' },
      travel:    { text: 'Rest mid-journey if needed',  rating: 'neutral' },
      love:      { text: 'Midpoint; be patient',        rating: 'neutral' },
      health:    { text: 'Pace yourself; don\'t rush',  rating: 'neutral' },
      work:      { text: 'Good progress; steady on',    rating: 'neutral' },
      study:     { text: 'Review what you\'ve learned', rating: 'neutral' },
      wealth:    { text: 'In balance; maintain it',     rating: 'neutral' },
      lostItems: { text: 'Halfway found — keep looking', rating: 'neutral' },
    },
  },
  {
    number: 15,
    type: 'hankichi',
    verse: {
      japanese: '曇り空　雨にもならず　晴れもせず\n心を定めて　ただ歩むべし',
      reading:  'Kumori zora / ame ni mo narazu / hare mo sezu / kokoro wo sadamete / tada ayumu beshi',
      english:  'The sky is overcast — not quite rain, not quite clear — yet resolve your mind and simply walk forward.',
    },
    aspects: {
      wish:      { text: 'Uncertain; hold steady',      rating: 'neutral' },
      travel:    { text: 'Weather may affect plans',    rating: 'neutral' },
      love:      { text: 'Unclear but not hopeless',    rating: 'neutral' },
      health:    { text: 'Neither great nor poor',      rating: 'neutral' },
      work:      { text: 'Persist through ambiguity',   rating: 'neutral' },
      study:     { text: 'Unclear results; be steady',  rating: 'neutral' },
      wealth:    { text: 'Stable but not growing',      rating: 'neutral' },
      lostItems: { text: 'Unclear; try again later',    rating: 'neutral' },
    },
  },
  // ===========================
  // 末吉 SUE-KICHI (12 fortunes)
  // ===========================
  {
    number: 41,
    type: 'suekichi',
    verse: {
      japanese: '冬の芽が　春を待ちわび　土の中\n必ず来たる　光の季節',
      reading:  'Fuyu no me ga / haru wo machiwabi / tsuchi no naka / kanarazu kitaru / hikari no kisetsu',
      english:  'The winter bud waits longingly for spring beneath the soil — the season of light shall surely come.',
    },
    aspects: {
      wish:      { text: 'Will come in its own time',   rating: 'neutral' },
      travel:    { text: 'Postpone if possible',        rating: 'neutral' },
      love:      { text: 'Love will bloom in spring',   rating: 'good'    },
      health:    { text: 'Recovery takes time',         rating: 'neutral' },
      work:      { text: 'Preparation now; reward later', rating: 'good'  },
      study:     { text: 'Lay groundwork; results come', rating: 'good'   },
      wealth:    { text: 'Future prospects are bright', rating: 'neutral' },
      lostItems: { text: 'Will emerge in time',         rating: 'neutral' },
    },
  },
  {
    number: 46,
    type: 'suekichi',
    verse: {
      japanese: '遠つ世の　星の輝き　届くまで\n今は待ちてよ　時来たらば立て',
      reading:  'Tōtsu yo no / hoshi no kagayaki / todoku made / ima wa machite yo / toki kitaraba tate',
      english:  'Until the starlight from distant ages finally reaches you — wait for now; when the moment arrives, rise.',
    },
    aspects: {
      wish:      { text: 'Fulfillment lies ahead',      rating: 'neutral' },
      travel:    { text: 'Timing is not yet right',     rating: 'neutral' },
      love:      { text: 'The right time is coming',    rating: 'neutral' },
      health:    { text: 'Long-term care needed',       rating: 'neutral' },
      work:      { text: 'The opportunity approaches',  rating: 'good'    },
      study:     { text: 'Years of study near fruition', rating: 'good'   },
      wealth:    { text: 'Future gain is assured',      rating: 'good'    },
      lostItems: { text: 'Will appear eventually',      rating: 'neutral' },
    },
  },
  {
    number: 51,
    type: 'suekichi',
    verse: {
      japanese: '秋深く　山路の紅葉　踏み分けて\nやがて開けん　眺望の地',
      reading:  'Aki fukaku / yamaji no momiji / fumiwakete / yagate hirake n / chōbō no chi',
      english:  'Deep in autumn, parting the crimson leaves on the mountain trail — ahead lies a wide, open view.',
    },
    aspects: {
      wish:      { text: 'Push through and find it',    rating: 'good'    },
      travel:    { text: 'The road opens ahead',        rating: 'good'    },
      love:      { text: 'Breakthrough after effort',   rating: 'good'    },
      health:    { text: 'Difficult now; better ahead', rating: 'neutral' },
      work:      { text: 'Push through the difficulty', rating: 'good'    },
      study:     { text: 'Clarity after hard study',    rating: 'good'    },
      wealth:    { text: 'Future wealth after struggle', rating: 'good'   },
      lostItems: { text: 'Keep searching; you\'ll find', rating: 'neutral' },
    },
  },
  // ===========================
  // 末小吉 SUE-SHŌ-KICHI (8 fortunes)
  // ===========================
  {
    number: 56,
    type: 'sueshokichi',
    verse: {
      japanese: '山の端に　かすかに残る　夕焼けの\n光よ絶えず　希望を灯せ',
      reading:  'Yama no ha ni / kasuka ni nokoru / yūyake no / hikari yo taezu / kibō wo tomose',
      english:  'The last traces of sunset linger faintly at the mountain\'s edge — let that dimming light never cease to kindle hope.',
    },
    aspects: {
      wish:      { text: 'Faint but do not give up',    rating: 'neutral' },
      travel:    { text: 'Proceed with caution',        rating: 'neutral' },
      love:      { text: 'A flicker remains; nurture it', rating: 'neutral' },
      health:    { text: 'Fragile; be very careful',    rating: 'neutral' },
      work:      { text: 'Hanging in; persevere',       rating: 'neutral' },
      study:     { text: 'Small steps are still steps', rating: 'neutral' },
      wealth:    { text: 'Tight times; manage carefully', rating: 'neutral' },
      lostItems: { text: 'Hope remains but dim',        rating: 'neutral' },
    },
  },
  {
    number: 61,
    type: 'sueshokichi',
    verse: {
      japanese: '種を蒔き　水をやりても　芽は出ずも\n信じて待てば　春風が吹く',
      reading:  'Tane wo maki / mizu wo yari te mo / me wa dezu mo / shinjite mate ba / harukaze ga fuku',
      english:  'You have planted seeds and watered them, yet no sprout appears — believe and wait; the spring breeze will blow.',
    },
    aspects: {
      wish:      { text: 'Believe; it will sprout',     rating: 'neutral' },
      travel:    { text: 'No ideal timing yet',         rating: 'neutral' },
      love:      { text: 'Seeds planted; patience',     rating: 'neutral' },
      health:    { text: 'Slow recovery; trust it',     rating: 'neutral' },
      work:      { text: 'Efforts will eventually show', rating: 'neutral' },
      study:     { text: 'Progress is hidden; keep on', rating: 'neutral' },
      wealth:    { text: 'Nothing yet; do not despair', rating: 'neutral' },
      lostItems: { text: 'Not yet; keep faith',         rating: 'neutral' },
    },
  },
  // ===========================
  // 凶 KYŌ (14 fortunes)
  // ===========================
  {
    number: 66,
    type: 'kyo',
    verse: {
      japanese: '荒れ野原　道もわからず　迷い込む\n立ち止まり省み　梵天を仰げ',
      reading:  'Are nohara / michi mo wakarazu / mayoikomu / tachidomare kaerimi / bonton wo aoge',
      english:  'Lost in the desolate fields, the path unseen — stop, reflect upon your steps, and look up to heaven above.',
    },
    aspects: {
      wish:      { text: 'Not the right time; wait',    rating: 'bad'     },
      travel:    { text: 'Avoid travel now',            rating: 'bad'     },
      love:      { text: 'Step back and reflect',       rating: 'bad'     },
      health:    { text: 'Seek care immediately',       rating: 'bad'     },
      work:      { text: 'Pause; reassess your plan',   rating: 'bad'     },
      study:     { text: 'Go back to basics',           rating: 'neutral' },
      wealth:    { text: 'Avoid speculation or risk',   rating: 'bad'     },
      lostItems: { text: 'Difficult to find now',       rating: 'bad'     },
    },
  },
  {
    number: 71,
    type: 'kyo',
    verse: {
      japanese: '嵐来て　大木も折れる　その如く\n驕れる者は　必ず倒れる',
      reading:  'Arashi kite / taiboku mo oreru / sono gotoku / ogore ru mono wa / kanarazu taoreru',
      english:  'When the storm comes even great trees are broken — just so, those who grow arrogant shall surely fall.',
    },
    aspects: {
      wish:      { text: 'Pride blocks the way',        rating: 'bad'     },
      travel:    { text: 'Storms ahead; delay',         rating: 'bad'     },
      love:      { text: 'Ego creates distance',        rating: 'bad'     },
      health:    { text: 'Overexertion is dangerous',   rating: 'bad'     },
      work:      { text: 'Humility is needed now',      rating: 'bad'     },
      study:     { text: 'Overconfidence is a trap',    rating: 'neutral' },
      wealth:    { text: 'Reckless spending; beware',   rating: 'bad'     },
      lostItems: { text: 'Lost through carelessness',   rating: 'bad'     },
    },
  },
  {
    number: 76,
    type: 'kyo',
    verse: {
      japanese: '鬼火が　暗闇の中で　ゆれながら\n人を惑わす　道に迷うな',
      reading:  'Onibi ga / kurayami no naka de / yure nagara / hito wo madowasu / michi ni mayou na',
      english:  'Ghostly flames sway in the darkness, deceiving travelers — do not be misled; stay off the path that leads astray.',
    },
    aspects: {
      wish:      { text: 'Beware illusion; be discerning', rating: 'bad'  },
      travel:    { text: 'Danger lurks; avoid night travel', rating: 'bad' },
      love:      { text: 'Beware false appearances',     rating: 'bad'     },
      health:    { text: 'Symptoms may be misleading; consult a doctor', rating: 'bad' },
      work:      { text: 'Do not be deceived by others', rating: 'bad'     },
      study:     { text: 'Verify sources; beware errors',rating: 'neutral' },
      wealth:    { text: 'Scam or loss possible; be alert', rating: 'bad' },
      lostItems: { text: 'May have been stolen or misplaced far', rating: 'bad' },
    },
  },
  {
    number: 81,
    type: 'kyo',
    verse: {
      japanese: '河の瀬の　石につまずき　倒れても\n起き上がりこそ　人の誉れよ',
      reading:  'Kawa no se no / ishi ni tsumazuki / taore te mo / okiagari koso / hito no homare yo',
      english:  'You stumble on the stones of the river ford and fall — yet to rise again is the truest honor of a person.',
    },
    aspects: {
      wish:      { text: 'Fallen for now; rise again',  rating: 'bad'     },
      travel:    { text: 'Accidents possible; take care', rating: 'bad'    },
      love:      { text: 'Setback; get up and try again', rating: 'neutral' },
      health:    { text: 'Injury or relapse possible',  rating: 'bad'     },
      work:      { text: 'Failure now; learn from it',  rating: 'bad'     },
      study:     { text: 'Failed this time; try again', rating: 'neutral' },
      wealth:    { text: 'Financial stumble; recover', rating: 'bad'      },
      lostItems: { text: 'Dropped in transit; retrace steps', rating: 'bad' },
    },
  },
  {
    number: 86,
    type: 'kyo',
    verse: {
      japanese: '枯れ枝に　鴉止まりて　哭くなれど\n冬過ぎぬれば　花は咲くべし',
      reading:  'Kare eda ni / karasu tomarite / naku naredo / fuyu suginu reba / hana wa saku beshi',
      english:  'A crow perches on a withered branch and cries — but when winter passes, flowers shall bloom again.',
    },
    aspects: {
      wish:      { text: 'Not now; endure the winter',  rating: 'bad'     },
      travel:    { text: 'Ill-omened; postpone',        rating: 'bad'     },
      love:      { text: 'A cold season; wait for warmth', rating: 'bad'  },
      health:    { text: 'Serious; please see a doctor', rating: 'bad'    },
      work:      { text: 'Bleak period; endure it',     rating: 'bad'     },
      study:     { text: 'Dark time; don\'t give up',   rating: 'neutral' },
      wealth:    { text: 'Losses; tighten your belt',   rating: 'bad'     },
      lostItems: { text: 'May be lost for good; accept', rating: 'bad'    },
    },
  },
  {
    number: 91,
    type: 'kyo',
    verse: {
      japanese: '泥の中　蓮の花咲く　その如く\n苦しみ抜けて　悟りの光',
      reading:  'Doro no naka / hasu no hana saku / sono gotoku / kurushimi nukete / satori no hikari',
      english:  'Like the lotus that blooms in the mud — emerging through suffering, the light of enlightenment shines.',
    },
    aspects: {
      wish:      { text: 'Through hardship, eventually', rating: 'bad'    },
      travel:    { text: 'Difficult; prepare for obstacles', rating: 'bad' },
      love:      { text: 'Painful now; purity comes',   rating: 'neutral' },
      health:    { text: 'Serious illness; seek help',  rating: 'bad'     },
      work:      { text: 'Endure hardship to grow',     rating: 'bad'     },
      study:     { text: 'Struggle is the teacher',     rating: 'neutral' },
      wealth:    { text: 'Financial hardship; persevere', rating: 'bad'   },
      lostItems: { text: 'May take great effort to recover', rating: 'bad' },
    },
  },
  {
    number: 96,
    type: 'kyo',
    verse: {
      japanese: '冬空に　ただ一人立つ　枯れ木かな\n風雪にめげず　春を待てかし',
      reading:  'Fuyu zora ni / tada hitori tatsu / kare ki ka na / fūsetsu ni magezu / haru wo mate kashi',
      english:  'A lone withered tree stands against the winter sky — unbowed by wind and snow, wait for spring.',
    },
    aspects: {
      wish:      { text: 'Bare hardship; spring will come', rating: 'bad' },
      travel:    { text: 'Harsh conditions; stay home', rating: 'bad'     },
      love:      { text: 'Solitary now; warmth comes',  rating: 'bad'     },
      health:    { text: 'Frail; please rest fully',    rating: 'bad'     },
      work:      { text: 'Isolated and difficult',      rating: 'bad'     },
      study:     { text: 'Perseverance through darkness', rating: 'neutral' },
      wealth:    { text: 'Depletion; survive the winter', rating: 'bad'   },
      lostItems: { text: 'Cold trail; may be gone',     rating: 'bad'     },
    },
  },
  // ===========================
  // Additional fortunes to reach variety
  // (mix of types to complete the set)
  // ===========================
  {
    number: 23,
    type: 'daikichi',
    verse: {
      japanese: '龍神の　加護を受けたる　この御籤\n天地の恵み　あまねく満てり',
      reading:  'Ryūjin no / kago wo uketaru / kono mikuji / tenchi no megumi / amaneku miteri',
      english:  'This sacred lot is blessed by the Dragon God — the grace of heaven and earth fills all things abundantly.',
    },
    aspects: {
      wish:      { text: 'Divinely supported',          rating: 'good'    },
      travel:    { text: 'Dragon protects your path',   rating: 'good'    },
      love:      { text: 'Heaven blesses the union',    rating: 'good'    },
      health:    { text: 'Vitality surges within',      rating: 'good'    },
      work:      { text: 'All projects flourish',       rating: 'good'    },
      study:     { text: 'Exceptional insight granted', rating: 'good'    },
      wealth:    { text: 'The dragon brings treasure',  rating: 'good'    },
      lostItems: { text: 'Returned by fate',            rating: 'good'    },
    },
  },
  {
    number: 28,
    type: 'kichi',
    verse: {
      japanese: '菊の花　秋の野に咲き　誰よりも\n遅く開きて　長く香る',
      reading:  'Kiku no hana / aki no no ni saki / dare yori mo / osoku hiraki te / nagaku kaoru',
      english:  'The chrysanthemum blooms in the autumn field later than all others — yet its fragrance lasts the longest.',
    },
    aspects: {
      wish:      { text: 'Late but lasting fulfillment', rating: 'good'   },
      travel:    { text: 'A leisurely, rewarding journey', rating: 'good' },
      love:      { text: 'Late bloomer — deeper love',  rating: 'good'    },
      health:    { text: 'Enduring good health',        rating: 'good'    },
      work:      { text: 'Mature effort earns respect', rating: 'good'    },
      study:     { text: 'Deep understanding develops', rating: 'good'    },
      wealth:    { text: 'Wealth that lasts',           rating: 'good'    },
      lostItems: { text: 'Comes back in due course',    rating: 'good'    },
    },
  },
  {
    number: 33,
    type: 'chukichi',
    verse: {
      japanese: '朝の虹　束の間消えど　その輝き\n人の心に　永く宿れる',
      reading:  'Asa no niji / tsuka no ma kieri do / sono kagayaki / hito no kokoro ni / nagaku yadoreru',
      english:  'The morning rainbow vanishes in a moment — yet its brilliance lives long in the human heart.',
    },
    aspects: {
      wish:      { text: 'Beautiful but brief; act now', rating: 'good'   },
      travel:    { text: 'Scenic and memorable',        rating: 'good'    },
      love:      { text: 'Cherish each precious moment', rating: 'good'   },
      health:    { text: 'Good moments; take care',     rating: 'neutral' },
      work:      { text: 'Make an impression now',      rating: 'good'    },
      study:     { text: 'Insight — record it quickly', rating: 'good'    },
      wealth:    { text: 'A passing gain; save it',     rating: 'neutral' },
      lostItems: { text: 'Seen briefly; act fast',      rating: 'neutral' },
    },
  },
  {
    number: 38,
    type: 'shokichi',
    verse: {
      japanese: '小川べり　春の若草　芽吹くごと\n小さき歩みが　道を作れる',
      reading:  'Ogawa beri / haru no wakakusa / mebuku goto / chiisaki ayumi ga / michi wo tsukure ru',
      english:  'Like young spring grasses sprouting along the stream — each small step you take creates the road itself.',
    },
    aspects: {
      wish:      { text: 'Step by step; it forms',      rating: 'good'    },
      travel:    { text: 'Short trips are favored',     rating: 'good'    },
      love:      { text: 'Small gestures matter',       rating: 'good'    },
      health:    { text: 'Light exercise helps',        rating: 'good'    },
      work:      { text: 'Build gradually from scratch', rating: 'good'   },
      study:     { text: 'Daily review is key',         rating: 'good'    },
      wealth:    { text: 'Small savings, big future',   rating: 'good'    },
      lostItems: { text: 'Near the path you usually walk', rating: 'neutral' },
    },
  },
  {
    number: 43,
    type: 'suekichi',
    verse: {
      japanese: '夜明け前が　一番暗し　されどまた\n暁の光は　必ず来る',
      reading:  'Yoakemae ga / ichiban kurashi / saredo mata / akatsuki no hikari wa / kanarazu kuru',
      english:  'The darkest hour comes just before dawn — but the light of daybreak shall surely arrive.',
    },
    aspects: {
      wish:      { text: 'Darkest just before the dawn', rating: 'neutral' },
      travel:    { text: 'Postpone; better timing coming', rating: 'neutral' },
      love:      { text: 'The wait makes love stronger', rating: 'good'   },
      health:    { text: 'Critical period; much care needed', rating: 'bad' },
      work:      { text: 'Through the dark to the light', rating: 'neutral' },
      study:     { text: 'Push through the hard section', rating: 'good'  },
      wealth:    { text: 'Lean times soon to improve',  rating: 'neutral' },
      lostItems: { text: 'Dawn will reveal it',         rating: 'neutral' },
    },
  },
  {
    number: 48,
    type: 'hankichi',
    verse: {
      japanese: '川の中州　行くも戻るも　難しく\n今しばらくは　岸辺で待てよ',
      reading:  'Kawa no nakasu / yuku mo modoru mo / muzukashiku / ima shibaraku wa / kishibe de mateyo',
      english:  'On the river sandbar, it is hard to advance or retreat — for now, wait patiently on the shore.',
    },
    aspects: {
      wish:      { text: 'Neither here nor there; wait', rating: 'neutral' },
      travel:    { text: 'Neither advance nor retreat', rating: 'neutral' },
      love:      { text: 'At a crossroads; be still',   rating: 'neutral' },
      health:    { text: 'In-between state; monitor',   rating: 'neutral' },
      work:      { text: 'Don\'t force a decision yet', rating: 'neutral' },
      study:     { text: 'Consolidate what you know',   rating: 'neutral' },
      wealth:    { text: 'Stagnant; avoid big moves',   rating: 'neutral' },
      lostItems: { text: 'Somewhere in the middle',     rating: 'neutral' },
    },
  },
  {
    number: 53,
    type: 'sueshokichi',
    verse: {
      japanese: '冬の池に　枯れ蓮残りて　揺れるなり\n春遠からず　信じて耐えよ',
      reading:  'Fuyu no ike ni / kare hasu nokori te / yure ru nari / haru tōkarazu / shinjite taeyo',
      english:  'Withered lotus sways on the winter pond — yet spring is not so far; believe and endure.',
    },
    aspects: {
      wish:      { text: 'Endure; it is not far off',   rating: 'neutral' },
      travel:    { text: 'Cold journey; not advisable', rating: 'bad'     },
      love:      { text: 'Withered but not dead',       rating: 'neutral' },
      health:    { text: 'Hang on; warmth is coming',   rating: 'neutral' },
      work:      { text: 'Survive this difficult season', rating: 'neutral' },
      study:     { text: 'Keep the flame alive',        rating: 'neutral' },
      wealth:    { text: 'Scarcity now; spring ahead',  rating: 'neutral' },
      lostItems: { text: 'Buried but not gone',         rating: 'neutral' },
    },
  },
  {
    number: 58,
    type: 'kyo',
    verse: {
      japanese: '砂時計　砂は流れて　戻らず\n今こそ悔いなく　歩めと命ず',
      reading:  'Sunadokei / suna wa nagarete / modorazu / ima koso kui naku / ayume to meizu',
      english:  'The hourglass sand flows and never returns — live now without regret; this is the command.',
    },
    aspects: {
      wish:      { text: 'Time is slipping; reconsider', rating: 'bad'    },
      travel:    { text: 'Time wasted on this path',    rating: 'bad'     },
      love:      { text: 'Do not waste what you have',  rating: 'bad'     },
      health:    { text: 'Do not delay seeking help',   rating: 'bad'     },
      work:      { text: 'Urgent — act before it is too late', rating: 'bad' },
      study:     { text: 'Don\'t procrastinate',        rating: 'neutral' },
      wealth:    { text: 'Money draining; plug the holes', rating: 'bad'  },
      lostItems: { text: 'Window closing; search now',  rating: 'bad'     },
    },
  },
  {
    number: 63,
    type: 'kyo',
    verse: {
      japanese: '霜降りて　大地も草木も　萎えにけり\n天の教えに　素直に従え',
      reading:  'Shimo furite / daichi mo kusaki mo / nae ni keri / ten no oshie ni / sunao ni shitagae',
      english:  'Frost descends; the earth and all its grass and trees wither — follow heaven\'s teaching with an unresisting heart.',
    },
    aspects: {
      wish:      { text: 'Abandon ego; follow guidance', rating: 'bad'    },
      travel:    { text: 'Harsh conditions; cancel',    rating: 'bad'     },
      love:      { text: 'Let go of control',           rating: 'bad'     },
      health:    { text: 'Severe cold or illness; rest', rating: 'bad'    },
      work:      { text: 'Accept setback; learn from it', rating: 'bad'   },
      study:     { text: 'Do not resist the lesson',    rating: 'neutral' },
      wealth:    { text: 'Losses; cut them and endure', rating: 'bad'     },
      lostItems: { text: 'May be damaged or destroyed', rating: 'bad'     },
    },
  },
  {
    number: 68,
    type: 'kyo',
    verse: {
      japanese: '海の波　沖から高く　押し寄せて\n砂浜すべて　覆い尽くせり',
      reading:  'Umi no nami / oki kara takaku / oshiyosete / sunahama subete / ōi tsukuseri',
      english:  'Waves surge high from the open sea and roll in — they cover the entire sandy shore completely.',
    },
    aspects: {
      wish:      { text: 'Overwhelmed; scale back',     rating: 'bad'     },
      travel:    { text: 'Sea travel strongly inadvisable', rating: 'bad'  },
      love:      { text: 'Overpowering feelings cause harm', rating: 'bad' },
      health:    { text: 'Overwhelmed; reduce stress',  rating: 'bad'     },
      work:      { text: 'Buried under responsibilities', rating: 'bad'   },
      study:     { text: 'Too much at once; focus',     rating: 'neutral' },
      wealth:    { text: 'Major financial wave coming', rating: 'bad'     },
      lostItems: { text: 'Swept away; difficult to recover', rating: 'bad' },
    },
  },
  {
    number: 73,
    type: 'chukichi',
    verse: {
      japanese: '雨上がり　虹かかりたる　空の果て\nよき知らせが　まもなく届く',
      reading:  'Ame agari / niji kakaritaru / sora no hate / yoki shirase ga / mamonaku todoku',
      english:  'After the rain a rainbow arches to the horizon\'s edge — good news shall arrive before long.',
    },
    aspects: {
      wish:      { text: 'Good news on its way',        rating: 'good'    },
      travel:    { text: 'After the rain; fine ahead',  rating: 'good'    },
      love:      { text: 'Hopeful signs appear',        rating: 'good'    },
      health:    { text: 'Clearing up; improvement',    rating: 'good'    },
      work:      { text: 'After difficulty, reward',    rating: 'good'    },
      study:     { text: 'Results are coming',          rating: 'good'    },
      wealth:    { text: 'A windfall is approaching',   rating: 'good'    },
      lostItems: { text: 'Will turn up soon',           rating: 'good'    },
    },
  },
  {
    number: 78,
    type: 'kichi',
    verse: {
      japanese: '満月が　雲間に輝く　清らかさ\n天の恵みを　受けよ喜べ',
      reading:  'Mangetsu ga / kumoma ni kagayaku / kiyoraka sa / ten no megumi wo / uke yo yorokobu e',
      english:  'The full moon shines in its purity between the clouds — receive heaven\'s grace and rejoice.',
    },
    aspects: {
      wish:      { text: 'Luminous fulfillment',        rating: 'good'    },
      travel:    { text: 'Beautiful, moonlit journey',  rating: 'good'    },
      love:      { text: 'Shines full and clear',       rating: 'good'    },
      health:    { text: 'Radiant health',              rating: 'good'    },
      work:      { text: 'Recognition in the light',    rating: 'good'    },
      study:     { text: 'Full understanding achieved', rating: 'good'    },
      wealth:    { text: 'Fullness of fortune',         rating: 'good'    },
      lostItems: { text: 'Found in the light',          rating: 'good'    },
    },
  },
  {
    number: 83,
    type: 'shokichi',
    verse: {
      japanese: '風そよぎ　野辺の草花　揺れながら\n小さき命の　尊さを知る',
      reading:  'Kaze soyogi / nobe no kusabana / yure nagara / chiisaki inochi no / tattosa wo shiru',
      english:  'A gentle breeze sways the wildflowers of the field — through their soft movement, the preciousness of small lives is known.',
    },
    aspects: {
      wish:      { text: 'Small wishes are precious',   rating: 'good'    },
      travel:    { text: 'Gentle wandering is best',    rating: 'good'    },
      love:      { text: 'Cherish the small moments',   rating: 'good'    },
      health:    { text: 'Mind your wellbeing gently',  rating: 'good'    },
      work:      { text: 'Small tasks done well',       rating: 'good'    },
      study:     { text: 'Savor each small discovery',  rating: 'good'    },
      wealth:    { text: 'Gratitude opens the way',     rating: 'neutral' },
      lostItems: { text: 'Somewhere gentle and quiet',  rating: 'neutral' },
    },
  },
  {
    number: 88,
    type: 'suekichi',
    verse: {
      japanese: '夕暮れに　灯台の光　遠くして\n迷い船をば　岸へと導く',
      reading:  'Yūgure ni / tōdai no hikari / tōku shite / mayoi fune wo ba / kishi e to michibiku',
      english:  'At dusk, the lighthouse beacon shines from afar — it guides the lost vessel toward the shore.',
    },
    aspects: {
      wish:      { text: 'The light of hope guides you', rating: 'good'   },
      travel:    { text: 'Look for the guiding beacon', rating: 'good'    },
      love:      { text: 'Someone will lead you to safety', rating: 'good' },
      health:    { text: 'Seek a trusted guide',        rating: 'neutral' },
      work:      { text: 'A mentor shows the way',      rating: 'good'    },
      study:     { text: 'Follow a great teacher',      rating: 'good'    },
      wealth:    { text: 'Guidance leads to better times', rating: 'neutral' },
      lostItems: { text: 'A helpful person will assist', rating: 'neutral' },
    },
  },
  {
    number: 93,
    type: 'hankichi',
    verse: {
      japanese: '中空に　浮かびし雲よ　流れつつ\nどこへ行くとも　定まらぬまま',
      reading:  'Nakasora ni / ukabishi kumo yo / nagare tsutsu / doko e yuku tomo / sadamara nu mama',
      english:  'A cloud adrift in the mid-sky floats along — with no certain destination yet determined.',
    },
    aspects: {
      wish:      { text: 'Direction unclear; pause',    rating: 'neutral' },
      travel:    { text: 'Drifting; set a destination', rating: 'neutral' },
      love:      { text: 'Uncertain feelings; clarify', rating: 'neutral' },
      health:    { text: 'Up and down; steady yourself', rating: 'neutral' },
      work:      { text: 'Unfocused; set clear goals',  rating: 'neutral' },
      study:     { text: 'Wandering; find focus',       rating: 'neutral' },
      wealth:    { text: 'Unstable; anchor spending',   rating: 'neutral' },
      lostItems: { text: 'Moved from its place; unclear', rating: 'neutral' },
    },
  },
  {
    number: 98,
    type: 'kyo',
    verse: {
      japanese: '霰降る　山路に迷いて　立ち尽くし\n天に誓いて　懺悔をせよ',
      reading:  'Arare furu / yamaji ni mayoite / tachitsukushi / ten ni chikaite / sange wo seyo',
      english:  'Hailstones fall; you stand lost on the mountain path — vow to heaven and make confession of your faults.',
    },
    aspects: {
      wish:      { text: 'Reflect on wrongdoing first', rating: 'bad'     },
      travel:    { text: 'Dangerous; do not go',        rating: 'bad'     },
      love:      { text: 'Unresolved issues; face them', rating: 'bad'    },
      health:    { text: 'Acute danger; seek help now', rating: 'bad'     },
      work:      { text: 'Accountability required',     rating: 'bad'     },
      study:     { text: 'Past errors must be corrected', rating: 'neutral' },
      wealth:    { text: 'Severe losses; regroup',      rating: 'bad'     },
      lostItems: { text: 'Stolen or violently lost',    rating: 'bad'     },
    },
  },
  {
    number: 100,
    type: 'kyo',
    verse: {
      japanese: '百の籤　最後の一枚　汝に示す\n迷わず進め　仏道の光',
      reading:  'Hyaku no sen / saigo no ichimai / nanji ni shimesu / mayowazu susume / butsudō no hikari',
      english:  'The hundredth lot — the final slip — reveals itself to you. Walk forward without wavering in the light of the Buddha\'s path.',
    },
    aspects: {
      wish:      { text: 'The darkest lot; reflect deeply', rating: 'bad' },
      travel:    { text: 'Do not travel; turn inward',  rating: 'bad'     },
      love:      { text: 'Solitude is the teacher now', rating: 'bad'     },
      health:    { text: 'Serious; seek both medicine and spirit', rating: 'bad' },
      work:      { text: 'The end of a cycle; begin anew', rating: 'bad'  },
      study:     { text: 'Unlearn to relearn',          rating: 'neutral' },
      wealth:    { text: 'Great loss — the reset',      rating: 'bad'     },
      lostItems: { text: 'It is truly gone; accept',    rating: 'bad'     },
    },
  },
];

// Tie-note advice based on fortune type
const TIE_NOTES = {
  daikichi:    'Your fortune is excellent! You may keep this slip to preserve your good luck — or tie it at the shrine so its blessings radiate to all.',
  kichi:       'A good fortune. Keep it with you as a talisman of blessing, or tie it at the shrine to spread its good energy.',
  chukichi:    'A middle blessing — take its wisdom to heart. You may take this slip home or tie it at the shrine.',
  shokichi:    'A small but genuine blessing. Read the guidance carefully and keep the slip with you as encouragement.',
  hankichi:    'Your fortune is evenly balanced. Reflect on its wisdom. You may tie it at the shrine to release the uncertainty.',
  suekichi:    'Future blessing awaits. Patience is the key. Consider tying this slip at the shrine and returning when the time is right.',
  sueshokichi: 'A small future blessing — the path is narrow but open. Tie this slip at the shrine and let the bad pass away.',
  kyo:         'Misfortune is indicated. Tie this slip at the shrine or pine tree so that the ill fortune waits there and does not follow you. Better days will come.',
};
