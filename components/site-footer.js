import { Brand } from './brand';
import { T, TLink } from './language';

export function SiteFooter() {
  return <footer><div className="container footer-main"><Brand /><div className="footer-links"><TLink href="/about/" en="About us" ur="ہمارے بارے میں" /><TLink href="/activities/" en="Activities" ur="سرگرمیاں" /><TLink href="/donate/" en="Donations" ur="عطیات" /><TLink href="/contact/" en="Contact" ur="رابطہ" /></div></div><div className="container footer-bottom"><T en="Kakakhel Welfare Association · Pakistan" ur="کاکا خیل ویلفیئر ایسوسی ایشن · پاکستان" /><span lang="ur">خدمتِ انسانیت، عزت کے ساتھ</span></div></footer>;
}
