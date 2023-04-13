import { useRecoilValue } from 'recoil';
import { useState, useEffect } from 'react';

import styles from './RenderFilterLi.module.css';

import {
  checkedCategoryListAtom,
  checkedBrandListAtom,
  checkedKalryOnlyListAtom,
  checkedPriceListAtom,
  checkedBenefitsListAtom,
} from '@/pages/ProductList/@recoil/renderState';

import {
  categoryLengthListSelectorFamily,
  categoryCountSelectorFamily,
} from '@/pages/ProductList/@recoil/checkState';

import { useGetBrandListData, useReadData } from '@/firebase/firestore/useRead';

import countBy from 'lodash-es/countBy';

/* -------------------------------- category -------------------------------- */
export const RenderFilterNameLi = ({
  name = 'category',
  value = '과일ㆍ견과ㆍ쌀',
  children,
}) => {
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
        <span className={styles.ulListCount}>{children}</span>
      </label>
    </>
  );
};

/* -------------------------------- brand -------------------------------- */
export const RenderBrandFilterNameLi = ({
  name = 'brand',
  value = '스타벅스',
}) => {
  const checkedBrandList = useRecoilValue(checkedBrandListAtom);

  const { isLoading, error, data, setData, readData, setIsLoading } =
    useReadData('productlist');

  const priceDataList = countBy(data, 'brand');

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
        <span className={styles.ulListCount}>{priceDataList[value]}</span>
      </label>
    </>
  );
};

/* -------------------------------- karlyOnly -------------------------------- */

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

/* -------------------------------- price -------------------------------- */
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

/* -------------------------------- benefits -------------------------------- */

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
