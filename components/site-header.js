'use client';

import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import { TLink, useLanguage } from './language';
import { Brand } from './brand';

const links = [
  ['/', 'Home', 'صفحۂ اول'],
  ['/about/', 'About us', 'ہمارے بارے میں'],
  ['/programs/', 'Programs', 'فلاحی پروگرام'],
  ['/activities/', 'Activities', 'سرگرمیاں'],
  ['/transparency/', 'Transparency', 'شفافیت'],
  ['/contact/', 'Contact', 'رابطہ'],
];

export function SiteHeader() {
  const { language, toggleLanguage } = useLanguage();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const menuButton = useRef(null);
  const header = useRef(null);
  useEffect(() => { setOpen(false); }, [pathname]);
  useEffect(() => {
    function closeWithEscape(event) {
      if (event.key === 'Escape') { setOpen(false); menuButton.current?.focus(); }
    }
    function closeOutside(event) { if (!header.current?.contains(event.target)) setOpen(false); }
    function closeOnResize() { if (window.innerWidth > 720) setOpen(false); }
    document.addEventListener('keydown', closeWithEscape);
    document.addEventListener('pointerdown', closeOutside);
    window.addEventListener('resize', closeOnResize);
    return () => {
      document.removeEventListener('keydown', closeWithEscape);
      document.removeEventListener('pointerdown', closeOutside);
      window.removeEventListener('resize', closeOnResize);
    };
  }, []);
  return <header ref={header} className={open ? 'site-header menu-is-open' : 'site-header'}>
    <Brand />
    <nav id="main-navigation" aria-label={language === 'ur' ? 'مرکزی مینو' : 'Main navigation'}>
      {links.map(([href, en, ur]) => <TLink key={href} href={href} aria-current={(pathname?.replace(/\/$/, '') || '/') === (href.replace(/\/$/, '') || '/') ? 'page' : undefined} onClick={() => setOpen(false)} en={en} ur={ur} />)}
    </nav>
    <div className="actions">
      <button id="language" onClick={toggleLanguage} aria-label={language === 'en' ? 'Switch to Urdu' : 'Switch to English'} lang={language === 'en' ? 'ur' : 'en'}>{language === 'en' ? 'اردو' : 'English'}</button>
      <TLink className="button small" href="/donate/" onClick={() => setOpen(false)} en="Donate" ur="عطیہ دیں" />
      <button ref={menuButton} className="menu-toggle" aria-controls="main-navigation" aria-expanded={open} onClick={() => setOpen(!open)} aria-label={language === 'ur' ? (open ? 'مینو بند کریں' : 'مینو کھولیں') : (open ? 'Close menu' : 'Open menu')}><span aria-hidden="true">{open ? '✕' : '☰'}</span></button>
    </div>
  </header>;
}
