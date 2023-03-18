import styles from './Button.module.scss';
import PropTypes from 'prop-types';

export function Button({
  uiType = 'primary',
  children = '테스트',
  className = '',
  ...restProps
}) {
  const combinedClassNames = `${styles.button} ${getUiStyle(
    uiType
  )} ${className}`.trim();

  return (
    <button className={combinedClassNames} {...restProps}>
      {children}
    </button>
  );
}

function getUiStyle(uiType = 'primary') {
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
    case 'fourth':
      uiStyle = styles.fourth;
  }

  return uiStyle;
}

// Button.defaultProps = {
//   uiType: 'primary',
//   children: '테스트',
//   className: '',
// };

// Button.propTypes = {
//   /** 버튼 모양을 두번째(secondary)로 설정합니다. */
//   uiType: PropTypes.string,
//   children: PropTypes.string,
//   className: PropTypes.string,
// };
