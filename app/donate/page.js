import { DonationQuestions } from '../../components/page-information';
import { T, TLink } from '../../components/language';
import { Icon } from '../../components/icon';
import { Breadcrumb } from '../../components/breadcrumb';
import { DonationPanel } from '../../components/donation-panel';

export const metadata = { title: 'Donate' + ' | Kakakhel Welfare Association', description: 'Donation information and Pakistani rupee contribution options for Kakakhel Welfare Association.' };

export default function Page() {
  return <>
    <Breadcrumb en="Donate" ur="عطیات" />
      <section className="donate section" id="donate"><div className="container donate-grid"><div>
        <T as="p" className="eyebrow" en="SUPPORT THE ASSOCIATION" ur="ایسوسی ایشن کے ساتھ تعاون" /><T as="h1" en="Help us support<br />families in need." ur="ضرورت مند خاندانوں<br />کی مدد میں ساتھ دیں۔" /><T as="p" en="Your contribution can support community welfare. Select an amount in Pakistani rupees and check the available donation information." ur="آپ کا تعاون فلاحی کاموں میں مددگار ہو سکتا ہے۔ پاکستانی روپے میں رقم منتخب کریں اور عطیے کی دستیاب معلومات دیکھیں۔" />
        <div className="payment-note"><Icon name="check" /><T en="Official payment details will be published here before donations open." ur="عطیات شروع ہونے سے پہلے سرکاری ادائیگی کی تفصیلات یہاں شائع کی جائیں گی۔" /></div>
      </div><DonationPanel /></div></section>
    <DonationQuestions />
  </>;
}
