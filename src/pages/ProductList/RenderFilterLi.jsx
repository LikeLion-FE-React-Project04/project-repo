import { useRecoilValue, useSetRecoilState, useRecoilState } from 'recoil';
import { useRef } from 'react';

import styles from './RenderFilterLi.module.css';

import { checkHook } from './@recoilHook/checkHook';

import {
  checkedCategoryListAtom,
  checkedBrandListAtom,
  checkedKalryOnlyListAtom,
} from '@/pages/ProductList/@recoil/renderState';

import { categoryLengthListSelectorFamily } from '@/pages/ProductList/@recoil/checkState';

//TODO: 클릭했을떄 전송되는 데이터 (예를들자면, {category:샐러드&간편식}) 와
// 전체 15개의 Local Data를 하나의 Selector Family(혹은 Selector, 왜냐면 브랜드랑 카테고리가 하나의 Selector Family로 묶였으니까) 로 묶은다음,
// 거기서  === 같은 Data들만 return 되게 한다면, 샐러드 간편식을 클릭했을 때 샐러드 간편식의 4개 객체 (예를들면, [{name:탱탱쫄면 category:샐러드 간편식} ... ])가 나올것이고,
// 그걸 공용컴포넌트의 product로 전달하면, 내가 원하는데로 기능이 랜더링 될 거 같다.
//onSubmit -> type: submit 일떄만, 사용할수있는 핸들러
//디버거 사용화 습관화하자
export const RenderFilterNameLi = ({ name = 'brand', value = '스타벅스' }) => {
  const countMap = useRecoilValue(categoryLengthListSelectorFamily(name));
  const checkedCategoryList = useRecoilValue(checkedCategoryListAtom);

  return (
    <>
      <label className={styles.inputContainer}>
        <input
          //제어컴포넌트시, onChange 혹은 readOnly를 필수사항으로 받음
          readOnly
          //제어 컴포넌트 => 비제어보다 성능이 안좋음
          checked={checkedCategoryList.some((c) => c === value)}
          //비제어 컴포넌트 => 상태관리를 브라우저에게 맡김(리액트가아니라)
          // defaultChecked={true}
          // defaultValue
          type="checkbox"
          name={name}
          value={value}
        />
        <div className={styles.productExText}>{value}</div>
        <span className={styles.ulListCount}>{countMap[value]}</span>
      </label>
    </>
  );
};
export const RenderBrandFilterNameLi = ({
  name = 'brand',
  value = '스타벅스',
}) => {
  const countMap = useRecoilValue(categoryLengthListSelectorFamily(name));
  const checkedBrandList = useRecoilValue(checkedBrandListAtom);

  // console.log(checkedBrandList);
  // console.log(checkedBrandList.some((b) => b === value));

  return (
    <>
      <label className={styles.inputContainer}>
        <input
          //제어컴포넌트시, onChange 혹은 readOnly를 필수사항으로 받음
          readOnly
          //제어 컴포넌트 => 비제어보다 성능이 안좋음
          checked={checkedBrandList.some((b) => b === value)}
          // checked={true}
          //비제어 컴포넌트 => 상태관리를 브라우저에게 맡김(리액트가아니라)
          // defaultChecked={true}
          // defaultValue
          type="checkbox"
          name={name}
          value={value}
        />
        <div className={styles.productExText}>{value}</div>
        <span className={styles.ulListCount}>{countMap[value]}</span>
      </label>
    </>
  );
};

// 여기서 2개 체크되는거같음
export const RenderFilterKarlyOnlyLi = ({ name, value }) => {
  // const countMap = useRecoilValue(categoryLengthListSelectorFamily(name));
  const checkedKarlyOnlyList = useRecoilValue(checkedKalryOnlyListAtom); // []

  console.log(checkedKarlyOnlyList);

  return (
    <>
      <label className={styles.inputContainer}>
        <input
          //제어컴포넌트시, onChange 혹은 readOnly를 필수사항으로 받음
          readOnly
          //제어 컴포넌트 => 비제어보다 성능이 안좋음
          // checked={checkedKarlyOnlyList.some(
          //   (b) => b === value
          // )}
          checked={
            checkedKarlyOnlyList === 'kalryOnly' ? { kalryOnly: 'true' } : null
          }
          //비제어 컴포넌트 => 상태관리를 브라우저에게 맡김(리액트가아니라)
          // defaultChecked={false}
          // defaultValue
          type="checkbox"
          name={name}
          value={name}
        />
        <div className={styles.productExText}>{name}</div>
        <span className={styles.ulListCount}>{value}</span>
      </label>
    </>
  );
};

export const RenderFilterBenefitsLi = ({
  name = '희소가치 프로젝트',
  value = '0',
}) => {
  return (
    <>
      <label className={styles.inputContainer}>
        <input
          //제어컴포넌트시, onChange 혹은 readOnly를 필수사항으로 받음
          // readOnly
          //제어 컴포넌트 => 비제어보다 성능이 안좋음
          // checked={checkedBrandList.some((b) => b === value)}
          // checked={true}
          //비제어 컴포넌트 => 상태관리를 브라우저에게 맡김(리액트가아니라)
          defaultChecked={false}
          // defaultValue
          type="checkbox"
          name={name}
          value={value}
        />
        <div className={styles.productExText}>{name}</div>
        <span className={styles.ulListCount}>{value}</span>
      </label>
    </>
  );
};
