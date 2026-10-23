import { InformationSection } from '../../components/page-information';
import { T, TLink } from '../../components/language';
import { Icon } from '../../components/icon';
import { Breadcrumb } from '../../components/breadcrumb';

export const metadata = { title: 'Transparency' + ' | Kakakhel Welfare Association', description: 'Accountability, association information and donor reports from Kakakhel Welfare Association.' };

export default function Page() {
  return <>
    <Breadcrumb en="Transparency" ur="شفافیت" />
      <section className="section container trust" id="trust"><div className="section-heading"><div><T as="p" className="eyebrow" en="DONOR INFORMATION" ur="عطیہ دہندگان کے لیے معلومات" /><T as="h1" en="Trust comes from clear information." ur="واضح معلومات سے اعتماد بنتا ہے۔" /></div></div>
        <div className="trust-grid">
          <div><span className="trust-number">01</span><T as="h3" en="Verified account details" ur="تصدیق شدہ اکاؤنٹ کی تفصیلات" /><T as="p" en="Donation information will identify the account holder and payment method so you can check before transferring money." ur="عطیات کی معلومات میں اکاؤنٹ ہولڈر اور ادائیگی کا طریقہ واضح ہوگا تاکہ آپ رقم بھیجنے سے پہلے جانچ کر سکیں۔" /></div>
          <div><span className="trust-number">02</span><T as="h3" en="Reports on welfare work" ur="فلاحی کاموں کی رپورٹس" /><T as="p" en="Activity updates and donation-use reports will be published when the association provides them." ur="ایسوسی ایشن کی جانب سے فراہم کردہ سرگرمیوں اور عطیات کے استعمال کی رپورٹس شائع کی جائیں گی۔" /></div>
          <div><span className="trust-number">03</span><T as="h3" en="Association information" ur="ایسوسی ایشن کی معلومات" /><T as="p" en="Team, registration, and office details are awaiting confirmation and will be added when available." ur="ٹیم، رجسٹریشن اور دفتر کی تفصیلات کی تصدیق باقی ہے۔ دستیاب ہونے پر یہ معلومات شامل کی جائیں گی۔" /></div>
        </div>
      </section>
    <InformationSection title="Information available on this website" translation="ویب سائٹ پر معلومات کی موجودہ حیثیت" intro="We distinguish our stated purpose from documents and details that still need confirmation." introUr="ہمارا بیان کردہ مقصد واضح ہے، جبکہ درج ذیل دستاویزات اور تفصیلات کی تصدیق ابھی باقی ہے۔">
      <div className="information-status-list">
        <div><T as="strong" en="Mission and welfare priorities" ur="مشن اور فلاحی ترجیحات" /><T as="span" className="information-status published" en="Published" ur="شائع شدہ" /></div>
        <div><T as="strong" en="Registration and team details" ur="رجسٹریشن اور ٹیم کی تفصیلات" /><T as="span" className="information-status" en="Awaiting confirmation" ur="تصدیق کا انتظار" /></div>
        <div><T as="strong" en="Donation account information" ur="عطیات کے اکاؤنٹ کی معلومات" /><T as="span" className="information-status" en="Not yet available" ur="ابھی دستیاب نہیں" /></div>
        <div><T as="strong" en="Activity and financial reports" ur="سرگرمیوں اور مالی معاملات کی رپورٹس" /><T as="span" className="information-status" en="Awaiting documents" ur="دستاویزات کا انتظار" /></div>
      </div>
      <T as="p" className="information-note" en="Questions about a particular contribution or activity should be directed to the association through its official contact channels once published." ur="کسی خاص عطیے یا سرگرمی کے بارے میں سوالات کے لیے سرکاری رابطے شائع ہونے کے بعد ایسوسی ایشن سے براہِ راست رابطہ کریں۔" />
    </InformationSection>
  </>;
}
