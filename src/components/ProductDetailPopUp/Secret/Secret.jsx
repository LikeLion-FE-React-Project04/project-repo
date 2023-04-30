import { useRef } from 'react';
import styles from './Secret.module.scss';

export function Secret(props) {
  const { isSecret, setIsSecret } = props;

  // checkbox상태를 참조하기 위한 ref
  const checkSecret = useRef(); 

  // 체크박스의 상태가 바뀔때마다
  const handleCheckBox = () => {
    setIsSecret(!isSecret); // 상태를 반대로 변경
  }

  return (
    <>
      <div className={styles.secretCheckBox}>
        <input 
          ref={checkSecret} 
          id="isSecret" 
          name="checker" 
          role="tab" 
          type="checkbox" 
          onChange={handleCheckBox}
          tabIndex={0}
        />
        <label htmlFor="isSecret">
          <span>비밀글로 문의하기</span>
        </label>
      </div>
    </>
  );
}