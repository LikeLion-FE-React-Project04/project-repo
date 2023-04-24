import { useLoaderData, useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useRecoilValue, useRecoilState } from 'recoil';

import { ProductDetailPopUp } from '../../components/ProductDetailPopUp/ProductDetailPopUp';
import ProductDetailPopUpLayout from '../../components/ProductDetailPopUp/ProductDetailPopUpLayout';

import styles from './ProductDetail.module.scss';
import ProductInquiry from './Productinquiry/Productinquiry';
import ProductReview from './ProductReview/ProductReview';
import ProductThumbnail from './ProductThumbnail/ProductThumbnail';
import { productNameAtom } from './ProductReview/@recoil/renderState';

import { productListFamily } from '@/store/productListState.js';
import { useRef } from 'react';
import ProductInformation from './ProductInformation/ProductInformation';
import ProductDetailMenu from './ProductDetailMenu/ProductDetailMenu';
import DetailInformation from './DetailInformation/DetailInformation';
import useMoveScroll from './@hook/useMoveScroll';
import { useDetailCollection } from '../../firebase/firestore/useDetailCollection';

function ProductDetail() {
  const { productId } = useParams();
  const product = useRecoilValue(productListFamily(productId));

  const [productName, setProductName] = useRecoilState(productNameAtom);

  //후기 개수 navigation바에 업데이트 
  const [count, setCount] = useState(0);
  const { dataState } = useDetailCollection('reviewData');
  const [countText, setCountText] = useState(''); 

  useEffect(() => {
    if (dataState) {
      setCount(dataState.length);
    }
    let text = `후기(${count})`;
    setCountText(text);
  }, [dataState, count]);

  // https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/from
  const goodsTabs = {
    0: useMoveScroll('상품정보'),
    1: useMoveScroll('상세정보'),
    2: useMoveScroll(countText),
    3: useMoveScroll('문의'),
    length: 4,
  };

  // 페이지 전환 시, product.name 정보 얻어오기
  useEffect(() => {
    setProductName(product.name);
  }, []);

  const navigationParts = [
    <ProductInformation key={0} product={product} />,
    <DetailInformation key={1} product={product} />,
    <ProductReview key={2} />,
    <ProductInquiry key={3} />,
  ];

  const navigationPartRefs = navigationParts.map((part, index) => (
    <div
      ref={goodsTabs[index].element}
      key={index}
      className={styles.naviLayout}
    >
      {part}
    </div>
  ));

  return (
    <div className={styles.ProductDetailWrapper}>
      <ProductThumbnail product={product} />
      <ProductDetailMenu tabs={goodsTabs} />
      {navigationPartRefs}
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
