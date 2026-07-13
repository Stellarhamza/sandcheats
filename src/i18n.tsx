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
  'hero.subtitle': 'SAND Raiders of Sophie Cheats – ESP & Wallhack',
  'hero.description': 'Private Legit ESP, wallhack, and loot overlays. Patch updates, English & Russian menu, Discord support.',
  'hero.cta': 'Purchase Now',
  'hero.features': 'See Features',
  'hero.trust': 'Windows 10 & 11 · Steam · Easy Anti-Cheat · External ESP',
  'meta.title': 'Sand Cheats | SAND Raiders of Sophie Cheats – ESP & Wallhack',
  'meta.description': 'Buy sand cheats and SAND Raiders of Sophie cheats — private Legit ESP, wallhack, and loot overlays with patch updates and Discord support.',
},
 de: {
  'nav.home': 'Startseite',
  'nav.blog': 'Blog',
  'nav.buy': 'Kaufen',
  'hero.status': 'Unerkannt · Aktualisiert fur neuesten Patch',
  'hero.subtitle': 'SAND Raiders of Sophie Cheats – ESP & Wallhack',
  'hero.description': 'Privates Legit ESP, Wallhack und Loot-Overlays. Patch-Updates, Discord-Support.',
  'hero.cta': 'Cheat Kaufen',
  'hero.features': 'Features Ansehen',
  'hero.trust': 'Windows 10 & 11 · Steam · Easy Anti-Cheat · Extern & Unerkannt',
  'meta.title': 'Sand Cheats – #1 Unerkannter ESP & Wallhack',
  'meta.description': 'Der #1 unerkannte Cheat fur Sand Cheats. voller ESP, Wallhack, Loot-Highlights. Vollstandig extern und Easy Anti-Cheat-sicher.',
 },
 fr: {
  'nav.home': 'Accueil',
  'nav.blog': 'Blog',
  'nav.buy': 'Acheter',
  'hero.status': 'Indetecte · Mis a jour pour le dernier patch',
  'hero.subtitle': 'SAND Raiders of Sophie Cheats – ESP & Wallhack',
  'hero.description': 'ESP Legit prive, wallhack et overlays de butin. Mises a jour et support Discord.',
  'hero.cta': 'Obtenir Le Cheat',
  'hero.features': 'Voir Les Fonctionnalites',
  'hero.trust': 'Windows 10 & 11 · Steam · Easy Anti-Cheat · Externe & Indetecte',
  'meta.title': 'Sand Cheats – #1 ESP & Wallhack Indetecte',
  'meta.description': 'Le cheat #1 indetecte pour Sand Cheats. ESP complet, wallhack, surlignage de butin. Entierement externe.',
 },
 es: {
  'nav.home': 'Inicio',
  'nav.blog': 'Blog',
  'nav.buy': 'Comprar',
  'hero.status': 'Indetectable · Actualizado para el ultimo parche',
  'hero.subtitle': 'SAND Raiders of Sophie Cheats – ESP & Wallhack',
  'hero.description': 'ESP Legit privado, wallhack y overlays de botin. Actualizaciones y soporte Discord.',
  'hero.cta': 'Obtener El Cheat',
  'hero.features': 'Ver Funciones',
  'hero.trust': 'Windows 10 & 11 · Steam · Easy Anti-Cheat · Externo e Indetectable',
  'meta.title': 'Sand Cheats – #1 ESP y Wallhack Indetectable',
  'meta.description': 'El cheat #1 indetectable para Sand Cheats. ESP completo, wallhack, resaltado de botin. Completamente externo y seguro contra Easy Anti-Cheat.',
 },
 pt: {
  'nav.home': 'Inicio',
  'nav.blog': 'Blog',
  'nav.buy': 'Comprar',
  'hero.status': 'Indetectavel · Atualizado para o ultimo patch',
  'hero.subtitle': 'SAND Raiders of Sophie Cheats – ESP & Wallhack',
  'hero.description': 'ESP Legit privado, wallhack e overlays de loot. Atualizacoes e suporte Discord.',
  'hero.cta': 'Obter O Cheat',
  'hero.features': 'Ver Recursos',
  'hero.trust': 'Windows 10 & 11 · Steam · Easy Anti-Cheat · Externo & Indetectavel',
  'meta.title': 'Sand Cheats – #1 ESP & Wallhack Indetectavel',
  'meta.description': 'O cheat #1 indetectavel para Sand Cheats. ESP completo, wallhack, destaque de loot. Totalmente externo e seguro contra Easy Anti-Cheat.',
 },
 ru: {
  'nav.home': 'Главная',
  'nav.blog': 'Блог',
  'nav.buy': 'Купить',
  'hero.status': 'Необнаруживаемый · Обновлен для последнего патча',
  'hero.subtitle': 'SAND Raiders of Sophie Cheats – ESP и Wallhack',
  'hero.description': 'Приватный Legit ESP, wallhack и лут-оверлеи. Обновления и поддержка Discord.',
  'hero.cta': 'Получить Чит',
  'hero.features': 'Смотреть Функции',
  'hero.trust': 'Windows 10 & 11 · Steam · Easy Anti-Cheat · Внешний & Необнаруживаемый',
  'meta.title': 'Sand Cheats – #1 Необнаруживаемый ESP и Wallhack',
  'meta.description': 'Чит #1 для шутера Sand Cheats. полный ESP, wallhack, подсветка лута. Полностью внешний и безопасный от Easy Anti-Cheat.',
 },
 zh: {
  'nav.home': '首页',
  'nav.blog': '博客',
  'nav.buy': '购买',
  'hero.status': '未检测 · 已更新至最新补丁',
  'hero.subtitle': 'SAND Raiders of Sophie Cheats – 透视 & 穿墙',
  'hero.description': '私人 Legit ESP、透视与战利品覆盖。补丁更新与 Discord 支持。',
  'hero.cta': '获取作弊器',
  'hero.features': '查看功能',
  'hero.trust': 'Windows 10 & 11 · Steam · Easy Anti-Cheat · 外部 & 未检测',
  'meta.title': 'Sand Cheats作弊器 – #1未检测ESP和穿墙',
  'meta.description': 'Sand Cheats的#1未检测作弊器。完整ESP、穿墙、战利品高亮。完全外部，Easy Anti-Cheat安全。',
 },
 ja: {
  'nav.home': 'ホーム',
  'nav.blog': 'ブログ',
  'nav.buy': '購入',
  'hero.status': '未検出 · 最新パッチに対応',
  'hero.subtitle': 'SAND Raiders of Sophie Cheats – ESP & ウォールハック',
  'hero.description': 'プライベート Legit ESP、ウォールハック、ルートオーバーレイ。パッチ更新と Discord サポート。',
  'hero.cta': 'チートを入手',
  'hero.features': '機能を見る',
  'hero.trust': 'Windows 10 & 11 · Steam · Easy Anti-Cheat · 外部 & 未検出',
  'meta.title': 'Sand Cheats チート – #1 未検出ESP & ウォールハック',
  'meta.description': 'Sand Cheats用#1未検出チート。フルESP、ウォールハック、ルートハイライト。完全外部でEasy Anti-Cheat安全。',
 },
 ko: {
  'nav.home': '홈',
  'nav.blog': '블로그',
  'nav.buy': '구매',
  'hero.status': '미탐지 · 최신 패치 업데이트됨',
  'hero.subtitle': 'SAND Raiders of Sophie Cheats – ESP & 월핵',
  'hero.description': '프라이빗 Legit ESP, 월핵, 루트 오버레이. 패치 업데이트와 Discord 지원.',
  'hero.cta': '치트 받기',
  'hero.features': '기능 보기',
  'hero.trust': 'Windows 10 & 11 · Steam · Easy Anti-Cheat · 외부 & 미탐지',
  'meta.title': 'Sand Cheats 치트 – #1 미탐지 ESP & 월핵',
  'meta.description': 'Sand Cheats용 #1 미탐지 치트. 풀 ESP, 월핵, 전리품 하이라이트. 완전 외부이며 Easy Anti-Cheat 안전.',
 },
 tr: {
  'nav.home': 'Anasayfa',
  'nav.blog': 'Blog',
  'nav.buy': 'Satın Al',
  'hero.status': 'Tespit Edilemez · Son yama icin guncellendi',
  'hero.subtitle': 'SAND Raiders of Sophie Cheats – ESP & Wallhack',
  'hero.description': "Ozel Legit ESP, wallhack ve loot overlay. Yama guncellemeleri ve Discord destegi.",
  'hero.cta': 'Hileyi Al',
  'hero.features': 'Ozellikleri Gor',
  'hero.trust': 'Windows 10 & 11 · Steam · Easy Anti-Cheat · Harici & Tespit Edilemez',
  'meta.title': 'Sand Cheats Hileler – #1 Tespit Edilemez ESP & Wallhack',
  'meta.description': "Sand Cheats'u icin #1 tespit edilemez hile. tam ESP, wallhack, ganimet vurgulama. Tamamen harici ve Easy Anti-Cheat-guvenli.",
 },
 pl: {
  'nav.home': 'Strona Glowna',
  'nav.blog': 'Blog',
  'nav.buy': 'Kup',
  'hero.status': 'Niewykrywalny · Zaktualizowany do najnowszej latki',
  'hero.subtitle': 'SAND Raiders of Sophie Cheats – ESP & Wallhack',
  'hero.description': 'Prywatny Legit ESP, wallhack i overlaye lupu. Aktualizacje i wsparcie Discord.',
  'hero.cta': 'Zdobadz Cheat',
  'hero.features': 'Zobacz Funkcje',
  'hero.trust': 'Windows 10 & 11 · Steam · Easy Anti-Cheat · Zewnetrzny & Niewykrywalny',
  'meta.title': 'Sand Cheats – #1 Niewykrywalny ESP & Wallhack',
  'meta.description': 'Cheat #1 niewykrywalny dla Sand Cheats. pelny ESP, wallhack, podswietlanie lupu. Calkowicie zewnetrzny i bezpieczny przed Easy Anti-Cheat.',
 },
 nl: {
  'nav.home': 'Home',
  'nav.blog': 'Blog',
  'nav.buy': 'Koop',
  'hero.status': 'Ondetecteerbaar · Bijgewerkt voor laatste patch',
  'hero.subtitle': 'SAND Raiders of Sophie Cheats – ESP & Wallhack',
  'hero.description': "Prive Legit ESP, wallhack en loot overlays. Patch updates en Discord support.",
  'hero.cta': 'Cheat Verkrijgen',
  'hero.features': 'Functies Bekijken',
  'hero.trust': 'Windows 10 & 11 · Steam · Easy Anti-Cheat · Extern & Ondetecteerbaar',
  'meta.title': 'Sand Cheats – #1 Ondetecteerbare ESP & Wallhack',
  'meta.description': "De #1 ondetecteerbare cheat voor Sand Cheats. volledige ESP, wallhack, buit-highlights. Volledig extern en Easy Anti-Cheat-veilig.",
 },
 it: {
  'nav.home': 'Home',
  'nav.blog': 'Blog',
  'nav.buy': 'Acquista',
  'hero.status': 'Non rilevabile · Aggiornato per ultima patch',
  'hero.subtitle': 'SAND Raiders of Sophie Cheats – ESP & Wallhack',
  'hero.description': "ESP Legit privato, wallhack e overlay bottino. Aggiornamenti e supporto Discord.",
  'hero.cta': 'Ottieni Il Cheat',
  'hero.features': 'Vedi Funzionalita',
  'hero.trust': 'Windows 10 & 11 · Steam · Easy Anti-Cheat · Esterno & Non Rilevabile',
  'meta.title': 'Sand Cheats – #1 ESP & Wallhack Non Rilevabile',
  'meta.description': 'Il cheat #1 non rilevabile per Sand Cheats. ESP completo, wallhack, evidenziazione bottino. Completamente esterno e Easy Anti-Cheat-sicuro.',
 },
 ar: {
  'nav.home': 'الرئيسية',
  'nav.blog': 'المدونة',
  'nav.buy': 'شراء',
  'hero.status': 'غير قابل للكشف · محدث لآخر تحديث',
  'hero.subtitle': 'SAND Raiders of Sophie Cheats – ESP وولهاك',
  'hero.description': 'ESP شرعي خاص، ولهاك وتراكبات غنائم. تحديثات ودعم Discord.',
  'hero.cta': 'احصل على الغش',
  'hero.features': 'عرض المميزات',
  'hero.trust': 'Windows 10 & 11 · Steam · Easy Anti-Cheat · خارجي وغير قابل للكشف',
  'meta.title': 'Sand Cheats – #1 ESP وولهاك غير قابل للكشف',
  'meta.description': 'الغش #1 غير القابل للكشف للعبة Sand Cheats. ESP كامل، ولهاك، تمييز الغنائم. خارجي بالكامل وآمن من Easy Anti-Cheat.',
 },
 th: {
  'nav.home': 'หน้าหลัก',
  'nav.blog': 'บล็อก',
  'nav.buy': 'ซื้อ',
  'hero.status': 'ตรวจไม่พบ · อัปเดตสำหรับแพทช์ล่าสุด',
  'hero.subtitle': 'SAND Raiders of Sophie Cheats – ESP & วอลแฮค',
  'hero.description': 'ESP แบบ Legit ส่วนตัว, วอลแฮค และโอเวอร์เลย์ลูท อัปเดตแพทช์และซัพพอร์ต Discord',
  'hero.cta': 'รับโกง',
  'hero.features': 'ดูฟีเจอร์',
  'hero.trust': 'Windows 10 & 11 · Steam · Easy Anti-Cheat · ภายนอก & ตรวจไม่พบ',
  'meta.title': 'Sand Cheats – #1 ESP & วอลแฮคตรวจไม่พบ',
  'meta.description': 'โกง #1 ตรวจไม่พบสำหรับ Sand Cheats ของ ESP เต็มรูปแบบ, วอลแฮค, ไฮไลท์ลูท ภายนอกทั้งหมดและปลอดภัยจาก Easy Anti-Cheat',
 },
 vi: {
  'nav.home': 'Trang Chu',
  'nav.blog': 'Blog',
  'nav.buy': 'Mua',
  'hero.status': 'Khong bi phat hien · Cap nhat cho ban va moi nhat',
  'hero.subtitle': 'SAND Raiders of Sophie Cheats – ESP & Wallhack',
  'hero.description': 'ESP Legit rieng, wallhack va overlay loot. Cap nhat patch va ho tro Discord.',
  'hero.cta': 'Nhan Hack',
  'hero.features': 'Xem Tinh Nang',
  'hero.trust': 'Windows 10 & 11 · Steam · Easy Anti-Cheat · Ben Ngoai & Khong Bi Phat Hien',
  'meta.title': 'Sand Cheats – #1 ESP & Wallhack Khong Bi Phat Hien',
  'meta.description': 'Hack #1 khong bi phat hien cho Sand Cheats. ESP day du, wallhack, lam noi bat chien loi pham. Hoan toan ben ngoai va an toan voi Easy Anti-Cheat.',
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
  document.documentElement.lang = newLang === 'zh' ? 'zh' : newLang;
  document.documentElement.dir = newLang === 'ar' ? 'rtl' : 'ltr';
  updateMetaTags(newLang);
 };

 useEffect(() => {
  document.documentElement.lang = lang === 'zh' ? 'zh' : lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  updateMetaTags(lang);
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
