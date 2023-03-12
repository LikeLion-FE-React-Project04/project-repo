// Import Swiper React components
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Navigation } from 'swiper';
import { useRef } from 'react';
import classnames from 'classnames';

import { ProductCard } from '../ProductCard/ProductCard';

import classes from './ProductsCarousel.module.scss';

import 'swiper/css';
import 'swiper/css/navigation';

// Import Swiper styles
const tmp = new Array(10).fill(null);

const productCards = tmp.map((_, index) => {
  return (
    // eslint-disable-next-line react/jsx-key
    <SwiperSlide>
      <ProductCard />
    </SwiperSlide>
  );
});

const ProductsCarousel = () => {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  return (
    <div className={classes.productsSwiper}>
      <button
        ref={navigationPrevRef}
        className={classnames(classes.swiperPrevBtn, classes.swiperButton)}
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
          // 초기 설정
          swiper.params.navigation.prevEl = navigationPrevRef.current;
          swiper.params.navigation.nextEl = navigationNextRef.current;
          swiper.navigation.update();
        }}
        onSlideChange={() => console.log('slide change')}
      >
        {productCards}
      </Swiper>
      <button
        ref={navigationNextRef}
        className={classnames(classes.swiperNextBtn, classes.swiperButton)}
      />
    </div>
  );
};

export default ProductsCarousel;

{
  /* <span>테스트</span> */
}
