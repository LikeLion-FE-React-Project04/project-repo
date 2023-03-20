import styles from './Secret.module.scss';

export function Secret() {
  return (
    <>
      <div className={styles.secretCheckBox}>
        <input type="checkbox" name="checker" id="isSecret" role="tab" aria-checked="false" tabindex="0" />
        <label htmlFor="isSecret"></label>
        <span>비밀글로 문의하기</span>
      </div>
    </>
  );
}