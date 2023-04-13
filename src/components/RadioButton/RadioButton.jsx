import styles from '@/components/RadioButton/RadioButton.module.scss';

function RadioButton({ children, uiType = 'primary', id, ...rest }) {
  const combinedClassNames = `${styles.RadioButton} ${getUiStyle(uiType)}`;

  return (
    <>
      <label className={styles.RadioButtonBox} htmlFor={id}>
        {children}
      </label>
      <input
        type="radio"
        value="option1"
        className={combinedClassNames}
        id={id}
        {...rest}
      />
    </>
  );
}

function getUiStyle(uiType) {
  let uiStyle;

  switch (uiType) {
    case 'primary':
      uiStyle = styles.primary;
      break;
    case 'secondary':
      uiStyle = styles.secondary;
      break;
  }

  return uiStyle;
}

export default RadioButton;
