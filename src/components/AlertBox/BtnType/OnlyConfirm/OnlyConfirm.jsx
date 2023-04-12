import styles from './OnlyConfirm.module.scss';

export function OnlyConfirm({confirmEvent}) {
  return (
    <>
      <div>
        <button 
          className={styles.confirmBtn} 
          onClick = {confirmEvent}
          >확인</button>
      </div>
    </>
  );
}
