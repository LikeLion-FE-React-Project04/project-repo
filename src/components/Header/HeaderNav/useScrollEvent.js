import { useEffect, useRef } from 'react';

export const useScrollEvent = () => {
  const wideContainer = useRef(null);
  const deliveryBtn = useRef(null);
  const mainIcons = useRef(null);
  const searchForm = useRef(null);

  useEffect(() => {
    //getElementById를 이용하여 특정elem를 target하는 방법도 사용해보고 싶었다.
    //이 외의 나머지 대부분 방식은 useRef를 사용했다.
    const test1 = document.getElementById('1');
    const listener = () => {
      const isAllElementFound =
        deliveryBtn.current &&
        mainIcons.current &&
        searchForm.current &&
        wideContainer.current;

      if (window.scrollY > 190 && isAllElementFound) {
        deliveryBtn.current.style = `display:none`;
        mainIcons.current.style = `display:block`;
        searchForm.current.style = `display:block`;

        wideContainer.current.style = `position:fixed;
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
        wideContainer.current.style = `;
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
    wideContainer,
    deliveryBtn,
    mainIcons,
    searchForm,
  };
};
