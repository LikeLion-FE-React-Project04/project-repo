
import styles from './ConfirmAndCancel.module.scss';

export function ConfirmAndCancel({confirmEvent, cancelEvent}) {
  return (
    <>
      <div className={styles.btnWrapper}>
        <button className={styles.cancelBtn} onClick={cancelEvent}>취소</button>
        <button className={styles.confirmBtn} onClick={confirmEvent}>확인</button>
      </div>
    </>
  );
}