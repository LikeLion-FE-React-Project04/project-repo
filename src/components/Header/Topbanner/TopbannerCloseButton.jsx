import { LazyLoadImage } from 'react-lazy-load-image-component';

function TopbannerCloseButton({ type, className, handler, img, alt }) {
  return (
    <button type={type} className={className} onClick={handler}>
      <LazyLoadImage src={img} alt={alt} />
    </button>
  )
}

export default TopbannerCloseButton
