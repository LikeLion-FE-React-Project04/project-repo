import { useRef } from "react";

//hook
export default function useMoveScroll(name) {
  const element = useRef();
  const onMoveToElement = () => {
    element.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return { element, onMoveToElement, name };
}
