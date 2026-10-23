import Image from 'next/image';
import Link from 'next/link';
import { T } from './language';

export function Brand() {
  return <Link className="brand" href="/" aria-label="Kakakhel Welfare Association home">
    <Image className="brand-logo" src="/kakakhel-logo.svg" alt="Kakakhel Welfare Association emblem" width={82} height={82} unoptimized />
    <span className="brand-name"><T as="strong" en="Kakakhel Welfare" ur="کاکا خیل ویلفیئر" /><T as="small" en="ASSOCIATION · PAKISTAN" ur="ایسوسی ایشن · پاکستان" /></span>
  </Link>;
}
