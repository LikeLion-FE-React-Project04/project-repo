import { useState } from 'react';
import styles from './AccordionItem.module.scss';
import AccordionHandle from './AccordionHandle';
import AccordionPanel from './AccordionPanel';

// AccordionItem: 아코디언으로 만들어주는 컴포넌트 (열렸다 닫혔다)
// index : 구별되는 값, width : 커스텀, handleArrow : 화살표 유무, active : 활성 상태, children : 아코디언 핸들, 패널
export default function AccordionItem({
  index,
  children,
  width = '100px',
  handelArrow = false,
  active = false,
}) {
  // 리코일로 데이터 가져오기
  const [isActive, setIsActive] = useState(active);
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
