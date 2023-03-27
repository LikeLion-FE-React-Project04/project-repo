// import { useEffect } from 'react';
// import { useRecoilValue, useRecoilState } from 'recoil';
// import { useSetRecoilState } from 'recoil';

// import styles from './DetailPagination.module.css';

// import { renderAllFilterListSelector } from '@/pages/ProductList/@recoil/renderState';


// /* --------- review와 inquiry는 각각 다른 경로에서 limitAtom과 pageAtom을 불러와야 함 -------- */

// // inquiry
// import {
//   inquiryLimitAtom, 
//   inquiryPageAtom,
// } from '@/pages/ProductDetail/ProductInquiry/@recoil/renderState.js';

// // review
// // import {
// //   reviewLimitAtom,
// //   reviewPageAtom,
// // } from '@/pages/ProductDetail/ProductReview/@recoil/renderState.js';

// // import { productListState } from '../../store/productListState';
  
//   export const DetailPagination = (props) => {
//     const { uiType } = props;
    
//     // const {limitAtom, pageAtom} = await import('@/pages/ProductDetail/ProductInquiry/@recoil/renderState.js')
//     // console.log('limitAtom :', limitAtom);
//     // console.log('pageAtom :', pageAtom);

//     const renderAllFilterList = useRecoilValue(renderAllFilterListSelector);
//     let limitAtom = inquiryLimitAtom;
//     let pageAtom = inquiryPageAtom;

//     // if(uiType == 'inquiry') {
//     //   limitAtom = inquiryLimitAtom;
//     //   pageAtom = inquiryPageAtom;
//     // }
//     // else if(uiType == 'review') {
//     //   // limitAtom = reviewLimitAtom;
//     //   // pageAtom = reviewPageAtom;
//     // }
//     // else { // inquiry나 review를 제외한 다른 타입으로 uiType을 보내줬을 경우
//     //   console.log(new Error('uiType이 올바르지 않습니다'));
//     // }

//   // productListState
//   const limit = useRecoilValue(limitAtom);
//   const [page, setPage] = useRecoilState(pageAtom);

//   console.log(renderAllFilterList, 'renderAllFilterList');

//   const numPages = Math.ceil(renderAllFilterList.length / limit);

//   return (
//     <>
//       <nav className={styles.paginationContainer}>
//         <button
//           className={styles.paginationPrev}
//           onClick={() => setPage(page - 1)}
//           disabled={page === 1}
//         />
//         <button
//           className={styles.paginationNext}
//           onClick={() => setPage(page + 1)}
//           disabled={page === numPages}
//         />
//       </nav>
//     </>
//   );
// };

