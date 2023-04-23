import { useRef } from 'react';

import styles from './ProductDetailMenu.module.scss';

function ProductDetailMenu({ navigations }) {
  // useEffect(() => {
  //   window.addEventListener('scroll', handleScroll, { capture: true }); // 스크롤 이벤트 등록
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll); // 스크롤 이벤트 등록 제거(성능저하방지)
  //   };
  // }, []);

  // const handleScroll = useCallback(() => {
  //   if (!tabRef.current || !detailRef.current || !document.getElementById('app'))
  //     return;
  //   }

  //   // 스크롤의 실시간 위치
  //   const scrollTop = document.getElementById('app')?.scrollTop; // 최상단 div 기준으로 스크롤 위치를 감지

  //     // 스크롤 위치가 tabRef(하위메뉴 탭)의 위치보다 아래이면
  //     if (scrollTop >= tabRef.current.offsetTop) {
  //       fixTab.current = true;   // fixTab 변수는 트루
  //     } else {		         // 그렇지 않으면
  //       fixTab.current = false;  // fixTab 변수는 false
  //     }

  //     // 스크롤 위치가 detailRef(하위메뉴 2번)의 위치보다 위이면
  //     if (scrollTop < detailRef.current.offsetTop - offset) {
  //       setTab(0); // 하위메뉴 탭은 자동으로 인덱스 0을 보여주자
  //     }
  //     // 스크롤 위치가 detailRef(하위메뉴 2번)의 위치이거나 아래이면
  //     else if (scrollTop >= detailRef.current.offsetTop - offset) {
  //       setTab(1); // 하위메뉴 탭은 자동으로 인덱스 0을 보여주자
  //     }

  // }, [tabRef.current, detailRef.current]);

  const naviRef = useRef([]);

  function InitFocusing() {
    naviRef.current.forEach((ref) => {
      ref.classList.remove(styles.Active);
    });
  }

  const menuTabs = navigations.map((tab, index) => {
    return (
      // eslint-disable-next-line react/jsx-key
      <li>
        <button
          ref={(el) => (naviRef.current[index] = el)}
          onClick={(e) => {
            InitFocusing();
            e.target.classList.add(styles.Active);
            tab.onMoveToElement();
          }}
        >
          {tab.name}
        </button>
      </li>
    );
  });

  return (
    <div className={styles.productDetailMenu}>
      <ul>{menuTabs}</ul>
    </div>
  );
}

export default ProductDetailMenu;
