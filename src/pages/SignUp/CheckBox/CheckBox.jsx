import styles from './CheckBox.module.scss';

function CheckBox({
  name = 'default',
  visibleLabel = false,
  children,
  ...rest
}) {
  return (
    <div className={styles.checkBoxLayout}>
      <input
        type="checkbox"
        className={styles.checkBox}
        id={name}
        {...rest}
        // onClick={handleClickBtn}
      />
      <label htmlFor={name} className={styles.label}>
        {visibleLabel && children}
      </label>
    </div>
  );
}

export default CheckBox;
