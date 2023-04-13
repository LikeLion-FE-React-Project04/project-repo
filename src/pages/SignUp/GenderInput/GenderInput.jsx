import styles from './GenderInput.module.scss'
import Input from '@/pages/SignUp/Input/Input';
import RadioButton from '@/components/RadioButton/RadioButton';
import { useRecoilState } from 'recoil';
import { signUpFormState } from '../@recoil/signUp';

function GenderInput() {
  const [signUpForm, setSignUpForm] = useRecoilState(signUpFormState);

  const handleChangeInput = (e) => {
    const { name, value } = e.target;

    setSignUpForm((prev) => {
      const tmp = { ...prev };
      tmp[name] = value;
      return tmp;
    });
    return;
  };

  return (
    <Input text={'성별'}>
      <div className={styles.RadioButtonBundle}>
        <RadioButton
          name={'gender'}
          id={'mail'}
          value={'mail'}
          checked={signUpForm.gender == 'mail'}
          onChange={handleChangeInput}
        >
          <span>남자</span>
        </RadioButton>
        <RadioButton
          name={'gender'}
          id={'femail'}
          value={'femail'}
          checked={signUpForm.gender == 'femail'}
          onChange={handleChangeInput}
        >
          <span>여자</span>
        </RadioButton>
        <RadioButton
          name={'gender'}
          value={'gender'}
          id={'non'}
          checked={signUpForm.gender == 'non'}
          onChange={handleChangeInput}
        >
          <span>선택안함</span>
        </RadioButton>
      </div>
    </Input>
  );
}

export default GenderInput;
