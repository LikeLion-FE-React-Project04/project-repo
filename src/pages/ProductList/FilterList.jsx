import styles from './FilterList.module.css';
import { useSetRecoilState, useRecoilState, useResetRecoilState } from 'recoil';
import { useRef } from 'react';

import { FilterContainer } from './FilterContainer';
import {
  CategoryList,
  BrandList,
  KalryOnlyList,
  BenefitsList,
  PriceList,
} from './BrandList';

import {
  checkedCategoryListAtom,
  checkedBrandListAtom,
  checkedKarlyOnlyListAtom,
} from '@/store/productListState.js';

import AccordionItem from '@/components/Accordion/AccordionItem';

export const NavMenuUl = ({ children }) => {
  return (
    <ul className={styles.navMenuUl}>
      <li className={styles.navMenuUlList}>{children}</li>
    </ul>
  );
};

export const FilterList = () => {
  //category form controlled
  const setCheckedCategory = useSetRecoilState(checkedCategoryListAtom);
  // const setCheckedCategory = useSetRecoilState(sumTestSelector);

  const formRef = useRef();
  const categoryOnChange = (e) => {
    e.preventDefault;
    const formData = new FormData(formRef.current);

    setCheckedCategory(formData.getAll('category') || []);
  };

  //brand form cotrolled
  const setCheckedBrand = useSetRecoilState(checkedBrandListAtom);
  const formRef2 = useRef();
  const brandOnChange = (e) => {
    e.preventDefault;
    const formData = new FormData(formRef2.current);

    setCheckedBrand(formData.getAll('brand') || []);
    console.log(formRef2.current);
  };

  //kalryOnly form cotrolled
  const [CheckedKarlyOnly, setCheckedKarlyOnly] = useRecoilState(
    checkedKarlyOnlyListAtom
  );
  const formRef3 = useRef();
  const karlyOnlyOnChange = (e) => {
    e.preventDefault;
    const formData3 = new FormData(formRef3.current);

    // console.log(formData3.get('kalryOnly'));

    //왜 checkedKarlyOnly에 문자열이 들어갈까... 배열이아니라?
    setCheckedKarlyOnly(formData3.get('kalryOnly'));
    console.log(CheckedKarlyOnly);

    // debugger;
    // console.log(formRef3.current);
  };

  // 초기화
  const setCategoryFilter = useSetRecoilState(checkedCategoryListAtom);
  const setBrandFilter = useSetRecoilState(checkedBrandListAtom);
  const onClick = () => {
    setCategoryFilter([]);
    setBrandFilter([]);
  };

  return (
    <div className={styles.productListNav}>
      <FilterContainer onClick={onClick} />
      <AccordionItem index={0} width="220px" handelArrow>
        <div className={styles.Handle}>카테고리</div>
        <div className={styles.panel}>
          <NavMenuUl>
            <form
              className={styles.formContainer}
              onChange={categoryOnChange}
              ref={formRef}
            >
              <CategoryList filterName={'category'} />
            </form>
          </NavMenuUl>
        </div>
        <div className={styles.accordionLine} />
      </AccordionItem>
      <AccordionItem index={1} width="220px" handelArrow>
        <div className={styles.Handle}>브랜드</div>
        <div className={styles.panel}>
          <NavMenuUl>
            <form
              className={styles.formContainer}
              onChange={brandOnChange}
              ref={formRef2}
            >
              <BrandList filterName={'brand'} />
            </form>
          </NavMenuUl>
        </div>
        <div className={styles.accordionLine} />
      </AccordionItem>
      <AccordionItem index={2} width="220px" handelArrow>
        <div className={styles.Handle}>가격</div>
        <div className={styles.panel}>
          <NavMenuUl>
            <form
              className={styles.formContainer}
              // onChange={brandOnChange}
              // ref={formRef3}
            >
              <PriceList />
            </form>
          </NavMenuUl>
        </div>
        <div className={styles.accordionLine} />
      </AccordionItem>
      <AccordionItem index={3} width="220px" handelArrow>
        <div className={styles.Handle}>혜택</div>
        <div className={styles.panel}>
          <NavMenuUl>
            <form
              className={styles.formContainer}
              // onChange={brandOnChange}
              // ref={formRef2}
            >
              <BenefitsList />
            </form>
          </NavMenuUl>
        </div>
        <div className={styles.accordionLine} />
      </AccordionItem>
      <AccordionItem index={4} width="220px" handelArrow>
        <div className={styles.Handle}>유형</div>
        <div className={styles.panel}>
          <NavMenuUl>
            <form
              className={styles.formContainer}
              onChange={karlyOnlyOnChange}
              ref={formRef3}
            >
              <KalryOnlyList filterName={'kalryOnly'} />
            </form>
          </NavMenuUl>
        </div>
        <div className={styles.accordionLine} />
      </AccordionItem>
    </div>
  );
};
