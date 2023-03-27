import { useEffect, useRef, React } from 'react';

import { ReactDOM } from 'react-dom';

import styles from "./ReviewListContainer.module.scss";

import { useDetailCollection } from './../../../firebase/firestore/useDetailCollection';

import ProductReviewList from "./ProductReviewList/ProductReviewList";

import { Badge } from '@/components/Badge/Badge.jsx';
import AccordionItem from '@/components/Accordion/AccordionItem';


export default function ReviewListContainer() {
  // 문서를 저장 할 컬렉션 이름 
  const collectionName = 'reviewData';
  // 한번 실행시켜 => useEffect가 실행될임
  const { dataState } = useDetailCollection(collectionName);

  useEffect(() => {
    console.log("[ProductReview] dataState> ", dataState);
  }, [dataState]);

  return (
    <div>
      <div className={styles.productReviewTotal}>
        <span className={styles.productReviewCount}>총2개</span>
        <div className={styles.productReviewOrder}>
          <button>추천순</button>
          <button>최근 등록순</button>
        </div>
      </div>

      <div>
        <AccordionItem index={1} width="1024px">
          {/* handle요소 */}
          <div className={styles.badge}>
            <Badge uiType='noticeBadge'>공지</Badge>
            <button className={styles.badgeButton}>금주의 베스트 후기 안내</button>
          </div>
          {/* panel요소 */}
          <div className={styles.panel}>
            ■ 베스트 후기 당첨자 안내<br />
            고객님 안녕하세요, 컬리입니다.<br />
            <br />
            <br />
            [ 2023년 03월 06일 ~ 2023년 03월 12일 ]의 베스트 후기 당첨자 공지드립니다.<br />
            <br />
            컬리는 상품에 대한 고객 여러분의 생생한 의견을 듣고 더 나은 상품을 준비하기 위해 상품 후기 게시판을 운영하고 있습니다.<br />
            <br />
            실제로 상품의 후기가 구매 결정에 있어 큰 도움이 된 베스트 후기를 아래로 공유드립니다.<br />
            <br />
            정성껏 후기를 작성해주신 모든 고객님께 감사드립니다.<br />
            <br />
            [미식당] 치즈롤 돈카츠 150g * 2입 (소스포함)<br />
            [맑은물에] 국산콩 담백 면두부 2종<br />
            [1등급 한우] 다짐육 이유식용 200g (냉장)<br />
            [YOZM] 크리스피 그래놀라 요거트<br />
            [시리츠] 캐쥬얼 보울 6종 (택1)<br />
            [스마트푸드] 화이트 체다치즈 팝콘<br />
            [PPUL] 1++ 한우 절단국거리용 200g (냉장)<br />
            [KF365] GAP 밀양 깻잎 3속<br />
            [백설] 맛술 2종 (택1)<br />
            [조선호텔] 삼계탕 900g<br />
            [풀무원] 소고기 버섯 비빔밥 2인분<br />
            [바이 오디티디] 하이드라 카밍 크림(진정수분크림/약산성)<br />
            [이금선명인] 순살 간장양념 꽃게장 250g 2종 (냉동)<br />
            [LOTS OF TASTE] 마파두부소스<br />
            전골용 모둠 버섯 500g<br />
            [모현상회] 절단 코다리 750g (냉동)<br />
            미고랭 스파이시 라면 400g (80g x 5입)<br />
            [페이브] 하우스 블렌드 원두 2종<br />
            [디어스킨] 에어엠보 입는 오버나이트(4P) 2종 (택1)<br />
            오이지 3입<br />
            바다모음 매생이 6g (냉장)<br />
            [모노키친] 납작 매생이 굴 칼국수<br />
            [자로우] 우먼즈 펨 도필러스 (60일분)<br />
            [미트지엥] Flex 밀키트 시즈닝 호주산 채끝 스테이크 300g<br />
            [Sunterra] 보리먹인 캐나다 냉장 목심500g (에어프라이어)<br />
            [스킨푸드] 캐롯 카로틴 카밍 워터 패드 250g (60매)<br />
            [KS365] 물티슈 엠보싱 캡형 (100매 X 10팩)<br />
            [kims butcher] 미국산 초이스 소고기 샤브샤브용 1kg<br />
            [죠스떡볶이] 껍질없는 슬라이스 누드순대<br />
            [피코크] 금돼지식당 김치찌개<br />
            [헤라] 센슈얼 파우더 매트 리퀴드 5종 (택1)<br />
            [김구원선생] 서리태 순두부 2입<br />
            [정다운] 느린농장 오리 가슴살 500g<br />
            바로먹는 자숙 우엉채 500g<br />
            [콜린스 다이닝] 한돈 가지 솥밥 키트<br />
            [맛의고수] 통편육 250g<br />
            [중앙씨푸드] 해파리냉채 195g (냉장)<br />
            [미식당] 블랙 돈카츠 150g *2입 (소스포함)<br />
            [발로나] 태블렛 초콜릿 5종 (택1)<br />
            [리터스포트] 너트 셀렉션 5종<br />
            [디어파인] 시그니처 그릭요거트<br />
            [비비드키친] 저칼로리 스위트 칠리 소스<br />
            [모던구루] 그래놀라 7종<br />
            [브레밀] 크림치즈 갈릭 바게트볼 (4개입)<br />
            [하코야] 차슈 슬라이스 210g<br />
            [욱이네] 뼈없는 감자탕<br />
            [오타후쿠] 오코노미야키 소스<br />
            [Karly's] 냉동 다진마늘<br />
            [샤프란] 꽃담초 허브부케가르니 섬유유연제 3종 (택1)<br />
            [자연실록] 무항생제 닭 안심살 500g<br />
            [브룩클린688] 호주산 안창살 구이용 300g (냉장)<br />
            [웨이큰] 마우스워시 500ml 4종<br />
            [아로마티카] 서큘레이팅 바디오일 주니퍼베리&amp;진저 100ml<br />
            [마루코메] 미소시루 와카메 (12개입)<br />
            [도드람한돈] 등심꽃살 구이용 500g (냉장)<br />
            [엄마의 목욕탕 레시피] 바디 필링패드 8매입(+3매입 추가 증정) 3종(택 1)<br />
            [칼라마타] 엑스트라버진 실버틴_바질<br />
            [풀무원] 야채 꼬마김밥 KIT<br />
            [벨지오이오소] 프로볼론 치즈 스낵팩<br />
            [KF365] 1+등급 무항생제 특란 15구<br />
            [아우름] 바다를 품은 솥밥키트 2종 (냉동) (택1)<br />
            [스켑슐트] 트레디셔널 무쇠주물 계란말이 프라이팬<br />
            비금도 재래 섬초 250g<br />
            [블루] 간편하게 손질된 명태 1kg (냉동)<br />
            [마이디벨] 포테이토바이트 감자튀김<br />
            [모현상회] 절단 코다리 750g (냉동)<br />
            [진실된손맛] 모둠나물 손맛 3종(시금치&amp;콩나물&amp;느타리)<br />
            [외할머니댁] 일산 털레기 수제비<br />
            [KF365] 춘천식 닭갈비 1kg (냉장)<br />
            [가히] 크림 클렌징 폼<br />
            [풀무원] 파기름 볶음면 2인분<br />
            [핏펫] 플라고 치약 플러스 80g<br />
            [모터시티] 디트로이트 피자 (트리플 치즈&amp;꿀)<br />
            [부르스터스] 2가지맛 아이스크림 미니컵 세트 4종 (택1)<br />
            [파스퇴르] 쾌변 ABC 주스맛 (150mL X 4개)<br />
            [딥퍼랑스] 진저바바 두피강화 헤어세트 머스크향 (샴푸트리트먼트타올)<br />
            [진실된손맛] 소곱창전골<br />
            [보코통] 유기농 대형 화장솜 3종<br />
            [켈로그] 현미후레이크 550g<br />
            [은하수산] 제주 광어 지느러미회 (엔가와)<br />
            [스위프리] 샤인마토 500g<br />
            [디오디너리] 글리코릭 애씨드 7% 토닝 솔루션(고강도각질토너)<br />
            [진실된손맛] 소곱창전골<br />
            [보마켓] 시그니처 로제 떡볶이<br />
            [퀘소로시난테] 만체고 치즈 3개월<br />
            [더마펌] 수딩 리페어 마스크 R4 (5매)<br />
            친환경 향표고버섯 200g<br />
            [압구정포차] IQF 버팔로 봉 600g (냉동)<br />
            [글로벌] 나이프 7종 (택1)<br />
            연근채 300g<br />
            흰강낭콩 500g<br />
            [원씽] 병풀 추출물 2종<br />
            [티아시아키친] 발리 나시고랭 소스<br />
            <br />
            칼리 드림.
          </div>
          {/* underline요소 */}
          <div className={styles.accordionLine} />
        </AccordionItem>

        <AccordionItem index={2} width="1024px">
          <div className={styles.badge}>
            <Badge uiType='noticeBadge'>공지</Badge>
            <button className={styles.badgeButton}>상품 후기 적립금 정책 안내</button>
          </div>
          <div className={styles.panel}>
            고객님 안녕하세요. 컬리 입니다.<br />
            적립금 지급 정책을 안내드리니 컬리 이용에 참고 부탁드립니다.<br />
            <br />
            ■ 적립금 지급 정책 ■<br />
            <br />
            1. 일반 후기<br />
            -글 후기 50원/건<br />
            -사진 후기 100원/건<br />
            *퍼플/더퍼플 러버스 고객님께는 더블 후기 적립금이 지급됩니다.<br />
            *지급에 영업일 기준 1~2일 소요됩니다.<br />
            → 금~일 작성 시, 월요일 지급<br />
            <br />
            2. 베스트 후기<br />
            1) 선정 건 수 : 일주일 최대 100건<br />
            2) 혜택 : 선정 시 적립금 5,000원<br />
            3) 지급 일시 : 매주 수요일 (지급일이 공휴일의 경우 전 영업일)<br />
            *당첨 상품 및 그 주의 Best 후기는 후기 게시판에서 확인하실 수 있습니다.<br />
            <br />
            3. 후기 적립금 지급 유의 사항<br />
            컬리는 믿을 수 있는 후기문화를 함께 만들어가고자 합니다. 따라서 후기 내용이 아래에 해당하는 경우에는 검토 후 삭제 및 적립금 회수 조치될 수 있습니다.<br />
            <br />
            1. 욕설, 폭력성, 음란성, 상업성 등 업체나 타인에게 불쾌한 내용을 작성한 경우<br />
            2. 구매한 상품과 무관한 내용이나 동일 문자/단순 초성의 반복 등 부적합한 내용을 작성한 경우<br />
            3. 상품의 기능이나 효과 등에 오해의 소지가 있는 내용을 작성한 경우<br />
            4. 저작권, 초상권 등 타인의 권리를 침해하는 이미지, 동영상을 사용한 경우<br />
            5. 구매한 상품이 아닌 캡쳐 사진, 포장 박스 사진 등 상품과 관련 없는 이미지, 동영상을 사용한 경우<br />
            <br />
            또한, 비정상적인 방법을 통해 후기를 작성하고 적립금을 취득한 경우 작성자에 법적 책임의 소지가 있음을 알려드립니다.
          </div>
          <div className={styles.accordionLine} />
        </AccordionItem>

        {dataState ? <ProductReviewList data={dataState} /> : null}
      </div>
    </div>
  )
}