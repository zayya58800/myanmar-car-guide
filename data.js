// ===== Car Models Data (Trilingual) - Updated May 2026 =====
const carModels = [
  // 1300cc家用轿车 category
  {
    nameEn: '1300cc Sedan/Hatch (Vios/Fit/Vitz/Swift)',
    nameMy: '1300cc ကားများ (Vios/Fit/Vitz/Swift)',
    nameCn: '1300cc家用轿车 (Vios/威驰/Fit/飞度/Vitz/威姿/Swift/雨燕)',
    price: '60,000,000 - 75,000,000',
    priceUsd: '$15,000 - $18,750',
    year: '2010-2018',
    type: 'hatchback',
    image: '🚗',
    desc: '1300cc segment benchmark. The 50-60M range is gone — now 60-75M is the new normal.'
  },
  {
    nameEn: 'Toyota Vitz',
    nameMy: 'တိုယိုတာ ဗစ်ဇ်',
    nameCn: '丰田威姿',
    price: '35,000,000 - 55,000,000',
    priceUsd: '$8,750 - $13,750',
    year: '2010-2018',
    type: 'hatchback',
    image: '🚗',
    desc: '1000cc daily driver favorite. Most affordable entry-level Japanese car.'
  },
  {
    nameEn: 'Honda Fit / Jazz',
    nameMy: 'ဟွန်ဒါ ဖစ် / ဂျက်ဇ်',
    nameCn: '本田飞度',
    price: '55,000,000 - 75,000,000',
    priceUsd: '$13,750 - $18,750',
    year: '2012-2020',
    type: 'hatchback',
    image: '🚙',
    desc: '1300cc hard currency. Extremely value-retaining, a market icon.'
  },
  {
    nameEn: 'Suzuki Swift',
    nameMy: 'ဆူဇူကီး ဆွစ်ဖ်',
    nameCn: '铃木雨燕',
    price: '35,000,000 - 50,000,000',
    priceUsd: '$8,750 - $12,500',
    year: '2012-2020',
    type: 'hatchback',
    image: '🚗',
    desc: 'Stylish hatchback, first choice for young drivers.'
  },
  // Micro trucks / vans
  {
    nameEn: 'Mini Truck / Van (Hijet/Carry)',
    nameMy: 'ထရပ်ကားသေး / ဗန်ကား (Hijet/Carry)',
    nameCn: '小货车/微卡 (Hijet/海狮/Carry/卡里)',
    price: '45,000,000 - 60,000,000',
    priceUsd: '$11,250 - $15,000',
    year: '2008-2019',
    type: 'truck',
    image: '🛻',
    desc: 'Average condition from 45M, good condition 50M+. Prices tripled in 3 years.'
  },
  {
    nameEn: '660cc Mini Truck (Old)',
    nameMy: '660cc ထရပ်ကားသေး (အဟောင်း)',
    nameCn: '660cc微卡（老款）',
    price: '18,000,000 - 25,000,000',
    priceUsd: '$4,500 - $6,250',
    year: '2004-2010',
    type: 'truck',
    image: '🛻',
    desc: 'Doubled in 3 years. Post-2014 high-spec models are even more expensive.'
  },
  {
    nameEn: 'Suzuki Carry',
    nameMy: 'ဆူဇူကီး ကယ်ရီ',
    nameCn: '铃木卡里',
    price: '45,000,000 - 60,000,000',
    priceUsd: '$11,250 - $15,000',
    year: '2008-2019',
    type: 'truck',
    image: '🛻',
    desc: 'Work truck for business. Cheap parts, durable.'
  },
  {
    nameEn: 'Toyota Hilux',
    nameMy: 'တိုယိုတာ ဟိုင်လပ်',
    nameCn: '丰田海拉克斯',
    price: '50,000,000 - 90,000,000',
    priceUsd: '$12,500 - $22,500',
    year: '2010-2023',
    type: 'pickup',
    image: '🛻',
    desc: 'Old model from 50M, new Revo can reach 90M+. Legendary durability.'
  },
  {
    nameEn: 'Toyota Crown',
    nameMy: 'တိုယိုတာ ခရောင်း',
    nameCn: '丰田皇冠',
    price: '60,000,000 - 120,000,000',
    priceUsd: '$15,000 - $30,000',
    year: '2010-2020',
    type: 'sedan',
    image: '🚘',
    desc: 'Premium business sedan. Early models from 60M. A Myanmar status car.'
  },
  {
    nameEn: 'Toyota Alphard',
    nameMy: 'တိုယိုတာ အယ်လ်ဖတ်',
    nameCn: '丰田埃尔法',
    price: '80,000,000 - 200,000,000',
    priceUsd: '$20,000 - $50,000',
    year: '2010-2020',
    type: 'mpv',
    image: '🚐',
    desc: 'The ultimate status symbol. Top-tier luxury MPV.'
  },
  {
    nameEn: 'Toyota Wish',
    nameMy: 'တိုယိုတာ ဝစ်ရှ်',
    nameCn: '丰田逸致',
    price: '45,000,000 - 65,000,000',
    priceUsd: '$11,250 - $16,250',
    year: '2010-2017',
    type: 'mpv',
    image: '🚐',
    desc: 'Practical 7-seat MPV for families.'
  }
];

// ===== Price Data - Updated May 2026 =====
const priceData = [
  // ════════════════════════════════════════════════════════
  // 一、日本右舵车（JDM）— 市场绝对主力，价格大涨
  // ════════════════════════════════════════════════════════
  // 1300cc家用轿车
  { model: '1300cc Sedan (Vios/Fit/Vitz/Swift)', year: '2010-2018', priceMmk: '60-75 M', priceUsd: '$15K - $18.8K', tag: '🔥' },
  { model: 'Toyota Vitz', year: '2010-2018', priceMmk: '35-55 M', priceUsd: '$8.8K - $13.8K', tag: '🔥' },
  { model: 'Honda Fit / Jazz', year: '2012-2020', priceMmk: '55-75 M', priceUsd: '$13.8K - $18.8K', tag: '🔥' },
  { model: 'Suzuki Swift', year: '2012-2020', priceMmk: '35-50 M', priceUsd: '$8.8K - $12.5K', tag: '🔥' },
  // 小货车
  { model: 'Mini Truck (Hijet/Carry)', year: '2008-2019', priceMmk: '45-60 M', priceUsd: '$11.3K - $15K', tag: '🔥' },
  { model: '660cc Mini Truck (Old)', year: '2004-2010', priceMmk: '18-25 M', priceUsd: '$4.5K - $6.3K', tag: '🔥' },
  // 皮卡/轿车/MPV
  { model: 'Toyota Hilux', year: '2010-2023', priceMmk: '50-90 M', priceUsd: '$12.5K - $22.5K', tag: '🔥' },
  { model: 'Toyota Crown', year: '2010-2020', priceMmk: '60-120 M', priceUsd: '$15K - $30K', tag: '🔥' },
  { model: 'Toyota Alphard', year: '2010-2020', priceMmk: '80-200 M', priceUsd: '$20K - $50K', tag: '🔥' },
  { model: 'Toyota Wish', year: '2010-2017', priceMmk: '45-65 M', priceUsd: '$11.3K - $16.3K', tag: '🔥' },
  
  // ════════════════════════════════════════════════════════
  // 二、电动车（EV）— 需求旺盛，价格普涨
  // ════════════════════════════════════════════════════════
  { model: 'Entry EV (Wuling Mini EV etc.)', year: '2022-2024', priceMmk: '80-120 M', priceUsd: '$20K - $30K', tag: '⚡' },
  { model: 'Mid-Range EV (BYD Dolphin/Atto 3/Neta V)', year: '2023-2025', priceMmk: '150-250 M', priceUsd: '$37.5K - $62.5K', tag: '⚡' },
  { model: 'Premium EV (BYD Seal/Voyah FREE)', year: '2024', priceMmk: '300-350 M', priceUsd: '$75K - $87.5K', tag: '⚡' },
  
  // ════════════════════════════════════════════════════════
  // 三、韩国车（现代/起亚）— 非主流，价格偏低
  // ════════════════════════════════════════════════════════
  { model: 'Hyundai Elantra', year: '2012-2017', priceMmk: '25-35 M', priceUsd: '$6.3K - $8.8K', tag: '📉' },
  { model: 'Hyundai Accent', year: '2012-2017', priceMmk: '20-30 M', priceUsd: '$5K - $7.5K', tag: '📉' },
  { model: 'Kia Forte', year: '2012-2017', priceMmk: '22-32 M', priceUsd: '$5.5K - $8K', tag: '📉' },
  { model: 'Kia K3', year: '2014-2018', priceMmk: '25-38 M', priceUsd: '$6.3K - $9.5K', tag: '📉' },
  { model: 'Hyundai Santa Fe', year: '2010-2015', priceMmk: '30-50 M', priceUsd: '$7.5K - $12.5K', tag: '📉' },
  { model: 'Kia Sorento', year: '2010-2015', priceMmk: '30-50 M', priceUsd: '$7.5K - $12.5K', tag: '📉' },
];

// ===== Glossary Data (Trilingual) =====
const glossaryTerms = [
  // Engine terms
  { my: 'အင်ဂျင်', cn: '发动机', en: 'Engine', cat: 'engine' },
  { my: 'ဂီယာ', cn: '变速箱', en: 'Transmission / Gearbox', cat: 'engine' },
  { my: 'အော်တိုဂီယာ', cn: '自动变速箱', en: 'Automatic Transmission', cat: 'engine' },
  { my: 'မန်နူယယ်ဂီယာ', cn: '手动变速箱', en: 'Manual Transmission', cat: 'engine' },
  { my: 'ဆီ', cn: '机油', en: 'Engine Oil', cat: 'engine' },
  { my: 'ဓာတ်ဆီ', cn: '汽油', en: 'Gasoline / Petrol', cat: 'engine' },
  { my: 'ဒီဇယ်', cn: '柴油', en: 'Diesel', cat: 'engine' },
  { my: 'ဘက်ထရီ', cn: '电瓶', en: 'Battery', cat: 'engine' },
  { my: 'ဓာတ်အားပေးစက်', cn: '发电机', en: 'Alternator', cat: 'engine' },
  { my: 'စတာတာ', cn: '启动马达', en: 'Starter Motor', cat: 'engine' },
  { my: 'အအေးပေးစနစ်', cn: '冷却系统', en: 'Cooling System', cat: 'engine' },
  { my: 'ရေတိုင်ကီ', cn: '水箱', en: 'Radiator', cat: 'engine' },
  { my: 'အင်ဂျင်ဆီဇကာ', cn: '机油滤清器', en: 'Oil Filter', cat: 'engine' },
  { my: 'လေစစ်', cn: '空气滤清器', en: 'Air Filter', cat: 'engine' },
  { my: 'တာဘို', cn: '涡轮增压', en: 'Turbocharger', cat: 'engine' },
  
  // Body parts
  { my: 'ကားကိုယ်ထည်', cn: '车身', en: 'Car Body / Chassis', cat: 'body' },
  { my: 'ဘမ်ပါ', cn: '保险杠', en: 'Bumper', cat: 'body' },
  { my: 'ရှေ့မီး', cn: '前大灯', en: 'Headlight', cat: 'body' },
  { my: 'နောက်မီး', cn: '尾灯', en: 'Taillight', cat: 'body' },
  { my: 'မှန်', cn: '挡风玻璃', en: 'Windshield', cat: 'body' },
  { my: 'ဘေးမှန်', cn: '侧窗玻璃', en: 'Side Window', cat: 'body' },
  { my: 'ခြံမှန်', cn: '后视镜', en: 'Side Mirror', cat: 'body' },
  { my: 'တာယာ', cn: '轮胎', en: 'Tire', cat: 'body' },
  { my: 'ဘီး', cn: '轮毂', en: 'Wheel / Rim', cat: 'body' },
  { my: 'အလှဘီး', cn: '铝合金轮毂', en: 'Alloy Wheel', cat: 'body' },
  { my: 'အမိုး', cn: '车顶', en: 'Roof', cat: 'body' },
  { my: 'ထိုင်ခုံ', cn: '座椅', en: 'Seat', cat: 'body' },
  { my: 'တံခါး', cn: '车门', en: 'Door', cat: 'body' },
  { my: 'အင်ဂျင်ခန်းအဖုံး', cn: '引擎盖', en: 'Hood / Bonnet', cat: 'body' },
  { my: 'ကားလှည်း', cn: '后备箱', en: 'Trunk / Boot', cat: 'body' },

  // Interior
  { my: 'စတီယာရင်', cn: '方向盘', en: 'Steering Wheel', cat: 'interior' },
  { my: 'ဒက်ရှ်ဘုတ်', cn: '仪表盘', en: 'Dashboard', cat: 'interior' },
  { my: 'အမြန်နှုန်းပြကိရိယာ', cn: '速度表', en: 'Speedometer', cat: 'interior' },
  { my: 'လေအေးပေးစက်', cn: '空调', en: 'Air Conditioner (AC)', cat: 'interior' },
  { my: 'စပီကာ', cn: '音响', en: 'Speaker', cat: 'interior' },
  { my: 'CD ပလေယာ', cn: 'CD播放器', en: 'CD Player', cat: 'interior' },
  { my: 'မျက်နှာပြင်ဖန်သားပြင်', cn: '显示屏', en: 'Display Screen', cat: 'interior' },
  { my: 'GPS လမ်းညွှန်', cn: '导航', en: 'GPS Navigation', cat: 'interior' },
  { my: 'ကင်မရာ', cn: '摄像头', en: 'Camera', cat: 'interior' },
  { my: 'ရာဘာခင်း', cn: '脚垫', en: 'Floor Mat', cat: 'interior' },
  { my: 'အတွင်းခန်းသန့်ရှင်းရေး', cn: '内饰清洁', en: 'Interior Cleaning', cat: 'interior' },
  { my: 'လေကာကိရိယာ', cn: '行车记录仪', en: 'Dashcam', cat: 'interior' },
  { my: 'ပါကာဆင်ဆာ', cn: '倒车雷达', en: 'Parking Sensor', cat: 'interior' },

  // Documents
  { my: 'ကားမှတ်ပုံတင်', cn: '车辆登记证', en: 'Registration Certificate', cat: 'document' },
  { my: 'ယာဉ်မောင်းလိုင်စင်', cn: '驾驶证', en: "Driver's License", cat: 'document' },
  { my: 'အာမခံ', cn: '保险', en: 'Insurance', cat: 'document' },
  { my: 'အခွန်', cn: '税', en: 'Tax', cat: 'document' },
  { my: 'ပိုင်ဆိုင်မှုလွှဲပြောင်းခြင်း', cn: '过户', en: 'Ownership Transfer', cat: 'document' },
  { my: 'ကားစစ်ဆေးရေးလက်မှတ်', cn: '车检证', en: 'Vehicle Inspection Certificate', cat: 'document' },
  { my: 'အကြွေးကျန်ရှိမှု', cn: '贷款余额', en: 'Outstanding Loan', cat: 'document' },
  { my: 'အရောင်းစာချုပ်', cn: '销售合同', en: 'Sales Contract', cat: 'document' },
  { my: 'နှစ်ချုပ်', cn: '年检', en: 'Annual Inspection', cat: 'document' },
  { my: 'တင်သွင်းခွင့်', cn: '进口许可证', en: 'Import Permit', cat: 'document' },
  { my: 'နောက်ဆုံးစစ်ဆေးခြင်း', cn: '过户前检查', en: 'Pre-transfer Inspection', cat: 'document' },
];
