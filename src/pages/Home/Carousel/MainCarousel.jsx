// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Autoplay, Pagination } from 'swiper';
import { useRef } from 'react';
import classnames from 'classnames';

import classes from './MainCarousel.module.scss';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useState } from 'react';
import { useEffect } from 'react';

const banners = [
  {
    url: 'assets/main/banner01.jpg',
    title:
      '컬리 장보기의 특권 이주의 특가 한 눈에 보기 우측 상단 특가/혜택 에서 확인하세요.',
  },
  {
    url: 'assets/main/banner02.jpg',
    title:
      '한눈에 보는 이달의 카드 혜텍 최대 10% 카드 쿠폰 받기 기간 시월 일일부터 시월 삽십일일까지',
  },
  {
    url: 'assets/main/banner03.jpg',
    title:
      '부드러운 달콤함 컬리 과일 가게 앵콜 특가 멜론 구천구백원 기간 시월 이십일부터 시월 이십칠일까지 ',
  },
  {
    url: 'assets/main/banner04.jpg',
    title:
      '컬리 퍼플 위크 높은 적립률과 3종 쿠폰팩 더 풍성해진 혜택 기간 시월 이십사일부터 시월 이십팔일까지',
  },
];

SwiperCore.use([Autoplay, Pagination]);

const MainCarousel = () => {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  // 스와이퍼 ref
  const swiperRef = useRef(null);

  // 슬라이더 배열의 ref
  const [slideInfo, setSlideInfo] = useState(null);

  const notifyRef = useRef(null);

  const swiperSlides = banners.map((banner, index) => {
    return (
      <SwiperSlide key={index}>
        {({ isActive }) => {
          if (isActive) {
            setSlideInfo(banner.title);
          }
          
          return (
            <button
              aria-hidden={isActive ? false : true}
              aria-label={banner.title}
              className={classes.swiperSlide}
              style={{
                background: `url(${banner.url}) center center/ cover no-repeat var(--gray-100)`,
              }}
              tabIndex={isActive ? 'none' : -1}
            />
          );
        }}
      </SwiperSlide>
    );
  });

  useEffect(() => {
    if (slideInfo !== null) notifyRef.current.textContent = slideInfo;
  }, [slideInfo]);

  const stop = (e) => {
    e.preventDefault();
    swiperRef.current.swiper.autoplay.stop();
  };
  const start = (e) => {
    e.preventDefault();
    swiperRef.current.swiper.autoplay.start();
  };

  const pagination = 'swiper-pagination';

  return (
    <>
      <h2 className="a11yHidden">메인 페이지 캐러셀</h2>
      <div
        aria-label="메인 캐로셀"
        aria-roledescription="carousel"
        className={classes.mainSwiper}
        role="region"
      >
        <div ref={notifyRef} aria-live="assertive" className="a11yHidden" />
        <button
          ref={navigationPrevRef}
          aria-label="이전 항목 보기"
          className={classnames(classes.swiperPrevBtn, classes.swiperButton)}
        />
        <button
          ref={navigationNextRef}
          aria-label="다음 항목 보기"
          className={classnames(classes.swiperNextBtn, classes.swiperButton)}
        />
        <Swiper
          ref={swiperRef}
          allowTouchMove={false}
          autoplay={{ delay: 4000 }}
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
    </>
  );
};

export default MainCarousel;
