import { collection, doc, writeBatch } from 'firebase/firestore';
import { db } from '../app';

/**
 * Firestore 데이터 일괄 쓰기 유틸리티 함수
 * @param {unknown[]} dataList 데이터 리스트
 * @param {string} collectionKey 콜렉션 ID
 * @param {string} documentKey 도큐멘트 ID
 */
export const writeBatchData = async (
  dataList,
  collectionKey,
  documentKey = 'documentId'
) => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);

  dataList.forEach((data) => {
    const docRef = doc(collectionRef, data[documentKey].toLowerCase());
    batch.set(docRef, data);
  });

  try {
    await batch.commit();
    console.log('콜렉션 생성 및 도큐멘트 생성 일괄 처리가 완료되었습니다.');
  } catch (error) {
    console.log(error.message);
  }
};
