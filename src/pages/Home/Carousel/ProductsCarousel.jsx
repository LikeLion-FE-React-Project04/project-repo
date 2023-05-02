// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y } from 'swiper';
import { useRef, useEffect } from 'react';
import classnames from 'classnames';
import { useRecoilValue } from 'recoil';

import ProductCard from '../../../components/ProductCard/ProductCard';

import classes from './ProductsCarousel.module.scss';

import { productListState } from '@/store/productListState.js';

import 'swiper/css';
import 'swiper/css/navigation';
import { useState } from 'react';
// Import Swiper styles

const ProductsCarousel = () => {
  const productList = useRecoilValue(productListState);
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  const swiperRef = useRef();

  const [focusableIndex, setFocusableIndex] = useState(0);

  const productCards = productList.slice(0, 12).map((product, index) => (
    <SwiperSlide key={index}>
      <ProductCard
        product={product}
        isActive={focusableIndex <= index && index < focusableIndex + 4}
      />
    </SwiperSlide>
  ));

  return (
    <div
      aria-label="상품 캐로셀"
      aria-roledescription="carousel"
      className={classes.productsSwiper}
      role="region"
    >
      <button
        ref={navigationPrevRef}
        aria-label="이전 항목 보기"
        className={classnames(classes.swiperPrevBtn, classes.swiperButton)}
        onClick={() => {
          setFocusableIndex((prev) => prev - 4);
        }}
      />
      <button
        ref={navigationNextRef}
        aria-label="다음 항목 보기"
        className={classnames(classes.swiperNextBtn, classes.swiperButton)}
        onClick={() => {
          setFocusableIndex((prev) => prev + 4);
        }}
      />

      <Swiper
        className={classes.swiper}
        modules={[Navigation]}
        navigation={{
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current,
        }}
        slidesPerGroup={4}
        slidesPerView={4}
        spaceBetween={18}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = navigationPrevRef.current;
          swiper.params.navigation.nextEl = navigationNextRef.current;
          swiper.navigation.update();
        }}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
        {productCards}
      </Swiper>
    </div>
  );
};

export default ProductsCarousel;
