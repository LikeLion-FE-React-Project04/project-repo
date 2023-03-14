import { useState, useEffect } from 'react';

import { Footer } from '../../components/Footer/Footer';

import { Mainmodal } from './Mainmodal/Mainmodal';

function Home() {
  // 창 로드 -> 쿠키 있는지 확인
  //               if)쿠키있음: 사용자가 오늘하루안보기 버튼을 누른적이 있다
  //               if)쿠키없음: 사용자가 오늘하루안보기 버튼을 누른적다

  const [isModalOpen, setModalOpen] = useState(true); // 초기 상태는 true로 설정
  
  useEffect(()=>{
    // 특정 name의 쿠키가 존재하는지 확인하는 함수
    function getCookie(name) {
      console.log("getCookie실행");
      const value = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)'); // 아마 name과 매치하는 쿠키가 있는지 확인하는듯
      // console.log(value[2]); 안찍혀요 ㅠㅠ

      if (value) {
        return value[2]; // 두번째 인덱스로 T반환
      }
      else 
        return null; // 쿠키가 존재하지 않으면 null반환
    };

    console.log("쿠키가 있는지 없는지 확인중~");
    // 문서가 로드되면 쿠키가 있는지 없는지 확인함
    window.addEventListener('DOMContentLoaded', function () {
      //console.log(`화면 다시 로딩 isModalOpen값=>${isModalOpen}`);
      if (getCookie('modalClose')) { // 'modalClose'라는 이름의 쿠키가 존재한다면 -> 다시 모달창을 띄울 필요가 없음
        setModalOpen(false); // 모달창 숨기기
      }
      else { // 'modalClose'라는 이름의 쿠키가 없다면 -> 모달창 띄워야 함
        setModalOpen(true); // 모달창 띄우기
      }
    });
    console.log("확인끝~");
    console.log(`렌더링/현재상태:${isModalOpen}`);
  });

  return (
    <>
      <div>Home</div>
      <Footer/>
      {/* 모달쿠키가 없으면 모달을 보이게 한다 */}
      {isModalOpen ? <Mainmodal setModalOpen={setModalOpen} /> : null}
    </>
  );
}

export default Home;
