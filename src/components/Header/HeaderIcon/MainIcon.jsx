import { Link } from 'react-router-dom';

function MainIcon({ href, img, alt }) {
  return (
    <Link to={href}>
      <img src={img} alt={alt} />
    </Link>
  );
}

// MainIcon.propTypes = {
//   href: String,
//   img: String,
//   alt: String,
// }

export default MainIcon;
