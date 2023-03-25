import { useRecoilValue, useRecoilState } from 'recoil';
import { useParams } from 'react-router-dom';

import { checkState, checkArrState } from '../@recoil/checkState';

import {
  categoryListSelectorFamily,
  categoryLengthListSelectorFamily,
  filterAtom,
  productListSelectorFamily,
  productListFamily,
} from '@/store/productListState.js';

//TODO : checkHook -> usecheckhook 수정
//필터조건만 넣고 뺴는거에 집중
export const checkHook = () => {
  const [check, setCheck] = useRecoilState(checkState);
  const [checkArr, setCheckArr] = useRecoilState(checkArrState);

  // const { productId } = useParams();
  // const product = useRecoilValue(productListFamily(productId));

  // const filter = useRecoilValue(filterAtom);
  // const productList2 = useRecoilValue(productListSelectorFamily(filter));
  //(배열 아님 문자열) 들어갈수있음
  const productList = useRecoilValue(categoryListSelectorFamily('category'));
  // const categoryList = useRecoilValue(categoryListSelectorFamily(''));

  // console.log(categoryList)

  const setcheckValue = (e) => {
    e.preventDefault;
    setCheck(!check);
    setCheckArr(productList);
  };

  // console.log(productList)

  // console.log(productList)
  const pushItemToBoxDataArr = (checked, product) => {
    // 자식 컴포에서 체크박스를 부분 체크했을 경우
    if (checked) {
      setCheckArr([...checkArr, product]);
    }
  };

  // console.log(pushItemToBoxDataArr())

  return { check, checkArr, setcheckValue, pushItemToBoxDataArr };
};
