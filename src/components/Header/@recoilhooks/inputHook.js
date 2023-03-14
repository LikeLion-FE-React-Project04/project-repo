import { useRecoilState } from 'recoil';

import { inputState } from '../@recoil/inputState';

export const inputHook = () => {
  const [input, setInput] = useRecoilState(inputState);

  const setInputValue = (e) => {
    e.preventDefault;
    setInput(event.target.value);
  };

  const setSubmitValue = () => {
    alert(input);
  };

  const removeValue = () => {
    setInput('');
  };

  return { input, setInputValue, setSubmitValue, removeValue };
};
