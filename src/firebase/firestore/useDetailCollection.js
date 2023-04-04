import { collection, onSnapshot, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useRecoilValue, useRecoilState } from "recoil";

import { productIdAtom } from "../../pages/ProductDetail/ProductInquiry/@recoil/productId";

import { db } from "../app.js";

import { getStarName } from "../../utils/getStarName.js";

import { productListFamily } from '@/store/productListState.js';

export const useDetailCollection = (collectionName) => {
  const [dataState, setDataState] = useState();
  const { productId } = useParams();
  const product = useRecoilValue(productListFamily(productId));
  const [productIdState, setProductIdState] = useRecoilState(productIdAtom);
  
  // 상품 ID가 변경되면 productIdState atom을 업데이트 해야한다
  useEffect(() => {
    setProductIdState(product.id);
  }, [product.id]);

  useEffect(() => {
    if(productIdState) {
      const sortCollectionRecentDate = query(collection(db, collectionName), where('productId', '==', productIdState));
        // 원래 orderBy로 함께 쓰려고 했는데, Firestore의 색인(index) 생성 문제로 잘 작동이 안됨 ㅠㅠ
        // 원래대로라면, orderBy('date', 'desc')를 넣어주고, 색인 설정하면 됨
        // snapshot에는 컬렉션이 들어있다, snapshot은 문서(데이터)들을 배열로 저장한다 => [ {..}, {..}, {..} ]
      const unsubscribe = onSnapshot(sortCollectionRecentDate, (snapshot) => {
        let dataArr = [];
        
        // 이름에 *를 넣어주기 위한 확인
        let starWriter = { writer: '' };
       
        // snapshot.docs는 배열이므로 forEach 사용 가능
        snapshot.docs.forEach((doc) => {
          let getDoc = {...doc.data()};
          let getWriter = getDoc.writer;

          starWriter.writer = getStarName(getWriter); // 작성자 이름을 넘겨주면 별 이름으로 반환해주는 util함수
          dataArr.push({...doc.data(), ...starWriter});
        });
        console.log("현재 배열 상태(dataArr) 출력 => ", dataArr);
    
        // Index를 사용 못하는 대체방안 => 현재 orderBy를 못했으니, 그걸 Front-end 개발 단에서 내림차순으로 정렬 처리해야 함
        dataArr.sort(({date: aDate}, {date:bDate}) => {
          // if) 오름차순 정렬 => return aDate.toDate() - bDate.toDate();
          // if) 내림차순 정렬 => 최신순으로(우리가 하고 싶은 방향임)
          return bDate.toDate() - aDate.toDate();
        });
        setDataState(dataArr);
        console.log("현재 배열 상태(dataState) 출력 => ", dataState);
      });

      return unsubscribe; // 구독 취소, 스냅샷이 계속 작동되는걸 막음
    }
    
  }, [productIdState]);

  return { dataState };
};