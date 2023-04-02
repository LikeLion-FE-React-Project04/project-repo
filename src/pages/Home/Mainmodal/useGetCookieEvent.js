import { useState, useLayoutEffect } from 'react';

import { getCookie } from '../../../utils';
import { useRecoilState } from 'recoil';
import { productMainmodalState } from './@recoil/MainmodalState';
import { useSetRecoilState } from 'recoil';
import { transparentFilterState } from '../../../components/TransparentFilter/@recoil/transparentFilterState';

export const useGetCookieEvent = () => {
  // const [isModalOpen, setModalOpen] = useState(true);
  // recoil로 바꾸기
  const [isVisible, setIsVisible] = useRecoilState(productMainmodalState);
  const setTransparentFilter = useSetRecoilState(transparentFilterState);

  useLayoutEffect(() => {
    let modalCloseValue = getCookie('modalClose');

    if (modalCloseValue && modalCloseValue?.includes('T')) { // 쿠키가 존재할 때
      setIsVisible(false); // 모달창을 띄우지 않는다
      setTransparentFilter(false); // transparent필터를 false로 설정한다
    }
    else { // 쿠키가 존재하지 않는다면,
      setIsVisible(true); // 모달창을 띄운다
      setTransparentFilter(true); //  transparent필터를 true로 설정한다
    }
  }, []); // 첫 랜더링시에만 동작

  return {
    isVisible,
    setIsVisible,
  };
};

