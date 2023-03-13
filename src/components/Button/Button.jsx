import styles from "./Button.module.scss";

export function Button({
  uiType = 'primary',
  ...restProps
}) {
  console.log('...restProps', restProps);

  const combinedClassNames = `${styles.button} ${getUiStyle(uiType)}`

  return (
    <div>
      <button className={combinedClassNames} type='button'>{restProps.name}</button>
    </div>
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
    case 'third':
      uiStyle = styles.third;
      break;
  }

  return uiStyle;
}