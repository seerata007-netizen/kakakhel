import Image from 'next/image';
import Link from 'next/link';
import { T, TLink } from '../components/language';
import { Icon } from '../components/icon';

export default function Home() {
  return <>
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <T as="p" className="eyebrow" en="SERVICE · DIGNITY · COMMUNITY" ur="خدمت · عزت · تعاون" />
            <T as="h1" en="Serving humanity.<br />Here in Pakistan." ur="خدمتِ انسانیت،<br />اپنے پاکستان میں۔" />
            <T as="p" className="hero-description" en="Kakakhel Welfare Association brings people together to help families in need. Our purpose is simple: to serve humanity and support our community with respect and care." ur="کاکا خیل ویلفیئر ایسوسی ایشن ضرورت مند خاندانوں کی مدد کے لیے لوگوں کو اکٹھا کرتی ہے۔ ہمارا مقصد انسانیت کی خدمت اور عزت و خلوص کے ساتھ اپنے معاشرے کا سہارا بننا ہے۔" />
            <div className="hero-links"><TLink className="button" href="/donate/" en="Support our work" ur="ہمارے کام میں تعاون کریں" /><TLink className="button button-outline" href="/about/" en="About the association" ur="ایسوسی ایشن کے بارے میں" /></div>
            <p className="hero-urdu" lang="ur" dir="rtl">مل کر ایک بہتر کل کی جانب</p>
          </div>
          <div className="hero-art">
            <Image className="hero-emblem" src="/kakakhel-logo.svg" alt="Kakakhel Welfare Association emblem: mountains, people, supporting hands and a handshake" width={390} height={390} priority unoptimized />
            <T as="p" className="emblem-caption" en="Together for a better tomorrow" ur="مل کر ایک بہتر کل کی جانب" />
          </div>
        </div>
      </section>
      <div className="container help-strip">
        <Link href="/donate/"><Icon name="heart" /><span><T as="strong" en="Make a donation" ur="عطیہ دیں" /><T as="small" en="Contribute to community welfare" ur="فلاحی کاموں میں اپنا حصہ ڈالیں" /></span><span className="strip-arrow" aria-hidden="true">↗</span></Link>
        <Link href="/activities/"><Icon name="camera" /><span><T as="strong" en="Our activities" ur="ہماری سرگرمیاں" /><T as="small" en="Read reports and community updates" ur="رپورٹس اور خبریں دیکھیں" /></span><span className="strip-arrow" aria-hidden="true">↗</span></Link>
        <Link href="/contact/"><Icon name="health" /><span><T as="strong" en="Need assistance?" ur="مدد درکار ہے؟" /><T as="small" en="Find our contact information" ur="رابطے کی معلومات دیکھیں" /></span><span className="strip-arrow" aria-hidden="true">↗</span></Link>
      </div>
    <section className="container home-purpose">
      <div><T as="p" className="eyebrow" en="OUR PURPOSE" ur="ہمارا مقصد" /><T as="h2" en="Helping people, with respect." ur="لوگوں کی مدد، عزت کے ساتھ۔" /><T as="p" en="Our aim is to support families facing hardship and bring our community together through welfare work. Food, health and education are the areas we hope to focus on." ur="ہمارا مقصد مشکلات کا سامنا کرنے والے خاندانوں کا سہارا بننا اور فلاحی کاموں کے ذریعے اپنے معاشرے کو جوڑنا ہے۔ خوراک، صحت اور تعلیم ہماری مجوزہ ترجیحات ہیں۔" /><TLink className="text-link" href="/about/" en="Learn about our association →" ur="ہماری ایسوسی ایشن کے بارے میں جانیں ←" /></div>
      <div className="home-priorities"><T as="p" className="home-priorities-title" en="Our welfare priorities" ur="ہماری فلاحی ترجیحات" />
        <Link href="/programs/"><Icon name="food" /><T en="Food & basic needs" ur="راشن اور بنیادی ضروریات" /><span aria-hidden="true">→</span></Link>
        <Link href="/programs/"><Icon name="health" /><T en="Medical assistance" ur="طبی امداد" /><span aria-hidden="true">→</span></Link>
        <Link href="/programs/"><Icon name="education" /><T en="Education support" ur="تعلیمی معاونت" /><span aria-hidden="true">→</span></Link>
      </div>
    </section>
  </>;
}
