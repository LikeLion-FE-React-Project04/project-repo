import { forwardRef } from 'react';
import styles from './Button.module.scss';
// import PropTypes from 'prop-types';

// eslint-disable-next-line react/display-name
export const Button = forwardRef(
  (
    { uiType = 'primary', children = 'test', className = '', ...restProps },
    ref
  ) => {
    const combinedClassNames = `${styles.button} ${getUiStyle(
      uiType
    )} ${className}`.trim();

    return (
      <button className={combinedClassNames} {...restProps} ref={ref}>
        {children}
      </button>
    );
  }
);

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
      break;
    case 'fifth':
      uiStyle = styles.fifth;
      break;
    case 'sixth':
      uiStyle = styles.sixth;
      break;
    case 'seven':
      uiStyle = styles.seven;
  }

  return uiStyle;
}
