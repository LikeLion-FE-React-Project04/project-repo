import { useState, useRef, useEffect } from 'react';

import { MainIcon } from '../HeaderIcon/';

import { categoryData } from './categoryDate';
import { CategoryButton } from './CategoryButton';

import styles from './HeaderNav.module.css';

import Location from '@/assets/icons/Icon/header-location.svg';
import Heart from '@/assets/icons/Icon/header-heart.svg';
import Cart from '@/assets/icons/Icon/header-Cart.svg';
import Hamburger from '@/assets/icons/Icon/header-hamburger.svg';
import Search from '@/assets/icons/Icon/header-search.svg';

function CategoryData({ href, title, img, alt }) {
  return (
    <li>
      <a href={href}>
        <img src={img} alt={alt} />
        {title}
      </a>
    </li>
  );
}

const useScollEvent = () => {
  const testBorder = useRef(null);
  const deliveryBtn = useRef(null);
  const mainIcons = useRef(null);
  const searchForm = useRef(null);
  // const subtest = useRef()

  // useEffect(() => {
  //     //1.구독
  //     const test1 = document.getElementById('1')
  //     const listener = () => {
  //         const isAllElementFound = deliveryBtn.current && mainIcons.current && searchForm.current && testBorder.current

  //         if (window.scrollY > 190 && isAllElementFound) {
  //             deliveryBtn.current.style = `display:none`
  //             mainIcons.current.style = `display:block`
  //             searchForm.current.style = `display:block`
  //             testBorder.current.style = `position:fixed;
  //     left: 50%;
  //     width:100%;
  //     height:60px;
  //     top:0;
  //     transform: translateX(-50%);
  //     box-shadow: 0rem 0.25rem 1.5rem rgba(0, 0, 0, 0.1);
  //    `

  //             test1.style.cssText = `
  //     position:fixed;
  //     left: 50%;
  //     transform: translateX( -50% );
  //     width:1050px;
  //      top:0;

  //     `
  //         } else {
  //             deliveryBtn.current.style = `display:block`
  //             mainIcons.current.style = `display:none`
  //             searchForm.current.style = `display:none`
  //             testBorder.current.style = `;
  //   width:100%;
  //   `
  //             test1.style.cssText = `position:relative;
  //   width:1050px;
  //     `
  //         }
  //     }

  //     window.addEventListener('scroll', listener)

  //     return () => {
  //         //2.해제
  //         window.removeEventListener('scroll', listener)
  //     }
  // },[])
  useEffect(() => {
    //getElementById를 이용하여 특정elem를 target하는 방법도 사용해보고 싶었다.
    //이 외의 나머지 대부분 방식은 useRef를 사용했다.
    const test1 = document.getElementById('1');
    const listener = () => {
      const isAllElementFound =
        deliveryBtn.current &&
        mainIcons.current &&
        searchForm.current &&
        testBorder.current;

      if (window.scrollY > 190 && isAllElementFound) {
        deliveryBtn.current.style = `display:none`;
        mainIcons.current.style = `display:block`;
        searchForm.current.style = `display:block`;

        testBorder.current.style = `position:fixed;
        left: 50%;
        width:100%;
        height:66.39px;
        top:0;
        transform: translateX(-50%);
        box-shadow: 0rem 0.25rem 1.5rem rgba(0, 0, 0, 0.1);
       `;

        test1.style.cssText = `
        position:fixed;
        left: 50%;
        transform: translateX( -50% );
        width:1050px;
         top:0;
         
        `;
      } else {
        deliveryBtn.current.style = `display:block`;
        mainIcons.current.style = `display:none`;
        searchForm.current.style = `display:none`;
        testBorder.current.style = `;
      width:100%;
      `;
        test1.style.cssText = `position:relative;
      width:1050px;
        `;
      }
    };

    window.addEventListener('scroll', listener);

    return () => {
      window.removeEventListener('scroll', listener);
    };
  }, []);

  return {
    testBorder,
    deliveryBtn,
    mainIcons,
    searchForm,
  };
};

function HeaderNav() {
  const { testBorder, deliveryBtn, mainIcons, searchForm } = useScollEvent();

  // const testBorder = useRef(null);
  // const deliveryBtn = useRef(null);
  // const mainIcons = useRef(null);
  // const searchForm = useRef(null);

  // const categoryData = [
  //   { title: '선물하기', imgSrc: 'assets/header/ic-gift.svg' },
  //   { title: '채소', imgSrc: 'assets/header/ic-vegetable.svg' },
  //   { title: '과일ㆍ견과ㆍ쌀', imgSrc: 'assets/header/ic-fruit.svg' },
  //   { title: '수산ㆍ해산ㆍ건어물', imgSrc: 'assets/header/ic-sea-food.svg' },
  //   { title: '정육ㆍ계란', imgSrc: 'assets/header/ic-meet.svg' },
  //   { title: '국ㆍ반찬ㆍ메인요리', imgSrc: 'assets/header/ic-cook.svg' },
  //   { title: '샐러드ㆍ간편식', imgSrc: 'assets/header/ic-salad.svg' },
  //   { title: '면ㆍ양념ㆍ오일', imgSrc: 'assets/header/ic-oil.svg' },
  //   { title: '생수ㆍ음료ㆍ우유ㆍ커피', imgSrc: 'assets/header/ic-coffee.svg' },
  //   { title: '간식ㆍ과자ㆍ떡', imgSrc: 'assets/header/ic-snack.svg' },
  //   { title: '베이커리ㆍ치즈ㆍ델리', imgSrc: 'assets/header/ic-bread.svg' },
  //   { title: '건강식품', imgSrc: 'assets/header/ic-health.svg' },
  //   { title: '와인', imgSrc: 'assets/header/ic-wine.svg' },
  //   { title: '전통주', imgSrc: 'assets/header/ic-traditional-liquor.svg' },
  //   { title: '생활용품ㆍ리빙ㆍ캠핑', imgSrc: 'assets/header/ic-detergent.svg' },
  //   { title: '스킨케어ㆍ메이크업', imgSrc: 'assets/header/ic-cosmetics.svg' },
  //   { title: '헤어ㆍ바디ㆍ구강', imgSrc: 'assets/header/ic-shampoo.svg' },
  //   { title: '주방용품', imgSrc: 'assets/header/ic-food.svg' },
  //   { title: '가전제품', imgSrc: 'assets/header/ic-home-appliances.svg' },
  //   { title: '반려동물', imgSrc: 'assets/header/ic-dog.svg' },
  //   { title: '베이비ㆍ키즈ㆍ완구', imgSrc: 'assets/header/ic-baby.svg' },
  //   { title: '여행ㆍ티켓', imgSrc: 'assets/header/ic-travel.svg' },
  // ]

  //---------------------------------------------------------
  // useEffect(() => {
  //   //1.구독
  //   const test1 = document.getElementById('1');

  //   window.addEventListener('scroll', () => {
  //     if (window.scrollY > 190) {
  //       deliveryBtn.current.style = `display:none`;
  //       mainIcons.current.style = `display:block`;
  //       searchForm.current.style = `display:block`;

  //       testBorder.current.style = `position:fixed;
  //       left: 50%;
  //       width:100%;
  //       height:66.39px;
  //       top:0;
  //       transform: translateX(-50%);
  //       box-shadow: 0rem 0.25rem 1.5rem rgba(0, 0, 0, 0.1);
  //      `;

  //       test1.style.cssText = `
  //       position:fixed;
  //       left: 50%;
  //       transform: translateX( -50% );
  //       width:1050px;
  //        top:0;

  //       `;
  //     } else {
  //       deliveryBtn.current.style = `display:block`;
  //       mainIcons.current.style = `display:none`;
  //       searchForm.current.style = `display:none`;
  //       testBorder.current.style = `;
  //     width:100%;
  //     `;
  //       test1.style.cssText = `position:relative;
  //     width:1050px;
  //       `;
  //     }
  //   });
  // }, []);
  //------------------------------------------------------------

  // useEffect(() => {

  //   //getElementById를 이용하여 특정elem를 target하는 방법도 사용해보고 싶었다.
  //   //이 외의 나머지 대부분 방식은 useRef를 사용했다.
  //   const test1 = document.getElementById('1');
  //   const listener = () => {
  //     const isAllElementFound =
  //       deliveryBtn.current &&
  //       mainIcons.current &&
  //       searchForm.current &&
  //       testBorder.current;

  //     if (window.scrollY > 190 && isAllElementFound) {
  //       deliveryBtn.current.style = `display:none`;
  //       mainIcons.current.style = `display:block`;
  //       searchForm.current.style = `display:block`;

  //       testBorder.current.style = `position:fixed;
  //       left: 50%;
  //       width:100%;
  //       height:66.39px;
  //       top:0;
  //       transform: translateX(-50%);
  //       box-shadow: 0rem 0.25rem 1.5rem rgba(0, 0, 0, 0.1);
  //      `;

  //       test1.style.cssText = `
  //       position:fixed;
  //       left: 50%;
  //       transform: translateX( -50% );
  //       width:1050px;
  //        top:0;

  //       `;
  //     } else {
  //       deliveryBtn.current.style = `display:block`;
  //       mainIcons.current.style = `display:none`;
  //       searchForm.current.style = `display:none`;
  //       testBorder.current.style = `;
  //     width:100%;
  //     `;
  //       test1.style.cssText = `position:relative;
  //     width:1050px;
  //       `;
  //     }
  //   };

  //   window.addEventListener('scroll', listener);

  //   return () => {
  //     window.removeEventListener('scroll', listener);
  //   };
  // }, []);

  return (
    <nav className={styles.headerNav}>
      <h2 className={styles.a11yHidden}>메인 메뉴</h2>
      <div ref={testBorder} className={styles.testBorder}>
        <div id="1" className={styles.headerNavMenu}>
          <ul>
            <CategoryButton />
          </ul>

          <ul className={styles.headerNavMenuGroup}>
            <HeaderNavMenu
              className={styles.headerNavMenuItem}
              href={'/ProductList'}
              text={'신상품'}
            />
            <HeaderNavMenu
              className={styles.headerNavMenuItem}
              href={'/ProductList'}
              text={'베스트'}
            />
            <HeaderNavMenu
              className={styles.headerNavMenuItem}
              href={'/ProductList'}
              text={'알뜰쇼핑'}
            />
            <HeaderNavMenu
              className={styles.headerNavMenuItem}
              href={'/ProductList'}
              text={'특가/혜택'}
            />
          </ul>

          <div ref={searchForm} style={{ display: 'none' }}>
            <h2 className={styles.a11yHidden}>검색</h2>
            <form
              ref={searchForm}
              action="#"
              className={styles.searchForm}
              method="post"
            >
              <div className={styles.searchFormInner}>
                <div className={styles.formGroup}>
                  <label htmlFor="search" className={styles.formGroupLabel} />
                  <input
                    type="search"
                    id="search"
                    className={styles.formGroupInput}
                    placeholder="검색어를 입력해주세요"
                    required={true}
                  />
                </div>
                <button type="submit" className={styles.formGroupButton}>
                  <img src={Search} alt="검색하기" />
                </button>
              </div>
            </form>
          </div>

          <div ref={mainIcons} style={{ display: 'none' }}>
            <div className={styles.mainIcons}>
              <MainIcon href={'/'} img={Location} alt={'위치이미지'} />
              <MainIcon href={'/'} img={Heart} alt={'찜하기이미지'} />
              <MainIcon href={'/Cart'} img={Cart} alt={'장바구니이미지'} />
            </div>
          </div>

          <ul ref={deliveryBtn}>
            <li>
              <button className={styles.deliveryBtn}>
                <span className={styles.deliveryBtnText}>샛별·낮</span> 배송안내
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

function HeaderNavMenu({ className, href, text }) {
  return (
    <li className={className}>
      <a href={href}>{text}</a>
    </li>
  );
}

export default HeaderNav;
