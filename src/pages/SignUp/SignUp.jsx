import styles from '@/pages/SignUp/SignUp.module.scss';
import PageTitle from "@/components/PageTitle/PageTitle"
import {FormInput} from '@/components/FormInput/FormInput';
import Input from '@/pages/SignUp/Input';
import { Button } from '../../components/Button/Button';
import RadioButton from '@/components/RadioButton/RadioButton';
import { signInWithEmailAndPassword } from 'firebase/auth';
import RightArrow from '@/assets/common/ic-right-arrow.svg'

function SignUp() {
  return (
    <div className={styles.SignUp}>
      <PageTitle text={"회원가입"} className={styles.MarginTopBottom}/>
      <div className={styles.SignUpPage}>
        <span className={styles.MustInputText}>필수입력사항</span>
        <form className={styles.FormField}>

          <Input text={"아이디"} must={true}>
            <FormInput placeholder={"아이디를 입력해주세요"} className={styles.InputBox}/>
            <Button uiType={'third'}>
              중복 확인
            </Button>
          </Input>

          <Input text={"비밀번호"} must={true}>
            <FormInput placeholder={"비밀번호를 입력해주세요"} className={styles.InputBox}/>
          </Input>          

          <Input text={"비밀번호 확인"} must={true}>
            <FormInput placeholder={"비밀번호를 한번 더 입력해주세요"} className={styles.InputBox}/>
          </Input>                    

          <Input text={"이름"} must={true}>
            <FormInput placeholder={"이름을 한번 더 입력해주세요"} className={styles.InputBox}/>
          </Input>                              

          <Input text={"이메일"} must={true}>
            <FormInput placeholder={"예) marketkarly@karly.com"} className={styles.InputBox}/>
            <Button uiType={'third'}>
              중복 확인
            </Button>            
          </Input>          

          <Input text={"휴대폰"} must={true}>
            <FormInput placeholder={"숫자만 입력해주세요."} className={styles.InputBox}/>
            <Button uiType={'third'} >
             인증번호 받기
            </Button>                          
          </Input>                    

          <Input text={"주소"} must={true}>
            <div className={styles.DivBox}>
              <Button name={"주소 검색"} uiType={'third'} className={styles.AddressSearchInput}>주소 검색</Button>
              <p className={styles.AddressInfo}>배송지에 따라 상품 정보가 달라질 수 있습니다.</p>
            </div>
          </Input>                   

          <Input text={"성별"}>
            <div className={styles.RadioButtonBundle}>
              <RadioButton name={'gender'}>
                <span>남자</span>
              </RadioButton>
              <RadioButton  name={'gender'}>
                <span>여자</span>
              </RadioButton>            
              <RadioButton  name={'gender'}>
                <span>선택안함</span>
              </RadioButton>                   
            </div>
          </Input>     

          <Input text={"생년월일"}>
            <div className={styles.BirthInput}>
              <input type="text" placeholder={"YYYY"} maxLength={"4"}/>
              <span>/</span>
              <input type="text" placeholder={"MM"} maxLength={"2"}/>
              <span>/</span>              
              <input type="text" placeholder={"DD"} maxLength={"2"}/>              
            </div>
          </Input>        

          <Input text={"추가입력 사항"}>
            <div className={styles.RadioButtonBundle}>
              <RadioButton name={'addInfo'}>
                <span>친구초대 추천인 아이디</span>
              </RadioButton>
              <RadioButton name={'addInfo'}>
                <span>참여 이벤트명</span>
              </RadioButton>            
            </div>
          </Input>                          

        </form>

        <div className={styles.Agreement}>
          <div className={styles.SubTitle}>
            <p>이용약관동의</p>
          </div>
          <div className={styles.SubAgreeList}>
            <ul>
              <li>
                <div>
                  <RadioButton className={styles.SelectRadio} name={'agreeInfo1'} uiType={'secondary'}>
                    <span className={styles.AllAgreeTitle}>전체 동의합니다.</span>
                  </RadioButton>                              
                </div>
                <div className={styles.AllAgreeSubText}>
                  <span>
                    선택항목에 동의하지 않은 경우도 회원가입 및 일반적인 서비스를 이용할 수 있습니다.
                  </span>
                </div>
              </li>
              <li className={styles.AgreeSelectList}>
                <RadioButton className={styles.SelectRadio} name={'agreeInfo2'} uiType={'secondary'}>
                  <span>이용약관 동의 (필수)</span>
                </RadioButton>                                              
                <div>
                  <p>약관보기</p>
                  <img src={RightArrow} alt={"약관보기 화살표"}/>
                </div>
              </li>
              <li className={styles.AgreeSelectList}>
                <RadioButton className={styles.SelectRadio} name={'agreeInfo3'} uiType={'secondary'}>
                  <span>개인정보 수집 · 이용 동의 (필수)</span>
                </RadioButton>                                              
                <div>
                  <p>약관보기</p>
                  <img src={RightArrow} alt={"약관보기 화살표"}/>
                </div>
              </li>
              <li className={styles.AgreeSelectList}>
                <RadioButton className={styles.SelectRadio} name={'agreeInfo4'} uiType={'secondary'}>
                  <span>무료배송, 할인쿠폰 등 혜택/정보 수신 동의 (선택)</span>
                </RadioButton>                                              
                <div>
                  <p>약관보기</p>
                  <img src={RightArrow} alt={"약관보기 화살표"}/>
                </div>
              </li>
              <li className={styles.AgreeSelectList}>
                <RadioButton className={styles.SelectRadio} name={'agreeInfo5'} uiType={'secondary'}>
                  <span>본인은 만 14세 이상입니다. (필수)</span>
                </RadioButton>                                              
                <div>
                  <p>약관보기</p>
                  <img src={RightArrow} alt={"약관보기 화살표"}/>
                </div>
              </li>                                          
            </ul>
          </div>
        </div>        
        <div className={styles.Button}>
          <Button uiType={'primary'} >가입하기</Button>
        </div>              
      </div>
    </div>
  )
}

export default SignUp