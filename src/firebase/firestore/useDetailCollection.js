import { collection, getDocs, onSnapshot, orderBy, query, where } from "firebase/firestore";
import { useEffect, useState, useRef } from "react";

import { db } from "../app.js";
import { productId, productIdAtom } from "../../pages/ProductDetail/ProductInquiry/@recoil/productId";
import { useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { useRecoilState } from "recoil";
import { productListFamily } from '@/store/productListState.js';

export const useDetailCollection = (collectionName) => {
  //const recentData = useRef(null);
  //let recentDataCurrent;
  const [dataState, setDataState] = useState();
  const { productId } = useParams();
  const product = useRecoilValue(productListFamily(productId));
  const [productIdState, setProductIdState] = useRecoilState(productIdAtom);
  
  
  // snapshot에는 컬렉션이 들어있다
  // snapshot은 문서(데이터)들을 배열로 저장한다 => [ {..}, {..}, {..} ]
  useEffect(() => {
    // 최신 날짜순 정렬
    setProductIdState(product.id);
    console.log("파이어스토어: ", productIdState);
    const sortCollectionRecentDate = query(collection(db, collectionName), where("productId", "==", productIdState), orderBy("date", "desc"));

    onSnapshot(sortCollectionRecentDate, (snapshot) => {
      let dataArr = [];
  
      // snapshot.docs는 배열이므로 forEach 사용 가능
      snapshot.docs.forEach((doc) => {
        dataArr.push({...doc.data()});
      })
      console.log(dataArr);

      //recentDataCurrent = dataArr;

      setDataState(dataArr);
      //recentData.current = dataArr;
      //recentDataCurrent = recentData.current;
      console.log("현재 배열 상태", dataState);

      //setDataState(dataArr);
    });
  }, []);

  return { dataState };
}