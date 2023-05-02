import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';

function MainIcon({ href, img, alt }) {
  return (
    <Link to={href}>
      <LazyLoadImage src={img} alt={alt} />
    </Link>
  );
}

// MainIcon.propTypes = {
//   href: String,
//   img: String,
//   alt: String,
// }

export default MainIcon;
