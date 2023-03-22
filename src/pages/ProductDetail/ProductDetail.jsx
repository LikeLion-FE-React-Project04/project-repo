import { useLoaderData, useParams, Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { productListFamily } from '@/store/productListState.js';
import ProductInquiry from './Productinquiry/Productinquiry';
import { ProductDetailPopUp } from '../../components/ProductDetailPopUp/ProductDetailPopUp';
import ProductDetailPopUpLayout from '../../components/ProductDetailPopUp/ProductDetailPopUpLayout';
import styles from './ProductDetail.module.scss';

function ProductDetail() {
  const { productId } = useParams();
  const product = useRecoilValue(productListFamily(productId));

  console.log(product);

  return (
    <div className={styles.ProductDetailWrapper}>
      <h2>ProductDetail {productId}</h2>
      <Link to="/">Go to Home</Link>
      <ProductInquiry />
      <ProductDetailPopUpLayout />
    </div>
  ); 
}

export default ProductDetail;

// GET (READ)
// export async function loader({ params }) {
//   console.log('zzz');
//   console.log(params.productId);
//   console.log(typeof params.productId);
//   const product = await useRecoilValue(productListFamily(params.productId));

//   console.log(product);

//   return product;
// }
