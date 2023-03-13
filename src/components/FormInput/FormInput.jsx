import styles from './FormInput.module.scss';

export function FormInput({
  uiType = 'primary',
  className = '',
  customStyle = {},
  ...restProps
}) {
  console.log('className', className);
  const combinedClassNames = `${styles.input} ${className} ${getUiStyle(
    uiType
  )}`.trim();

  console.log('customStyle', customStyle);

  return (
    <input {...restProps} className={`${styles.input}`} style={customStyle} />
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

// props = {className:{styles.test2}
//         label:"이메일"
//         name:"email"
//         placeholder:"아이디를 입력해주세요"
//         type:"email"
//       uiType="secondary"}
