import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';

export interface Language {
  code: string;
  label: string;
  flag: string;
}

export const LANGUAGES: Language[] = [
  { code: 'en', label: 'English', flag: '🇺🇸' },
  { code: 'de', label: 'Deutsch', flag: '🇩🇪' },
  { code: 'fr', label: 'Francais', flag: '🇫🇷' },
  { code: 'es', label: 'Espanol', flag: '🇪🇸' },
  { code: 'pt', label: 'Portugues', flag: '🇧🇷' },
  { code: 'ru', label: 'Русский', flag: '🇷🇺' },
  { code: 'zh', label: '中文', flag: '🇨🇳' },
  { code: 'ja', label: '日本語', flag: '🇯🇵' },
  { code: 'ko', label: '한국어', flag: '🇰🇷' },
  { code: 'tr', label: 'Turkce', flag: '🇹🇷' },
  { code: 'pl', label: 'Polski', flag: '🇵🇱' },
  { code: 'nl', label: 'Nederlands', flag: '🇳🇱' },
  { code: 'it', label: 'Italiano', flag: '🇮🇹' },
  { code: 'ar', label: 'العربية', flag: '🇸🇦' },
  { code: 'th', label: 'ไทย', flag: '🇹🇭' },
  { code: 'vi', label: 'Tieng Viet', flag: '🇻🇳' },
];

const translations: Record<string, Record<string, string>> = {
  en: {
    'nav.home': 'Home',
    'nav.blog': 'Blog',
    'nav.buy': 'Buy',
    'hero.status': 'Legit ESP · Wipe-ready · External',
    'hero.subtitle': 'Aimbot, ESP & Wallhack – DND',
    'hero.description': 'Buy Dark and Darker cheats from DarkerCheats - ESP, wallhack, and loot overlays. Private Legit Dark and Darker cheats with wipe updates and support.',
    'hero.cta': 'Purchase Now',
    'hero.features': 'See Features',
    'hero.trust': 'Windows 10 & 11 · Steam · Easy Anti-Cheat · External ESP',
    'meta.title': 'Dark And Darker Cheats | Aimbot, ESP & Wallhack - DND',
    'meta.description': 'Buy Dark and Darker cheats from DarkerCheats - ESP, wallhack, and loot overlays. Private Legit Dark and Darker cheats with wipe updates and support.',
  },
  de: {
    'nav.home': 'Startseite',
    'nav.blog': 'Blog',
    'nav.buy': 'Kaufen',
    'hero.status': 'Unerkannt · Aktualisiert fur neuesten Patch',
    'hero.subtitle': 'ESP, Wallhack & Chests',
    'hero.description': 'Dominiere jeden Dungeon in Ironmaces Dark and Darker. Voller ESP, Wallhack und Loot-Highlights — alles in einem externen Cheat. Unerkannt und nach jedem Patch aktualisiert.',
    'hero.cta': 'Cheat Kaufen',
    'hero.features': 'Features Ansehen',
    'hero.trust': 'Windows 10 & 11 · Steam · Easy Anti-Cheat · Extern & Unerkannt',
    'meta.title': 'Dark and Darker Cheats – #1 Unerkannter ESP & Wallhack',
    'meta.description': 'Der #1 unerkannte Cheat fur Ironmaces Dark and Darker. voller ESP, Wallhack, Loot-Highlights. Vollstandig extern und Easy Anti-Cheat-sicher.',
  },
  fr: {
    'nav.home': 'Accueil',
    'nav.blog': 'Blog',
    'nav.buy': 'Acheter',
    'hero.status': 'Indetecte · Mis a jour pour le dernier patch',
    'hero.subtitle': 'ESP, Wallhack & Chests',
    'hero.description': "Dominez chaque raid dans le shooter d'extraction Dark and Darker de Ironmace. ESP complet, wallhack et surlignage de butin — le tout dans un cheat externe. Indetecte et mis a jour apres chaque patch.",
    'hero.cta': 'Obtenir Le Cheat',
    'hero.features': 'Voir Les Fonctionnalites',
    'hero.trust': 'Windows 10 & 11 · Steam · Easy Anti-Cheat · Externe & Indetecte',
    'meta.title': 'Dark and Darker Cheats – #1 ESP & Wallhack Indetecte',
    'meta.description': "Le cheat #1 indetecte pour le shooter d'extraction Dark and Darker de Ironmace. ESP complet, wallhack, surlignage de butin. Entierement externe.",
  },
  es: {
    'nav.home': 'Inicio',
    'nav.blog': 'Blog',
    'nav.buy': 'Comprar',
    'hero.status': 'Indetectable · Actualizado para el ultimo parche',
    'hero.subtitle': 'ESP, Wallhack & Chests',
    'hero.description': 'Domina cada incursion en el shooter de extraccion Dark and Darker de Ironmace. ESP completo, wallhack y resaltado de botin — todo en un cheat externo. Indetectable y actualizado despues de cada parche.',
    'hero.cta': 'Obtener El Cheat',
    'hero.features': 'Ver Funciones',
    'hero.trust': 'Windows 10 & 11 · Steam · Easy Anti-Cheat · Externo e Indetectable',
    'meta.title': 'Dark and Darker Cheats – #1 ESP y Wallhack Indetectable',
    'meta.description': 'El cheat #1 indetectable para Dark and Darker de Ironmace. ESP completo, wallhack, resaltado de botin. Completamente externo y seguro contra Easy Anti-Cheat.',
  },
  pt: {
    'nav.home': 'Inicio',
    'nav.blog': 'Blog',
    'nav.buy': 'Comprar',
    'hero.status': 'Indetectavel · Atualizado para o ultimo patch',
    'hero.subtitle': 'ESP, Wallhack & Chests',
    'hero.description': 'Domine cada raid no shooter de extracao Dark and Darker da Ironmace. ESP completo, wallhack e destaque de loot — tudo em um cheat externo. Indetectavel e atualizado apos cada patch.',
    'hero.cta': 'Obter O Cheat',
    'hero.features': 'Ver Recursos',
    'hero.trust': 'Windows 10 & 11 · Steam · Easy Anti-Cheat · Externo & Indetectavel',
    'meta.title': 'Dark and Darker Cheats – #1 ESP & Wallhack Indetectavel',
    'meta.description': 'O cheat #1 indetectavel para Dark and Darker da Ironmace. ESP completo, wallhack, destaque de loot. Totalmente externo e seguro contra Easy Anti-Cheat.',
  },
  ru: {
    'nav.home': 'Главная',
    'nav.blog': 'Блог',
    'nav.buy': 'Купить',
    'hero.status': 'Необнаруживаемый · Обновлен для последнего патча',
    'hero.subtitle': 'ESP и Wallhack',
    'hero.description': 'Доминируйте в каждом рейде в шутере Dark and Darker от Ironmace. Полный ESP, wallhack и подсветка лута — все в одном внешнем чите. Необнаруживаемый и обновляемый после каждого патча.',
    'hero.cta': 'Получить Чит',
    'hero.features': 'Смотреть Функции',
    'hero.trust': 'Windows 10 & 11 · Steam · Easy Anti-Cheat · Внешний & Необнаруживаемый',
    'meta.title': 'Dark and Darker Cheats – #1 Необнаруживаемый ESP и Wallhack',
    'meta.description': 'Чит #1 для шутера Dark and Darker от Ironmace. полный ESP, wallhack, подсветка лута. Полностью внешний и безопасный от Easy Anti-Cheat.',
  },
  zh: {
    'nav.home': '首页',
    'nav.blog': '博客',
    'nav.buy': '购买',
    'hero.status': '未检测 · 已更新至最新补丁',
    'hero.subtitle': '自瞄, 透视 & 穿墙',
    'hero.description': '在Ironmace的Dark and Darker提取射击游戏中称霸每场突袭。完整ESP、穿墙和战利品高亮——全部集成在一个外部作弊器中。未检测，每次补丁后更新。',
    'hero.cta': '获取作弊器',
    'hero.features': '查看功能',
    'hero.trust': 'Windows 10 & 11 · Steam · Easy Anti-Cheat · 外部 & 未检测',
    'meta.title': 'Dark and Darker作弊器 – #1未检测自瞄、ESP和穿墙',
    'meta.description': 'Ironmace Dark and Darker的#1未检测作弊器。完整ESP、穿墙、战利品高亮。完全外部，Easy Anti-Cheat安全。',
  },
  ja: {
    'nav.home': 'ホーム',
    'nav.blog': 'ブログ',
    'nav.buy': '購入',
    'hero.status': '未検出 · 最新パッチに対応',
    'hero.subtitle': 'ESP & ウォールハック',
    'hero.description': 'IronmaceのDark and Darkerで全レイドを制覇。フルESP、ウォールハック、ルートハイライト — 全て1つの外部チートに。未検出でパッチごとに更新。',
    'hero.cta': 'チートを入手',
    'hero.features': '機能を見る',
    'hero.trust': 'Windows 10 & 11 · Steam · Easy Anti-Cheat · 外部 & 未検出',
    'meta.title': 'Dark and Darker チート – #1 未検出ESP & ウォールハック',
    'meta.description': 'IronmaceのDark and Darker用#1未検出チート。フルESP、ウォールハック、ルートハイライト。完全外部でEasy Anti-Cheat安全。',
  },
  ko: {
    'nav.home': '홈',
    'nav.blog': '블로그',
    'nav.buy': '구매',
    'hero.status': '미탐지 · 최신 패치 업데이트됨',
    'hero.subtitle': 'ESP & 월핵',
    'hero.description': 'Ironmace의 Dark and Darker 추출 슈터에서 모든 레이드를 지배하세요. 풀 ESP, 월핵, 전리품 하이라이트 — 하나의 외부 치트에 모두. 미탐지이며 매 패치 후 업데이트.',
    'hero.cta': '치트 받기',
    'hero.features': '기능 보기',
    'hero.trust': 'Windows 10 & 11 · Steam · Easy Anti-Cheat · 외부 & 미탐지',
    'meta.title': 'Dark and Darker 치트 – #1 미탐지 ESP & 월핵',
    'meta.description': 'Ironmace의 Dark and Darker용 #1 미탐지 치트. 풀 ESP, 월핵, 전리품 하이라이트. 완전 외부이며 Easy Anti-Cheat 안전.',
  },
  tr: {
    'nav.home': 'Anasayfa',
    'nav.blog': 'Blog',
    'nav.buy': 'Satın Al',
    'hero.status': 'Tespit Edilemez · Son yama icin guncellendi',
    'hero.subtitle': 'ESP, Wallhack & Chests',
    'hero.description': "Ironmace'nin Dark and Darker extraction shooter'inda her baskinda domine edin. Tam ESP, wallhack ve ganimet vurgulama — hepsi tek bir harici hilede. Tespit edilemez ve her yamadan sonra guncellenir.",
    'hero.cta': 'Hileyi Al',
    'hero.features': 'Ozellikleri Gor',
    'hero.trust': 'Windows 10 & 11 · Steam · Easy Anti-Cheat · Harici & Tespit Edilemez',
    'meta.title': 'Dark and Darker Hileler – #1 Tespit Edilemez ESP & Wallhack',
    'meta.description': "Ironmace'nin Dark and Darker'u icin #1 tespit edilemez hile. tam ESP, wallhack, ganimet vurgulama. Tamamen harici ve Easy Anti-Cheat-guvenli.",
  },
  pl: {
    'nav.home': 'Strona Glowna',
    'nav.blog': 'Blog',
    'nav.buy': 'Kup',
    'hero.status': 'Niewykrywalny · Zaktualizowany do najnowszej latki',
    'hero.subtitle': 'ESP, Wallhack & Chests',
    'hero.description': 'Zdominuj kazdy rajd w shooterze ekstrakcyjnym Dark and Darker od Ironmace. Pelny ESP, wallhack i podswietlanie lupu — wszystko w jednym zewnetrznym cheacie. Niewykrywalny i aktualizowany po kazdej latce.',
    'hero.cta': 'Zdobadz Cheat',
    'hero.features': 'Zobacz Funkcje',
    'hero.trust': 'Windows 10 & 11 · Steam · Easy Anti-Cheat · Zewnetrzny & Niewykrywalny',
    'meta.title': 'Dark and Darker Cheaty – #1 Niewykrywalny ESP & Wallhack',
    'meta.description': 'Cheat #1 niewykrywalny dla Dark and Darker od Ironmace. pelny ESP, wallhack, podswietlanie lupu. Calkowicie zewnetrzny i bezpieczny przed Easy Anti-Cheat.',
  },
  nl: {
    'nav.home': 'Home',
    'nav.blog': 'Blog',
    'nav.buy': 'Koop',
    'hero.status': 'Ondetecteerbaar · Bijgewerkt voor laatste patch',
    'hero.subtitle': 'ESP, Wallhack & Chests',
    'hero.description': "Domineer elke dungeon in Ironmace's Dark and Darker. Volledige ESP, wallhack en buit-highlights — alles in een externe cheat. Ondetecteerbaar en bijgewerkt na elke patch.",
    'hero.cta': 'Cheat Verkrijgen',
    'hero.features': 'Functies Bekijken',
    'hero.trust': 'Windows 10 & 11 · Steam · Easy Anti-Cheat · Extern & Ondetecteerbaar',
    'meta.title': 'Dark and Darker Cheats – #1 Ondetecteerbare ESP & Wallhack',
    'meta.description': "De #1 ondetecteerbare cheat voor Ironmace's Dark and Darker. volledige ESP, wallhack, buit-highlights. Volledig extern en Easy Anti-Cheat-veilig.",
  },
  it: {
    'nav.home': 'Home',
    'nav.blog': 'Blog',
    'nav.buy': 'Acquista',
    'hero.status': 'Non rilevabile · Aggiornato per ultima patch',
    'hero.subtitle': 'ESP, Wallhack & Chests',
    'hero.description': "Domina ogni raid nello shooter di estrazione Dark and Darker di Ironmace. ESP completo, wallhack e evidenziazione bottino — tutto in un cheat esterno. Non rilevabile e aggiornato dopo ogni patch.",
    'hero.cta': 'Ottieni Il Cheat',
    'hero.features': 'Vedi Funzionalita',
    'hero.trust': 'Windows 10 & 11 · Steam · Easy Anti-Cheat · Esterno & Non Rilevabile',
    'meta.title': 'Dark and Darker Cheats – #1 ESP & Wallhack Non Rilevabile',
    'meta.description': 'Il cheat #1 non rilevabile per Dark and Darker di Ironmace. ESP completo, wallhack, evidenziazione bottino. Completamente esterno e Easy Anti-Cheat-sicuro.',
  },
  ar: {
    'nav.home': 'الرئيسية',
    'nav.blog': 'المدونة',
    'nav.buy': 'شراء',
    'hero.status': 'غير قابل للكشف · محدث لآخر تحديث',
    'hero.subtitle': 'ESP وولهاك',
    'hero.description': 'سيطر على كل غارة في لعبة Dark and Darker من Ironmace. ESP كامل، ولهاك وتمييز الغنائم — كل ذلك في غش خارجي واحد. غير قابل للكشف ومحدث بعد كل تحديث.',
    'hero.cta': 'احصل على الغش',
    'hero.features': 'عرض المميزات',
    'hero.trust': 'Windows 10 & 11 · Steam · Easy Anti-Cheat · خارجي وغير قابل للكشف',
    'meta.title': 'Dark and Darker Cheats – #1 ايمبوت وESP وولهاك غير قابل للكشف',
    'meta.description': 'الغش #1 غير القابل للكشف للعبة Dark and Darker من Ironmace. ESP كامل، ولهاك، تمييز الغنائم. خارجي بالكامل وآمن من Easy Anti-Cheat.',
  },
  th: {
    'nav.home': 'หน้าหลัก',
    'nav.blog': 'บล็อก',
    'nav.buy': 'ซื้อ',
    'hero.status': 'ตรวจไม่พบ · อัปเดตสำหรับแพทช์ล่าสุด',
    'hero.subtitle': 'ESP & วอลแฮค',
    'hero.description': 'ครองทุกเรดใน Dark and Darker ของ Ironmace ESP เต็มรูปแบบ, วอลแฮค และไฮไลท์ลูท — ทั้งหมดในโกงภายนอกตัวเดียว ตรวจไม่พบและอัปเดตหลังทุกแพทช์',
    'hero.cta': 'รับโกง',
    'hero.features': 'ดูฟีเจอร์',
    'hero.trust': 'Windows 10 & 11 · Steam · Easy Anti-Cheat · ภายนอก & ตรวจไม่พบ',
    'meta.title': 'Dark and Darker Cheats – #1 ESP & วอลแฮคตรวจไม่พบ',
    'meta.description': 'โกง #1 ตรวจไม่พบสำหรับ Dark and Darker ของ Ironmace ESP เต็มรูปแบบ, วอลแฮค, ไฮไลท์ลูท ภายนอกทั้งหมดและปลอดภัยจาก Easy Anti-Cheat',
  },
  vi: {
    'nav.home': 'Trang Chu',
    'nav.blog': 'Blog',
    'nav.buy': 'Mua',
    'hero.status': 'Khong bi phat hien · Cap nhat cho ban va moi nhat',
    'hero.subtitle': 'ESP, Wallhack & Chests',
    'hero.description': 'Thong tri moi cuoc dot kich trong Dark and Darker cua Ironmace. ESP day du, wallhack va lam noi bat chien loi pham — tat ca trong mot hack ben ngoai. Khong bi phat hien va cap nhat sau moi ban va.',
    'hero.cta': 'Nhan Hack',
    'hero.features': 'Xem Tinh Nang',
    'hero.trust': 'Windows 10 & 11 · Steam · Easy Anti-Cheat · Ben Ngoai & Khong Bi Phat Hien',
    'meta.title': 'Dark and Darker Cheats – #1 ESP & Wallhack Khong Bi Phat Hien',
    'meta.description': 'Hack #1 khong bi phat hien cho Dark and Darker cua Ironmace. ESP day du, wallhack, lam noi bat chien loi pham. Hoan toan ben ngoai va an toan voi Easy Anti-Cheat.',
  },
};

interface I18nContextType {
  lang: string;
  setLang: (lang: string) => void;
  t: (key: string) => string;
}

const I18nContext = createContext<I18nContextType>({
  lang: 'en',
  setLang: () => {},
  t: (key: string) => key,
});

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState(() => {
    const stored = localStorage.getItem('lang');
    if (stored && translations[stored]) return stored;
    const browserLang = navigator.language.split('-')[0];
    if (translations[browserLang]) return browserLang;
    return 'en';
  });

  const setLang = (newLang: string) => {
    setLangState(newLang);
    localStorage.setItem('lang', newLang);
    document.documentElement.lang = newLang;
    document.documentElement.dir = newLang === 'ar' ? 'rtl' : 'ltr';
    updateMetaTags(newLang);
    updateHreflangLinks();
  };

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    updateMetaTags(lang);
    updateHreflangLinks();
  }, []);

  const t = (key: string): string => {
    return translations[lang]?.[key] || translations.en[key] || key;
  };

  return (
    <I18nContext.Provider value={{ lang, setLang, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  return useContext(I18nContext);
}

function updateMetaTags(lang: string) {
  const t = translations[lang] || translations.en;
  const title = t['meta.title'] || translations.en['meta.title'];
  const description = t['meta.description'] || translations.en['meta.description'];

  document.title = title;

  const descMeta = document.querySelector('meta[name="description"]');
  if (descMeta) descMeta.setAttribute('content', description);

  const ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle) ogTitle.setAttribute('content', title);

  const ogDesc = document.querySelector('meta[property="og:description"]');
  if (ogDesc) ogDesc.setAttribute('content', description);

  const ogLocale = document.querySelector('meta[property="og:locale"]');
  if (ogLocale) ogLocale.setAttribute('content', lang === 'en' ? 'en_US' : `${lang}_${lang.toUpperCase()}`);

  const twTitle = document.querySelector('meta[name="twitter:title"]');
  if (twTitle) twTitle.setAttribute('content', title);

  const twDesc = document.querySelector('meta[name="twitter:description"]');
  if (twDesc) twDesc.setAttribute('content', description);
}

function updateHreflangLinks() {
  document.querySelectorAll('link[hreflang]').forEach(el => el.remove());

  const base = 'https://darkanddarkercheats.com';
  const head = document.head;

  LANGUAGES.forEach(({ code }) => {
    const link = document.createElement('link');
    link.rel = 'alternate';
    link.hreflang = code;
    link.href = `${base}/?lang=${code}`;
    head.appendChild(link);
  });

  const xDefault = document.createElement('link');
  xDefault.rel = 'alternate';
  xDefault.hreflang = 'x-default';
  xDefault.href = base + '/';
  head.appendChild(xDefault);
}
