import classNames from 'classnames';
import styles from './Mark.module.scss';

function Mark({ product }) {
  return (
    <div className={styles.markLayout}>
      {product.kalryOnly && (
        <span className={classNames(styles.mark, styles.karlyOnly)}>
          Kalry Only
        </span>
      )}
      {product.stock < 10 && <span className={styles.mark}>한정수량</span>}
    </div>
  );
}

export default Mark;
