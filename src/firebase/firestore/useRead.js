import {
  collection,
  getFirestore,
  getDocs,
  where,
  query,
  orderBy,
  getCountFromServer,
} from 'firebase/firestore';

import { useEffect, useCallback, useMemo, useState } from 'react';

import countBy from 'lodash-es/countBy';
import groupBy from 'lodash-es/groupBy';

import { app } from '@/firebase/app.js';

/* ------------------------------------------------------------------------ */

// useRead.js는 ProductList Page에서 각각 분류 된 필터들의 리스트 갯수를 가져오기 위해 만들어진 커스텀 훅입니다.
// 총 3가지 방법으로 접근해봤습니다.

/* ------------------------------------------------------------------------ */

// 1. Lodash를 사용하는 방법
// 맨 처음 프로토타입으로 함수에서 for of 반복문 때문에 네트워크 호출이 잦게 되고, 자원을 많이 잡아먹는 이슈가 발생했습니다.
// 이것의 해결으로 JavaScript 라이브러리인 lodash를 이용한 방법을 사용했습니다.
// 그런데 코드에도 보시면 아시겠다시피, 카테고리 필터 한정입니다.
// 현재 카테고리 필터에 적용 중이며, '공통으로 사용할 수 있는 방법이 없을까?' 로 접근한게 2번방식 입니다.

export const getCategoryCount = async () => {
  const db = getFirestore(app);
  const ref = collection(db, 'productlist');

  const qry = query(ref);
  const snapshot = await getDocs(qry);

  const dataList = snapshot.docs.map((doc) => {
    return doc.data();
  });

  const categoryDataList = countBy(dataList, 'category');

  return categoryDataList;
};

/* ------------------------------------------------------------------------ */

// 2. memoization을 사용하는 방법
// 1번방식에서 '공통으로 사용할 수 있는 방법이 없을까?' 로 접근한 방식 입니다.
// 컨셉은 Firebase에 있는 DB에 접근해서 컬렉션에 있는 전체 리스트들을 가져온 후, 호출부에서 countBy를 사용하는 것 입니다.
// 현재 가격 필터에 적용되어있습니다.
// 그런데 유지보수가 어렵습니다.. 많은 이슈들이 나왔었는데, 제일 큰 이슈가 firebase에서 계속 읽는다는 것입니다.
// validation을 주려다 firebase에서 순식간에 7만회를 읽는 이슈가 발생하고, 일일 사용량 초과사용으로 인해 하루 계정정지도 먹었습니다..
// 그래서 JS로 접근하는 방법 말고도, 다른 방법으로 접근 할 수 없나 고민했습니다.. 그 방식이 3번방식 입니다.
// 추가로 도전해보고 싶은 방법이 있는데 recoil의 selector을 이용하는 것입니다.
// selector을 이용하면 비동기통신과 메모이제이션 두 친구를 잡을 수 있습니다.

/**
 * collectionKey는 firebase의 컬렉션 이름 입니다
 * @type {collectionKey: string}
 */

export function useReadData(collectionKey) {
  // isLoading , error , data 상태들을 초기화
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  const readData = useCallback(async () => {
    //isLoading을 true로 설정
    setIsLoading(true);
    //Firestore 데이터베이스에서 데이터를 쿼리한 다음, 해당 데이터를 배열로 반환
    try {
      const db = getFirestore(app);
      const ref = collection(db, collectionKey);
      const qry = query(ref);
      const snapshot = await getDocs(qry);
      const dataList = snapshot.docs.map((doc) => doc.data());
      setError(null);
      return dataList;
      //에러가 발생 시, error 상태를 설정하고 null을 반환
    } catch (error) {
      setError(error);
      return null;
      //에러 상태를 초기화
    } finally {
      setIsLoading(false);
      setError(null);
    }
  }, [collectionKey]);

  useEffect(() => {
    readData().then((dataList) => {
      if (dataList) {
        setData(dataList);
      }
    });
  }, [readData]);

  return { isLoading, error, data, setData, readData, setIsLoading };
}
/* ------------------------------------------------------------------------ */

// 3. getCountFromServer()을 사용하는 방법
// '코드수도 적어지고 보기도 편하고, Firebase의 방식대로하는 방법이 없을까?' 로 접근한 방식 입니다.
// 컨셉은 FIREBASE API에 소개하는 getCountFromServer()를 사용하는 것 입니다. (디스코드에 관련된 링크를 올려두었습니다.)
// 현재 혜택과 유형 필터에 적용되어있습니다.
// 원래는 filteredName, operatorSymbol, value의 parameter을 받았지만, 함수합성을 이용해 리팩토링 하였습니다.
// whereCriteria는 쿼리의 where(), orderCriteria는 쿼리의 orderBy()를 넣어주시면 됩니다.

export const useGetCountFromServer = async ({
  // filteredName,
  // operatorSymbol,
  // value,
  whereCriteria,
  orderCriteria,
}) => {
  // 앱을 생성
  const db = getFirestore(app);
  // 컬렉션 참조를 생성, 2번째 인자로 내 database list들을 소환쓰하는게 맞낭 우선불러와보자
  const ref = collection(db, 'productlist');
  // 쿼리 객체를 생성
  const qry = query(ref, whereCriteria, orderCriteria);

  const snapshot = await getCountFromServer(qry);
  return snapshot.data().count;
};

/* -------------------------------브랜드필터 테스트용, 사용되고있지않음------------------------------------- */

export const useGetBrandListData = async () => {
  const db = getFirestore(app);
  const ref = collection(db, 'productlist');
  // const qry = query(ref, where('brand', '>=', a + 'z'), orderBy('brand'));
  const qry = query(ref);
  const snapshot = await getDocs(qry);

  const dataList = snapshot.docs.map((doc) => {
    return doc.data();
  });

  const brandDataList = countBy(dataList, 'brand');
  return brandDataList;

  // const brandDataList = groupBy(dataList, (item) => {
  //   const consonant = getConsonant(item.brand);
  //   if (consonant >= 'ㄱ' && consonant <= 'ㅎ') {
  //     return consonant;
  //   }
  //   return 'etc';
  // });

  // const sortedBrandDataList = Object.keys(brandDataList)
  //   .sort((consonant1, consonant2) => {
  //     if (consonant1 === 'etc') return 1;
  //     if (consonant2 === 'etc') return -1;
  //     return consonant1.localeCompare(consonant2, 'ko');
  //   })
  //   .map((consonant) => {
  //     return {
  //       consonant,
  //       list: brandDataList[consonant].sort((a, b) =>
  //         a.brand.localeCompare(b.brand, 'ko')
  //       ),
  //     };
  //   });

  // return sortedBrandDataList;
};
