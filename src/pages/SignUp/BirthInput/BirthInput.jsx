import { useRef, useState } from 'react';
import styles from './BirthInput.module.scss';
import Input from '@/pages/SignUp/Input/Input';
import { checkValidation } from '../../../utils';
import { useRecoilState } from 'recoil';
import { signUpFormState } from '../@recoil/signUp';

// 생년월일 확인 폼
function BirthInput() {
  const [signUpForm, setSignUpForm] = useRecoilState(signUpFormState);
  const [warnPragment, setWarnPragment] = useState('');

  const handleChange = (e) => {

    // 숫자만 입력가능
    e.target.value = e.target.value
      .replace(/[^0-9.]/g, '')
      .replace(/(\..*)\./g, '$1');

    const name = e.target.name;

    let pragment;

    // 폼 데이터 저장
    setSignUpForm((prev) => {
      const tmp = { ...prev };
      const birthTmp = { ...tmp.birth };
      birthTmp[name] = e.target.value;
      pragment = checkValidation('birth', birthTmp);
      tmp.birth = birthTmp;
      return tmp;
    });

    setWarnPragment(pragment);
  };
  return (
    <Input text={'생년월일'}>
      <div className={styles.inputLayout}>
        <div className={styles.BirthInput}>
          <input
            type="text"
            name="year"
            placeholder={'YYYY'}
            maxLength={'4'}
            onChange={handleChange}
          />
          <span>/</span>
          <input
            name="month"
            type="text"
            placeholder={'MM'}
            maxLength={'2'}
            onChange={handleChange}
          />
          <span>/</span>
          <input
            name="day"
            type="text"
            placeholder={'DD'}
            maxLength={'2'}
            onChange={handleChange}
          />
        </div>
        <span className={styles.validationPhrases}>{warnPragment}</span>
      </div>
    </Input>
  );
}

export default BirthInput;
