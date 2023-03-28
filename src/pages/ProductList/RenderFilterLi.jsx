import { useRecoilValue } from 'recoil';

import styles from './RenderFilterLi.module.css';

import {
  checkedCategoryListAtom,
  checkedBrandListAtom,
  checkedKalryOnlyListAtom,
  checkedPriceListAtom,
  checkedBenefitsListAtom,
} from '@/pages/ProductList/@recoil/renderState';

import { categoryLengthListSelectorFamily } from '@/pages/ProductList/@recoil/checkState';

export const RenderFilterNameLi = ({ name = 'brand', value = '스타벅스' }) => {
  const countMap = useRecoilValue(categoryLengthListSelectorFamily(name));
  const checkedCategoryList = useRecoilValue(checkedCategoryListAtom);

  return (
    <>
      <label className={styles.inputContainer}>
        <input
          readOnly
          checked={checkedCategoryList.some((c) => c === value)}
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

  return (
    <>
      <label className={styles.inputContainer}>
        <input
          readOnly
          checked={checkedBrandList.some((b) => b === value)}
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
  const checkedKarlyOnlyList = useRecoilValue(checkedKalryOnlyListAtom); // []

  return (
    <>
      <label className={styles.inputContainer}>
        <input
          //제어컴포넌트시, onChange 혹은 readOnly를 필수사항으로 받음
          readOnly
          //제어 컴포넌트 => 비제어보다 성능이 안좋음
          checked={checkedKarlyOnlyList.length > 0}
          name={name}
          type="checkbox"
          value={name}
        />
        <div className={styles.productExText}>{name}</div>
        <span className={styles.ulListCount}>{value}</span>
      </label>
    </>
  );
};

export const RenderFilterPriceLi = ({ name, value }) => {
  const checkedPriceList = useRecoilValue(checkedPriceListAtom); // []

  const getValue = (name) => {
    if (name.includes('20,000')) {
      return '20000,30000';
    }
    if (name.includes('990')) {
      return '10000,19990';
    }

    return '0,10000';
  };

  const checked = checkedPriceList
    .map((item) => JSON.stringify(item))
    .includes(
      JSON.stringify(
        getValue(name)
          .split(',')
          .map((item) => parseInt(item))
      )
    );

  return (
    <>
      <label className={styles.inputContainer}>
        <input
          readOnly
          checked={checked}
          // defaultChecked={false}
          type="checkbox"
          name={'price'}
          value={getValue(name)}
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
  const checkedBenefitsList = useRecoilValue(checkedBenefitsListAtom);

  const getValue = (name) => {
    if (name.includes('할인상품')) {
      return 'saleRatio';
    }

    return 'stock';
  };

  console.log(getValue(name), '이름뭐라고나오냐?');

  return (
    <>
      <label className={styles.inputContainer}>
        <input
          readOnly
          checked={checkedBenefitsList.includes(getValue(name))}
          // checked
          // defaultChecked={false}
          type="checkbox"
          name={'benefits'}
          value={getValue(name)}
        />
        <div className={styles.productExText}>{name}</div>
        <span className={styles.ulListCount}>{value}</span>
      </label>
    </>
  );
};
