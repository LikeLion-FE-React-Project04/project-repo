import styles from './Secret.module.scss';

export function Secret() {
  return (
    <>
      <div className={styles.secretCheckBox}>
        <input id="isSecret" name="checker" role="tab" tabIndex="0" type="checkbox" />
        <label htmlFor="isSecret">
          <span>비밀글로 문의하기</span>
        </label>
      </div>
    </>
  );
}