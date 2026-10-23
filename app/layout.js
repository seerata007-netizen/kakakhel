import './globals.css';
import { LanguageProvider, T } from '../components/language';
import { SiteHeader } from '../components/site-header';
import { SiteFooter } from '../components/site-footer';

export const metadata = {
  metadataBase: new URL('https://kakakhel-welfare.bubblypark12.chatgpt.site'),
  title: 'Kakakhel Welfare Association | Serving Humanity',
  description: 'Together for a better tomorrow. Kakakhel Welfare Association serves humanity in Pakistan with compassion, dignity, and care. Available in English and Urdu.',
  openGraph: { title: 'Kakakhel Welfare Association', description: 'Together for a better tomorrow. Serving humanity in Pakistan.', locale: 'en_PK', alternateLocale: ['ur_PK'], type: 'website' },
};

export default function RootLayout({ children }) {
  return <html lang="en" dir="ltr"><head><link rel="preconnect" href="https://fonts.googleapis.com" /><link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" /><link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Noto+Naskh+Arabic:wght@400;600;700&display=swap" rel="stylesheet" /></head><body><LanguageProvider><a className="skip-link" href="#main-content">Skip to content / مرکزی مواد</a><div className="top"><div className="container top-inner"><T en="Kakakhel Welfare Association" ur="کاکا خیل ویلفیئر ایسوسی ایشن" /><span className="country"><span className="country-dot" /><T en="Pakistan" ur="پاکستان" /></span></div></div><SiteHeader /><main id="main-content">{children}</main><SiteFooter /></LanguageProvider></body></html>;
}
