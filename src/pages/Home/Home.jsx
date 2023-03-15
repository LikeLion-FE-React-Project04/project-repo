import { useState, useLayoutEffect } from 'react';

import { Footer } from '../../components/Footer/Footer';

import { Mainmodal } from './Mainmodal/Mainmodal';

function Home() {
  // isModalOpen은 메인모달창이 떠있는 여부를 결정한다
  const [isModalOpen, setModalOpen] = useState(true);

  // 사용자에게 노출되는 DOM을 변형시킬 때 효과적인 useLayoutEffect
  useLayoutEffect(() => {
    // getCookie 함수를 통해 'modalClose'라는 쿠키가 있는지 확인한다
    let modalCloseValue = getCookie('modalClose');

    if (modalCloseValue && modalCloseValue?.includes('T')) { // 쿠키가 존재할 때
      setModalOpen(false); // 모달창을 띄우지 않는다
    }
  }, []); // 첫 랜더링에만 동작

  return (
    <>
      <div>Home</div>
      {isModalOpen ? <Mainmodal setModalOpen={setModalOpen} /> : null}
    </>
  );
}

function getCookie(name) {
  let cookieName = document.cookie
    .split(';')
    .find((c) => c.trim().startsWith(`${name}=`)); // modalClose찾기

  if (cookieName) {
    // 쿠키이름에 해당하는 T반환
    return cookieName.split('=').map((v) => decodeURIComponent(v.trim()))[1];
  }
}

export default Home;
