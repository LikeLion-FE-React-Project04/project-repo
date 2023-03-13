import styles from './FormInput.module.scss';

export function FormInput({
  uiType = 'primary',
  className = '',
  ...restProps
}) {
  const combinedClassNames = `${styles.input} ${className} ${getUiStyle(
    uiType
  )}`.trim();

  return (
    <input {...restProps} className={combinedClassNames} />
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

