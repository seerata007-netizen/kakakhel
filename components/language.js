'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { createContext, useContext, useEffect, useState } from 'react';

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('en');
  const pathname = usePathname();
  useEffect(() => {
    try { if (localStorage.getItem('kw-language') === 'ur') setLanguage('ur'); } catch {}
  }, []);
  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ur' ? 'rtl' : 'ltr';
    const titles = { '/': ['Home', 'صفحۂ اول'], '/about': ['About us', 'ہمارے بارے میں'], '/programs': ['Welfare programs', 'فلاحی پروگرام'], '/activities': ['Activities', 'سرگرمیاں'], '/donate': ['Donate', 'عطیات'], '/transparency': ['Transparency', 'شفافیت'], '/contact': ['Contact us', 'رابطہ'] };
    const key = pathname?.replace(/\/$/, '') || '/';
    const title = titles[key]?.[language === 'ur' ? 1 : 0];
    document.title = [title, language === 'ur' ? 'کاکا خیل ویلفیئر ایسوسی ایشن' : 'Kakakhel Welfare Association'].filter(Boolean).join(' | ');
  }, [language, pathname]);
  function toggleLanguage() {
    const next = language === 'en' ? 'ur' : 'en';
    setLanguage(next);
    try { localStorage.setItem('kw-language', next); } catch {}
  }
  return <LanguageContext.Provider value={{ language, toggleLanguage }}>{children}</LanguageContext.Provider>;
}

export function useLanguage() { return useContext(LanguageContext); }

// Translations are trusted local copy, never visitor-supplied HTML.
export function T({ as: Tag = 'span', en, ur, ...props }) {
  const { language } = useLanguage();
  return <Tag {...props} dangerouslySetInnerHTML={{ __html: language === 'ur' ? ur : en }} />;
}

export function TLink({ en, ur, children, ...props }) {
  return <Link {...props}><T en={en} ur={ur} />{children}</Link>;
}
