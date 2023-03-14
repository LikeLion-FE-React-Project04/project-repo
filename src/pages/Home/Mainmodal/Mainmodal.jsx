import { Link } from 'react-router-dom';

import styles from './Mainmodal.module.scss';


export function Mainmodal({setModalOpen}) {
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <div className={styles.mainModalWrap}>
        <div className={styles.popUpContainer}>
          <div>
            <Link className={styles.popUpBeauty} to="/"></Link>
          <button type="button">오늘 하루 안 보기</button>
          <button className={styles.modalCloseBtn} type="button" onClick={closeModal}>닫기</button>
          </div>
        </div>
      </div>
    </>
  );
}