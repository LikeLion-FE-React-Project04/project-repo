// Import Swiper React components
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Navigation } from 'swiper';
import { useRef } from 'react';
import classnames from 'classnames';

import classes from './MainCarousel.module.scss';

import 'swiper/css';
import 'swiper/css/navigation';

// Import Swiper styles
const banners = [
  'assets/main/banner01.jpg',
  'assets/main/banner02.jpg',
  'assets/main/banner03.jpg',
  'assets/main/banner04.jpg',
];

const swiperSlides = banners.map((banner) => {
  return (
    // eslint-disable-next-line react/jsx-key
    <SwiperSlide>
      <div
        className={classes.swiperSlide}
        style={{
          background: `url(${banner}) 50% 50%/ 100% no-repeat darkblue`,
        }}
      />
    </SwiperSlide>
  );
});


const MainCarousel = () => {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  return (
    <div className={classes.mainSwiper}>
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
        slidesPerView={1}
        spaceBetween={0}
        onBeforeInit={(swiper) => {
          // 초기 설정
          swiper.params.navigation.prevEl = navigationPrevRef.current;
          swiper.params.navigation.nextEl = navigationNextRef.current;
          swiper.navigation.update();
        }}
        onSlideChange={() => console.log('slide change')}
      >
        {swiperSlides}
      </Swiper>
      <button
        ref={navigationNextRef}
        className={classnames(classes.swiperNextBtn, classes.swiperButton)}
      />
    </div>
  );
};

export default MainCarousel
