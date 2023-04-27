import { useState, useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { string } from 'prop-types';

import styles from './BrandList.module.css';

import {
  RenderFilterNameLi,
  RenderFilterKarlyOnlyLi,
  RenderFilterBenefitsLi,
  RenderBrandFilterNameLi,
  RenderFilterPriceLi,
} from './RenderFilterLi';

import { BrandButtons } from './BrandButtons';

import {
  categoryListSelectorFamily,
  karlyOnlyListSelectorFamily,
  benefitsListSelectorFamily,
  priceFilterListSelectorFamily,
  sortBrandListSelectorFamily,
  etcBrandListSelector,
} from '@/pages/ProductList/@recoil/checkState';

import {
  getCategoryCount,
  useGetCountFromServer,
  useReadData,
} from '@/firebase/firestore/useRead';

import { where, orderBy } from 'firebase/firestore';

import countBy from 'lodash-es/countBy';
import groupBy from 'lodash-es/groupBy';
import { getPaymentPrice } from '../../utils/getPaymentPrice';

/* -------------------------------- category -------------------------------- */
export const CategoryList = ({ filterName = '', children }) => {
  const [categoryListCount, setCategoryListCount] = useState([]);

  useEffect(() => {
    const categoryCount = getCategoryCount().then((categoryDataList) => {
      const 카테고리카운터의키들을맵돌린친구 = Object.keys(
        categoryDataList
      ).map((key) => {
        return {
          category: key,
          count: categoryDataList[key],
        };
      });

      setCategoryListCount(카테고리카운터의키들을맵돌린친구);
    });
  }, []);

  return (
    <>
      {categoryListCount.map((product, index) => {
        const key = `${product.id} ${index}`;

        return (
          <RenderFilterNameLi
            key={key}
            name={filterName}
            value={product.category}
          >
            {product.count}
          </RenderFilterNameLi>
        );
      })}
    </>
  );
};

CategoryList.propTypes = {
  filterName: string.isRequired,
};

/* ---------------------------------- brand --------------------------------- */

export const BrandList = ({ filterName = '', children }) => {
  const [자음, 셋팅자음] = useState('ㄱ');
  const categoryList = useRecoilValue(sortBrandListSelectorFamily(자음));
  const etcBrandList = useRecoilValue(etcBrandListSelector);
  const exp = /[ㄱ-ㅎ]/;

  return (
    <>
      <BrandButtons 셋팅자음={셋팅자음} 자음={자음} />
      {exp.test(자음)
        ? categoryList.map((product, index) => {
            const key = `${product.id} ${index}`;

            return (
              <RenderBrandFilterNameLi
                key={key}
                name={filterName}
                value={product.brand}
              />
            );
          })
        : etcBrandList.slice(0, 3).map((product, index) => {
            const key = `${product.id} ${index}`;

            return (
              <RenderBrandFilterNameLi
                key={key}
                name={filterName}
                value={product.brand}
              />
            );
          })}
      <div className={styles.container}>
        <button
          aria-labelledby={'더보기 버튼'}
          className={styles.navFilterButton}
          type="button"
        >
          {'브랜드 더보기 > '}
        </button>
      </div>
    </>
  );
};

/* -------------------------------- karlyOnly ------------------------------- */
export const KarlyOnlyList = ({ filterName = '' }) => {
  const karlyOnlyList = useRecoilValue(
    karlyOnlyListSelectorFamily('karlyOnly')
  );
  const [karlyOnlyProductData, setkarlyOnlyProductData] = useState(0);
  useEffect(() => {
    async function filteredWithkarlyOnlyProductData() {
      const filterdkarlyOnlyProductData = await useGetCountFromServer({
        whereCriteria: where('karlyOnly', '==', true),
        orderCriteria: orderBy('name'),
      });
      setkarlyOnlyProductData(filterdkarlyOnlyProductData);
    }
    filteredWithkarlyOnlyProductData();
  }, []);

  return (
    <RenderFilterKarlyOnlyLi name={filterName} value={karlyOnlyProductData} />
  );
};

/* -------------------------------- benefits -------------------------------- */

export const BenefitsList = () => {
  const benefitsList = useRecoilValue(benefitsListSelectorFamily('saleRatio'));

  //한정상품
  const [limitedProductData, setLimitedProductData] = useState(0);
  useEffect(() => {
    async function filteredWithLimitedProductData() {
      const filterdLimitedProductData = await useGetCountFromServer({
        whereCriteria: where('stock', '<', 10),
        orderCriteria: orderBy('stock'),
      });
      setLimitedProductData(filterdLimitedProductData);
    }
    filteredWithLimitedProductData();
  }, []);

  //할인상품
  const [saleProductData, setSaleProductData] = useState(0);
  useEffect(() => {
    async function filteredWithSaleProductData() {
      const filterdSaleProductData = await useGetCountFromServer({
        whereCriteria: where('saleRatio', '!=', 0),
        orderCriteria: orderBy('saleRatio'),
      });
      setSaleProductData(filterdSaleProductData);
    }
    filteredWithSaleProductData();
  }, []);

  return (
    <>
      <RenderFilterBenefitsLi name={'할인상품'} value={saleProductData} />
      <RenderFilterBenefitsLi name={'한정수량'} value={limitedProductData} />
    </>
  );
};

/* ---------------------------------- price --------------------------------- */
export const PriceList = () => {
  const priceList = useRecoilValue(priceFilterListSelectorFamily);

  const { isLoading, error, data, setData, readData, setIsLoading } =
    useReadData('productlist');

  const priceDataList = countBy(data, (data) => {
    if (getPaymentPrice(data) > 0 && getPaymentPrice(data) < 10000) {
      return '0원 ~ 10,000원';
    }
    if (getPaymentPrice(data) > 10000 && getPaymentPrice(data) < 20000) {
      return '10,000원 ~ 19,990원';
    }
    return '20,000원 이상';
  });

  return (
    <>
      {Object.keys(priceDataList)
        .sort()
        .map((name) => {
          return (
            <RenderFilterPriceLi name={name} value={priceDataList[name]} />
          );
        })}
    </>
  );
};
