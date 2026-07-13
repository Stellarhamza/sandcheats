'use client';
import { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useI18n, LANGUAGES } from '../i18n';

const MOBILE_MQ = '(max-width: 920px)';
const ZADEYO_STORE = 'https://zadeyo.com/go/QRH?to=%2Fproducts%2Fsand-raiders-of-sophie';

export function Navbar() {
  const location = useLocation();
  const { lang, setLang, t } = useI18n();
  const [langOpen, setLangOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== 'undefined' ? window.matchMedia(MOBILE_MQ).matches : false
  );
  const langRef = useRef<HTMLDivElement>(null);

  const NAV_LINKS = [
    { label: t('nav.home'), to: '/' },
    { label: t('nav.blog'), to: '/blog' },
    { label: t('nav.buy'), to: '/buy' },
  ];

  useEffect(() => {
    const mq = window.matchMedia(MOBILE_MQ);
    const onChange = () => {
      setIsMobile(mq.matches);
      if (!mq.matches) setMenuOpen(false);
    };
    onChange();
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const navPad = {
    paddingLeft: 'max(16px, env(safe-area-inset-left))',
    paddingRight: 'max(16px, env(safe-area-inset-right))',
    paddingTop: 'max(10px, env(safe-area-inset-top))',
    paddingBottom: '10px',
  } as const;

  const linkStyle = (isActive: boolean) => ({
    fontFamily: 'var(--font-body)',
    fontSize: '0.875rem',
    fontWeight: isActive ? 600 : 500,
    color: isActive ? 'var(--text-primary)' : 'var(--text-muted)',
    textDecoration: 'none',
    transition: 'color 0.2s ease',
    letterSpacing: '0.01em',
    position: 'relative' as const,
  });

  const currentLang = LANGUAGES.find(l => l.code === lang) || LANGUAGES[0];

  return (
    <>
      <nav
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          minHeight: 56,
          zIndex: 100,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 12,
          ...navPad,
          background: 'transparent',
          borderBottom: '1px solid rgba(168,85,247,0.07)',
        }}
      >
        <Link to="/" aria-label="Sand Cheats home" style={{ textDecoration: 'none', flexShrink: 0, minWidth: 0 }}>
          <span style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 900,
            fontSize: 'clamp(0.95rem, 3.2vw, 1.35rem)',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            lineHeight: 1,
            background: 'linear-gradient(135deg, #c084fc 0%, #a855f7 50%, #7c3aed 100%)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            whiteSpace: 'nowrap',
          }}>
            Sand Cheats
          </span>
        </Link>

        {!isMobile && (
          <div style={{
            position: 'absolute',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            alignItems: 'center',
            gap: 'clamp(16px, 2.5vw, 40px)',
            maxWidth: 'min(52vw, 420px)',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}>
            {NAV_LINKS.map(({ label, to }) => {
              const basePath = to.replace(/#.*/, '') || '/';
              const isActive = location.pathname === basePath || (basePath !== '/' && location.pathname.startsWith(basePath));
              const ls = linkStyle(isActive);
              const indicator = isActive ? (
                <span style={{
                  position: 'absolute',
                  bottom: '-4px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '16px',
                  height: '2px',
                  background: 'var(--accent)',
                  borderRadius: '2px',
                }} />
              ) : null;
              return (
                <Link
                  key={to}
                  to={to}
                  style={ls}
                  onMouseEnter={e => ((e.target as HTMLElement).style.color = 'var(--text-primary)')}
                  onMouseLeave={e => ((e.target as HTMLElement).style.color = isActive ? 'var(--text-primary)' : 'var(--text-muted)')}
                >
                  {label}{indicator}
                </Link>
              );
            })}
          </div>
        )}

        <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexShrink: 0, marginLeft: 'auto' }}>
          {!isMobile && (
            <div ref={langRef} style={{ position: 'relative' }}>
              <button
                type="button"
                onClick={() => setLangOpen(!langOpen)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '8px 12px',
                  minHeight: 44,
                  background: 'rgba(168,85,247,0.06)',
                  border: '1px solid var(--border-dim)',
                  borderRadius: 'var(--radius-md)',
                  cursor: 'pointer',
                  transition: 'var(--transition-fast)',
                  color: 'var(--text-secondary)',
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.75rem',
                  fontWeight: 500,
                  letterSpacing: '0.02em',
                }}
                aria-label="Select language"
                aria-expanded={langOpen}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
                <span>{currentLang.label}</span>
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" style={{ transition: 'transform 0.2s', transform: langOpen ? 'rotate(180deg)' : 'rotate(0)' }}>
                  <path d="M2 3.5L5 6.5L8 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>

              {langOpen && (
                <div style={{
                  position: 'absolute',
                  top: 'calc(100% + 8px)',
                  right: 0,
                  minWidth: '180px',
                  maxHeight: 'min(320px, 70dvh)',
                  overflowY: 'auto',
                  background: 'var(--bg-elevated)',
                  border: '1px solid var(--border-dim)',
                  borderRadius: 'var(--radius-lg)',
                  padding: '6px',
                  zIndex: 200,
                  boxShadow: '0 8px 40px rgba(0,0,0,0.5)',
                  animation: 'fadeIn 0.15s ease',
                  scrollbarWidth: 'thin',
                  scrollbarColor: 'var(--border-dim) transparent',
                }}>
                  {LANGUAGES.map((language) => (
                    <button
                      type="button"
                      key={language.code}
                      onClick={() => { setLang(language.code); setLangOpen(false); }}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        width: '100%',
                        padding: '10px 12px',
                        minHeight: 44,
                        background: lang === language.code ? 'var(--accent-dim)' : 'transparent',
                        border: 'none',
                        borderRadius: 'var(--radius-sm)',
                        cursor: 'pointer',
                        transition: 'var(--transition-fast)',
                        color: lang === language.code ? 'var(--accent-bright)' : 'var(--text-secondary)',
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.8125rem',
                        fontWeight: lang === language.code ? 600 : 400,
                        textAlign: 'left',
                      }}
                    >
                      <span style={{ fontSize: '1rem', lineHeight: 1 }}>{language.flag}</span>
                      <span>{language.label}</span>
                      {lang === language.code && (
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" style={{ marginLeft: 'auto' }}>
                          <path d="M2 6l3 3 5-5" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}

          <a
            href="https://discord.gg/zadeyo"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Join our Discord"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 44,
              height: 44,
              borderRadius: 'var(--radius-md)',
              background: 'rgba(168,85,247,0.06)',
              border: '1px solid var(--border-dim)',
              color: 'var(--text-secondary)',
              transition: 'var(--transition-fast)',
              textDecoration: 'none',
              flexShrink: 0,
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLAnchorElement).style.borderColor = '#5865F2';
              (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(88,101,242,0.12)';
              (e.currentTarget as HTMLAnchorElement).style.color = '#5865F2';
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLAnchorElement).style.borderColor = 'var(--border-dim)';
              (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(168,85,247,0.06)';
              (e.currentTarget as HTMLAnchorElement).style.color = 'var(--text-secondary)';
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189z"/>
            </svg>
          </a>

          {isMobile && (
            <button
              type="button"
              onClick={() => setMenuOpen(o => !o)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: 44,
                height: 44,
                borderRadius: 'var(--radius-md)',
                background: menuOpen ? 'rgba(168,85,247,0.14)' : 'rgba(168,85,247,0.06)',
                border: '1px solid var(--border-dim)',
                color: 'var(--text-primary)',
                cursor: 'pointer',
              }}
            >
              {menuOpen ? (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
                </svg>
              ) : (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
                </svg>
              )}
            </button>
          )}
        </div>
      </nav>

      {isMobile && menuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 400,
            background: 'rgba(6,4,9,0.94)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            paddingTop: 'max(72px, calc(env(safe-area-inset-top) + 56px))',
            paddingLeft: 'max(20px, env(safe-area-inset-left))',
            paddingRight: 'max(20px, env(safe-area-inset-right))',
            paddingBottom: 'max(24px, env(safe-area-inset-bottom))',
            display: 'flex',
            flexDirection: 'column',
            gap: 6,
            overflowY: 'auto',
          }}
        >
          {NAV_LINKS.map(({ label, to }) => (
            <Link
              key={to}
              to={to}
              onClick={() => setMenuOpen(false)}
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '1.125rem',
                fontWeight: 600,
                color: 'var(--text-primary)',
                textDecoration: 'none',
                padding: '16px 18px',
                borderRadius: 'var(--radius-md)',
                background: location.pathname === to || (to !== '/' && location.pathname.startsWith(to))
                  ? 'rgba(168,85,247,0.12)'
                  : 'rgba(255,255,255,0.04)',
                border: '1px solid var(--border-ghost)',
              }}
            >
              {label}
            </Link>
          ))}
          <a
            href={ZADEYO_STORE}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '1.125rem',
              fontWeight: 600,
              color: 'var(--text-primary)',
              textDecoration: 'none',
              padding: '16px 18px',
              borderRadius: 'var(--radius-md)',
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid var(--border-ghost)',
            }}
          >
            Zadeyo store
          </a>

          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.6875rem',
            fontWeight: 700,
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: 'var(--text-muted)',
            marginTop: 16,
            marginBottom: 6,
          }}>Language</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            {LANGUAGES.map((language) => (
              <button
                type="button"
                key={language.code}
                onClick={() => { setLang(language.code); setMenuOpen(false); }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  width: '100%',
                  padding: '14px 16px',
                  minHeight: 48,
                  background: lang === language.code ? 'var(--accent-dim)' : 'rgba(255,255,255,0.04)',
                  border: '1px solid var(--border-ghost)',
                  borderRadius: 'var(--radius-md)',
                  cursor: 'pointer',
                  color: lang === language.code ? 'var(--accent-bright)' : 'var(--text-secondary)',
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.9375rem',
                  textAlign: 'left',
                }}
              >
                <span style={{ fontSize: '1.15rem' }}>{language.flag}</span>
                {language.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
