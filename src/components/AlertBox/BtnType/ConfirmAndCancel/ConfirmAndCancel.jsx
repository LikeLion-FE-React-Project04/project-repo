// import { useRecoilValue } from 'recoil';
// import { alertModalConfirmBtn } from '../../@recoil/alertModalState';
// import styles from './ConfirmAndCancel.module.scss';
// import { useEffect } from 'react';


// export function ConfirmAndCancel({event}) {
//   let addConfirmEvent;

//   useEffect(()=>{
//     addConfirmEvent = useRecoilValue(alertModalConfirmBtn);
//   },[]);

//   return (
//     <>
//       <div className={styles.btnWrapper}>
//         <button className={styles.confirmBtn} onClick={()=>{event(); addConfirmEvent();}}>확인</button>
//         <button className={styles.cancelBtn} onClick={event}>취소</button>
//       </div>
//     </>
//   );
// }