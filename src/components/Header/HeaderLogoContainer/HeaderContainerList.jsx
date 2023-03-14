import { Link } from 'react-router-dom';

function HeaderContainerList({ className, text }) {
  return (
    <Link className={className} to="/">
      {text}
    </Link>
  );
}

export default HeaderContainerList;
