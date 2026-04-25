export const SMART_PROJECT_PRESETS = [
  {
    id: "backup-apartment-light",
    title: "بکاپ آپارتمان سبک",
    category: "سانورتر و باطری",
    systemType: "backup",
    bestFor: "روشنایی، مودم، تلویزیون، لپ‌تاپ و مصرف سبک خانگی",
    tags: ["خانه", "بکاپ", "اقتصادی"],
    summary: "سناریوی رایج برای قطعی برق کوتاه‌مدت در واحد مسکونی.",
    patch: {
      projectTitle: "بکاپ آپارتمان سبک",
      systemType: "backup",
      calculationMode: "loads",
      loadVoltage: 220,
      backupHours: 4,
      systemVoltage: 24,
      batteryType: "AGM",
      batteryUnitVoltage: 12,
      batteryUnitAh: 100,
      dod: 0.5,
      inverterEfficiency: 0.9,
      surgeFactor: 1.5,
      loadItems: [
        { name: "روشنایی LED", qty: 8, power: 12, hours: 4, powerFactor: 0.95, coincidenceFactor: 0.8, loadType: "resistive", surgeFactor: 1 },
        { name: "مودم و تجهیزات شبکه", qty: 1, power: 25, hours: 4, powerFactor: 0.9, coincidenceFactor: 1, loadType: "switching", surgeFactor: 1.2 },
        { name: "تلویزیون", qty: 1, power: 120, hours: 3, powerFactor: 0.9, coincidenceFactor: 0.8, loadType: "switching", surgeFactor: 1.2 },
        { name: "لپ‌تاپ / شارژرها", qty: 2, power: 65, hours: 3, powerFactor: 0.9, coincidenceFactor: 0.7, loadType: "switching", surgeFactor: 1.2 }
      ]
    }
  },
  {
    id: "backup-villa-standard",
    title: "بکاپ ویلا / خانه متوسط",
    category: "سانورتر و باطری",
    systemType: "backup",
    bestFor: "روشنایی، یخچال، پمپ کوچک، تلویزیون و تجهیزات ضروری",
    tags: ["ویلا", "بکاپ", "پمپ"],
    summary: "سناریوی متعادل برای ویلا یا خانه با بارهای ضروری و یک مصرف موتوری سبک.",
    patch: {
      projectTitle: "بکاپ ویلا / خانه متوسط",
      systemType: "backup",
      calculationMode: "loads",
      loadVoltage: 220,
      backupHours: 6,
      systemVoltage: 48,
      batteryType: "LFP",
      batteryUnitVoltage: 12,
      batteryUnitAh: 200,
      dod: 0.8,
      inverterEfficiency: 0.93,
      surgeFactor: 2.5,
      loadItems: [
        { name: "روشنایی ویلا", qty: 14, power: 12, hours: 6, powerFactor: 0.95, coincidenceFactor: 0.75, loadType: "resistive", surgeFactor: 1 },
        { name: "یخچال", qty: 1, power: 180, hours: 10, powerFactor: 0.85, coincidenceFactor: 0.45, loadType: "motor", surgeFactor: 3 },
        { name: "پمپ آب کوچک", qty: 1, power: 750, hours: 1, powerFactor: 0.82, coincidenceFactor: 0.35, loadType: "motor", surgeFactor: 3 },
        { name: "تلویزیون و گیرنده", qty: 1, power: 160, hours: 4, powerFactor: 0.9, coincidenceFactor: 0.8, loadType: "switching", surgeFactor: 1.2 },
        { name: "مودم و دوربین", qty: 1, power: 60, hours: 6, powerFactor: 0.9, coincidenceFactor: 1, loadType: "switching", surgeFactor: 1.2 }
      ]
    }
  },
  {
    id: "backup-shop",
    title: "بکاپ مغازه / فروشگاه کوچک",
    category: "سانورتر و باطری",
    systemType: "backup",
    bestFor: "روشنایی، صندوق، کارتخوان، دوربین، مودم و یخچال ویترینی کوچک",
    tags: ["مغازه", "فروشگاه", "بکاپ"],
    summary: "برای کسب‌وکارهای کوچک که در زمان قطعی برق باید روشن بمانند.",
    patch: {
      projectTitle: "بکاپ مغازه / فروشگاه کوچک",
      systemType: "backup",
      calculationMode: "loads",
      loadVoltage: 220,
      backupHours: 5,
      systemVoltage: 48,
      batteryType: "LFP",
      batteryUnitVoltage: 12,
      batteryUnitAh: 150,
      dod: 0.8,
      inverterEfficiency: 0.92,
      surgeFactor: 2,
      loadItems: [
        { name: "روشنایی فروشگاه", qty: 12, power: 18, hours: 5, powerFactor: 0.95, coincidenceFactor: 0.9, loadType: "resistive", surgeFactor: 1 },
        { name: "صندوق و کارتخوان", qty: 1, power: 120, hours: 5, powerFactor: 0.9, coincidenceFactor: 1, loadType: "switching", surgeFactor: 1.2 },
        { name: "مودم و دوربین", qty: 1, power: 80, hours: 5, powerFactor: 0.9, coincidenceFactor: 1, loadType: "switching", surgeFactor: 1.2 },
        { name: "یخچال ویترینی کوچک", qty: 1, power: 350, hours: 8, powerFactor: 0.82, coincidenceFactor: 0.45, loadType: "motor", surgeFactor: 3 }
      ]
    }
  },
  {
    id: "backup-office",
    title: "بکاپ دفتر اداری",
    category: "سانورتر و باطری",
    systemType: "backup",
    bestFor: "چند کامپیوتر، روشنایی، مودم، دوربین و تجهیزات اداری",
    tags: ["اداری", "کامپیوتر", "بکاپ"],
    summary: "سناریوی رایج برای دفتر کوچک تا متوسط.",
    patch: {
      projectTitle: "بکاپ دفتر اداری",
      systemType: "backup",
      calculationMode: "loads",
      loadVoltage: 220,
      backupHours: 3,
      systemVoltage: 48,
      batteryType: "LFP",
      batteryUnitVoltage: 12,
      batteryUnitAh: 100,
      dod: 0.8,
      inverterEfficiency: 0.93,
      surgeFactor: 1.6,
      loadItems: [
        { name: "کامپیوتر و مانیتور", qty: 5, power: 180, hours: 3, powerFactor: 0.9, coincidenceFactor: 0.85, loadType: "switching", surgeFactor: 1.3 },
        { name: "روشنایی دفتر", qty: 10, power: 18, hours: 3, powerFactor: 0.95, coincidenceFactor: 0.85, loadType: "resistive", surgeFactor: 1 },
        { name: "مودم، سوئیچ و دوربین", qty: 1, power: 100, hours: 3, powerFactor: 0.9, coincidenceFactor: 1, loadType: "switching", surgeFactor: 1.2 },
        { name: "پرینتر سبک", qty: 1, power: 400, hours: 0.3, powerFactor: 0.8, coincidenceFactor: 0.25, loadType: "switching", surgeFactor: 2 }
      ]
    }
  },
  {
    id: "offgrid-garden-lighting",
    title: "آفگرید باغ و روشنایی",
    category: "خورشیدی مستقل",
    systemType: "offgrid",
    bestFor: "باغ، آلاچیق، روشنایی محیطی، دوربین و مودم",
    tags: ["باغ", "آفگرید", "روشنایی"],
    summary: "سناریوی کم‌مصرف با پنل و باتری برای مکان بدون برق شبکه.",
    patch: {
      projectTitle: "آفگرید باغ و روشنایی",
      systemType: "offgrid",
      calculationMode: "loads",
      city: "تهران",
      loadVoltage: 220,
      backupHours: 8,
      sunHours: 5.2,
      systemVoltage: 24,
      batteryType: "LFP",
      batteryUnitVoltage: 12,
      batteryUnitAh: 100,
      dod: 0.8,
      panelWatt: 550,
      panelType: "Half-Cut",
      loadItems: [
        { name: "روشنایی محوطه", qty: 10, power: 15, hours: 7, powerFactor: 0.95, coincidenceFactor: 0.85, loadType: "resistive", surgeFactor: 1 },
        { name: "دوربین و NVR", qty: 1, power: 80, hours: 24, powerFactor: 0.9, coincidenceFactor: 1, loadType: "switching", surgeFactor: 1.2 },
        { name: "مودم 4G", qty: 1, power: 15, hours: 24, powerFactor: 0.9, coincidenceFactor: 1, loadType: "switching", surgeFactor: 1.2 }
      ]
    }
  },
  {
    id: "offgrid-villa-essential",
    title: "آفگرید ویلا - بارهای ضروری",
    category: "خورشیدی مستقل",
    systemType: "offgrid",
    bestFor: "ویلا بدون برق شبکه با یخچال، روشنایی، پمپ و مصرف روزمره کنترل‌شده",
    tags: ["ویلا", "آفگرید", "خانگی"],
    summary: "برای طراحی اولیه ویلا با مصرف ضروری و کنترل‌شده.",
    patch: {
      projectTitle: "آفگرید ویلا - بارهای ضروری",
      systemType: "offgrid",
      calculationMode: "loads",
      city: "یزد",
      loadVoltage: 220,
      backupHours: 10,
      sunHours: 6,
      systemVoltage: 48,
      batteryType: "LFP",
      batteryUnitVoltage: 12,
      batteryUnitAh: 200,
      dod: 0.8,
      panelWatt: 585,
      panelType: "TOPCon",
      loadItems: [
        { name: "روشنایی داخلی و بیرونی", qty: 16, power: 12, hours: 6, powerFactor: 0.95, coincidenceFactor: 0.75, loadType: "resistive", surgeFactor: 1 },
        { name: "یخچال", qty: 1, power: 180, hours: 10, powerFactor: 0.85, coincidenceFactor: 0.45, loadType: "motor", surgeFactor: 3 },
        { name: "پمپ آب", qty: 1, power: 750, hours: 1.2, powerFactor: 0.82, coincidenceFactor: 0.35, loadType: "motor", surgeFactor: 3 },
        { name: "تلویزیون و سیستم صوتی", qty: 1, power: 180, hours: 4, powerFactor: 0.9, coincidenceFactor: 0.8, loadType: "switching", surgeFactor: 1.2 },
        { name: "مودم، دوربین و شارژرها", qty: 1, power: 90, hours: 10, powerFactor: 0.9, coincidenceFactor: 1, loadType: "switching", surgeFactor: 1.2 }
      ]
    }
  },
  {
    id: "offgrid-water-pump",
    title: "آفگرید پمپ آب کشاورزی سبک",
    category: "خورشیدی مستقل",
    systemType: "offgrid",
    bestFor: "پمپ تک‌فاز سبک برای آبیاری محدود روزانه",
    tags: ["پمپ", "کشاورزی", "آفگرید"],
    summary: "برای برآورد سریع سیستم خورشیدی پمپ سبک، با توجه ویژه به جریان راه‌اندازی.",
    patch: {
      projectTitle: "آفگرید پمپ آب کشاورزی سبک",
      systemType: "offgrid",
      calculationMode: "loads",
      city: "کرمان",
      loadVoltage: 220,
      backupHours: 3,
      sunHours: 5.9,
      systemVoltage: 48,
      batteryType: "LFP",
      batteryUnitVoltage: 12,
      batteryUnitAh: 200,
      dod: 0.8,
      panelWatt: 585,
      panelType: "TOPCon",
      surgeFactor: 3,
      loadItems: [
        { name: "پمپ آب 1.5 اسب", qty: 1, power: 1100, hours: 3, powerFactor: 0.82, coincidenceFactor: 1, loadType: "motor", surgeFactor: 3.5 },
        { name: "کنترلر و تجهیزات جانبی", qty: 1, power: 80, hours: 3, powerFactor: 0.9, coincidenceFactor: 1, loadType: "switching", surgeFactor: 1.2 }
      ]
    }
  },
  {
    id: "gridtie-home-10kwh",
    title: "Grid-Tie خانگی 10kWh/day",
    category: "متصل به شبکه",
    systemType: "gridtie",
    bestFor: "جبران بخشی از مصرف روزانه منزل یا واحد اداری کوچک",
    tags: ["Grid-Tie", "خانگی", "صرفه‌جویی"],
    summary: "سناریوی سریع برای طراحی اولیه سیستم متصل به شبکه بدون باتری.",
    patch: {
      projectTitle: "Grid-Tie خانگی 10kWh/day",
      systemType: "gridtie",
      calculationMode: "daily_energy",
      city: "اصفهان",
      dailyEnergyKwh: 10,
      peakFactor: 2,
      targetOffsetPercent: 80,
      sunHours: 5.6,
      systemVoltage: 48,
      panelWatt: 585,
      panelType: "TOPCon",
      inverterEfficiency: 0.965
    }
  },
  {
    id: "hybrid-small-business",
    title: "Hybrid کسب‌وکار کوچک",
    category: "هیبرید",
    systemType: "hybrid",
    bestFor: "کاهش مصرف شبکه همراه با بکاپ کوتاه‌مدت",
    tags: ["هیبرید", "اداری", "فروشگاه"],
    summary: "برای فروشگاه یا دفتر که هم کاهش هزینه انرژی و هم پشتیبانی مهم است.",
    patch: {
      projectTitle: "Hybrid کسب‌وکار کوچک",
      systemType: "hybrid",
      hybridMode: "self_consumption",
      calculationMode: "daily_energy",
      city: "شیراز",
      dailyEnergyKwh: 16,
      peakFactor: 2.2,
      backupHours: 4,
      sunHours: 5.7,
      systemVoltage: 48,
      batteryType: "LFP",
      batteryUnitVoltage: 12,
      batteryUnitAh: 200,
      dod: 0.8,
      targetOffsetPercent: 70,
      panelWatt: 585,
      panelType: "TOPCon"
    }
  }
];

export function getSmartPresetsForSystem(systemType) {
  return SMART_PROJECT_PRESETS.filter((preset) => !systemType || preset.systemType === systemType);
}
