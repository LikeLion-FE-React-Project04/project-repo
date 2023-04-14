import { Link } from 'react-router-dom';

import Logo from '@/assets/header/logo-kurly.svg';

function HeaderLogo() {
  return (
    <Link to="/">
      <img alt={'칼리로고'} src={Logo} />
    </Link>
  );
}

export default HeaderLogo;
