import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import Logo from '@/assets/header/logo-kurly.svg';

function HeaderLogo() {
  return (
    <Link to="/">
      <LazyLoadImage alt={'칼리로고'} src={Logo} />
    </Link>
  );
}

export default HeaderLogo;
