import { useState, useLayoutEffect } from 'react';

import { getCookie } from '../../../utils';

export const useGetCookieEvent = () => {
  const [isModalOpen, setModalOpen] = useState(true);

  useLayoutEffect(() => {
    let modalCloseValue = getCookie('modalClose');

    if (modalCloseValue && modalCloseValue?.includes('T')) { // 쿠키가 존재할 때
      setModalOpen(false); // 모달창을 띄우지 않는다
    }
  }, []); // 첫 랜더링시에만 동작

  return {
    isModalOpen,
    setModalOpen,
  };
};

