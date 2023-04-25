import { useEffect, useRef } from 'react';

import styles from './ProductDetailMenu.module.scss';

function ProductDetailMenu({ navigations, position }) {
  const naviRef = useRef([]);

  useEffect(()=>{
    // console.log("[ProductDetailMenu.jsx] naviRef출력 => ", naviRef); // 4개의 버튼 참조
    if(position.productInfo == true) {
      // background
      naviRef.current[0].style.background = "white";
      naviRef.current[1].style.background = "transparent";
      naviRef.current[2].style.background = "transparent";
      naviRef.current[3].style.background = "transparent";
      // font 컬러
      naviRef.current[0].style.color = "#5F0080";
      naviRef.current[1].style.color = "#333333";
      naviRef.current[2].style.color = "#333333";
      naviRef.current[3].style.color = "#333333";      
    }
    else if(position.detailInfo == true) {
      // background
      naviRef.current[0].style.background = "transparent";
      naviRef.current[1].style.background = "white";
      naviRef.current[2].style.background = "transparent";
      naviRef.current[3].style.background = "transparent";
      // font 컬러
      naviRef.current[0].style.color = "#333333";
      naviRef.current[1].style.color = "#5F0080";
      naviRef.current[2].style.color = "#333333";
      naviRef.current[3].style.color = "#333333";
    }
    else if(position.review == true) {
      // background
      naviRef.current[0].style.background = "transparent";
      naviRef.current[1].style.background = "transparent";
      naviRef.current[2].style.background = "white";
      naviRef.current[3].style.background = "transparent";
      // font 컬러
      naviRef.current[0].style.color = "#333333";
      naviRef.current[1].style.color = "#333333";
      naviRef.current[2].style.color = "#5F0080";
      naviRef.current[3].style.color = "#333333";
    }
    else if(position.inquiry == true) {
      // background
      naviRef.current[0].style.background = "transparent";
      naviRef.current[1].style.background = "transparent";
      naviRef.current[2].style.background = "transparent";
      naviRef.current[3].style.background = "white";
      // font 컬러
      naviRef.current[0].style.color = "#333333";
      naviRef.current[1].style.color = "#333333";
      naviRef.current[2].style.color = "#333333";
      naviRef.current[3].style.color = "#5F0080";
    }
    else {
      // background
      naviRef.current[0].style.background = "transparent";
      naviRef.current[1].style.background = "transparent";
      naviRef.current[2].style.background = "transparent";
      naviRef.current[3].style.background = "transparent";
      // font 컬러
      naviRef.current[0].style.color = "#333333";
      naviRef.current[1].style.color = "#333333";
      naviRef.current[2].style.color = "#333333";
      naviRef.current[3].style.color = "#333333";
    }
  }, [position]);

  // function InitFocusing() {
  //   naviRef.current.forEach((ref) => {
  //     ref.classList.remove(styles.Active);
  //   });
  // }

  const menuTabs = navigations.map((tab, index) => {
    return (
      // eslint-disable-next-line react/jsx-key
      <li>
        <button
          ref={(el) => (naviRef.current[index] = el)}

          onClick={(e) => {
            // InitFocusing();
            // e.target.classList.add(styles.Active);
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

