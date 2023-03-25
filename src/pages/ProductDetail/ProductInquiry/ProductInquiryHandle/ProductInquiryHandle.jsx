import styles from './ProductInquiryHandle.module.scss';

import AccordionItem from '@/components/Accordion/AccordionItem.jsx';

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
              <div>
                <div>{item.title}</div>
                <div>{item.writer}</div>
                <div>{item.date}</div>
                <div>{item.state}</div>
              </div>
              <div>
                <span>{item.textarea}</span>
              </div>
            </AccordionItem>

            // eslint-disable-next-line react/jsx-key
            // <div>
            //   <span>index:{accordionIndex}/</span>
            //   <span>title:{item.title}/</span>
            //   <span>context:{item.textarea}</span>
            // </div>
          )
        })
      }
    </>
  )
  
  // function makeAccordionItem(item, index) {
  //   let accordionIndex = index+1;
  
  //   return (
  //     <div>{item.title}</div>
  //       // <AccordionItem index={accordionIndex} width="1024px">
  //       //   {/* 핸들 */}
  //       //   <div className={styles.handleDivWrapper}>
  //       //     <div className={styles.writingTitle}>{item.title}</div>
  //       //     <div className={styles.writer}>{item.writer}</div>
  //       //     <div className={styles.reportingDate}>{item.date}</div>
  //       //     <div className={styles.answerStatus}>{item.state}</div>
  //       //   </div>
  //       //   {/* 패널 */}
  //       //   <div style={{background: 'salmon'}}>
  //       //     <span>{item.textarea}</span>
  //       //   </div>
  //       // </AccordionItem>
  //   )
  // }
}

    // return (
    //   <>
    //     { // data에는 [ {0:{..}}, {1:{..}}, {2:{..}}] 이런식의 배열 담김 
    //       data.map((value, index) => {
    //         makeAccordionItem(value, index);
    //       })
    //     }
    //   </>
    // );
  
  
    // ex) data == [ {1:{title:"원", textarea:"일"}}, {2:{title:"투", textare:"이"}}]
    // value : {title:"원", textarea:"일"}, {title:"투", textare:"이"}
    // index : 0, 1