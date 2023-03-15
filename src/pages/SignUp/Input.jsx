import styles from '@/pages/SignUp/Input.module.scss';

function Input({text, children, must = false}) {
  return (
    <>
      <div className={styles.InputBundle}>
        <div className={styles.SubInfoBox}>
          {/* flag ? true : false */}
          {must?(<p className={styles.Must}>{text}</p>):(<p>{text}</p>)}
        </div>
        {children}
      </div>
    </>
  )
}

export default Input