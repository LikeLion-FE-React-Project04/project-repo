import { collection, getDocs, onSnapshot } from "firebase/firestore";
import { useEffect, useState, useRef } from "react";

import { db } from "../app.js";

export const useDetailCollection = (collectionName) => {
  //const recentData = useRef(null);
  const [dataState, setDataState] = useState();
  //let recentDataCurrent;

  // snapshot에는 컬렉션이 들어있다
  // snapshot은 문서(데이터)들을 배열로 저장한다 => [ {..}, {..}, {..} ]
  useEffect(() => {
    onSnapshot(collection(db, collectionName), (snapshot) => {
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