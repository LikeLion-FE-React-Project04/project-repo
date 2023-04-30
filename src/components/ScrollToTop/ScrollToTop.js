import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop(){
   // useLocation을 사용하기 위해서는 라우터 설치가 필수
   // pathname으로 사용자가 현재 머물러있는 페이지에 대한 정보를 알려줌
    const { pathname } = useLocation();

  // pathname을 인식할때마다 스크롤이 (0,0)(x좌표 0, y좌표 0)으로 상태변화를 감지하게 useEffect 처리를했다.
    useEffect(() => {
        window.scrollTo(0,0); // 화면 초점을 상단으로 이동시킴
    }, [pathname]);

    return null;
}