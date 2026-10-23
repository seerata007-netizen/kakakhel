'use client';

import { useState } from 'react';
import { T, useLanguage } from './language';

const amounts = [1000, 2500, 5000, 10000];

export function DonationPanel() {
  const { language } = useLanguage();
  const [amount, setAmount] = useState('2500');
  const [details, setDetails] = useState(false);
  function submit(event) { event.preventDefault(); setDetails(true); }
  return <form className="donation-panel" onSubmit={submit}>
    <T as="h3" en="Make a contribution" ur="اپنا حصہ ڈالیں" />
    <fieldset><T as="legend" en="Choose an amount · PKR" ur="رقم منتخب کریں · پاکستانی روپے" />
      <div className="amounts" dir="ltr">{amounts.map(value => <button key={value} type="button" data-amount={value} aria-pressed={Number(amount) === value} className={Number(amount) === value ? 'selected' : ''} onClick={() => { setAmount(String(value)); setDetails(false); }}>{value.toLocaleString('en-PK')}</button>)}</div>
    </fieldset>
    <T as="label" htmlFor="amount" en="Or enter your own amount" ur="یا اپنی پسند کی رقم درج کریں" />
    <div className="input-wrap" dir="ltr"><span aria-hidden="true">PKR</span><input id="amount" name="amount" type="number" inputMode="numeric" min="1" step="1" max="100000000" required value={amount} aria-label={language === 'ur' ? 'عطیے کی رقم پاکستانی روپے میں' : 'Donation amount in Pakistani rupees'} onChange={event => { setAmount(event.target.value); setDetails(false); }} /></div>
    <T as="button" type="submit" className="button full" en="View donation details ↗" ur="عطیے کی تفصیلات دیکھیں ↖" />
    <T as="p" className="fine" en="Payment setup is pending. No money is collected through this website yet." ur="ادائیگی کا انتظام ابھی مکمل نہیں ہوا۔ اس ویب سائٹ کے ذریعے فی الحال کوئی رقم وصول نہیں کی جاتی۔" />
    {details && <div id="donation-details" role="status"><T as="p" en="Official bank, Easypaisa, and JazzCash details have not been provided yet. Please return when verified payment information is published." ur="ابھی سرکاری بینک، ایزی پیسہ اور جاز کیش کی تفصیلات فراہم نہیں کی گئیں۔ تصدیق شدہ ادائیگی کی معلومات شائع ہونے کے بعد دوبارہ تشریف لائیں۔" /></div>}
  </form>;
}
