// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import { useRef } from 'react';
import classnames from 'classnames';
import { useRecoilValue } from 'recoil';

import ProductCard from '../../../components/ProductCard/ProductCard';

import classes from './ProductsCarousel.module.scss';

import { productListState } from '@/store/productListState.js';

import 'swiper/css';
import 'swiper/css/navigation';

// Import Swiper styles

const ProductsCarousel = () => {
  const productList = useRecoilValue(productListState);
  const productCards = productList.map((product, index) => {
    return (
      <SwiperSlide key={index}>
        <ProductCard product={product} />
      </SwiperSlide>
    );
  });

  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  return (
    <div className={classes.productsSwiper}>
      <button
        ref={navigationPrevRef}
        aria-label="이전 슬라이더"
        className={classnames(classes.swiperPrevBtn, classes.swiperButton)}
      />
      <button
        ref={navigationNextRef}
        aria-label="다음 슬라이더"
        className={classnames(classes.swiperNextBtn, classes.swiperButton)}
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
      >
        {productCards}
      </Swiper>
    </div>
  );
};

export default ProductsCarousel;
