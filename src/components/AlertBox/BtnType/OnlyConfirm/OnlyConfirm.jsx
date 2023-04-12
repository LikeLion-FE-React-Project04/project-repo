// import styles from './OnlyConfirm.module.scss';
// import { useRecoilValue } from 'recoil';
// import { alertModalConfirmBtn, alertModalConfirmBtn2 } from '../../@recoil/alertModalState';
// import { useEffect } from 'react';
// import { useState, useRef } from 'react';

// export function OnlyConfirm({event}) {
//   // const addConfirmEvent = ()=>{console.log('test12345');};
//   let addConfirmEvent = useRecoilValue(alertModalConfirmBtn);
//   let addConfirmEvent2 = useRecoilValue(alertModalConfirmBtn2);
//   //addConfirmEvent = addConfirmEvent();
//   //const testRef = useRef();

//   // const [test,setTest] = useState(null);
//   // let testEvent;

//   // useEffect(()=>{
//   //   // setTest(addConfirmEvent);
//   //   // testEvent = ()=>{
//   //   //   console.log("확인버튼 누를때 addConfirmEvent =>", addConfirmEvent);
//   //   //   event(); 
//   //   //   //addConfirmEvent();
//   //   // };
//   //   // testRef.current.onClick = testEvent;
//   //   console.log("addConfirmEvent", addConfirmEvent)
//   // },[addConfirmEvent])

//   console.log("addConfirmEvent11", addConfirmEvent)

//   // function testHandler() {
//   //   console.log("onClick이벤트 입니다 => addConfirmEvent는? ", addConfirmEvent);
//   // }

//   return (
//     <>
//       <div>
//         <button 
//           className={styles.confirmBtn} 
//           onClick = {addConfirmEvent2}
//           >확인</button>
//       </div>
//     </>
//   );
// }
// //     onClick = {addConfirmEvent?(()=>{console.log("확인버튼 누를때 addConfirmEvent =>", addConfirmEvent);
// // event(); addConfirmEvent();}):(()=>{console.log("이벤트 못받음 addConfirmEvent =>", addConfirmEvent);
// // event(); })}