import { useSetRecoilState } from 'recoil';

import {
  checkedCategoryListAtom,
  checkedBrandListAtom,
  checkedKalryOnlyListAtom,
  checkedPriceListAtom,
  checkedBenefitsListAtom,
} from './../@recoil/renderState';

export const useResetRenderAllFilter = () => {
  const setCategoryFilter = useSetRecoilState(checkedCategoryListAtom);
  const setBrandFilter = useSetRecoilState(checkedBrandListAtom);
  const setKalryOnlyFilter = useSetRecoilState(checkedKalryOnlyListAtom);
  const setPriceFilter = useSetRecoilState(checkedPriceListAtom);
  const setBenefitsList = useSetRecoilState(checkedBenefitsListAtom);

  return () => {
    setCategoryFilter([]);
    setBrandFilter([]);
    setKalryOnlyFilter([]);
    setPriceFilter([]);
    setBenefitsList([]);
  };
};
