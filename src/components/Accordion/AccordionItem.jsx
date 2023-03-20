import { useState } from 'react';
import styles from './AccordionItem.module.scss';
import AccordionHandle from './AccordionHandle';
import AccordionPanel from './AccordionPanel';

export default function AccordionItem({
  index,
  children,
  width = '100px',
  handelArrow = false,
}) {
  // 리코일로 데이터 가져오기
  const [isActive, setIsActive] = useState(false);
  const [hendle, panel] = children;

  let underLine;

  if (children[2]) {
    underLine = children[2];
  }

  return (
    <article
      key={index}
      aria-labelledby={index}
      data-component="AccordionItem"
      style={{ width: width }}
    >
      <AccordionHandle
        controlId={index}
        isActive={isActive}
        onActive={() => {
          isActive ? setIsActive(false) : setIsActive(true);
        }}
        handelArrow={handelArrow}
      >
        {hendle}
      </AccordionHandle>
      <AccordionPanel controlId={index} isActive={isActive}>
        {panel}
      </AccordionPanel>
      {underLine}
    </article>
  );
}
