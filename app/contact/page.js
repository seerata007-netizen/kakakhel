import { InformationSection, InformationCard } from '../../components/page-information';
import { T, TLink } from '../../components/language';
import { Icon } from '../../components/icon';
import { Breadcrumb } from '../../components/breadcrumb';

export const metadata = { title: 'Contact us' + ' | Kakakhel Welfare Association', description: 'Contact information for help, volunteering and donation enquiries.' };

export default function Page() {
  return <>
    <Breadcrumb en="Contact us" ur="رابطہ" />
      <section className="contact section" id="contact"><div className="container contact-grid"><div><T as="p" className="eyebrow" en="GET IN TOUCH" ur="ہم سے رابطہ کریں" /><T as="h1" en="For help, volunteering,<br />or donation enquiries." ur="مدد، رضاکارانہ خدمات<br />یا عطیات کے بارے میں رابطہ۔" /></div><div><T as="p" en="We welcome people who want to help and families who need support. The association's official contact channels will be listed here." ur="ہم مدد کرنے کے خواہش مند افراد اور تعاون کے ضرورت مند خاندانوں کو خوش آمدید کہتے ہیں۔ ایسوسی ایشن کے سرکاری رابطے یہاں درج کیے جائیں گے۔" /><T as="div" className="contact-pending" en="Phone, WhatsApp and office address: awaiting confirmation. Online help requests are not available yet." ur="فون، واٹس ایپ اور دفتر کا پتہ: تصدیق کا انتظار ہے۔ فی الحال آن لائن مدد کی درخواستیں دستیاب نہیں ہیں۔" /></div></div></section>
    <InformationSection title="How to prepare your enquiry" translation="رابطے سے پہلے یہ معلومات تیار رکھیں" intro="Once official contact details are available, a short and clear message will help explain what you need or how you would like to contribute." introUr="سرکاری رابطے دستیاب ہونے پر مختصر اور واضح پیغام سے اپنی ضرورت یا تعاون کی نوعیت سمجھانے میں آسانی ہوگی۔">
      <div className="information-grid">
        <InformationCard title="If you need help" translation="اگر آپ کو مدد درکار ہے" text="Mention your city or area, the type of help needed, and a brief description of the situation. Program availability and the next steps will need to be confirmed." textUr="اپنا شہر یا علاقہ، درکار مدد کی نوعیت اور صورتحال مختصراً بتائیں۔ پروگرام کی دستیابی اور اگلے مراحل کی تصدیق ضروری ہوگی۔" />
        <InformationCard title="If you want to volunteer" translation="اگر آپ رضاکار بننا چاہتے ہیں" text="Share your area, availability and relevant skills, such as organising supplies, teaching or helping with community coordination." textUr="اپنا علاقہ، دستیاب وقت اور متعلقہ صلاحیتیں بتائیں، جیسے سامان ترتیب دینا، پڑھانا یا کمیونٹی رابطے میں مدد دینا۔" />
        <InformationCard title="If you want to contribute" translation="اگر آپ تعاون کرنا چاہتے ہیں" text="Explain whether you would like to contribute funds, supplies or professional services. Confirm the association's current needs before making arrangements." textUr="بتائیں کہ آپ مالی تعاون، سامان یا پیشہ ورانہ خدمات دینا چاہتے ہیں۔ انتظامات کرنے سے پہلے ایسوسی ایشن کی موجودہ ضرورت کی تصدیق کریں۔" />
      </div>
      <T as="p" className="information-note" en="This website does not currently collect help applications, identity documents or medical records. Please do not post personal documents publicly." ur="یہ ویب سائٹ فی الحال مدد کی درخواستیں، شناختی دستاویزات یا طبی ریکارڈ وصول نہیں کرتی۔ اپنی ذاتی دستاویزات عوامی طور پر شائع نہ کریں۔" />
    </InformationSection>
  </>;
}
