import { InformationSection, InformationCard } from '../../components/page-information';
import { T, TLink } from '../../components/language';
import { Icon } from '../../components/icon';
import { Breadcrumb } from '../../components/breadcrumb';

export const metadata = { title: 'Welfare programs' + ' | Kakakhel Welfare Association', description: 'Explore the welfare priorities of Kakakhel Welfare Association in Pakistan.' };

const programs = [
  { icon: 'food', en: 'Food & basic needs', ur: 'راشن اور بنیادی ضروریات', description: 'Support for families who need help with food and household essentials.', translation: 'ایسے خاندانوں کی مدد جنہیں راشن اور روزمرہ ضروریات کے لیے تعاون درکار ہو۔' },
  { icon: 'health', en: 'Medical assistance', ur: 'طبی امداد', description: 'Helping people who cannot afford essential treatment and medicines.', translation: 'ایسے افراد کی مدد جو ضروری علاج اور ادویات کے اخراجات برداشت نہیں کر سکتے۔' },
  { icon: 'education', en: 'Education support', ur: 'تعلیمی معاونت', description: 'Supporting students with the essentials they need to continue learning.', translation: 'طلبہ کو تعلیم جاری رکھنے کے لیے درکار بنیادی وسائل میں مدد فراہم کرنا۔' },
];

export default function Page() {
  return <>
    <Breadcrumb en="Welfare programs" ur="فلاحی پروگرام" />
      <section className="work section" id="work"><div className="container">
        <div className="section-heading"><div><T as="p" className="eyebrow" en="OUR WELFARE PRIORITIES" ur="ہماری فلاحی ترجیحات" /><T as="h1" en="Our welfare programs" ur="ہمارے فلاحی پروگرام" /></div></div>
        <T as="p" className="section-intro" en="These are the areas we aim to support. Details of active programs will be published as they are confirmed." ur="یہ وہ شعبے ہیں جن میں ہم مدد کا ارادہ رکھتے ہیں۔ فعال پروگراموں کی تفصیلات تصدیق کے بعد شائع کی جائیں گی۔" />
        <div className="programs">{programs.map(program => <article key={program.icon}><div className="program-icon"><Icon name={program.icon} /></div><T as="h3" en={program.en} ur={program.ur} /><T as="p" en={program.description} ur={program.translation} /><TLink className="text-link" href="/contact/" en="Ask about support →" ur="معاونت کے بارے میں رابطہ کریں ←" /></article>)}</div>
      </div></section>
    <InformationSection title="What support could include" translation="معاونت کی ممکنہ صورتیں" intro="These examples explain our intended areas of work; they are not a list of currently available services." introUr="یہ مثالیں ہمارے مجوزہ کام کی وضاحت کرتی ہیں؛ یہ اس وقت دستیاب خدمات کی فہرست نہیں ہیں۔">
      <div className="information-grid">
        <InformationCard title="Household essentials" translation="گھریلو ضروریات" text="Basic ration items such as flour, rice, pulses and cooking oil, depending on the needs identified and resources available." textUr="آٹا، چاول، دالیں اور خوردنی تیل جیسی بنیادی اشیا، جن کی فراہمی ضروریات اور دستیاب وسائل کے مطابق ہو سکتی ہے۔" />
        <InformationCard title="Treatment-related costs" translation="علاج سے متعلق اخراجات" text="Possible help with prescribed medicines, essential tests or treatment expenses, subject to a confirmed program and available funds." textUr="تصدیق شدہ پروگرام اور دستیاب وسائل کے تحت تجویز کردہ ادویات، ضروری ٹیسٹ یا علاج کے اخراجات میں ممکنہ تعاون۔" />
        <InformationCard title="Learning essentials" translation="تعلیمی ضروریات" text="Possible support with books, stationery, uniforms or education expenses, based on a student's needs and program availability." textUr="طالب علم کی ضرورت اور پروگرام کی دستیابی کے مطابق کتابوں، اسٹیشنری، یونیفارم یا تعلیمی اخراجات میں ممکنہ مدد۔" />
      </div>
      <T as="p" className="information-note" en="Eligibility, locations and the request process will be shared with each confirmed program. Assistance cannot be guaranteed before these details are available." ur="ہر تصدیق شدہ پروگرام کے ساتھ اہلیت، مقام اور درخواست کا طریقہ بتایا جائے گا۔ یہ تفصیلات دستیاب ہونے سے پہلے مدد کی ضمانت نہیں دی جا سکتی۔" />
    </InformationSection>
  </>;
}
