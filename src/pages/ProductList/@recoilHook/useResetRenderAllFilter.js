import { useSetRecoilState } from 'recoil';

import {
  checkedCategoryListAtom,
  checkedBrandListAtom,
  checkedKarlyOnlyListAtom,
  checkedPriceListAtom,
  checkedBenefitsListAtom,
} from './../@recoil/renderState';

export const useResetRenderAllFilter = () => {
  const setCategoryFilter = useSetRecoilState(checkedCategoryListAtom);
  const setBrandFilter = useSetRecoilState(checkedBrandListAtom);
  const setKarlyOnlyFilter = useSetRecoilState(checkedKarlyOnlyListAtom);
  const setPriceFilter = useSetRecoilState(checkedPriceListAtom);
  const setBenefitsList = useSetRecoilState(checkedBenefitsListAtom);

  return () => {
    setCategoryFilter([]);
    setBrandFilter([]);
    setKarlyOnlyFilter([]);
    setPriceFilter([]);
    setBenefitsList([]);
  };
};
