import CounterMinusBtn from './CounterMinusBtn';
import CounterPlusBtn from './CounterPlusBtn';
import Count from './Count';
import styles from './Counter.module.scss';

// 리팩토링 가능할듯 카운터 형태를 children으로,,,
function Counter({
  name = 'default',
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  minusBtnEvent = () => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  plusBtnEvent = () => {},
}) {


  return (
    <div className={styles.countLayout}>
      <CounterMinusBtn additionEvent={minusBtnEvent} name={name} />
      <Count name={name} />
      <CounterPlusBtn additionEvent={plusBtnEvent} name={name} />
    </div>
  );
}

export default Counter;
