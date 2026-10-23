import { T, TLink } from './language';

export function Breadcrumb({ en, ur }) {
  return <div className="breadcrumb-bar"><div className="container breadcrumb"><TLink href="/" en="Home" ur="صفحۂ اول" /><span aria-hidden="true">/</span><T aria-current="page" en={en} ur={ur} /></div></div>;
}
