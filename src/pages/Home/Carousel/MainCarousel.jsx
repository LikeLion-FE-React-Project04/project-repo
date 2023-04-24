// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Autoplay, Pagination } from 'swiper';
import { useRef } from 'react';
import classnames from 'classnames';

import classes from './MainCarousel.module.scss';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const banners = [
  { url: 'assets/main/banner01.jpg', title: '이 주의 특가 한눈에 보기' },
  { url: 'assets/main/banner02.jpg', title: '한눈에 보는 이달의 카드 혜택' },
  { url: 'assets/main/banner03.jpg', title: '컬리 과일 가게' },
  { url: 'assets/main/banner04.jpg', title: '컬리 퍼플 위크 혜택보기' },
];

SwiperCore.use([Autoplay, Pagination]);

const swiperSlides = banners.map((banner, index) => {
  return (
    <SwiperSlide key={index}>
      <button
        aria-label={banner.title}
        className={classes.swiperSlide}
        style={{
          background: `url(${banner.url}) 50% 50%/ 100% no-repeat darkblue`,
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
  };
  const start = (e) => {
    e.preventDefault();
    swiperRef.current.swiper.autoplay.start();
  };

  // 스와이퍼 페이지네이션 el속성에 접근하기 위한 방법...'swiper-pagination'를 제외한 다른 이름은 적용되지가 않음
  const pagination = 'swiper-pagination';

  return (
    <div className={classes.mainSwiper}>
      <h2></h2>
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
        ref={swiperRef}
        // 사용법 모르겠다.
        a11y={{
          containerMessage: '메인캐로셀',
          prevSlideMessage: '이전 슬라이드',
          nextSlideMessage: '다음 슬라이드',
          slideLabelMessage: `총 {{slidesLength}}장의 슬라이드 중 {{index}}번 슬라이드 입니다.`,
        }}
        allowTouchMove={false}
        autoplay={{ delay: 3500 }}
        className={classes.swiper}
        modules={[Navigation]}
        navigation={{
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current,
        }}
        pagination={{
          el: `.${pagination}`,
          type: 'custom',
          renderCustom: function (swiper, current, total) {
            return current + ' / ' + total;
          },
        }}
        slidesPerView={1}
        spaceBetween={0}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = navigationPrevRef.current;
          swiper.params.navigation.nextEl = navigationNextRef.current;
          swiper.navigation.update();
        }}
      >
        {swiperSlides}
      </Swiper>
      <div className={classes.swiperPaginationLayout}>
        <button
          aria-label="슬라이더 자동 재생 멈춤"
          className={classnames(classes.stop, classes.autoplayButton)}
          onClick={stop}
        />
        <button
          aria-label="슬라이더 자동 재생"
          className={classnames(classes.start, classes.autoplayButton)}
          onClick={start}
        />
        <div className={classnames(pagination, classes.swiperPagination)} />
      </div>
    </div>
  );
};

export default MainCarousel;
