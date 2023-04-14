import styles from './Input.module.scss';

// must 속성 : 빨간 별표시
function Input({ text, children, must = false }) {
  return (
    <div className={styles.InputBundle}>
      <div className={styles.SubInfoBox}>
        {must ? <p className={styles.Must}>{text}</p> : <p>{text}</p>}
      </div>
      {children}
    </div>
  );
}

export default Input;
