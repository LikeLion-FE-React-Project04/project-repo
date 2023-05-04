/* eslint-disable import/order */
import { useParams } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';
import { useRecoilValue, useRecoilState } from 'recoil';

import { productListFamily } from '@/store/productListState.js';
import { useDocumentTitle } from '@/hooks/useDocumentTitle';

import ProductDetailPopUpLayout from '../../components/ProductDetailPopUp/ProductDetailPopUpLayout';
import { useDetailCollection } from '../../firebase/firestore/useDetailCollection';
import DetailInformation from './DetailInformation/DetailInformation';
import styles from './ProductDetail.module.scss';
import ProductDetailMenu from './ProductDetailMenu/ProductDetailMenu';
import ProductInquiry from './ProductInquiry/ProductInquiry';
import ProductReview from './ProductReview/ProductReview';
import ProductInformation from './ProductInformation/ProductInformation';
import ProductThumbnail from './ProductThumbnail/ProductThumbnail';
import { productNameAtom } from './ProductReview/@recoil/renderState';
import useMoveScroll from './@hook/useMoveScroll';

function ProductDetail() {
  const { productId } = useParams();
  const product = useRecoilValue(productListFamily(productId));
  const [productName, setProductName] = useRecoilState(productNameAtom);
  const detailsRef = useRef();

  //후기 개수 navigation바에 업데이트
  const [count, setCount] = useState(0);
  const { dataState } = useDetailCollection('reviewData');
  const [countText, setCountText] = useState('');

  const [navigationPartRefs, setNavigationPartRefs] = useState(null);
  const [productInformationOffsetTop, setProductInformationOffsetTop] =
    useState(null);
  const [detailInformationOffsetTop, setDetailInformationOffsetTop] =
    useState(null);
  const [productReviewOffsetTop, setProductReviewOffsetTop] = useState(null);
  const [productInquiryOffsetTop, setProductInquiryOffsetTop] = useState(null);

  const navigations = [
    useMoveScroll('상품정보'),
    useMoveScroll('상세정보'),
    useMoveScroll(countText),
    useMoveScroll('문의'),
  ];

  const navigationParts = [
    <ProductInformation key={0} product={product} />,
    <DetailInformation key={1} product={product} />,
    <ProductReview key={2} />,
    <ProductInquiry key={3} />,
  ];

  useEffect(() => {
    const navigationPart = navigationParts.map((part, index) => (
      <div
        ref={navigations[index].element}
        key={index}
        className={styles.naviLayout}
      >
        {part}
      </div>
    ));

    setNavigationPartRefs(navigationPart);
  }, []);

  useEffect(() => {
    if (navigationPartRefs) {
      setProductInformationOffsetTop(navigations[0].element.current.offsetTop);
      setDetailInformationOffsetTop(navigations[1].element.current.offsetTop);
      setProductReviewOffsetTop(navigations[2].element.current.offsetTop);
      setProductInquiryOffsetTop(navigations[3].element.current.offsetTop);
    }
  }, [navigationPartRefs]);

  useDocumentTitle(productName + ' - Karly');

  // 페이지 전환 시, product.name 정보 얻어오기
  useEffect(() => {
    setProductName(product.name);
  }, []);

  useEffect(() => {
    if (dataState) {
      setCount(dataState.length);
    }
    let text = `후기(${count})`;

    setCountText(text);
  }, [dataState, count]);

  // 스크롤 이벤트
  const [position, setPosition] = useState();

  useEffect(() => {
    const { current: detailsElement } = detailsRef;

    if (detailsElement) {
      const getElementPosition = (e) => {
        const scrollY = window.scrollY; // 스크롤 양

        if (scrollY > productInquiryOffsetTop - 10) {
          setPosition('inquiry');
          console.log('inquiry');
        } else if (
          scrollY <= productInquiryOffsetTop - 10 &&
          scrollY > productReviewOffsetTop - 10
        ) {
          setPosition('review');
          console.log('review');
        } else if (
          scrollY <= productReviewOffsetTop - 10 &&
          scrollY > detailInformationOffsetTop - 10
        ) {
          setPosition('detailInfo');
          console.log('detailInfo');
        } else if (
          scrollY <= detailInformationOffsetTop - 10 &&
          scrollY > productInformationOffsetTop - 10
        ) {
          setPosition('productInfo');
          console.log('productInfo1');
        } else {
          setPosition(null);
        }
      };

      globalThis.addEventListener('scroll', getElementPosition);

      return () => {
        globalThis.removeEventListener('scroll', getElementPosition);
      };
    }
  }, [
    productInformationOffsetTop,
    detailInformationOffsetTop,
    productReviewOffsetTop,
    productInquiryOffsetTop,
  ]);

  return (
    <div className={styles.ProductDetailWrapper} ref={detailsRef}>
      <ProductThumbnail product={product} />
      <ProductDetailMenu navigations={navigations} position={position} />
      {navigationPartRefs}
      <ProductDetailPopUpLayout />
    </div>
  );
}

export default ProductDetail;
