import { initializeApp } from "firebase/app";
import { addDoc, getFirestore, collection, Timestamp } from "firebase/firestore";
import { useState } from "react"

import { db } from "../app.js";

const initialState = {
  title: '',
  textarea: '',
  writer: '',
  date: Timestamp.fromDate(new Date()),
  state: 'pending',
}

export const useDetailFireStore = (collectionName) => {
  //const [iniState, setIniState] = useState(initialState);

  /* --------------------------------- 문서(데이터) 추가하기 -------------------------------- */
  const addDocument = async (dataObject) => {
    // # collection(db, collectionName) 은 컬렉션의 참조를 반환한다
    //    - if) 기존에 collectionName의 컬렉션이 존재한다면 -> 그걸 가져와서 참조값을 반환
    //    - if) collectionName에 해당하는 컬렉션이 존재한다면 -> 새롭게 컬렉션을 생성하고 참조값을 반환
    // # addDoc
    //    - collectionName의 컬렉션에 문서를 추가하고, 그 문서의 참조값을 반환한다
    //    - addDoc으로 넘겨주는 인자 => addDoc(컬렉션 참조 값, 저장 할 데이터);
    try {
      const docRef = await addDoc( collection(db, collectionName) , {...initialState, ...dataObject});
      
      // docRef.id로 새로 추가한 데이터의 id값을 출력해본다(id명은 알아서 생성됨)
      console.log("Document written with ID: ", docRef.id);
    } catch (error) { // 컬렉션에 문서를 추가하는 걸 실패하면 에러를 출력한다
      console.log(new Error(error));
    }
  }

  /* ---------------------------------- 내보내기 ---------------------------------- */
  return { addDocument };
  // return { addDocument, iniState, setIniState };
}

