import { LazyLoadImage } from 'react-lazy-load-image-component';
function DetailInformation({ product }) {
  return (
    <div>
      <LazyLoadImage src="/assets/product-detail/why-carly.png" alt={product.image.alt} />
    </div>
  );
}

export default DetailInformation;
