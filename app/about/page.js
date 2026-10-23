import { InformationSection, InformationCard } from '../../components/page-information';
import { T, TLink } from '../../components/language';
import { Icon } from '../../components/icon';
import { Breadcrumb } from '../../components/breadcrumb';

export const metadata = { title: 'About us' + ' | Kakakhel Welfare Association', description: 'Learn about Kakakhel Welfare Association and our mission to serve humanity in Pakistan.' };

export default function Page() {
  return <>
    <Breadcrumb en="About us" ur="ہمارے بارے میں" />
      <section className="section container mission" id="mission">
        <div><T as="p" className="eyebrow" en="ABOUT US" ur="ہمارے بارے میں" /><T as="h1" en="About our association" ur="ہماری ایسوسی ایشن کے بارے میں" /></div>
        <div className="mission-copy"><T as="p" className="large" en="We are a Pakistan-based welfare association with a commitment to serving humanity." ur="ہم پاکستان میں قائم ایک فلاحی ایسوسی ایشن ہیں، جس کا مقصد انسانیت کی خدمت ہے۔" /><T as="p" en="We want to connect people who can help with people who need support. We believe that welfare work should be practical, respectful, and accountable to the community." ur="ہم مدد کرنے والوں کو اُن لوگوں سے جوڑنا چاہتے ہیں جنہیں تعاون کی ضرورت ہے۔ ہمارے نزدیک فلاحی کام عملی، باعزت اور معاشرے کے سامنے جوابدہ ہونا چاہیے۔" /><div className="mission-principle"><Icon name="check" /><T en="Our purpose: service to humanity, with dignity for everyone." ur="ہمارا مقصد: ہر انسان کے وقار کا خیال رکھتے ہوئے خدمتِ انسانیت۔" /></div></div>
      </section>
    <InformationSection title="What we stand for" translation="ہمارا عزم">
      <div className="information-grid two-columns">
        <InformationCard title="Our mission" translation="ہمارا مشن" text="To bring people together for practical welfare work in Pakistan, supporting those in need while respecting their dignity." textUr="پاکستان میں عملی فلاحی کاموں کے لیے لوگوں کو متحد کرنا اور ضرورت مندوں کی عزتِ نفس کا خیال رکھتے ہوئے ان کی مدد کرنا۔" />
        <InformationCard title="Our vision" translation="ہمارا خواب" text="A caring community where people do not have to face hardship alone, and where everyone can contribute to the wellbeing of others." textUr="ایک ایسا ہمدرد معاشرہ جہاں مشکلات میں کوئی تنہا نہ ہو اور ہر فرد دوسروں کی بھلائی میں اپنا حصہ ڈال سکے۔" />
      </div>
      <T as="p" className="information-note" en="Service without discrimination, respect for families, and responsible use of support are the values we want our work to reflect." ur="بلا امتیاز خدمت، خاندانوں کا احترام اور تعاون کا ذمہ دارانہ استعمال وہ اقدار ہیں جنہیں ہم اپنے کام کی بنیاد بنانا چاہتے ہیں۔" />
      <TLink className="text-link" href="/programs/" en="Explore our welfare priorities →" ur="ہماری فلاحی ترجیحات دیکھیں ←" />
    </InformationSection>
  </>;
}
