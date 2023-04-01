import { useState, useLayoutEffect } from 'react';

import { getCookie } from '../../../utils';
import { useRecoilState } from 'recoil';
import { productMainmodalState } from './@recoil/MainmodalState';

export const useGetCookieEvent = () => {
  // const [isModalOpen, setModalOpen] = useState(true);
  // recoil로 바꾸기
  const [isVisible, setIsVisible] = useRecoilState(productMainmodalState);

  useLayoutEffect(() => {
    let modalCloseValue = getCookie('modalClose');

    if (modalCloseValue && modalCloseValue?.includes('T')) { // 쿠키가 존재할 때
      setIsVisible(false); // 모달창을 띄우지 않는다
    }
  }, []); // 첫 랜더링시에만 동작

  return {
    isVisible,
    setIsVisible,
  };
};

