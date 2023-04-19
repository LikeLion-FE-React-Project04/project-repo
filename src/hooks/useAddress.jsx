import { useCallback, useMemo } from 'react';
import { useDaumPostcodePopup } from 'react-daum-postcode';
import { useSetRecoilState } from 'recoil';

import { addressState } from '@/store/addressState.js';

export function useAddress() {
  const setAddress = useSetRecoilState(addressState);

  const URL =
    'https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js';

  // 이게 맞나...
  const open = useCallback(useDaumPostcodePopup(URL), [URL]);

  // https://github.com/kmsbernard/react-daum-postcode 참고
  const handleComplete = useCallback((data) => {
    setAddress(data.address);
  }, []);

  const handleClick = useCallback(() => {
    open({ onComplete: handleComplete });
  }, []);

  return useMemo(
    () => ({
      handleClick,
    }),
    [handleClick]
  );
}
