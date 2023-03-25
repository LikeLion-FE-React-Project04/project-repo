import styles from './ProductInquiryAccordion.module.scss';

import AccordionItem from '@/components/Accordion/AccordionItem.jsx';
import { ReactComponent as Question } from '@/assets/product-detail/ic-question.svg';
import { ReactComponent as Answer } from '@/assets/product-detail/ic-answer.svg';

export default function ProductInquiryHandle({ data }) {
  console.log("핸들안에 data출력: ", data);

  return (
    <>
      {
        data.map((item, index)=>{
          console.log(`index출력:${index}/item출력:${item}`);
          let accordionIndex = Number(index) + 1; // 아니 근데 왜 이거는 중괄호로 안감싸지?

          console.log(accordionIndex);

          return (
            // eslint-disable-next-line react/jsx-key
            <AccordionItem index={accordionIndex} width="1024px">
              {/* 핸들 */}
              <div className={styles.handleDivWrapper}>
                <div className={styles.writingTitle}>{item.title}</div>
                <div className={styles.writer}>{item.writer}</div>
                {/* <div className={styles.reportingData}>2023.03.25</div> */}
                <div className={styles.reportingDate}>{item.date.toDate().toLocalDateString()}</div>
                <div className={styles.answerStatus}>{(item.state=='pending' ? '답변대기' : '답변완료')}</div>
              </div>
              {/* 패널 */}
              <div className={styles.panelDivWrapper}>
                <div className={styles.question}>
                  <Question />
                  <div>{item.textarea}</div>
                </div>
                <div className={styles.answer}>
                  <Answer />
                  {(item.state=='pending' ? <div>{'답변 대기 상태입니다'}</div> : <div>{'답변 내용'}</div>)}
                </div>
              </div>
            </AccordionItem>
          )
        })
      }
    </>
  )
}
