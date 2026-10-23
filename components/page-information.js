import { T, TLink } from './language';

export function InformationSection({ title, translation, intro, introUr, children }) {
  return <section className="container information-section"><T as="h2" en={title} ur={translation} />{intro && <T as="p" className="information-intro" en={intro} ur={introUr} />}{children}</section>;
}

export function InformationCard({ title, translation, text, textUr }) {
  return <article className="information-card"><T as="h3" en={title} ur={translation} /><T as="p" en={text} ur={textUr} /></article>;
}

export function DonationQuestions() {
  const questions = [
    ['Can I donate through this website now?', 'کیا میں ابھی اس ویب سائٹ کے ذریعے عطیہ دے سکتا ہوں؟', 'Not yet. The amount selector helps you plan your contribution. Payments will open only after official account details are available.', 'ابھی نہیں۔ رقم کا انتخاب آپ کو اپنے عطیے کی منصوبہ بندی میں مدد دیتا ہے۔ سرکاری اکاؤنٹ کی تفصیلات دستیاب ہونے کے بعد ہی ادائیگیاں شروع ہوں گی۔'],
    ['Can I give supplies or volunteer instead?', 'کیا میں سامان یا رضاکارانہ خدمات دے سکتا ہوں؟', 'You can enquire about contributing supplies, time, or skills once official contact channels are published. Please confirm current needs before arranging a collection or delivery.', 'سرکاری رابطے دستیاب ہونے پر آپ سامان، وقت یا اپنی صلاحیتوں کے ذریعے تعاون کے بارے میں پوچھ سکتے ہیں۔ سامان جمع کرنے یا پہنچانے سے پہلے موجودہ ضرورت کی تصدیق کریں۔'],
    ['Will I receive a donation receipt?', 'کیا مجھے عطیے کی رسید ملے گی؟', 'Receipt arrangements have not been confirmed yet. Before making a transfer, check the payment instructions and how the association will acknowledge your contribution.', 'رسید کے انتظام کی ابھی تصدیق نہیں ہوئی۔ رقم بھیجنے سے پہلے ادائیگی کی ہدایات اور عطیے کی وصولی کی تصدیق کا طریقہ جان لیں۔'],
    ['Can I donate Zakat or Sadaqah?', 'کیا میں زکوٰۃ یا صدقہ دے سکتا ہوں؟', 'Zakat and Sadaqah arrangements have not been confirmed. The association will need to publish how these contributions are accepted and allocated before you give for a specific purpose.', 'زکوٰۃ اور صدقہ وصول کرنے کے انتظام کی ابھی تصدیق نہیں ہوئی۔ کسی خاص مقصد کے لیے عطیہ دینے سے پہلے اس کی وصولی اور استعمال کی واضح معلومات دستیاب ہونا ضروری ہیں۔'],
  ];
  return <InformationSection title="Donation questions" translation="عطیات کے بارے میں سوالات"><div className="faq-list">{questions.map(([en, ur, answer, answerUr]) => <details key={en}><summary><T en={en} ur={ur} /><span className="faq-plus" aria-hidden="true">+</span></summary><T as="p" en={answer} ur={answerUr} /></details>)}</div><TLink className="text-link information-link" href="/transparency/" en="Read our donor information →" ur="عطیہ دہندگان کے لیے معلومات پڑھیں ←" /></InformationSection>;
}
