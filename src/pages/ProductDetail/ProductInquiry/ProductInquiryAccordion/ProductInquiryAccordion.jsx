
import styles from './ProductInquiryAccordion.module.scss';

import { useAuthState } from '@/firebase/auth';

import AccordionItem from '@/components/Accordion/AccordionItem.jsx';
import { ReactComponent as Question } from '@/assets/product-detail/ic-question.svg';
import { ReactComponent as Answer } from '@/assets/product-detail/ic-answer.svg';
import { ReactComponent as Lock } from '@/assets/product-detail/ic-lock.svg';




export default function ProductInquiryHandle({ data,limit,page }) {
  const { user } = useAuthState(); // 현재 로그인된 사용자의 정보를 가져오기 위해

  // const limit = useRecoilValue(inquiryLimitAtom);
  // const offset = useRecoilValue(inquiryOffsetSelector);

  const offset = (page - 1) * limit;


  


  console.log('핸들안에 data출력: ', data);

  return (
    <>
      {data.slice(offset, offset + limit).map((item, index) => {
        console.log(`index출력:${index}/item출력:${item}`);
        let accordionIndex = Number(index) + 1; // 아니 근데 왜 이거는 중괄호로 안감싸지?

        console.log(accordionIndex);

        // 비밀글이 아니냐
        // true => 비밀글이 아니다
        // false => 비밀글이다
        let isNotSecret = false; // false가 비밀글로 보여지는 거임

        if (!item.isSecret) {
          // 공개글이여야지만 if문 실행
          isNotSecret = true; // 공개글로 바꿔주기 위한거
        } else if (user) {
          if (user.displayName == item.writer) {
            isNotSecret = true;
          }
        }

        // 문의를 공개상태로 보여줘야 하는 경우? 1또는 2의 경우
        // 1. item.isSecret == false일 때
        // 2. 내 자신이 내가 쓴 글을 볼 때 user.displayName == item.writer
        // ||(user.displayName == item.writer)
        // (item.isSecret == false)||(user.displayName == item.writer)
        if (isNotSecret) {
          // 비밀글이 아닌 경우
          return (
            // eslint-disable-next-line react/jsx-key
            <AccordionItem index={accordionIndex} width="1024px">
              {/* 핸들 */}
              <button className={styles.handleDivWrapper}>
                <div className={styles.writingTitle}>{item.title}</div>
                <div className={styles.writer}>{item.writer}</div>
                <div className={styles.reportingDate}>
                  {item.date.toDate().toLocaleDateString()}
                </div>
                <div className={styles.answerStatus}>
                  {item.state == 'pending' ? '답변대기' : '답변완료'}
                </div>
              </button>
              {/* 패널 */}
              <div className={styles.panelDivWrapper}>
                <div className={styles.question}>
                  <Question />
                  <div>{item.textarea}</div>
                </div>
                <div className={styles.answer}>
                  <Answer />
                  {item.state == 'pending' ? (
                    <div>{'답변 대기 상태입니다'}</div>
                  ) : (
                    <div>{'답변 내용'}</div>
                  )}
                </div>
              </div>
            </AccordionItem>
          );
        } else {
          // 비밀글로 보여줘야 되는 경우
          return (
            // eslint-disable-next-line react/jsx-key
            <AccordionItem index={accordionIndex} width="1024px">
              {/* 핸들 */}
              <button
                className={styles.handleDivWrapper}
                onClick={() => {
                  alert('비밀글입니다!!!');
                }}
              >
                <div className={styles.writingTitle}>
                  <span className={styles.secretText}>비밀글입니다.</span>
                  {/* <img src={Lock} alt="비밀글 자물쇠 아이콘" style={{marginLeft:'20px'}} /> */}
                  <Lock
                    alt="비밀글 자물쇠 아이콘"
                    className={styles.secretIcon}
                  />
                </div>
                <div className={styles.writer}>{item.writer}</div>
                <div className={styles.reportingDate}>
                  {item.date.toDate().toLocaleDateString()}
                </div>
                <div className={styles.answerStatus}>
                  {item.state == 'pending' ? '답변대기' : '답변완료'}
                </div>
              </button>
              <div></div>
            </AccordionItem>
          );
        }
      })}
    </>
  );
}