// ===== Car Models Data (Trilingual) - Updated May 2026 =====
// Overview cards — detailed year/trim pricing is in priceData below
const carModels = [
  {
    nameEn: 'Toyota Vitz',
    nameMy: 'တိုယိုတာ ဗစ်ဇ်',
    nameCn: '丰田威姿',
    price: '28M - 60M',
    priceUsd: '$7,000 - $15,000',
    year: '2008-2018',
    type: 'hatchback',
    image: '🚗',
    desc: 'Fuel efficient 1000cc city car. Best for beginners and daily commuting.'
  },
  {
    nameEn: 'Honda Fit / Jazz',
    nameMy: 'ဟွန်ဒါ ဖစ် / ဂျက်ဇ်',
    nameCn: '本田飞度',
    price: '45M - 90M',
    priceUsd: '$11,250 - $22,500',
    year: '2010-2020',
    type: 'hatchback',
    image: '🚙',
    desc: 'The most value-retaining compact car in Myanmar. Great for families and young drivers.'
  },
  {
    nameEn: 'Suzuki Swift',
    nameMy: 'ဆူဇူကီး ဆွစ်ဖ်',
    nameCn: '铃木雨燕',
    price: '30M - 70M',
    priceUsd: '$7,500 - $17,500',
    year: '2011-2018',
    type: 'hatchback',
    image: '🚗',
    desc: 'Stylish and fun to drive. Popular with young drivers and women.'
  },
  {
    nameEn: 'Toyota Wish',
    nameMy: 'တိုယိုတာ ဝစ်ရှ်',
    nameCn: '丰田逸致',
    price: '38M - 80M',
    priceUsd: '$9,500 - $20,000',
    year: '2009-2017',
    type: 'mpv',
    image: '🚐',
    desc: 'Practical 7-seat MPV. Popular family car with good resale value.'
  },
  {
    nameEn: 'Suzuki Carry',
    nameMy: 'ဆူဇူကီး ကယ်ရီ',
    nameCn: '铃木卡里',
    price: '30M - 70M',
    priceUsd: '$7,500 - $17,500',
    year: '2008-2020',
    type: 'truck',
    image: '🛻',
    desc: 'Work truck for business. Cheap parts, durable. Refrigerated conversions from 70M+.'
  },
  {
    nameEn: 'Toyota Hilux',
    nameMy: 'တိုယိုတာ ဟိုင်လပ်',
    nameCn: '丰田海拉克斯',
    price: '50M - 500M',
    priceUsd: '$12,500 - $37,500',
    year: '2010-2020',
    type: 'pickup',
    image: '🛻',
    desc: 'The legendary pickup. From Vigo to Revo — unmatched durability.'
  },
  {
    nameEn: 'Toyota Crown',
    nameMy: 'တိုယိုတာ ခရောင်း',
    nameCn: '丰田皇冠',
    price: '55M - 200M',
    priceUsd: '$13,750 - $50,000',
    year: '2004-2015+',
    type: 'sedan',
    image: '🚘',
    desc: 'Premium executive sedan. From Royal Saloon to Hybrid. Many listings are overpriced.'
  },
  {
    nameEn: 'Toyota Alphard',
    nameMy: 'တိုယိုတာ အယ်လ်ဖတ်',
    nameCn: '丰田埃尔法',
    price: '80M - 300M',
    priceUsd: '$20,000 - $75,000',
    year: '2010-2017',
    type: 'mpv',
    image: '🚐',
    desc: 'The ultimate luxury MPV. From standard to Executive Lounge. Many overpriced listings.'
  },
  {
    nameEn: 'Suzuki Ertiga',
    nameMy: 'ဆူဇူကီး အာတီဂါ',
    nameCn: '铃木艾提加',
    price: '45M - 90M',
    priceUsd: '$11,250 - $22,500',
    year: '2014-2021',
    type: 'mpv',
    image: '🚐',
    desc: 'Affordable 7-seat family MPV. Hybrid models available from 2018.'
  },
  {
    nameEn: 'Suzuki Alto',
    nameMy: 'ဆူဇူကီး အယ်လ်တို',
    nameCn: '铃木奥拓',
    price: '18M - 40M',
    priceUsd: '$4,500 - $10,000',
    year: '2008-2016',
    type: 'hatchback',
    image: '🚗',
    desc: 'Cheapest daily driver. 660cc — great for city commuting on a budget.'
  },
  {
    nameEn: 'Suzuki Jimny',
    nameMy: 'ဆူဇူကီး ဂျင်နီ',
    nameCn: '铃木吉姆尼',
    price: '35M - 180M',
    priceUsd: '$8,750 - $45,000',
    year: '2000-2020+',
    type: 'suv',
    image: '🚙',
    desc: 'Off-road legend. Small body, big capability. New JB74 model is extremely expensive.'
  },
  {
    nameEn: 'Suzuki Ciaz',
    nameMy: 'ဆူဇူကီး စီယက်ဇ်',
    nameCn: '铃木西亚兹',
    price: '40M - 75M',
    priceUsd: '$10,000 - $18,750',
    year: '2015-2022',
    type: 'sedan',
    image: '🚗',
    desc: 'Family sedan. Decent value but less popular than Toyota/Honda equivalents.'
  },
  {
    nameEn: 'Suzuki Every',
    nameMy: 'ဆူဇူကီး အက်ဗရီ',
    nameCn: '铃木Every',
    price: '25M - 60M',
    priceUsd: '$6,250 - $15,000',
    year: '2008-2017',
    type: 'truck',
    image: '🛻',
    desc: 'Delivery van / small business vehicle. High-roof Turbo models from 60M+.'
  }
];

// ===== Price Data (Detailed by Year/Trim) - Updated May 2026 =====
const priceData = [
  // ════════════════════════════════════════════════════════
  // 一、日本右舵车（JDM）— 市场绝对主力
  // ════════════════════════════════════════════════════════

  // Toyota Vitz
  { model: 'Toyota Vitz (2008-2011 Base 1000cc)', year: '2008-2011', trim: 'Base', priceMmk: '28M - 35M', tag: '🔥' },
  { model: 'Toyota Vitz (2012-2014 Push Start)', year: '2012-2014', trim: 'Mid', priceMmk: '35M - 43M', tag: '🔥' },
  { model: 'Toyota Vitz (2015-2018 Safety Sense)', year: '2015-2018', trim: 'High', priceMmk: '45M - 58M', tag: '🔥' },
  { model: 'Toyota Vitz (Low km + YGN Plate)', year: '—', trim: 'Premium', priceMmk: '~60M', tag: '🔥' },

  // Honda Fit / Jazz
  { model: 'Honda Fit/Jazz (2010-2013 Base 1300cc)', year: '2010-2013', trim: 'Base', priceMmk: '45M - 55M', tag: '🔥' },
  { model: 'Honda Fit/Jazz (2014-2016 RS/Push Start)', year: '2014-2016', trim: 'Mid', priceMmk: '55M - 68M', tag: '🔥' },
  { model: 'Honda Fit/Jazz (2017-2020 Hybrid/Sensing)', year: '2017-2020', trim: 'High', priceMmk: '70M - 85M', tag: '🔥' },
  { model: 'Honda Fit/Jazz (RS Top Trim)', year: '—', trim: 'Premium', priceMmk: '90M+', tag: '🔥' },

  // Suzuki Swift
  { model: 'Suzuki Swift (2011-2014 Base)', year: '2011-2014', trim: 'Base', priceMmk: '30M - 40M', tag: '🔥' },
  { model: 'Suzuki Swift (2015-2018 Push Start)', year: '2015-2018', trim: 'Mid', priceMmk: '40M - 52M', tag: '🔥' },
  { model: 'Suzuki Swift (RS/Sport)', year: '—', trim: 'High', priceMmk: '55M - 70M', tag: '🔥' },

  // Toyota Wish (7-seat MPV)
  { model: 'Toyota Wish (2009-2012 Base)', year: '2009-2012', trim: 'Base', priceMmk: '38M - 50M', tag: '🔥' },
  { model: 'Toyota Wish (2013-2015 1.8S)', year: '2013-2015', trim: 'Mid', priceMmk: '50M - 65M', tag: '🔥' },
  { model: 'Toyota Wish (2016-2017 Push Start + Aero)', year: '2016-2017', trim: 'High', priceMmk: '65M - 80M', tag: '🔥' },

  // Suzuki Carry
  { model: 'Suzuki Carry (2008-2012 Old)', year: '2008-2012', trim: 'Base', priceMmk: '30M - 42M', tag: '🔥' },
  { model: 'Suzuki Carry (2013-2017 EFI)', year: '2013-2017', trim: 'New', priceMmk: '42M - 55M', tag: '🔥' },
  { model: 'Suzuki Carry (2018-2020 AC High)', year: '2018-2020', trim: 'High', priceMmk: '55M - 70M', tag: '🔥' },
  { model: 'Suzuki Carry (Refrigerated/Commercial)', year: '—', trim: 'Modified', priceMmk: '70M+', tag: '🔥' },

  // Toyota Hilux
  { model: 'Toyota Hilux (2010-2013 Vigo)', year: '2010-2013', trim: 'Vigo', priceMmk: '50M - 70M', tag: '🔥' },
  { model: 'Toyota Hilux (2014-2016 Vigo Champ)', year: '2014-2016', trim: 'Vigo Champ', priceMmk: '70M - 90M', tag: '🔥' },
  { model: 'Toyota Hilux (2017-2020 Revo)', year: '2017-2020', trim: 'Revo', priceMmk: '90M - 130M', tag: '🔥' },
  { model: 'Toyota Hilux (Rogue/Rocco)', year: '—', trim: 'High', priceMmk: '150M+', tag: '🔥' },

  // Toyota Crown
  { model: 'Toyota Crown (2004-2008 Royal Saloon)', year: '2004-2008', trim: 'Royal', priceMmk: '55M - 80M', tag: '🔥' },
  { model: 'Toyota Crown (2009-2012 Athlete)', year: '2009-2012', trim: 'Athlete', priceMmk: '80M - 100M', tag: '🔥' },
  { model: 'Toyota Crown (Majesta V8)', year: '—', trim: 'Majesta', priceMmk: '100M - 150M', tag: '🔥' },
  { model: 'Toyota Crown (2015+ Hybrid)', year: '2015+', trim: 'Hybrid', priceMmk: '130M - 200M', tag: '🔥' },

  // Toyota Alphard
  { model: 'Toyota Alphard (2010-2013 Standard)', year: '2010-2013', trim: 'Base', priceMmk: '80M - 120M', tag: '🔥' },
  { model: 'Toyota Alphard (2014-2017 SC)', year: '2014-2017', trim: 'SC', priceMmk: '130M - 200M', tag: '🔥' },
  { model: 'Toyota Alphard (Executive Lounge)', year: '—', trim: 'Top', priceMmk: '200M - 300M+', tag: '🔥' },

  // Suzuki Ertiga
  { model: 'Suzuki Ertiga (2014-2017 Base)', year: '2014-2017', trim: 'Base', priceMmk: '45M - 60M', tag: '🔥' },
  { model: 'Suzuki Ertiga (2018-2021 Hybrid)', year: '2018-2021', trim: 'Hybrid', priceMmk: '65M - 85M', tag: '🔥' },
  { model: 'Suzuki Ertiga (GLX Top)', year: '—', trim: 'GLX', priceMmk: '~90M', tag: '🔥' },

  // Suzuki Alto
  { model: 'Suzuki Alto (2008-2012 660cc)', year: '2008-2012', trim: 'Base', priceMmk: '18M - 28M', tag: '🔥' },
  { model: 'Suzuki Alto (2013-2016 New)', year: '2013-2016', trim: 'New', priceMmk: '25M - 38M', tag: '🔥' },
  { model: 'Suzuki Alto (Turbo/High)', year: '—', trim: 'Turbo', priceMmk: '40M+', tag: '🔥' },

  // Suzuki Jimny
  { model: 'Suzuki Jimny (2000-2010 Old)', year: '2000-2010', trim: 'Old', priceMmk: '35M - 55M', tag: '🔥' },
  { model: 'Suzuki Jimny (2011-2017 New)', year: '2011-2017', trim: 'New', priceMmk: '60M - 90M', tag: '🔥' },
  { model: 'Suzuki Jimny (JB74 新世代)', year: '2018+', trim: 'JB74', priceMmk: '100M - 180M', tag: '🔥' },

  // Suzuki Ciaz
  { model: 'Suzuki Ciaz (2015-2018 Base)', year: '2015-2018', trim: 'Base', priceMmk: '40M - 55M', tag: '🔥' },
  { model: 'Suzuki Ciaz (2019-2022 GLX)', year: '2019-2022', trim: 'GLX', priceMmk: '60M - 75M', tag: '🔥' },

  // Suzuki Every
  { model: 'Suzuki Every (2008-2012 Base)', year: '2008-2012', trim: 'Base', priceMmk: '25M - 38M', tag: '🔥' },
  { model: 'Suzuki Every (2013-2017 Join Turbo)', year: '2013-2017', trim: 'Turbo', priceMmk: '40M - 55M', tag: '🔥' },
  { model: 'Suzuki Every (High Roof Turbo)', year: '—', trim: 'High', priceMmk: '60M+', tag: '🔥' },
  
  // ════════════════════════════════════════════════════════
  // 二、电动车（EV）— Myanmar 2026 Market
  // ════════════════════════════════════════════════════════

  // BYD Dolphin
  { model: 'BYD Dolphin (Standard Range)', year: '2023', trim: 'Base', priceMmk: '65M - 85M', tag: '⚡' },
  { model: 'BYD Dolphin (Extended Range)', year: '2024', trim: 'High', priceMmk: '85M - 110M', tag: '⚡' },
  { model: 'BYD Dolphin (Top + Low km)', year: '—', trim: 'Premium', priceMmk: '~120M', tag: '⚡' },

  // BYD Atto 3
  { model: 'BYD Atto 3 (Standard)', year: '2023', trim: 'Base', priceMmk: '95M - 130M', tag: '⚡' },
  { model: 'BYD Atto 3 (Long Range)', year: '2024', trim: 'High', priceMmk: '130M - 170M', tag: '⚡' },
  { model: 'BYD Atto 3 (Top Premium)', year: '—', trim: 'Premium', priceMmk: '~180M', tag: '⚡' },

  // BYD Seal
  { model: 'BYD Seal (Standard)', year: '2024', trim: 'Base', priceMmk: '150M - 200M', tag: '⚡' },
  { model: 'BYD Seal (AWD Performance)', year: '2024', trim: 'High', priceMmk: '200M - 280M', tag: '⚡' },

  // BYD Yangwang / Premium
  { model: 'BYD Yangwang / Premium Series', year: '2024', trim: '—', priceMmk: '300M - 1,000M+', tag: '⚡' },

  // NETA V
  { model: 'NETA V (Standard)', year: '2023-2024', trim: 'Base', priceMmk: '50M - 70M', tag: '⚡' },
  { model: 'NETA V (High Trim)', year: '—', trim: 'High', priceMmk: '70M - 85M', tag: '⚡' },

  // NETA X
  { model: 'NETA X SUV', year: '2024', trim: '—', priceMmk: '90M - 130M', tag: '⚡' },

  // MG4 EV
  { model: 'MG4 EV (Standard)', year: '2023-2024', trim: 'Base', priceMmk: '85M - 200M', tag: '⚡' },
  { model: 'MG4 EV (Performance)', year: '—', trim: 'High', priceMmk: '130M+', tag: '⚡' },

  // Tesla Model 3
  { model: 'Tesla Model 3 (2019-2021 Used)', year: '2019-2021', trim: 'Used', priceMmk: '150M - 250M', tag: '⚡' },
  { model: 'Tesla Model 3 (2022+ New)', year: '2022+', trim: 'New', priceMmk: '250M - 400M', tag: '⚡' },

  // Tesla Model Y
  { model: 'Tesla Model Y', year: '2022-2024', trim: '—', priceMmk: '300M - 500M', tag: '⚡' },

  // Wuling Mini EV
  { model: 'Wuling Mini EV', year: '2023-2024', trim: '—', priceMmk: '25M - 45M', tag: '⚡' },

  // Zeekr X
  { model: 'Zeekr X', year: '2024', trim: '—', priceMmk: '200M - 300M', tag: '⚡' },

  // Leapmotor
  { model: 'Leapmotor / 零跑', year: '2024', trim: '—', priceMmk: '70M - 120M', tag: '⚡' },

  // ════════════════════════════════════════════════════════
  // 三、韩国车（现代/起亚）
  // ════════════════════════════════════════════════════════
  { model: 'Hyundai Elantra', year: '2012-2017', trim: '—', priceMmk: '25M - 35M', tag: '📉' },
  { model: 'Hyundai Accent', year: '2012-2017', trim: '—', priceMmk: '20M - 30M', tag: '📉' },
  { model: 'Kia Forte', year: '2012-2017', trim: '—', priceMmk: '22M - 32M', tag: '📉' },
  { model: 'Kia K3', year: '2014-2018', trim: '—', priceMmk: '25M - 38M', tag: '📉' },
  { model: 'Hyundai Santa Fe', year: '2010-2015', trim: '—', priceMmk: '30M - 50M', tag: '📉' },
  { model: 'Kia Sorento', year: '2010-2015', trim: '—', priceMmk: '30M - 50M', tag: '📉' },
];

// ===== Price Data Model Translations (for trilingual display) =====
const modelTr = {};
// Helper to add translation
function mt(en, my, cn) { modelTr[en] = { my, cn }; }

// Toyota Vitz
mt('Toyota Vitz (2008-2011 Base 1000cc)', 'Toyota Vitz (၂၀၀၈-၂၀၁၁ အခြေခံ 1000cc)', '丰田威姿（2008-2011 基础版 1000cc）');
mt('Toyota Vitz (2012-2014 Push Start)', 'Toyota Vitz (၂၀၁၂-၂၀၁၄ Push Start)', '丰田威姿（2012-2014 Push Start）');
mt('Toyota Vitz (2015-2018 Safety Sense)', 'Toyota Vitz (၂၀၁၅-၂၀၁၈ Safety Sense)', '丰田威姿（2015-2018 Safety Sense）');
mt('Toyota Vitz (Low km + YGN Plate)', 'Toyota Vitz (ကီလိုနည်း + YGN နံပါတ်)', '丰田威姿（精品低公里+YGN好牌）');

// Honda Fit/Jazz
mt('Honda Fit/Jazz (2010-2013 Base 1300cc)', 'Honda Fit/Jazz (၂၀၁၀-၂၀၁၃ အခြေခံ 1300cc)', '本田飞度（2010-2013 基础版 1300cc）');
mt('Honda Fit/Jazz (2014-2016 RS/Push Start)', 'Honda Fit/Jazz (၂၀၁၄-၂၀၁၆ RS/Push Start)', '本田飞度（2014-2016 RS/Push Start）');
mt('Honda Fit/Jazz (2017-2020 Hybrid/Sensing)', 'Honda Fit/Jazz (၂၀၁၇-၂၀၂၀ Hybrid/Sensing)', '本田飞度（2017-2020 Hybrid/Sensing）');
mt('Honda Fit/Jazz (RS Top Trim)', 'Honda Fit/Jazz (RS အဆင့်မြင့်)', '本田飞度（RS顶配）');

// Suzuki Swift
mt('Suzuki Swift (2011-2014 Base)', 'Suzuki Swift (၂၀၁၁-၂၀၁၄ အခြေခံ)', '铃木雨燕（2011-2014 基础版）');
mt('Suzuki Swift (2015-2018 Push Start)', 'Suzuki Swift (၂၀၁၅-၂၀၁၈ Push Start)', '铃木雨燕（2015-2018 Push Start）');
mt('Suzuki Swift (RS/Sport)', 'Suzuki Swift (RS/Sport)', '铃木雨燕（RS/Sport 高配）');

// Toyota Wish
mt('Toyota Wish (2009-2012 Base)', 'Toyota Wish (၂၀၀၉-၂၀၁၂ အခြေခံ)', '丰田逸致（2009-2012 基础版）');
mt('Toyota Wish (2013-2015 1.8S)', 'Toyota Wish (၂၀၁၃-၂၀၁၅ 1.8S)', '丰田逸致（2013-2015 1.8S高配）');
mt('Toyota Wish (2016-2017 Push Start + Aero)', 'Toyota Wish (၂၀၁၆-၂၀၁၇ Push Start + Aero)', '丰田逸致（2016-2017 Push Start+Aero）');

// Suzuki Carry
mt('Suzuki Carry (2008-2012 Old)', 'Suzuki Carry (၂၀၀၈-၂၀၁၂ အဟောင်း)', '铃木卡里（2008-2012 老款）');
mt('Suzuki Carry (2013-2017 EFI)', 'Suzuki Carry (၂၀၁၃-၂၀၁၇ EFI)', '铃木卡里（2013-2017 EFI新款）');
mt('Suzuki Carry (2018-2020 AC High)', 'Suzuki Carry (၂၀၁၈-၂၀၂၀ အအေးခံမြင့်)', '铃木卡里（2018-2020 冷气高配）');
mt('Suzuki Carry (Refrigerated/Commercial)', 'Suzuki Carry (အအေးခန်း/စီးပွားရေးပြုပြင်ထား)', '铃木卡里（冷藏/商业改装版）');

// Toyota Hilux
mt('Toyota Hilux (2010-2013 Vigo)', 'Toyota Hilux (၂၀၁၀-၂၀၁၃ Vigo)', '丰田海拉克斯（2010-2013 Vigo）');
mt('Toyota Hilux (2014-2016 Vigo Champ)', 'Toyota Hilux (၂၀၁၄-၂၀၁၆ Vigo Champ)', '丰田海拉克斯（2014-2016 Vigo Champ）');
mt('Toyota Hilux (2017-2020 Revo)', 'Toyota Hilux (၂၀၁၇-၂၀၂၀ Revo)', '丰田海拉克斯（2017-2020 Revo）');
mt('Toyota Hilux (Rogue/Rocco)', 'Toyota Hilux (Rogue/Rocco)', '丰田海拉克斯（Rogue/Rocco高配）');

// Toyota Crown
mt('Toyota Crown (2004-2008 Royal Saloon)', 'Toyota Crown (၂၀၀၄-၂၀၀၈ Royal Saloon)', '丰田皇冠（2004-2008 Royal Saloon）');
mt('Toyota Crown (2009-2012 Athlete)', 'Toyota Crown (၂၀၀၉-၂၀၁၂ Athlete)', '丰田皇冠（2009-2012 Athlete）');
mt('Toyota Crown (Majesta V8)', 'Toyota Crown (Majesta V8)', '丰田皇冠（Majesta V8顶配）');
mt('Toyota Crown (2015+ Hybrid)', 'Toyota Crown (၂၀၁၅+ Hybrid)', '丰田皇冠（2015+ 新款Hybrid）');

// Toyota Alphard
mt('Toyota Alphard (2010-2013 Standard)', 'Toyota Alphard (၂၀၁၀-၂၀၁၃ ပုံမှန်)', '丰田埃尔法（2010-2013 标准版）');
mt('Toyota Alphard (2014-2017 SC)', 'Toyota Alphard (၂၀၁၄-၂၀၁၇ SC)', '丰田埃尔法（2014-2017 SC Package）');
mt('Toyota Alphard (Executive Lounge)', 'Toyota Alphard (Executive Lounge)', '丰田埃尔法（Executive Lounge顶配）');

// Suzuki Ertiga
mt('Suzuki Ertiga (2014-2017 Base)', 'Suzuki Ertiga (၂၀၁၄-၂၀၁၇ အခြေခံ)', '铃木艾提加（2014-2017 基础版）');
mt('Suzuki Ertiga (2018-2021 Hybrid)', 'Suzuki Ertiga (၂၀၁၈-၂၀၂၁ Hybrid)', '铃木艾提加（2018-2021 Hybrid）');
mt('Suzuki Ertiga (GLX Top)', 'Suzuki Ertiga (GLX အဆင့်မြင့်)', '铃木艾提加（GLX顶配）');

// Suzuki Alto
mt('Suzuki Alto (2008-2012 660cc)', 'Suzuki Alto (၂၀၀၈-၂၀၁၂ 660cc)', '铃木奥拓（2008-2012 660cc）');
mt('Suzuki Alto (2013-2016 New)', 'Suzuki Alto (၂၀၁၃-၂၀၁၆ အသစ်)', '铃木奥拓（2013-2016 新款）');
mt('Suzuki Alto (Turbo/High)', 'Suzuki Alto (Turbo/အဆင့်မြင့်)', '铃木奥拓（Turbo/高配）');

// Suzuki Jimny
mt('Suzuki Jimny (2000-2010 Old)', 'Suzuki Jimny (၂၀၀၀-၂၀၁၀ အဟောင်း)', '铃木吉姆尼（2000-2010 老款）');
mt('Suzuki Jimny (2011-2017 New)', 'Suzuki Jimny (၂၀၁၁-၂၀၁၇ အသစ်)', '铃木吉姆尼（2011-2017 新款）');
mt('Suzuki Jimny (JB74)', 'Suzuki Jimny (JB74)', '铃木吉姆尼（JB74新世代）');

// Suzuki Ciaz
mt('Suzuki Ciaz (2015-2018 Base)', 'Suzuki Ciaz (၂၀၁၅-၂၀၁၈ အခြေခံ)', '铃木西亚兹（2015-2018 基础版）');
mt('Suzuki Ciaz (2019-2022 GLX)', 'Suzuki Ciaz (၂၀၁၉-၂၀၂၂ GLX)', '铃木西亚兹（2019-2022 GLX高配）');

// Suzuki Every
mt('Suzuki Every (2008-2012 Base)', 'Suzuki Every (၂၀၀၈-၂၀၁၂ အခြေခံ)', '铃木Every（2008-2012 基础版）');
mt('Suzuki Every (2013-2017 Join Turbo)', 'Suzuki Every (၂၀၁၃-၂၀၁၇ Join Turbo)', '铃木Every（2013-2017 Join Turbo）');
mt('Suzuki Every (High Roof Turbo)', 'Suzuki Every (မြင့်မိုး Turbo)', '铃木Every（高顶Turbo高配）');

// EV - BYD Dolphin
mt('BYD Dolphin (Standard Range)', 'BYD Dolphin (Standard Range)', '比亚迪海豚（标准版）');
mt('BYD Dolphin (Extended Range)', 'BYD Dolphin (Extended Range)', '比亚迪海豚（长续航版）');
mt('BYD Dolphin (Top + Low km)', 'BYD Dolphin (Top + Low km)', '比亚迪海豚（顶配+低公里）');

// BYD Atto 3
mt('BYD Atto 3 (Standard)', 'BYD Atto 3 (Standard)', '比亚迪元PLUS（标准版）');
mt('BYD Atto 3 (Long Range)', 'BYD Atto 3 (Long Range)', '比亚迪元PLUS（长续航版）');
mt('BYD Atto 3 (Top Premium)', 'BYD Atto 3 (Top Premium)', '比亚迪元PLUS（顶配精品）');

// BYD Seal
mt('BYD Seal (Standard)', 'BYD Seal (Standard)', '比亚迪海豹（标准版）');
mt('BYD Seal (AWD Performance)', 'BYD Seal (AWD Performance)', '比亚迪海豹（AWD高性能版）');

mt('BYD Yangwang / Premium Series', 'BYD Yangwang / Premium', '比亚迪仰望/高端系列');
mt('NETA V (Standard)', 'NETA V (Standard)', '哪吒V（标准版）');
mt('NETA V (High Trim)', 'NETA V (အဆင့်မြင့်)', '哪吒V（高配版）');
mt('NETA X SUV', 'NETA X SUV', '哪吒X SUV');
mt('MG4 EV (Standard)', 'MG4 EV (Standard)', 'MG4 EV（标准版）');
mt('MG4 EV (Performance)', 'MG4 EV (Performance)', 'MG4 EV（高性能版）');
mt('Tesla Model 3 (2019-2021 Used)', 'Tesla Model 3 (၂၀၁၉-၂၀၂၁ တန်း)', 'Tesla Model 3（2019-2021 二手）');
mt('Tesla Model 3 (2022+ New)', 'Tesla Model 3 (၂၀၂၂+ အသစ်)', 'Tesla Model 3（2022+ 新款）');
mt('Tesla Model Y', 'Tesla Model Y', 'Tesla Model Y');
mt('Wuling Mini EV', 'Wuling Mini EV', '五菱Mini EV');
mt('Zeekr X', 'Zeekr X', '极氪X');
mt('Leapmotor / 零跑', 'Leapmotor', '零跑');

// Korean
mt('Hyundai Elantra', 'Hyundai Elantra', '现代伊兰特');
mt('Hyundai Accent', 'Hyundai Accent', '现代雅绅特');
mt('Kia Forte', 'Kia Forte', '起亚福瑞迪');
mt('Kia K3', 'Kia K3', '起亚K3');
mt('Hyundai Santa Fe', 'Hyundai Santa Fe', '现代胜达');
mt('Kia Sorento', 'Kia Sorento', '起亚索兰托');

// ===== Glossary Data (Trilingual) =====
const glossaryTerms = [
  // Engine / Mechanical
  { en: 'Engine', my: 'အင်ဂျင်', cn: '发动机', cat: 'engine' },
  { en: 'Engine Oil', my: 'အင်ဂျင်ဆီ', cn: '机油', cat: 'engine' },
  { en: 'Transmission', my: 'ဂီယာ', cn: '变速箱', cat: 'engine' },
  { en: 'Automatic Transmission', my: 'အော်တိုဂီယာ', cn: '自动挡', cat: 'engine' },
  { en: 'Manual Transmission', my: 'မန်နျူယယ်ဂီယာ', cn: '手动挡', cat: 'engine' },
  { en: 'Clutch', my: 'ကလပ်ချ်', cn: '离合器', cat: 'engine' },
  { en: 'Brake', my: 'ဘရိတ်', cn: '刹车', cat: 'engine' },
  { en: 'ABS', my: 'ABS', cn: '防抱死系统', cat: 'engine' },
  { en: 'Turbo', my: 'တာဘို', cn: '涡轮增压', cat: 'engine' },
  { en: 'Battery', my: 'ဘက်ထရီ', cn: '电池', cat: 'engine' },
  { en: 'Radiator', my: 'ရေတိုင်ကီ', cn: '水箱', cat: 'engine' },
  { en: 'Alternator', my: 'အော်တာနေတာ', cn: '发电机', cat: 'engine' },
  { en: 'Starter', my: 'စတာတာ', cn: '起动机', cat: 'engine' },

  // Body / Exterior
  { en: 'Chassis Number / VIN', my: 'ကိုယ်ထည်နံပါတ်', cn: '车架号 / VIN', cat: 'body' },
  { en: 'Engine Number', my: 'အင်ဂျင်နံပါတ်', cn: '发动机号', cat: 'body' },
  { en: 'Tire', my: 'တာယာ', cn: '轮胎', cat: 'body' },
  { en: 'Rim', my: 'ဘီးလုံး', cn: '轮毂', cat: 'body' },
  { en: 'Headlight', my: 'ရှေ့မီး', cn: '大灯', cat: 'body' },
  { en: 'Taillight', my: 'နောက်မီး', cn: '尾灯', cat: 'body' },
  { en: 'Windshield', my: 'လေကာမှန်', cn: '挡风玻璃', cat: 'body' },
  { en: 'Bumper', my: 'ဘန်ပါ', cn: '保险杠', cat: 'body' },
  { en: 'Suspension', my: 'ဆိုင်းထိန်း', cn: '悬挂', cat: 'body' },
  { en: 'Shock Absorber', my: 'ရှော့အပ်ဆော်ဘာ', cn: '减震器', cat: 'body' },
  { en: 'Side Mirror', my: 'ကြည့်မှန်', cn: '后视镜', cat: 'body' },
  { en: 'Paint', my: 'ဆေးသုတ်', cn: '车漆', cat: 'body' },
  { en: 'Rust', my: 'သံချေး', cn: '生锈', cat: 'body' },
  { en: 'Dent', my: 'အချိုင့်', cn: '凹陷', cat: 'body' },
  { en: 'Scratch', my: 'ခြစ်ရာ', cn: '刮痕', cat: 'body' },

  // Interior
  { en: 'Air Conditioner / AC', my: 'လေအေးပေးစက်', cn: '空调', cat: 'interior' },
  { en: 'Steering Wheel', my: 'စတီယာရင်', cn: '方向盘', cat: 'interior' },
  { en: 'Seat', my: 'ထိုင်ခုံ', cn: '座椅', cat: 'interior' },
  { en: 'Leather Seat', my: 'သားရေထိုင်', cn: '真皮座椅', cat: 'interior' },
  { en: 'Dashboard', my: 'ဒက်ရှ်ဘုတ်', cn: '仪表盘', cat: 'interior' },
  { en: 'Odometer / Mileage', my: 'မိုင်အကွာအဝေး', cn: '里程表', cat: 'interior' },
  { en: 'Speedometer', my: 'အမြန်နှုန်းပြကိရိယာ', cn: '速度表', cat: 'interior' },
  { en: 'GPS / Navigation', my: 'GPS / လမ်းပြစနစ်', cn: '导航', cat: 'interior' },
  { en: 'Audio System', my: 'အသံစနစ်', cn: '音响', cat: 'interior' },
  { en: 'Sunroof', my: 'နေရောင်မိုး', cn: '天窗', cat: 'interior' },

  // Documents & Legal
  { en: 'Registration Book', my: 'မှတ်ပုံတင်စာအုပ်', cn: '登记证/车本', cat: 'document' },
  { en: 'Owner Book', my: 'ပိုင်ရှင်စာအုပ်', cn: '车主证', cat: 'document' },
  { en: 'Import Documents', my: 'တင်သွင်းစာရွက်စာတမ်း', cn: '进口文件', cat: 'document' },
  { en: 'Tax Clearance', my: 'အခွန်ရှင်းလင်းရေး', cn: '完税证明', cat: 'document' },
  { en: 'Insurance Paper', my: 'အာမခံစာရွက်', cn: '保险单', cat: 'document' },
  { en: 'Transfer Deed', my: 'လွှဲပြောင်းစာချုပ်', cn: '过户文件', cat: 'document' },
  { en: 'License Plate', my: 'နံပါတ်ပြား', cn: '车牌', cat: 'document' },
  { en: 'Inspection Certificate', my: 'စစ်ဆေးရေးလက်မှတ်', cn: '检验证书', cat: 'document' },
  { en: 'Power of Attorney', my: 'ရှေ့နေအာဏာ', cn: '授权书', cat: 'document' },
  { en: 'Road Tax', my: 'လမ်းခွန်', cn: '道路税', cat: 'document' },
  { en: 'Import Permit', my: 'တင်သွင်းခွင့်', cn: '进口许可证', cat: 'document' },
  { en: 'Wheel Tax', my: 'ဘီးခွန်', cn: '轮税', cat: 'document' },

  // Buying & Selling
  { en: 'Used Car', my: 'ကားဟောင်း', cn: '二手车', cat: 'document' },
  { en: 'Down Payment', my: 'ကြိုပေးငွေ', cn: '首付', cat: 'document' },
  { en: 'Installment', my: 'အရစ်ကျ', cn: '分期付款', cat: 'document' },
  { en: 'Loan', my: 'ချေးငွေ', cn: '贷款', cat: 'document' },
  { en: 'Broker', my: 'ပွဲစား', cn: '中介', cat: 'document' },
  { en: 'Negotiable', my: 'ညှိနှိုင်းလို့ရ', cn: '可议价', cat: 'document' },
  { en: 'Deposit', my: 'အပ်ငွေ', cn: '押金', cat: 'document' },
  { en: 'Cash', my: 'ငွေသား', cn: '现金', cat: 'document' }
];
