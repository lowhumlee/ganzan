var FORTUNE_TYPES = {
  daikichi:    { kanji: "大吉",   romaji: "Dai-kichi",     english: "Great Blessing",       cls: "fortune-daikichi"    },
  kichi:       { kanji: "吉",     romaji: "Kichi",          english: "Blessing",              cls: "fortune-kichi"       },
  chukichi:    { kanji: "中吉",   romaji: "Chu-kichi",      english: "Middle Blessing",       cls: "fortune-chukichi"    },
  shokichi:    { kanji: "小吉",   romaji: "Sho-kichi",      english: "Small Blessing",        cls: "fortune-shokichi"    },
  hankichi:    { kanji: "半吉",   romaji: "Han-kichi",      english: "Half Blessing",         cls: "fortune-hankichi"    },
  suekichi:    { kanji: "末吉",   romaji: "Sue-kichi",      english: "Future Blessing",       cls: "fortune-suekichi"    },
  sueshokichi: { kanji: "末小吉", romaji: "Sue-sho-kichi",  english: "Future Small Blessing", cls: "fortune-sueshokichi" },
  kyo:         { kanji: "凶",     romaji: "Kyo",            english: "Misfortune",            cls: "fortune-kyo"         }
};

var ASPECTS = [
  { key: "wish",      label: "願望 Wish"       },
  { key: "travel",    label: "旅行 Travel"     },
  { key: "love",      label: "縁談 Love"       },
  { key: "health",    label: "病気 Health"     },
  { key: "work",      label: "仕事 Work"       },
  { key: "study",     label: "学問 Study"      },
  { key: "wealth",    label: "金運 Wealth"     },
  { key: "lostItems", label: "失物 Lost Items" }
];

var TIE_NOTES = {
  daikichi:    "Your fortune is excellent! Keep this slip as a talisman, or tie it at the shrine so its blessings radiate to all.",
  kichi:       "A good fortune. Keep it with you, or tie it at the shrine to spread its good energy.",
  chukichi:    "A middle blessing. Take its wisdom to heart. You may keep it or tie it at the shrine.",
  shokichi:    "A small but genuine blessing. Read the guidance carefully and keep it as encouragement.",
  hankichi:    "Your fortune is balanced. Reflect on its wisdom and consider tying it at the shrine.",
  suekichi:    "Future blessing awaits. Patience is the key. Tie this slip at the shrine and return when ready.",
  sueshokichi: "A small future blessing. The path is narrow but open. Tie this slip at the shrine.",
  kyo:         "Misfortune is indicated. Tie this slip at the shrine so the ill fortune stays there and does not follow you."
};

var FORTUNES = [
  {
    number: 1, type: "daikichi",
    verse: {
      japanese: "春の花　咲き誇りつつ　天の恵み\n願うこと　みな叶うなり　この御籤",
      reading: "Haru no hana / sakihokoritsu / ten no megumi / negau koto / mina kanau nari",
      english: "Spring blossoms bloom in full glory, heaven bestows its grace. All that you wish shall come to pass."
    },
    aspects: {
      wish:      { text: "Will be fulfilled",            rating: "good" },
      travel:    { text: "Safe and joyful",              rating: "good" },
      love:      { text: "A fine match awaits",          rating: "good" },
      health:    { text: "Full recovery and good health",rating: "good" },
      work:      { text: "Great success",                rating: "good" },
      study:     { text: "Mastery attained",             rating: "good" },
      wealth:    { text: "Abundant fortune",             rating: "good" },
      lostItems: { text: "Will be found soon",           rating: "good" }
    }
  },
  {
    number: 6, type: "daikichi",
    verse: {
      japanese: "暁の　露の一粒　輝きて\n万の道に　光さしぬる",
      reading: "Akatsuki no / tsuyu no hitotsubu / kagayakite / yorozu no michi ni / hikari sashinuru",
      english: "A single dewdrop at dawn gleams like a jewel. Its light illuminates ten thousand paths before you."
    },
    aspects: {
      wish:      { text: "Will certainly come true",     rating: "good" },
      travel:    { text: "Auspicious departure",         rating: "good" },
      love:      { text: "Blossoms into joy",            rating: "good" },
      health:    { text: "Vigor and vitality",           rating: "good" },
      work:      { text: "Recognition and reward",       rating: "good" },
      study:     { text: "Excellent results",            rating: "good" },
      wealth:    { text: "Prosperity arrives",           rating: "good" },
      lostItems: { text: "Found in an unexpected place", rating: "good" }
    }
  },
  {
    number: 11, type: "daikichi",
    verse: {
      japanese: "松の緑　千歳を経ても　変わらじと\n誓いし契り　今ここにあり",
      reading: "Matsu no midori / chitose wo hete mo / kawaraji to / chikaiishi chigiri / ima koko ni ari",
      english: "The pine stays evergreen through a thousand years. The vow once sworn endures and is fulfilled."
    },
    aspects: {
      wish:      { text: "Steadfast success",            rating: "good" },
      travel:    { text: "A journey of discovery",       rating: "good" },
      love:      { text: "A lasting bond",               rating: "good" },
      health:    { text: "Long and healthy life",        rating: "good" },
      work:      { text: "Stable and prosperous",        rating: "good" },
      study:     { text: "Knowledge endures",            rating: "good" },
      wealth:    { text: "Steady accumulation",          rating: "good" },
      lostItems: { text: "Returns to you",               rating: "good" }
    }
  },
  {
    number: 16, type: "daikichi",
    verse: {
      japanese: "海原の　波もおだやか　順風よ\n舟出めでたく　港に帰る",
      reading: "Unabara no / nami mo odayaka / junpu yo / funade medetaku / minato ni kaeru",
      english: "The open sea is calm and the wind is fair. The vessel sets out with good omen and returns safely to harbor."
    },
    aspects: {
      wish:      { text: "Comes to fruition",            rating: "good" },
      travel:    { text: "Smooth and blessed",           rating: "good" },
      love:      { text: "Mutual happiness",             rating: "good" },
      health:    { text: "Excellent condition",          rating: "good" },
      work:      { text: "All ventures succeed",         rating: "good" },
      study:     { text: "Clarity of mind",              rating: "good" },
      wealth:    { text: "Flowing abundantly",           rating: "good" },
      lostItems: { text: "Recovered with ease",          rating: "good" }
    }
  },
  {
    number: 21, type: "daikichi",
    verse: {
      japanese: "雲晴れて　山の頂　月冴えて\n万象照らす　仏の光",
      reading: "Kumo harete / yama no itadaki / tsuki saete / bansho terasu / hotoke no hikari",
      english: "Clouds part, the mountain peak stands clear, the moon shines bright. The light of Buddha illuminates all creation."
    },
    aspects: {
      wish:      { text: "Heaven blesses your desire",   rating: "good" },
      travel:    { text: "Protected and luminous path",  rating: "good" },
      love:      { text: "Pure and radiant",             rating: "good" },
      health:    { text: "Radiant wellbeing",            rating: "good" },
      work:      { text: "Rise above all obstacles",     rating: "good" },
      study:     { text: "Enlightenment within reach",   rating: "good" },
      wealth:    { text: "Riches flow from above",       rating: "good" },
      lostItems: { text: "Illuminated and found",        rating: "good" }
    }
  },
  {
    number: 26, type: "daikichi",
    verse: {
      japanese: "梅の花　雪をも厭わず　咲き誇る\n志高く　天に届かん",
      reading: "Ume no hana / yuki wo mo itowazu / sakihokoru / kokorozashi takaku / ten ni todoka n",
      english: "The plum blossom fears not the snow but blooms defiantly. Aspire high and your ambition shall touch heaven."
    },
    aspects: {
      wish:      { text: "Blooms despite hardship",      rating: "good" },
      travel:    { text: "Bold and rewarding",           rating: "good" },
      love:      { text: "Courageous love succeeds",     rating: "good" },
      health:    { text: "Strong and resilient",         rating: "good" },
      work:      { text: "Overcome all challenges",      rating: "good" },
      study:     { text: "Perseverance brings mastery",  rating: "good" },
      wealth:    { text: "Hard work is rewarded",        rating: "good" },
      lostItems: { text: "Search diligently and find",   rating: "good" }
    }
  },
  {
    number: 31, type: "daikichi",
    verse: {
      japanese: "鶴の声　千里に響き　瑞祥あり\n福寿来たる　めでたかりけり",
      reading: "Tsuru no koe / senri ni hibiki / zuisho ari / fukuju kitaru / medetakari keri",
      english: "The crane call echoes a thousand leagues, an auspicious omen. Happiness and long life arrive at your door."
    },
    aspects: {
      wish:      { text: "Auspiciously fulfilled",       rating: "good" },
      travel:    { text: "Soar like the crane",          rating: "good" },
      love:      { text: "A joyful union",               rating: "good" },
      health:    { text: "Longevity and vitality",       rating: "good" },
      work:      { text: "Your name spreads far",        rating: "good" },
      study:     { text: "Excellence recognized",        rating: "good" },
      wealth:    { text: "Great good fortune",           rating: "good" },
      lostItems: { text: "Will make its way home",       rating: "good" }
    }
  },
  {
    number: 2, type: "kichi",
    verse: {
      japanese: "柳の枝　風にたなびき　しなやかに\n時を待ちつつ　天命を知る",
      reading: "Yanagi no eda / kaze ni tanabiki / shinayaka ni / toki wo machitsutsu / tenmei wo shiru",
      english: "Willow branches bend gracefully in the breeze. Waiting upon the season, one comes to know heaven's will."
    },
    aspects: {
      wish:      { text: "Be patient, it comes",         rating: "good"    },
      travel:    { text: "Go slowly, arrive safely",     rating: "neutral" },
      love:      { text: "Gentle and sincere",           rating: "good"    },
      health:    { text: "Rest and recover",             rating: "neutral" },
      work:      { text: "Steady effort rewarded",       rating: "good"    },
      study:     { text: "Consistent study pays off",    rating: "good"    },
      wealth:    { text: "Modest but sure gain",         rating: "neutral" },
      lostItems: { text: "Wait, it will appear",         rating: "neutral" }
    }
  },
  {
    number: 7, type: "kichi",
    verse: {
      japanese: "月影の　水面に揺れて　消えずあり\n心澄み渡り　慈悲の道を行く",
      reading: "Tsukikage no / minamo ni yurete / kiezu ari / kokoro sumi watari / jihi no michi wo yuku",
      english: "The moon reflection trembles on the water yet does not vanish. Walk the path of compassion with a clear heart."
    },
    aspects: {
      wish:      { text: "Granted through sincerity",    rating: "good"    },
      travel:    { text: "Peaceful and meaningful",      rating: "good"    },
      love:      { text: "Compassionate heart wins",     rating: "good"    },
      health:    { text: "Calm brings healing",          rating: "good"    },
      work:      { text: "Kindness opens doors",         rating: "good"    },
      study:     { text: "Serene focus brings wisdom",   rating: "good"    },
      wealth:    { text: "Genuine effort earns reward",  rating: "good"    },
      lostItems: { text: "Look carefully near water",    rating: "neutral" }
    }
  },
  {
    number: 12, type: "kichi",
    verse: {
      japanese: "竹の節　風雪耐えても　折れずして\n筋を曲げぬ　君子の誉れ",
      reading: "Take no fushi / fusetsu taete mo / orezu shite / suji wo magenu / kunshi no homare",
      english: "Bamboo joints endure wind and snow without breaking. One who does not bend from integrity earns the honor of the noble person."
    },
    aspects: {
      wish:      { text: "Integrity secures the wish",   rating: "good"    },
      travel:    { text: "Endure hardship, reach goal",  rating: "good"    },
      love:      { text: "Honest and trustworthy",       rating: "good"    },
      health:    { text: "Resilient constitution",       rating: "good"    },
      work:      { text: "Principled action succeeds",   rating: "good"    },
      study:     { text: "Discipline brings results",    rating: "good"    },
      wealth:    { text: "Earned through honest means",  rating: "good"    },
      lostItems: { text: "Near something solid or firm", rating: "neutral" }
    }
  },
  {
    number: 17, type: "kichi",
    verse: {
      japanese: "桃の花　岸辺に咲きて　清らかな\n流れに身をば　委ねるままに",
      reading: "Momo no hana / kishibe ni sakite / kiyoraka na / nagare ni mi wo ba / yudaneru mama ni",
      english: "Peach blossoms flower on the riverbank in purity. Entrust yourself to the clear, flowing current."
    },
    aspects: {
      wish:      { text: "Flow with the tide",           rating: "good"    },
      travel:    { text: "Follow the river path",        rating: "good"    },
      love:      { text: "Natural and pure affection",   rating: "good"    },
      health:    { text: "Let go of tension",            rating: "good"    },
      work:      { text: "Move with the current",        rating: "good"    },
      study:     { text: "Let learning flow naturally",  rating: "good"    },
      wealth:    { text: "Arrives naturally in time",    rating: "neutral" },
      lostItems: { text: "Near flowing water",           rating: "neutral" }
    }
  },
  {
    number: 3, type: "chukichi",
    verse: {
      japanese: "野の草も　雨に潤いて　緑なす\n力蓄えて　秋を待つなり",
      reading: "No no kusa mo / ame ni uruoite / midori nasu / chikara takuwaete / aki wo matsu nari",
      english: "Even wild grasses turn green, nourished by rain. Gather your strength and wait for the autumn harvest."
    },
    aspects: {
      wish:      { text: "Needs more time to ripen",     rating: "neutral" },
      travel:    { text: "Prepare carefully first",      rating: "neutral" },
      love:      { text: "Gradual deepening of feeling", rating: "good"    },
      health:    { text: "Steady improvement",           rating: "neutral" },
      work:      { text: "Plant seeds now, harvest later",rating: "good"   },
      study:     { text: "Slow but sure progress",       rating: "good"    },
      wealth:    { text: "Save and build your reserves", rating: "neutral" },
      lostItems: { text: "Search in grassy areas",       rating: "neutral" }
    }
  },
  {
    number: 8, type: "chukichi",
    verse: {
      japanese: "田の稲が　穂を垂れるほど　実るほど\n謙り深く　頭を垂れよ",
      reading: "Ta no ine ga / ho wo tarereru hodo / minoru hodo / herikudari fukaku / atama wo tareyo",
      english: "The more the rice stalk ripens, the more its head bows low. The more one flourishes, the deeper one bows in humility."
    },
    aspects: {
      wish:      { text: "Attained through humility",    rating: "good"    },
      travel:    { text: "Be modest, respect customs",   rating: "neutral" },
      love:      { text: "Humble heart is attractive",   rating: "good"    },
      health:    { text: "Mind and body in balance",     rating: "good"    },
      work:      { text: "Modesty earns trust",          rating: "good"    },
      study:     { text: "A humble learner masters all", rating: "good"    },
      wealth:    { text: "Careful not to overspend",     rating: "neutral" },
      lostItems: { text: "Look low, near the ground",    rating: "neutral" }
    }
  },
  {
    number: 13, type: "chukichi",
    verse: {
      japanese: "霧の海　晴れゆくほどに　山見えて\n迷いも消えて　道は定まる",
      reading: "Kiri no umi / hareyuku hodo ni / yama miete / mayoi mo kiete / michi wa sadamaru",
      english: "As the fog lifts from the sea, the mountains emerge. Confusion dissolves and the path becomes clear."
    },
    aspects: {
      wish:      { text: "Clarity comes soon",           rating: "good"    },
      travel:    { text: "Fog lifts, safe passage",      rating: "good"    },
      love:      { text: "Uncertainty resolves itself",  rating: "neutral" },
      health:    { text: "Recovery on the horizon",      rating: "good"    },
      work:      { text: "Confusion gives way to a plan",rating: "good"    },
      study:     { text: "Understanding dawns",          rating: "good"    },
      wealth:    { text: "Situation becomes clearer",    rating: "neutral" },
      lostItems: { text: "Visible once the mist clears", rating: "neutral" }
    }
  },
  {
    number: 4, type: "shokichi",
    verse: {
      japanese: "春霞　立ちてかすかに　花見えて\n遠き幸いを　手繰り寄すなり",
      reading: "Harugasumi / tachite kasuka ni / hana miete / toki saiwai wo / taguri yosu nari",
      english: "Spring haze rises and through it flowers dimly glow. Draw near the distant joy, reaching out hand over hand."
    },
    aspects: {
      wish:      { text: "Will come but not yet",        rating: "neutral" },
      travel:    { text: "Look beyond the haze",         rating: "neutral" },
      love:      { text: "Distant but possible",         rating: "neutral" },
      health:    { text: "Slow and steady progress",     rating: "neutral" },
      work:      { text: "Keep reaching forward",        rating: "neutral" },
      study:     { text: "Knowledge gradually clears",   rating: "good"    },
      wealth:    { text: "Small gains accumulate",       rating: "neutral" },
      lostItems: { text: "Far but not gone forever",     rating: "neutral" }
    }
  },
  {
    number: 9, type: "shokichi",
    verse: {
      japanese: "蛍の光　夜の闇照らす　小さくも\n誠の心は　道を切り開く",
      reading: "Hotaru no hikari / yoru no yami terasu / chiisaku mo / makoto no kokoro wa / michi wo kirihiraku",
      english: "The firefly light is small yet illuminates the darkness. A sincere heart, however humble, carves open the road."
    },
    aspects: {
      wish:      { text: "Sincerity makes it possible",  rating: "good"    },
      travel:    { text: "Night travel is safe",         rating: "neutral" },
      love:      { text: "True feeling shines through",  rating: "good"    },
      health:    { text: "Inner strength sustains you",  rating: "neutral" },
      work:      { text: "Small effort, meaningful result",rating: "good"  },
      study:     { text: "Sincerity lights the way",     rating: "good"    },
      wealth:    { text: "Modest but genuine gains",     rating: "neutral" },
      lostItems: { text: "Search in the dark corners",   rating: "neutral" }
    }
  },
  {
    number: 14, type: "shokichi",
    verse: {
      japanese: "岩清水　一滴ごとに　集まりて\nいつかは海に　たどりつくべし",
      reading: "Iwa shimizu / itteki goto ni / atsumarite / itsuka wa umi ni / tadoritsuku beshi",
      english: "Drop by drop, pure water seeps from the rock and gathers. It shall surely reach the sea at last."
    },
    aspects: {
      wish:      { text: "Persistent effort wins",       rating: "good"    },
      travel:    { text: "Long journey, safe arrival",   rating: "neutral" },
      love:      { text: "Love grows steadily",          rating: "good"    },
      health:    { text: "Accumulate rest and care",     rating: "neutral" },
      work:      { text: "Little by little, you will get there",rating: "good" },
      study:     { text: "Daily study brings mastery",   rating: "good"    },
      wealth:    { text: "Save carefully, it grows",     rating: "good"    },
      lostItems: { text: "Look near water or pipes",     rating: "neutral" }
    }
  },
  {
    number: 5, type: "hankichi",
    verse: {
      japanese: "朝露が　光る草葉に　落ちるごと\n幸いもまた　消えやすきかな",
      reading: "Asatsuyu ga / hikaru kusaba ni / ochiru goto / saiwai mo mata / kieyasuki ka na",
      english: "Like morning dew glistening on a blade of grass before vanishing. Happiness too is fleeting; cherish each moment."
    },
    aspects: {
      wish:      { text: "Possible but act quickly",     rating: "neutral" },
      travel:    { text: "Keep plans flexible",          rating: "neutral" },
      love:      { text: "Cherish what you have now",    rating: "neutral" },
      health:    { text: "Fragile, take care of yourself",rating: "neutral"},
      work:      { text: "Seize the moment",             rating: "neutral" },
      study:     { text: "Do not delay, start today",    rating: "neutral" },
      wealth:    { text: "Easy come easy go, save it",   rating: "neutral" },
      lostItems: { text: "Time is short, search now",    rating: "neutral" }
    }
  },
  {
    number: 10, type: "hankichi",
    verse: {
      japanese: "片陰に　立ち止まりつつ　息継ぎて\n半ばの道を　しっかり進め",
      reading: "Katakage ni / tachidomaritsutsu / ikitsugi te / nakaba no michi wo / shikkari susume",
      english: "Pause in the partial shade and catch your breath. Then walk steadily forward on the road half-trodden."
    },
    aspects: {
      wish:      { text: "Halfway there, keep going",    rating: "neutral" },
      travel:    { text: "Rest mid-journey if needed",   rating: "neutral" },
      love:      { text: "At a midpoint, be patient",    rating: "neutral" },
      health:    { text: "Pace yourself, do not rush",   rating: "neutral" },
      work:      { text: "Good progress, steady on",     rating: "neutral" },
      study:     { text: "Review what you have learned", rating: "neutral" },
      wealth:    { text: "In balance, maintain it",      rating: "neutral" },
      lostItems: { text: "Halfway found, keep looking",  rating: "neutral" }
    }
  },
  {
    number: 15, type: "hankichi",
    verse: {
      japanese: "曇り空　雨にもならず　晴れもせず\n心を定めて　ただ歩むべし",
      reading: "Kumori zora / ame ni mo narazu / hare mo sezu / kokoro wo sadamete / tada ayumu beshi",
      english: "The sky is overcast, not quite rain and not quite clear. Yet resolve your mind and simply walk forward."
    },
    aspects: {
      wish:      { text: "Uncertain, hold steady",       rating: "neutral" },
      travel:    { text: "Weather may affect plans",     rating: "neutral" },
      love:      { text: "Unclear but not hopeless",     rating: "neutral" },
      health:    { text: "Neither great nor poor",       rating: "neutral" },
      work:      { text: "Persist through ambiguity",    rating: "neutral" },
      study:     { text: "Unclear results, be steady",   rating: "neutral" },
      wealth:    { text: "Stable but not growing",       rating: "neutral" },
      lostItems: { text: "Unclear, try again later",     rating: "neutral" }
    }
  },
  {
    number: 41, type: "suekichi",
    verse: {
      japanese: "冬の芽が　春を待ちわび　土の中\n必ず来たる　光の季節",
      reading: "Fuyu no me ga / haru wo machiwabi / tsuchi no naka / kanarazu kitaru / hikari no kisetsu",
      english: "The winter bud waits longingly for spring beneath the soil. The season of light shall surely come."
    },
    aspects: {
      wish:      { text: "Will come in its own time",    rating: "neutral" },
      travel:    { text: "Postpone if possible",         rating: "neutral" },
      love:      { text: "Love will bloom in spring",    rating: "good"    },
      health:    { text: "Recovery takes time",          rating: "neutral" },
      work:      { text: "Preparation now, reward later",rating: "good"    },
      study:     { text: "Lay groundwork, results come", rating: "good"    },
      wealth:    { text: "Future prospects are bright",  rating: "neutral" },
      lostItems: { text: "Will emerge in time",          rating: "neutral" }
    }
  },
  {
    number: 46, type: "suekichi",
    verse: {
      japanese: "遠つ世の　星の輝き　届くまで\n今は待ちてよ　時来たらば立て",
      reading: "Tototsu yo no / hoshi no kagayaki / todoku made / ima wa machite yo / toki kitaraba tate",
      english: "Until the starlight from distant ages finally reaches you, wait for now. When the moment arrives, rise."
    },
    aspects: {
      wish:      { text: "Fulfillment lies ahead",       rating: "neutral" },
      travel:    { text: "Timing is not yet right",      rating: "neutral" },
      love:      { text: "The right time is coming",     rating: "neutral" },
      health:    { text: "Long-term care is needed",     rating: "neutral" },
      work:      { text: "The opportunity approaches",   rating: "good"    },
      study:     { text: "Years of study near fruition", rating: "good"    },
      wealth:    { text: "Future gain is assured",       rating: "good"    },
      lostItems: { text: "Will appear eventually",       rating: "neutral" }
    }
  },
  {
    number: 56, type: "sueshokichi",
    verse: {
      japanese: "山の端に　かすかに残る　夕焼けの\n光よ絶えず　希望を灯せ",
      reading: "Yama no ha ni / kasuka ni nokoru / yuyake no / hikari yo taezu / kibo wo tomose",
      english: "The last traces of sunset linger faintly at the mountain edge. Let that dimming light never cease to kindle hope."
    },
    aspects: {
      wish:      { text: "Faint but do not give up",     rating: "neutral" },
      travel:    { text: "Proceed with caution",         rating: "neutral" },
      love:      { text: "A flicker remains, nurture it",rating: "neutral" },
      health:    { text: "Fragile, be very careful",     rating: "neutral" },
      work:      { text: "Hanging in, persevere",        rating: "neutral" },
      study:     { text: "Small steps are still steps",  rating: "neutral" },
      wealth:    { text: "Tight times, manage carefully",rating: "neutral" },
      lostItems: { text: "Hope remains but is dim",      rating: "neutral" }
    }
  },
  {
    number: 61, type: "sueshokichi",
    verse: {
      japanese: "種を蒔き　水をやりても　芽は出ずも\n信じて待てば　春風が吹く",
      reading: "Tane wo maki / mizu wo yarite mo / me wa dezu mo / shinjite mateba / harukaze ga fuku",
      english: "You have planted seeds and watered them, yet no sprout appears. Believe and wait; the spring breeze will blow."
    },
    aspects: {
      wish:      { text: "Believe, it will sprout",      rating: "neutral" },
      travel:    { text: "No ideal timing yet",          rating: "neutral" },
      love:      { text: "Seeds planted, have patience", rating: "neutral" },
      health:    { text: "Slow recovery, trust it",      rating: "neutral" },
      work:      { text: "Efforts will eventually show", rating: "neutral" },
      study:     { text: "Progress is hidden, keep on",  rating: "neutral" },
      wealth:    { text: "Nothing yet, do not despair",  rating: "neutral" },
      lostItems: { text: "Not yet, keep faith",          rating: "neutral" }
    }
  },
  {
    number: 66, type: "kyo",
    verse: {
      japanese: "荒れ野原　道もわからず　迷い込む\n立ち止まり省み　梵天を仰げ",
      reading: "Are nohara / michi mo wakarazu / mayoikomu / tachidomare kaerimi / bonton wo aoge",
      english: "Lost in desolate fields with the path unseen. Stop, reflect upon your steps, and look up to heaven above."
    },
    aspects: {
      wish:      { text: "Not the right time, wait",     rating: "bad" },
      travel:    { text: "Avoid travel now",             rating: "bad" },
      love:      { text: "Step back and reflect",        rating: "bad" },
      health:    { text: "Seek care immediately",        rating: "bad" },
      work:      { text: "Pause and reassess your plan", rating: "bad" },
      study:     { text: "Go back to basics",            rating: "neutral" },
      wealth:    { text: "Avoid speculation or risk",    rating: "bad" },
      lostItems: { text: "Difficult to find now",        rating: "bad" }
    }
  },
  {
    number: 71, type: "kyo",
    verse: {
      japanese: "嵐来て　大木も折れる　その如く\n驕れる者は　必ず倒れる",
      reading: "Arashi kite / taiboku mo oreru / sono gotoku / ogoreru mono wa / kanarazu taoreru",
      english: "When the storm comes even great trees are broken. Just so, those who grow arrogant shall surely fall."
    },
    aspects: {
      wish:      { text: "Pride blocks the way",         rating: "bad" },
      travel:    { text: "Storms ahead, delay",          rating: "bad" },
      love:      { text: "Ego creates distance",         rating: "bad" },
      health:    { text: "Overexertion is dangerous",    rating: "bad" },
      work:      { text: "Humility is needed now",       rating: "bad" },
      study:     { text: "Overconfidence is a trap",     rating: "neutral" },
      wealth:    { text: "Reckless spending, beware",    rating: "bad" },
      lostItems: { text: "Lost through carelessness",    rating: "bad" }
    }
  },
  {
    number: 76, type: "kyo",
    verse: {
      japanese: "鬼火が　暗闇の中で　ゆれながら\n人を惑わす　道に迷うな",
      reading: "Onibi ga / kurayami no naka de / yure nagara / hito wo madowasu / michi ni mayou na",
      english: "Ghostly flames sway in the darkness, deceiving travelers. Do not be misled; stay off the path that leads astray."
    },
    aspects: {
      wish:      { text: "Beware illusion, be discerning",rating: "bad" },
      travel:    { text: "Danger lurks, avoid night travel",rating: "bad"},
      love:      { text: "Beware false appearances",     rating: "bad" },
      health:    { text: "Symptoms may mislead, see a doctor",rating: "bad"},
      work:      { text: "Do not be deceived by others", rating: "bad" },
      study:     { text: "Verify sources, beware errors",rating: "neutral" },
      wealth:    { text: "Scam or loss possible, be alert",rating: "bad"},
      lostItems: { text: "May have been stolen",         rating: "bad" }
    }
  },
  {
    number: 81, type: "kyo",
    verse: {
      japanese: "河の瀬の　石につまずき　倒れても\n起き上がりこそ　人の誉れよ",
      reading: "Kawa no se no / ishi ni tsumazuki / taorete mo / okiagari koso / hito no homare yo",
      english: "You stumble on the stones of the river ford and fall. Yet to rise again is the truest honor of a person."
    },
    aspects: {
      wish:      { text: "Fallen for now, rise again",   rating: "bad"     },
      travel:    { text: "Accidents possible, take care",rating: "bad"     },
      love:      { text: "Setback, get up and try again",rating: "neutral" },
      health:    { text: "Injury or relapse possible",   rating: "bad"     },
      work:      { text: "Failure now, learn from it",   rating: "bad"     },
      study:     { text: "Failed this time, try again",  rating: "neutral" },
      wealth:    { text: "Financial stumble, recover",   rating: "bad"     },
      lostItems: { text: "Dropped in transit, retrace steps",rating: "bad" }
    }
  },
  {
    number: 86, type: "kyo",
    verse: {
      japanese: "枯れ枝に　鴉止まりて　哭くなれど\n冬過ぎぬれば　花は咲くべし",
      reading: "Kare eda ni / karasu tomarite / naku naredo / fuyu suginureba / hana wa saku beshi",
      english: "A crow perches on a withered branch and cries. But when winter passes, flowers shall bloom again."
    },
    aspects: {
      wish:      { text: "Not now, endure the winter",   rating: "bad" },
      travel:    { text: "Ill-omened, postpone",         rating: "bad" },
      love:      { text: "A cold season, wait for warmth",rating: "bad"},
      health:    { text: "Serious, please see a doctor", rating: "bad" },
      work:      { text: "Bleak period, endure it",      rating: "bad" },
      study:     { text: "Dark time, do not give up",    rating: "neutral" },
      wealth:    { text: "Losses, tighten your belt",    rating: "bad" },
      lostItems: { text: "May be lost for good, accept", rating: "bad" }
    }
  },
  {
    number: 91, type: "kyo",
    verse: {
      japanese: "泥の中　蓮の花咲く　その如く\n苦しみ抜けて　悟りの光",
      reading: "Doro no naka / hasu no hana saku / sono gotoku / kurushimi nukete / satori no hikari",
      english: "Like the lotus that blooms in the mud. Emerging through suffering, the light of enlightenment shines."
    },
    aspects: {
      wish:      { text: "Through hardship, eventually", rating: "bad"     },
      travel:    { text: "Difficult, prepare for obstacles",rating: "bad"  },
      love:      { text: "Painful now, purity comes",    rating: "neutral" },
      health:    { text: "Serious illness, seek help",   rating: "bad"     },
      work:      { text: "Endure hardship to grow",      rating: "bad"     },
      study:     { text: "Struggle is the teacher",      rating: "neutral" },
      wealth:    { text: "Financial hardship, persevere",rating: "bad"     },
      lostItems: { text: "May take great effort to recover",rating: "bad"  }
    }
  },
  {
    number: 100, type: "kyo",
    verse: {
      japanese: "百の籤　最後の一枚　汝に示す\n迷わず進め　仏道の光",
      reading: "Hyaku no sen / saigo no ichimai / nanji ni shimesu / mayowazu susume / butsudo no hikari",
      english: "The hundredth lot, the final slip, reveals itself to you. Walk forward without wavering in the light of the Buddha path."
    },
    aspects: {
      wish:      { text: "The darkest lot, reflect deeply",rating: "bad" },
      travel:    { text: "Do not travel, turn inward",   rating: "bad" },
      love:      { text: "Solitude is the teacher now",  rating: "bad" },
      health:    { text: "Serious, seek medicine and spirit",rating: "bad"},
      work:      { text: "End of a cycle, begin anew",   rating: "bad" },
      study:     { text: "Unlearn to relearn",           rating: "neutral" },
      wealth:    { text: "Great loss, the reset",        rating: "bad" },
      lostItems: { text: "It is truly gone, accept it",  rating: "bad" }
    }
  }
];
