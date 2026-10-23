import { InformationSection, InformationCard } from '../../components/page-information';
import { T, TLink } from '../../components/language';
import { Icon } from '../../components/icon';
import { Breadcrumb } from '../../components/breadcrumb';

export const metadata = { title: 'Activities' + ' | Kakakhel Welfare Association', description: 'Activity reports and community updates from Kakakhel Welfare Association.' };

export default function Page() {
  return <>
    <Breadcrumb en="Activities" ur="سرگرمیاں" />
      <section className="section container activities" id="activities">
        <div className="section-heading"><div><T as="p" className="eyebrow" en="ACTIVITIES & UPDATES" ur="سرگرمیاں اور خبریں" /><T as="h1" en="Activities & updates" ur="سرگرمیاں اور خبریں" /></div><TLink className="text-link" href="/transparency/" en="Our approach to transparency →" ur="شفافیت کے بارے میں جانیں ←" /></div>
        <div className="activity-empty"><div className="activity-icon"><Icon name="camera" /></div><div><T as="h3" en="Activity reports will be shared here" ur="سرگرمیوں کی رپورٹس یہاں شائع ہوں گی" /><T as="p" en="Each update will include the date, location, work carried out, and original photographs. The association has not supplied activity reports for the website yet." ur="ہر رپورٹ میں تاریخ، مقام، کیے گئے کام اور اصل تصاویر شامل ہوں گی۔ ایسوسی ایشن نے ابھی ویب سائٹ کے لیے سرگرمیوں کی رپورٹس فراہم نہیں کیں۔" /></div><T as="span" className="status-label" en="Updates pending" ur="تفصیلات کا انتظار" /></div>
      </section>
    <InformationSection title="What to expect in an activity report" translation="سرگرمی کی رپورٹ میں کیا ہوگا؟">
      <div className="information-grid">
        <InformationCard title="Date & location" translation="تاریخ اور مقام" text="When the activity took place and the area or community it served." textUr="سرگرمی کب ہوئی اور کس علاقے یا کمیونٹی کے لیے کام کیا گیا۔" />
        <InformationCard title="Work carried out" translation="کیے گئے کام کی تفصیل" text="The purpose of the activity, the assistance provided and a clear summary of the outcome." textUr="سرگرمی کا مقصد، فراہم کردہ مدد اور حاصل ہونے والے نتائج کی واضح تفصیل۔" />
        <InformationCard title="Photos & resources" translation="تصاویر اور وسائل" text="Original photographs and available information about supplies or funds used, with respect for the privacy of families." textUr="خاندانوں کی نجی زندگی کا احترام کرتے ہوئے اصل تصاویر اور استعمال شدہ سامان یا فنڈز کی دستیاب معلومات۔" />
      </div>
      <TLink className="text-link information-link" href="/contact/" en="Interested in volunteering? See contact information →" ur="رضاکار بننا چاہتے ہیں؟ رابطے کی معلومات دیکھیں ←" />
    </InformationSection>
  </>;
}
