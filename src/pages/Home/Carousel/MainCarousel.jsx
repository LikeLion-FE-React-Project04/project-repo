// Import Swiper React components
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import SwiperCore, { Navigation, Autoplay, Pagination } from 'swiper';
import { useRef } from 'react';
import classnames from 'classnames';

import classes from './MainCarousel.module.scss';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Import Swiper styles
const banners = [
  'assets/main/banner01.jpg',
  'assets/main/banner02.jpg',
  'assets/main/banner03.jpg',
  'assets/main/banner04.jpg',
];

SwiperCore.use([Autoplay, Pagination]);

const swiperSlides = banners.map((banner, index) => {
  return (
    // eslint-disable-next-line react/jsx-key
    <SwiperSlide key={index}>
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
  const swiperRef = useRef(null);

  const stop = (e) => {
    e.preventDefault();
    swiperRef.current.swiper.autoplay.stop();
    console.log('스와이퍼의 재생이 멈췄어요😎');
  };
  const start = (e) => {
    e.preventDefault();
    swiperRef.current.swiper.autoplay.start();
    console.log('스와이퍼의 재생이 시작됐어요😎');
  };

  return (
    <div className={classes.mainSwiper}>
      <button
        ref={navigationPrevRef}
        className={classnames(classes.swiperPrevBtn, classes.swiperButton)}
      />
      <button
        ref={navigationNextRef}
        className={classnames(classes.swiperNextBtn, classes.swiperButton)}
      />

      <Swiper
        ref={swiperRef}
        allowTouchMove={false}
        autoplay={{ delay: 3500 }}
        className={classes.swiper}
        modules={[Navigation]}
        navigation={{
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current,
        }}
        onBeforeInit={(swiper) => {
          // 초기 설정
          swiper.params.navigation.prevEl = navigationPrevRef.current;
          swiper.params.navigation.nextEl = navigationNextRef.current;
          swiper.navigation.update();
        }}
        onSlideChange={() => console.log('slide change')}
        pagination={{
          clickable: true,
        }}
        slidesPerView={1}
        spaceBetween={0}
      >
        {swiperSlides}
      </Swiper>

      <div>
        <button
          className={classnames(classes.stop, classes.autoplayButton)}
          onClick={stop}
        />
        <button
          className={classnames(classes.start, classes.autoplayButton)}
          onClick={start}
        />
      </div>
    </div>
  );
};

export default MainCarousel;
