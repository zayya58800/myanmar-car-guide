// ===== Car Models Data (Trilingual) =====
const carModels = [
  {
    nameEn: 'Toyota Vitz',
    nameMy: 'တိုယိုတာ ဗစ်ဇ်',
    nameCn: '丰田威姿',
    price: '22,000,000 - 35,000,000',
    priceUsd: '$10,500 - $16,700',
    year: '2010-2018',
    type: 'hatchback',
    image: '🚗',
    desc: 'Most popular used car in Myanmar. Fuel efficient, easy maintenance.'
  },
  {
    nameEn: 'Honda Fit / Jazz',
    nameMy: 'ဟွန်ဒါ ဖစ် / ဂျက်ဇ်',
    nameCn: '本田飞度',
    price: '25,000,000 - 40,000,000',
    priceUsd: '$11,900 - $19,000',
    year: '2012-2020',
    type: 'hatchback',
    image: '🚙',
    desc: 'Spacious interior, reliable engine, great resale value.'
  },
  {
    nameEn: 'Suzuki Carry',
    nameMy: 'ဆူဇူကီး ကယ်ရီ',
    nameCn: '铃木卡里',
    price: '15,000,000 - 25,000,000',
    priceUsd: '$7,100 - $11,900',
    year: '2008-2019',
    type: 'truck',
    image: '🛻',
    desc: 'Workhorse pickup for business. Durable and cheap parts.'
  },
  {
    nameEn: 'Toyota Hilux',
    nameMy: 'တိုယိုတာ ဟိုင်လပ်',
    nameCn: '丰田海拉克斯',
    price: '40,000,000 - 80,000,000',
    priceUsd: '$19,000 - $38,100',
    year: '2010-2023',
    type: 'pickup',
    image: '🛻',
    desc: 'The legendary pickup. Unmatched durability and off-road capability.'
  },
  {
    nameEn: 'Toyota Crown',
    nameMy: 'တိုယိုတာ ခရောင်း',
    nameCn: '丰田皇冠',
    price: '50,000,000 - 90,000,000',
    priceUsd: '$23,800 - $42,900',
    year: '2010-2020',
    type: 'sedan',
    image: '🚘',
    desc: 'Premium sedan, very popular with executives and businessmen in Myanmar.'
  },
  {
    nameEn: 'Nissan Sunny',
    nameMy: 'နစ္စန် ဆန်နီ',
    nameCn: '日产阳光',
    price: '15,000,000 - 25,000,000',
    priceUsd: '$7,100 - $11,900',
    year: '2010-2018',
    type: 'sedan',
    image: '🚗',
    desc: 'Affordable sedan, good fuel economy, easy to maintain.'
  },
  {
    nameEn: 'Mitsubishi Pajero',
    nameMy: 'မစ်ဆူဘီရှီ ပါဂျေရို',
    nameCn: '三菱帕杰罗',
    price: '35,000,000 - 65,000,000',
    priceUsd: '$16,700 - $31,000',
    year: '2008-2018',
    type: 'suv',
    image: '🚙',
    desc: 'Powerful SUV, great for rough terrains common in Myanmar.'
  },
  {
    nameEn: 'Toyota Wish',
    nameMy: 'တိုယိုတာ ဝစ်ရှ်',
    nameCn: '丰田逸致',
    price: '28,000,000 - 42,000,000',
    priceUsd: '$13,300 - $20,000',
    year: '2010-2017',
    type: 'mpv',
    image: '🚐',
    desc: 'Family MPV with 7 seats. Practical for large families.'
  },
  {
    nameEn: 'Honda City',
    nameMy: 'ဟွန်ဒါ စီးတီး',
    nameCn: '本田城市',
    price: '20,000,000 - 35,000,000',
    priceUsd: '$9,500 - $16,700',
    year: '2012-2020',
    type: 'sedan',
    image: '🚗',
    desc: 'Compact sedan, stylish design, popular with young professionals.'
  },
  {
    nameEn: 'Suzuki Swift',
    nameMy: 'ဆူဇူကီး ဆွစ်ဖ်',
    nameCn: '铃木雨燕',
    price: '16,000,000 - 28,000,000',
    priceUsd: '$7,600 - $13,300',
    year: '2012-2020',
    type: 'hatchback',
    image: '🚗',
    desc: 'Small, fun hatchback. Great for city driving and parking.'
  },
  {
    nameEn: 'Toyota Alphard',
    nameMy: 'တိုယိုတာ အယ်လ်ဖတ်',
    nameCn: '丰田埃尔法',
    price: '80,000,000 - 150,000,000',
    priceUsd: '$38,100 - $71,400',
    year: '2010-2020',
    type: 'mpv',
    image: '🚐',
    desc: 'Luxury MPV. The ultimate status symbol in Myanmar.'
  },
  {
    nameEn: 'Mazda 3',
    nameMy: 'မာဇဒါ ၃',
    nameCn: '马自达3',
    price: '22,000,000 - 38,000,000',
    priceUsd: '$10,500 - $18,100',
    year: '2012-2020',
    type: 'sedan',
    image: '🚗',
    desc: 'Sporty sedan with great handling. Stylish interior.'
  }
];

// ===== Price Data =====
const priceData = [
  { model: 'Toyota Vitz', year: '2013', priceMmk: '22-28 M', priceUsd: '$10.5K - $13.3K' },
  { model: 'Toyota Vitz', year: '2016', priceMmk: '28-35 M', priceUsd: '$13.3K - $16.7K' },
  { model: 'Honda Fit', year: '2014', priceMmk: '25-32 M', priceUsd: '$11.9K - $15.2K' },
  { model: 'Honda Fit', year: '2018', priceMmk: '33-40 M', priceUsd: '$15.7K - $19.0K' },
  { model: 'Suzuki Carry', year: '2015', priceMmk: '15-20 M', priceUsd: '$7.1K - $9.5K' },
  { model: 'Toyota Hilux', year: '2015', priceMmk: '40-55 M', priceUsd: '$19.0K - $26.2K' },
  { model: 'Toyota Hilux', year: '2020', priceMmk: '60-80 M', priceUsd: '$28.6K - $38.1K' },
  { model: 'Toyota Crown', year: '2013', priceMmk: '50-65 M', priceUsd: '$23.8K - $31.0K' },
  { model: 'Toyota Crown', year: '2018', priceMmk: '70-90 M', priceUsd: '$33.3K - $42.9K' },
  { model: 'Nissan Sunny', year: '2015', priceMmk: '15-22 M', priceUsd: '$7.1K - $10.5K' },
  { model: 'Mitsubishi Pajero', year: '2012', priceMmk: '35-48 M', priceUsd: '$16.7K - $22.9K' },
  { model: 'Suzuki Swift', year: '2016', priceMmk: '18-25 M', priceUsd: '$8.6K - $11.9K' },
  { model: 'Toyota Alphard', year: '2015', priceMmk: '80-110 M', priceUsd: '$38.1K - $52.4K' },
  { model: 'Toyota Wish', year: '2014', priceMmk: '28-36 M', priceUsd: '$13.3K - $17.1K' },
  { model: 'Mazda 3', year: '2017', priceMmk: '25-35 M', priceUsd: '$11.9K - $16.7K' },
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
