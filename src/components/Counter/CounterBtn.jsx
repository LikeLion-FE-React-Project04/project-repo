import classNames from 'classnames';

import styles from './CounterBtn.module.scss';

function CounterBtn({ type = 'plus', ...restProps }) {
  let styleType = styles.plus;

  if (type == 'minus') {
    styleType = styles.minus;
  }

  return (
    <button
      type="button"
      {...restProps}
      className={classNames(styles.countButton, styleType)}
    />
  );
}

export default CounterBtn;
