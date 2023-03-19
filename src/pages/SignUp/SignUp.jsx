import styles from '@/pages/SignUp/SignUp.module.scss';
import PageTitle from '@/components/PageTitle/PageTitle';
import { FormInput } from '@/components/FormInput/FormInput';
import Input from '@/pages/SignUp/Input';
import { Button } from '../../components/Button/Button';
import RadioButton from '@/components/RadioButton/RadioButton';
import { signInWithEmailAndPassword } from 'firebase/auth';
import RightArrow from '@/assets/common/ic-right-arrow.svg';

import { useSignUp, useAuthState } from '@/firebase/auth';
import { useCreateAuthUser } from '../../firebase/firestrore/useCreateAuthUser';
import { useRef } from 'react';

const initialFormState = {
  name: '',
  email: '',
  password: '',
  passwordConfirm: '',
};

function SignUp() {
  const { signUp } = useSignUp();
  const { createAuthUser } = useCreateAuthUser();
  const { isLoading, error, user } = useAuthState();

  const formStateRef = useRef(initialFormState);

  // const handleReset = () => {
  //   console.log('reset');
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, password, passwordConfirm } = formStateRef.current;

    // 유효성 검사
    if (!name || name.trim().length < 2) {
      // console.error('이름은 2글자 이상 입력해야 해요');
      window.alert('이름은 2글자 이상 입력해야 해요');

      return;
    }
    if (!Object.is(password, passwordConfirm)) {
      // console.error('입력한 패스워드를 다시 확인하세요.');
      window.alert('입력한 패스워드를 다시 확인하세요.');

      return;
    }

    const user = await signUp(email, password, name);

    createAuthUser(user);

    console.log('회원가입 및 users 콜렉션에 user 데이터 생성');
    window.alert('회원가입 되었습니다.');
  };

  const handleChangeInput = (e) => {
    const { name, value } = e.target;

    formStateRef.current[name] = value;
    console.log(formStateRef);
  };

  if (isLoading) {
    return <div role="alert">페이지를 준비 중입니다.</div>;
  }

  if (error) {
    return <div role="alert">오류! {error.message}</div>;
  }

  return (
    <div className={styles.SignUp}>
      <PageTitle className={styles.MarginTopBottom}>회원가입</PageTitle>
      <div className={styles.SignUpPage}>
        <span className={styles.MustInputText}>필수입력사항</span>
        <form className={styles.FormField} onSubmit={handleSubmit}>
          <Input text={'아이디'} must={true}>
            <FormInput
              placeholder={'아이디를 입력해주세요'}
              className={styles.InputBox}
            />
            <Button uiType={'third'}>중복 확인</Button>
          </Input>

          <Input text={'비밀번호'} must={true}>
            <FormInput
              placeholder={'비밀번호를 입력해주세요'}
              className={styles.InputBox}
              type="password"
              name="password"
              onChange={handleChangeInput}
            />
          </Input>

          <Input text={'비밀번호 확인'} must={true}>
            <FormInput
              placeholder={'비밀번호를 한번 더 입력해주세요'}
              className={styles.InputBox}
              type="password"
              name="passwordConfirm"
              onChange={handleChangeInput}
            />
          </Input>

          <Input text={'이름'} must={true}>
            <FormInput
              placeholder={'이름을 한번 더 입력해주세요'}
              className={styles.InputBox}
              name="name"
              s
              onChange={handleChangeInput}
            />
          </Input>

          <Input text={'이메일'} must={true}>
            <FormInput
              placeholder={'예) marketkarly@karly.com'}
              className={styles.InputBox}
              type="email"
              name="email"
              onChange={handleChangeInput}
            />
            <Button uiType={'third'}>중복 확인</Button>
          </Input>

          <Input text={'휴대폰'} must={true}>
            <FormInput
              placeholder={'숫자만 입력해주세요.'}
              className={styles.InputBox}
            />
            <Button uiType={'third'}>인증번호 받기</Button>
          </Input>

          <Input text={'주소'} must={true}>
            <div className={styles.DivBox}>
              <Button
                name={'주소 검색'}
                uiType={'third'}
                className={styles.AddressSearchInput}
              >
                주소 검색
              </Button>
              <p className={styles.AddressInfo}>
                배송지에 따라 상품 정보가 달라질 수 있습니다.
              </p>
            </div>
          </Input>

          <Input text={'성별'}>
            <div className={styles.RadioButtonBundle}>
              <RadioButton name={'gender'}>
                <span>남자</span>
              </RadioButton>
              <RadioButton name={'gender'}>
                <span>여자</span>
              </RadioButton>
              <RadioButton name={'gender'}>
                <span>선택안함</span>
              </RadioButton>
            </div>
          </Input>

          <Input text={'생년월일'}>
            <div className={styles.BirthInput}>
              <input type="text" placeholder={'YYYY'} maxLength={'4'} />
              <span>/</span>
              <input type="text" placeholder={'MM'} maxLength={'2'} />
              <span>/</span>
              <input type="text" placeholder={'DD'} maxLength={'2'} />
            </div>
          </Input>

          <Input text={'추가입력 사항'}>
            <div className={styles.RadioButtonBundle}>
              <RadioButton name={'addInfo'}>
                <span>친구초대 추천인 아이디</span>
              </RadioButton>
              <RadioButton name={'addInfo'}>
                <span>참여 이벤트명</span>
              </RadioButton>
            </div>
          </Input>
          {/* </form> */}

          <div className={styles.Agreement}>
            <div className={styles.SubTitle}>
              <p>이용약관동의</p>
            </div>
            <div className={styles.SubAgreeList}>
              <ul>
                <li>
                  <div>
                    <RadioButton
                      className={styles.SelectRadio}
                      name={'agreeInfo1'}
                      uiType={'secondary'}
                    >
                      <span className={styles.AllAgreeTitle}>
                        전체 동의합니다.
                      </span>
                    </RadioButton>
                  </div>
                  <div className={styles.AllAgreeSubText}>
                    <span>
                      선택항목에 동의하지 않은 경우도 회원가입 및 일반적인
                      서비스를 이용할 수 있습니다.
                    </span>
                  </div>
                </li>
                <li className={styles.AgreeSelectList}>
                  <RadioButton
                    className={styles.SelectRadio}
                    name={'agreeInfo2'}
                    uiType={'secondary'}
                  >
                    <span>이용약관 동의 (필수)</span>
                  </RadioButton>
                  <div>
                    <p>약관보기</p>
                    <img src={RightArrow} alt={'약관보기 화살표'} />
                  </div>
                </li>
                <li className={styles.AgreeSelectList}>
                  <RadioButton
                    className={styles.SelectRadio}
                    name={'agreeInfo3'}
                    uiType={'secondary'}
                  >
                    <span>개인정보 수집 · 이용 동의 (필수)</span>
                  </RadioButton>
                  <div>
                    <p>약관보기</p>
                    <img src={RightArrow} alt={'약관보기 화살표'} />
                  </div>
                </li>
                <li className={styles.AgreeSelectList}>
                  <RadioButton
                    className={styles.SelectRadio}
                    name={'agreeInfo4'}
                    uiType={'secondary'}
                  >
                    <span>
                      무료배송, 할인쿠폰 등 혜택/정보 수신 동의 (선택)
                    </span>
                  </RadioButton>
                  <div>
                    <p>약관보기</p>
                    <img src={RightArrow} alt={'약관보기 화살표'} />
                  </div>
                </li>
                <li className={styles.AgreeSelectList}>
                  <RadioButton
                    className={styles.SelectRadio}
                    name={'agreeInfo5'}
                    uiType={'secondary'}
                  >
                    <span>본인은 만 14세 이상입니다. (필수)</span>
                  </RadioButton>
                  <div>
                    <p>약관보기</p>
                    <img src={RightArrow} alt={'약관보기 화살표'} />
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.Button}>
            <Button uiType={'primary'} type="submit">
              가입하기
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
