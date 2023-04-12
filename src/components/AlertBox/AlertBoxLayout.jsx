// import ReactDOM from 'react-dom';
// import { AlertBox } from './AlertBox';
// import styles from './AlertBoxLayout.module.scss';
// import { useRecoilValue } from 'recoil';
// import { alertModalState } from './@recoil/alertModalState.js'

// function AlertBoxLayout({
//   children,
// }) {
//   const isVisible = useRecoilValue(alertModalState);

//   if (isVisible) {
//     return ReactDOM.createPortal(
//       <div className={styles.alertBoxLayout}>
//         <AlertBox />
//       </div>,
//       document.getElementById('alertBoxPortal')
//     );
//   }
// }

// export default AlertBoxLayout;