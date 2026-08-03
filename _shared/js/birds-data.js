/* ============================================
   飞鸟图鉴数据 - 11 种核心鸟类
   ============================================ */

// 鸟类 SVG 插图生成器
function birdSVG(type, colors) {
  const bg = colors.bg || '#5D8C83';
  const body = colors.body || '#2F5D50';
  const accent = colors.accent || '#D99A3D';
  const light = colors.light || '#F5F3EA';

  const silhouettes = {
    small: `<path d="M50,55 Q35,48 30,55 Q25,62 35,68 Q45,72 55,68 Q65,65 60,58 Q55,52 50,55Z" fill="${body}"/>
            <circle cx="42" cy="56" r="3" fill="${body}"/>
            <path d="M38,54 L32,53 L38,55Z" fill="${accent}"/>
            <path d="M55,60 Q65,55 72,58 L68,62 Q60,63 55,60Z" fill="${body}"/>
            <path d="M35,68 Q33,75 36,78 L38,75Z" fill="${accent}"/>
            <path d="M45,68 Q43,75 46,78 L48,75Z" fill="${accent}"/>`,
    water: `<ellipse cx="50" cy="55" rx="22" ry="12" fill="${body}"/>
            <circle cx="32" cy="50" r="8" fill="${body}"/>
            <path d="M25,50 L18,49 L25,52Z" fill="${accent}"/>
            <circle cx="30" cy="48" r="1.5" fill="${light}"/>
            <path d="M65,50 Q75,45 80,52 L72,56 Q66,54 65,50Z" fill="${body}"/>
            <path d="M45,62 L42,72 L48,72Z" fill="${accent}"/>
            <path d="M52,62 L49,72 L55,72Z" fill="${accent}"/>
            <path d="M30,58 Q35,62 30,65" stroke="${body}" stroke-width="2" fill="none"/>`,
    raptor: `<path d="M50,50 Q38,45 30,50 Q25,55 30,60 Q40,65 50,62 Q60,60 65,55 Q62,48 50,50Z" fill="${body}"/>
             <circle cx="38" cy="52" r="5" fill="${body}"/>
             <path d="M33,52 L26,50 L33,54Z" fill="${accent}"/>
             <circle cx="37" cy="51" r="1.2" fill="${light}"/>
             <path d="M55,52 Q70,42 82,48 Q75,52 65,54Z" fill="${body}"/>
             <path d="M58,48 Q72,38 80,44" stroke="${body}" stroke-width="1.5" fill="none"/>
             <path d="M45,62 L42,74 L48,74Z" fill="${accent}"/>
             <path d="M52,62 L49,74 L55,74Z" fill="${accent}"/>`,
    crane: `<ellipse cx="50" cy="55" rx="14" ry="18" fill="${body}"/>
            <circle cx="50" cy="35" r="7" fill="${body}"/>
            <path d="M50,28 L50,20 L52,20 L52,28Z" fill="${accent}"/>
            <circle cx="48" cy="34" r="1.2" fill="${light}"/>
            <path d="M50,42 L46,56 L54,56Z" fill="${accent}"/>
            <path d="M38,55 Q25,50 18,55 Q22,60 35,60Z" fill="${body}"/>
            <path d="M62,55 Q75,50 82,55 Q78,60 65,60Z" fill="${body}"/>
            <path d="M48,72 L45,85 L50,85Z" fill="${accent}"/>
            <path d="M52,72 L50,85 L55,85Z" fill="${accent}"/>`,
    duck: `<ellipse cx="52" cy="52" rx="18" ry="12" fill="${body}"/>
           <circle cx="35" cy="48" r="7" fill="${body}"/>
           <path d="M28,48 L20,47 L28,50Z" fill="${accent}"/>
           <circle cx="33" cy="46" r="1.2" fill="${light}"/>
           <path d="M45,40 Q48,33 52,36 Q50,40 45,40Z" fill="${body}"/>
           <path d="M65,50 Q75,46 80,52 L72,56 Q66,54 65,50Z" fill="${body}"/>
           <path d="M46,62 L43,73 L49,73Z" fill="${accent}"/>
           <path d="M54,62 L51,73 L57,73Z" fill="${accent}"/>`,
    ibis: `<ellipse cx="52" cy="52" rx="14" ry="16" fill="${body}"/>
           <path d="M45,38 Q42,30 40,25 Q44,28 48,35Z" fill="${body}"/>
           <path d="M40,25 Q33,22 28,26 Q35,25 40,28Z" fill="${accent}"/>
           <circle cx="42" cy="32" r="1.2" fill="${light}"/>
           <path d="M38,55 Q25,52 20,58 Q25,60 35,58Z" fill="${body}"/>
           <path d="M65,55 Q75,52 80,58 Q75,60 68,58Z" fill="${body}"/>
           <path d="M48,68 L46,80 L51,80Z" fill="${accent}"/>
           <path d="M54,68 L52,80 L57,80Z" fill="${accent}"/>`
  };

  return `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
    <defs>
      <linearGradient id="bg-${type}" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="${bg}" stop-opacity="0.8"/>
        <stop offset="100%" stop-color="${body}" stop-opacity="0.9"/>
      </linearGradient>
    </defs>
    <rect width="100" height="100" fill="url(#bg-${type})"/>
    <circle cx="80" cy="20" r="15" fill="${light}" opacity="0.08"/>
    <circle cx="15" cy="80" r="20" fill="${accent}" opacity="0.06"/>
    <g transform="translate(0, 5)">
      ${silhouettes[type] || silhouettes.small}
    </g>
  </svg>`;
}

// 鸟类数据
const BIRDS_DATA = [
  {
    id: "baitoubei",
    name: "白头鹎",
    pinyin: "bái tóu bēi",
    englishName: "Light-vented Bulbul",
    scientificName: "Pycnonotus sinensis",
    type: "small",
    colors: { bg: "#8BAC92", body: "#3A5F4A", accent: "#F0C674", light: "#FFFFFF" },
    habitat: ["城市", "林地", "公园"],
    protectionLevel: 3,
    protectionLabel: "三有保护",
    classification: { order: "雀形目", family: "鹎科" },
    bodySize: "约 18-19 cm",
    weight: "约 30-40 g",
    lifespan: "约 8-10 年",
    habitatEnv: "城市公园、林地、居民区周边灌丛",
    distribution: "中国东部、南部，以及东南亚部分地区",
    migration: "留鸟（全年可见）",
    diet: "果实、昆虫、花蜜",
    feedingMethod: "在树冠层和灌丛中觅食，善跳跃",
    appearance: "头顶白色，枕部白色明显，背部灰绿褐色，腹部灰白色",
    call: "清脆多变的「chi-chi-chi」声，鸣声婉转",
    behavior: "喜群居，活泼好动，常在枝头跳跃鸣叫",
    threats: ["城市扩张导致栖息地变化", "窗户碰撞", "人为干扰"],
    protection: ["列入国家「三有」保护动物名录", "城市绿地保护", "公众科普教育"],
    protectedAreas: "城市公园、社区绿地",
    monitoring: "公众观察记录、声音监测",
    aiApplications: ["图像识别", "声音识别", "智能监测"],
    description: "白头鹎是中国南方城市中最常见的鸟类之一，因其头顶白色羽毛而得名「白头」。它们适应力强，常在城市公园和居民区活动，是城市生态的重要指示物种。"
  },
  {
    id: "zhujingbanjiu",
    name: "珠颈斑鸠",
    pinyin: "zhū jǐng bān jiū",
    englishName: "Spotted Dove",
    scientificName: "Spilopelia chinensis",
    type: "small",
    colors: { bg: "#C4A882", body: "#6B5840", accent: "#D99A3D", light: "#F5F3EA" },
    habitat: ["城市", "农田", "林地边缘"],
    protectionLevel: 3,
    protectionLabel: "三有保护",
    classification: { order: "鸽形目", family: "鸠鸽科" },
    bodySize: "约 30-32 cm",
    weight: "约 120-180 g",
    lifespan: "约 10-12 年",
    habitatEnv: "城市公园、农田、村落周边、林地边缘",
    distribution: "中国南部、东部，南亚至东南亚",
    migration: "留鸟（全年可见）",
    diet: "种子、果实、小型昆虫",
    feedingMethod: "在地面上行走觅食，啄食种子",
    appearance: "后颈有黑白珠状斑纹（最具辨识度），体羽灰褐色，尾羽较长",
    call: "低沉的「咕-咕-咕」声，反复鸣叫",
    behavior: "常成对或小群活动，在地上行走自如，飞行时尾羽展开呈扇形",
    threats: ["栖息地减少", "农药使用影响食物来源", "非法捕猎"],
    protection: ["列入国家「三有」保护动物名录", "农田生态保护", "减少农药使用宣传"],
    protectedAreas: "城市公园、农田保护区",
    monitoring: "声音监测、公众观察",
    aiApplications: ["图像识别", "声音识别"],
    description: "珠颈斑鸠因后颈处独特的黑白珠状斑纹而得名，是中国城市和乡村常见的鸠鸽类鸟类。它们的叫声低沉而有节奏，是许多人熟悉的自然之声。"
  },
  {
    id: "xiaopiti",
    name: "小䴙䴘",
    pinyin: "xiǎo pì tī",
    englishName: "Little Grebe",
    scientificName: "Tachybaptus ruficollis",
    type: "water",
    colors: { bg: "#5D8C83", body: "#3A4A45", accent: "#D99A3D", light: "#F5F3EA" },
    habitat: ["湿地", "湖泊", "池塘"],
    protectionLevel: 3,
    protectionLabel: "三有保护",
    classification: { order: "䴙䴘目", family: "䴙䴘科" },
    bodySize: "约 25-29 cm",
    weight: "约 150-250 g",
    lifespan: "约 5-10 年",
    habitatEnv: "湖泊、池塘、缓流河流、湿地",
    distribution: "中国大部分地区均有分布",
    migration: "部分种群迁徙，北方种群冬季南迁",
    diet: "小鱼、水生昆虫、虾、蛙",
    feedingMethod: "潜水觅食，可在水下灵活游动",
    appearance: "体型小而圆润，繁殖期脸颊栗色，非繁殖期较暗淡，尾羽极短",
    call: "高亢的「ke-ke-ke」声，繁殖期尤为活跃",
    behavior: "善潜水，遇危险时潜入水中而非飞行逃避，常在水面浮动",
    threats: ["水体污染", "湿地面积减少", "非法捕捞影响食物链"],
    protection: ["列入国家「三有」保护动物名录", "湿地保护与修复", "水质监测"],
    protectedAreas: "湿地公园、城市水系",
    monitoring: "湿地监测、图像识别",
    aiApplications: ["图像识别", "智能监测"],
    description: "小䴙䴘是湿地中最常见的水鸟之一，体型小巧圆润，善于潜水。它们是湿地生态系统健康的指示物种，其种群数量直接反映水质和湿地环境状况。"
  },
  {
    id: "heilianpilu",
    name: "黑脸琵鹭",
    pinyin: "hēi liǎn pí lù",
    englishName: "Black-faced Spoonbill",
    scientificName: "Platalea minor",
    type: "ibis",
    colors: { bg: "#4A7C6F", body: "#2A4A40", accent: "#F0C674", light: "#FFFFFF" },
    habitat: ["湿地", "滩涂", "河口"],
    protectionLevel: 1,
    protectionLabel: "国家一级",
    classification: { order: "鹈形目", family: "鹮科" },
    bodySize: "约 74-85 cm",
    weight: "约 1.5-2 kg",
    lifespan: "约 15-20 年",
    habitatEnv: "沿海湿地、滩涂、河口、红树林",
    distribution: "东亚沿海地区，繁殖于朝鲜半岛，越冬于中国南方、台湾、越南等",
    migration: "候鸟（长距离迁徙）",
    diet: "小鱼、虾、蟹、水生昆虫",
    feedingMethod: "用匙形嘴在水中左右扫动觅食",
    appearance: "面部裸露呈黑色，嘴呈匙形，全身白色，繁殖期头部有黄色冠羽",
    call: "较少鸣叫，繁殖期发出低沉的咕咕声",
    behavior: "成群活动，觅食时群体协作，用特有的扫食方式在浅水中觅食",
    threats: ["沿海开发导致栖息地丧失", "环境污染", "人为干扰", "气候变化影响潮间带"],
    protection: ["国家一级保护动物", "东亚-澳大利西亚迁徙路线保护", "关键湿地保护"],
    protectedAreas: "盐城湿地、深圳福田红树林、台湾曾文溪口",
    monitoring: "卫星追踪、AI 图像识别、种群调查",
    aiApplications: ["图像识别", "智能监测", "种群分析"],
    description: "黑脸琵鹭是全球濒危水鸟之一，因其面部黑色、嘴形如琵琶而得名。全球种群仅约 6000 只，是东亚-澳大利西亚迁徙路线上最重要的保护物种之一。"
  },
  {
    id: "zhuhuan",
    name: "朱鹮",
    pinyin: "zhū huán",
    englishName: "Crested Ibis",
    scientificName: "Nipponia nippon",
    type: "ibis",
    colors: { bg: "#E8A0A0", body: "#8B5A5A", accent: "#D99A3D", light: "#FFF5E6" },
    habitat: ["湿地", "稻田", "山区溪流"],
    protectionLevel: 1,
    protectionLabel: "国家一级",
    classification: { order: "鹈形目", family: "鹮科" },
    bodySize: "约 55-79 cm",
    weight: "约 1.4-1.9 kg",
    lifespan: "约 20-30 年",
    habitatEnv: "山区溪流、稻田、水库周边湿地",
    distribution: "陕西洋县为主要栖息地，已扩展至秦岭周边地区",
    migration: "留鸟（不迁徙）",
    diet: "泥鳅、小鱼、虾、蛙、昆虫",
    feedingMethod: "在浅水中缓步行走，探嘴入泥中触觉觅食",
    appearance: "全身粉白色，繁殖期灰粉色加浓，面部红色，有蓬松冠羽",
    call: "低沉的「ga-ga」声，繁殖期有特殊的巢穴叫声",
    behavior: "白天在湿地觅食，傍晚返回巢树，营巢于高大乔木",
    threats: ["栖息地丧失（稻田减少）", "农药污染影响食物", "种群数量少导致近亲繁殖"],
    protection: ["国家一级保护动物", "朱鹮国家级自然保护区", "人工繁育与野化放归", "生态农业推广"],
    protectedAreas: "陕西洋县朱鹮保护区",
    monitoring: "个体追踪、AI 图像识别、种群遗传分析",
    aiApplications: ["图像识别", "智能监测", "种群分析"],
    description: "朱鹮曾一度被认为野外灭绝，1981 年在陕西洋县重新发现 7 只个体，经过 40 余年的保护，种群已恢复至数千只。这是中国乃至全球最成功的濒危物种保护案例之一。"
  },
  {
    id: "dongfangbaiguan",
    name: "东方白鹳",
    pinyin: "dōng fāng bái guàn",
    englishName: "Oriental White Stork",
    scientificName: "Ciconia boyciana",
    type: "water",
    colors: { bg: "#5D8C83", body: "#2A3A35", accent: "#D99A3D", light: "#FFFFFF" },
    habitat: ["湿地", "沼泽", "河口"],
    protectionLevel: 1,
    protectionLabel: "国家一级",
    classification: { order: "鹳形目", family: "鹳科" },
    bodySize: "约 110-128 cm",
    weight: "约 4-5 kg",
    lifespan: "约 20-30 年",
    habitatEnv: "开阔湿地、沼泽、河口、湖泊浅水区",
    distribution: "繁殖于中国东北及俄罗斯远东，越冬于长江中下游",
    migration: "候鸟（长距离迁徙）",
    diet: "鱼、蛙、昆虫、小型爬行动物",
    feedingMethod: "在浅水中缓步行走，用嘴快速啄击捕获猎物",
    appearance: "体型大，黑白配色，嘴黑色粗壮，腿红色，飞行时颈腿伸直",
    call: "成鸟通常不发声，通过上下嘴击打发出「嗒嗒」声交流",
    behavior: "营巢于高大乔木或电线塔，对巢址有很强的忠诚度，年复一年使用同一巢",
    threats: ["湿地面积锐减", "巢树被砍伐", "农药和重金属污染", "迁徙途中非法猎杀"],
    protection: ["国家一级保护动物", "湿地保护与恢复", "人工巢架建设", "迁徙路线国际合作"],
    protectedAreas: "三江平原湿地、鄱阳湖湿地",
    monitoring: "卫星追踪、AI 图像识别、红外相机监测、无人机巡查",
    aiApplications: ["图像识别", "智能监测", "无人机监测"],
    description: "东方白鹳是大型涉禽，全球种群约 7000-9000 只。它们对湿地环境要求极高，是湿地生态系统的旗舰物种。保护东方白鹳就是保护整个湿地生态系统。"
  },
  {
    id: "dandinghe",
    name: "丹顶鹤",
    pinyin: "dān dǐng hè",
    englishName: "Red-crowned Crane",
    scientificName: "Grus japonensis",
    type: "crane",
    colors: { bg: "#8BAC92", body: "#2A3A35", accent: "#C75450", light: "#FFFFFF" },
    habitat: ["湿地", "沼泽", "芦苇荡"],
    protectionLevel: 1,
    protectionLabel: "国家一级",
    classification: { order: "鹤形目", family: "鹤科" },
    bodySize: "约 140-160 cm",
    weight: "约 7-10 kg",
    lifespan: "约 30-40 年",
    habitatEnv: "开阔湿地、沼泽、芦苇荡、河口三角洲",
    distribution: "繁殖于中国东北（扎龙）、俄罗斯远东，越冬于江苏盐城",
    migration: "候鸟（长距离迁徙）",
    diet: "鱼、昆虫、植物根茎、种子、小型两栖动物",
    feedingMethod: "在浅水中漫步觅食，用嘴探入泥中取食",
    appearance: "头顶红色裸皮（丹顶），全身白色，颈和次级飞羽黑色，体态优雅",
    call: "高亢嘹亮的「ge-ge-ge」声，可传至 2-3 公里外",
    behavior: "一夫一妻制，终身配偶，求偶时有优美的舞蹈行为，群体迁徙",
    threats: ["湿地围垦导致栖息地丧失", "气候变化影响繁殖地", "人为干扰", "食物减少"],
    protection: ["国家一级保护动物", "扎龙、盐城等自然保护区", "人工繁育与野化放归", "冬季投食补饲"],
    protectedAreas: "扎龙自然保护区、盐城湿地保护区",
    monitoring: "卫星追踪、AI 声音识别、图像识别、种群调查",
    aiApplications: ["图像识别", "声音识别", "智能监测", "种群分析"],
    description: "丹顶鹤是东亚文化中象征长寿和忠贞的鸟类，全球野生种群约 2800 只。它们的迁徙路线连接中国东北与长江下游，是湿地保护的核心物种。"
  },
  {
    id: "zhonghuaqiushaya",
    name: "中华秋沙鸭",
    pinyin: "zhōng huá qiū shā yā",
    englishName: "Scaly-sided Merganser",
    scientificName: "Mergus squamatus",
    type: "duck",
    colors: { bg: "#4A6B5F", body: "#2A3A45", accent: "#D99A3D", light: "#F5F3EA" },
    habitat: ["山区河流", "溪流", "湖泊"],
    protectionLevel: 1,
    protectionLabel: "国家一级",
    classification: { order: "雁形目", family: "鸭科" },
    bodySize: "约 52-58 cm",
    weight: "约 0.6-1 kg",
    lifespan: "约 10-15 年",
    habitatEnv: "流速较快的山区河流、溪流、清澈湖泊",
    distribution: "繁殖于长白山、小兴安岭，越冬于长江中下游",
    migration: "候鸟（中距离迁徙）",
    diet: "小鱼、水生昆虫、虾、蛙",
    feedingMethod: "潜水追捕鱼类，在水下灵活游动",
    appearance: "雄鸟头具绿色金属光泽冠羽，体侧有鳞状纹，嘴细长红色，雌鸟头棕灰色",
    call: "较少鸣叫，繁殖期雄鸟发出低沉喉音",
    behavior: "营巢于树洞（天然树洞），善于潜水，性情警觉",
    threats: ["河流栖息地退化", "水坝建设阻断迁徙", "水体污染", "非法捕猎"],
    protection: ["国家一级保护动物", "河流生态保护", "人工巢箱计划", "水质保护"],
    protectedAreas: "长白山保护区、鄱阳湖保护区",
    monitoring: "红外相机监测、AI 图像识别、河流调查",
    aiApplications: ["图像识别", "智能监测"],
    description: "中华秋沙鸭是第三纪冰川期残遗物种，被称为「鸟中大熊猫」，全球种群约 2400-4500 只。它们对水质要求极高，是河流生态系统健康的指示物种。"
  },
  {
    id: "baihe",
    name: "白鹤",
    pinyin: "bái hè",
    englishName: "Siberian Crane",
    scientificName: "Leucogeranus leucogeranus",
    type: "crane",
    colors: { bg: "#A0B8A8", body: "#3A4A45", accent: "#C75450", light: "#FFFFFF" },
    habitat: ["湿地", "沼泽", "浅水湖泊"],
    protectionLevel: 1,
    protectionLabel: "国家一级",
    classification: { order: "鹤形目", family: "鹤科" },
    bodySize: "约 130-140 cm",
    weight: "约 5-7 kg",
    lifespan: "约 30-40 年",
    habitatEnv: "浅水湿地、沼泽、开阔湖泊浅水区",
    distribution: "繁殖于俄罗斯西伯利亚，越冬于中国鄱阳湖",
    migration: "候鸟（超长距离迁徙，约 5000 公里）",
    diet: "植物根茎、块茎（尤其水下球茎）、昆虫、小鱼",
    feedingMethod: "在浅水中探嘴入泥，挖掘植物根茎和球茎",
    appearance: "通体白色，面部红色裸皮，嘴暗红色，腿粉红色，飞行时可见黑色初级飞羽",
    call: "高亢清亮的「diu-diu」声，迁徙时集群鸣叫",
    behavior: "家族群活动，亲鸟带幼鸟越冬，对越冬地忠诚度极高",
    threats: ["湿地退化导致食物减少", "气候变化影响繁殖地", "迁徙途中停歇地丧失", "人为干扰"],
    protection: ["国家一级保护动物", "鄱阳湖国家级保护区", "国际迁徙路线保护合作", "水位调控管理"],
    protectedAreas: "鄱阳湖保护区、莫莫格保护区",
    monitoring: "卫星追踪、AI 图像识别、声音识别、种群调查",
    aiApplications: ["图像识别", "声音识别", "智能监测", "种群分析"],
    description: "白鹤是全球极危物种，全球种群约 4000 只，其中 99% 的个体在鄱阳湖越冬。它们的迁徙路线跨越西伯利亚与中国，是国际保护合作的典范。"
  },
  {
    id: "heiguan",
    name: "黑鹳",
    pinyin: "hēi guàn",
    englishName: "Black Stork",
    scientificName: "Ciconia nigra",
    type: "water",
    colors: { bg: "#3A4A45", body: "#1A2A25", accent: "#D99A3D", light: "#F5F3EA" },
    habitat: ["山区河流", "湿地", "水库"],
    protectionLevel: 1,
    protectionLabel: "国家一级",
    classification: { order: "鹳形目", family: "鹳科" },
    bodySize: "约 95-105 cm",
    weight: "约 2.5-3.5 kg",
    lifespan: "约 15-20 年",
    habitatEnv: "山区溪流、河流、湿地、水库周边",
    distribution: "中国大部分地区，繁殖于北方山区，越冬于南方",
    migration: "部分迁徙（北方种群迁徙，南方种群留居）",
    diet: "鱼、蛙、昆虫、小型爬行动物",
    feedingMethod: "在浅水中缓步行走，伺机快速啄击捕获猎物",
    appearance: "体羽黑色具金属光泽，腹部白色，嘴和腿红色，飞行时颈腿伸直",
    call: "通常不鸣叫（成鸟声带退化），幼鸟发出嘶嘶声",
    behavior: "性机警，单独或成对活动，营巢于悬崖峭壁",
    threats: ["河流栖息地退化", "非法采矿破坏巢址", "水体污染", "人为干扰"],
    protection: ["国家一级保护动物", "河流生态保护", "巢址保护", "减少人为干扰"],
    protectedAreas: "太行山保护区、六盘山保护区",
    monitoring: "红外相机监测、AI 图像识别、巢址巡查",
    aiApplications: ["图像识别", "智能监测"],
    description: "黑鹳被称为「鸟中大熊猫」，中国境内种群约 1000 只。它们营巢于悬崖峭壁，觅食于山区溪流，对栖息环境要求苛刻，是河流生态系统的顶级指示物种。"
  },
  {
    id: "jindiao",
    name: "金雕",
    pinyin: "jīn diāo",
    englishName: "Golden Eagle",
    scientificName: "Aquila chrysaetos",
    type: "raptor",
    colors: { bg: "#7A6A4A", body: "#3A2A1A", accent: "#D99A3D", light: "#F5F3EA" },
    habitat: ["山区", "高原", "草原"],
    protectionLevel: 1,
    protectionLabel: "国家一级",
    classification: { order: "鹰形目", family: "鹰科" },
    bodySize: "约 76-102 cm",
    weight: "约 3-6.5 kg",
    lifespan: "约 20-30 年",
    habitatEnv: "高山、高原、开阔草原、丘陵地带",
    distribution: "中国西北、东北、西南山区",
    migration: "部分迁徙（高纬度种群冬季下迁）",
    diet: "野兔、雉类、旱獭、小型哺乳动物",
    feedingMethod: "从高空盘旋发现猎物后俯冲捕杀，或在低空巡猎",
    appearance: "体型大，翼展可达 2.3 米，体羽暗褐色，颈后金棕色，嘴爪强有力",
    call: "尖锐的「kyik-yik-yik」声，但平时很少鸣叫",
    behavior: "独居或成对活动，领域性强，营巢于悬崖，飞行能力强",
    threats: ["栖息地破碎化", "非法猎杀", "中毒（二次中毒）", "风力发电场碰撞"],
    protection: ["国家一级保护动物", "禁止非法猎杀", "栖息地保护", "反毒饵行动"],
    protectedAreas: "阿尔金山保护区、羌塘保护区",
    monitoring: "无人机监测、AI 图像识别、红外相机、卫星追踪",
    aiApplications: ["图像识别", "无人机监测", "智能监测"],
    description: "金雕是北半球最强大的猛禽之一，翼展超过 2 米，飞行速度可达 300 公里/小时。它们是山地生态系统的顶级捕食者，对维持生态平衡具有不可替代的作用。"
  }
];

// 保护等级映射
const PROTECTION_LEVELS = {
  1: { label: "国家一级保护", class: "tag-protection-1" },
  2: { label: "国家二级保护", class: "tag-protection-2" },
  3: { label: "三有保护动物", class: "tag-protection-3" }
};

// 获取鸟类 SVG
function getBirdSVG(bird) {
  return birdSVG(bird.type, bird.colors);
}

// 获取鸟类真实图片
function getBirdImage(bird) {
  return '<img src="assets/images/' + bird.id + '.jpeg" alt="' + bird.name + '" loading="lazy">';
}

// 获取带拼音的鸟名（如：白头鹎（bái tóu bēi））
function getBirdNameWithPinyin(bird) {
  return bird.pinyin ? bird.name + '（' + bird.pinyin + '）' : bird.name;
}

// 获取详情页背景 SVG
function getBirdHeroSVG(bird) {
  const colors = bird.colors;
  return `<svg viewBox="0 0 1200 400" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
    <defs>
      <linearGradient id="hero-bg-${bird.id}" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="${colors.body}" stop-opacity="0.95"/>
        <stop offset="100%" stop-color="${colors.bg}" stop-opacity="0.85"/>
      </linearGradient>
      <radialGradient id="hero-glow-${bird.id}" cx="70%" cy="30%" r="50%">
        <stop offset="0%" stop-color="${colors.accent}" stop-opacity="0.15"/>
        <stop offset="100%" stop-color="${colors.accent}" stop-opacity="0"/>
      </radialGradient>
    </defs>
    <rect width="1200" height="400" fill="url(#hero-bg-${bird.id})"/>
    <rect width="1200" height="400" fill="url(#hero-glow-${bird.id})"/>
    <g opacity="0.08" transform="translate(800, 80) scale(3)">
      ${birdSVG(bird.type, { bg: 'transparent', body: colors.light, accent: colors.accent, light: colors.light })
        .replace(/<svg[^>]*>/, '').replace(/<\/svg>/, '').replace(/<rect[^>]*>/g, '').replace(/<defs>[\s\S]*?<\/defs>/g, '')}
    </g>
  </svg>`;
}

// 按条件筛选鸟类
function filterBirds(birds, { search = '', habitat = 'all', protection = 'all' } = {}) {
  return birds.filter(bird => {
    const matchSearch = !search ||
      bird.name.includes(search) ||
      bird.englishName.toLowerCase().includes(search.toLowerCase()) ||
      bird.scientificName.toLowerCase().includes(search.toLowerCase());
    const matchHabitat = habitat === 'all' || bird.habitat.includes(habitat);
    const matchProtection = protection === 'all' || bird.protectionLevel === parseInt(protection);
    return matchSearch && matchHabitat && matchProtection;
  });
}
