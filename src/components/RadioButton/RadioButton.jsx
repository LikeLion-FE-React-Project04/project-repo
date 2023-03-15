import styles from '@/components/RadioButton/RadioButton.module.scss';

function RadioButton({children, name = '', uiType = 'primary'}) {

  const combinedClassNames = `${styles.RadioButton} ${getUiStyle(uiType)}`;

  return (

    <label className={styles.RadioButtonBox}>
      <input type="radio" name={name} value="option1" className={combinedClassNames} />
        {children}
    </label>

  )
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


export default RadioButton