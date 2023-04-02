import { useRef } from 'react';
import { useSetRecoilState } from 'recoil';

import styles from './FilterList.module.css';

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
  checkedKalryOnlyListAtom,
  checkedPriceListAtom,
  checkedBenefitsListAtom,
} from '@/pages/ProductList/@recoil/renderState';

import AccordionItem from '@/components/Accordion/AccordionItem';

export const NavMenuUl = ({ children }) => {
  return (
    <ul className={styles.navMenuUl}>
      <li className={styles.navMenuUlList}>{children}</li>
    </ul>
  );
};

/* ------------------------------ categoryList ------------------------------ */
export const CategoryListForm = () => {
  const setCheckedCategory = useSetRecoilState(checkedCategoryListAtom);

  const categoryForm = useRef();
  const categoryOnChange = (e) => {
    e.preventDefault;
    const formData = new FormData(categoryForm.current);

    setCheckedCategory(formData.getAll('category') || []);
  };

  return (
    <form
      ref={categoryForm}
      className={styles.formContainer}
      onChange={categoryOnChange}
    >
      <CategoryList filterName={'category'} />
    </form>
  );
};

/* -------------------------------- BrandList ------------------------------- */
export const BrandListForm = () => {
  const setCheckedBrand = useSetRecoilState(checkedBrandListAtom);
  const brandListForm = useRef();

  const brandOnChange = (e) => {
    e.preventDefault;
    const formData = new FormData(brandListForm.current);

    setCheckedBrand(formData.getAll('brand') || []);
  };

  return (
    <form
      ref={brandListForm}
      className={styles.formContainer}
      onChange={brandOnChange}
    >
      <BrandList filterName={'brand'} />
    </form>
  );
};

/* ------------------------------ kalryOnlyList ----------------------------- */
export const KalryOnlyListForm = () => {
  const setCheckedKarlyOnly = useSetRecoilState(checkedKalryOnlyListAtom);
  const kalryOnlyListForm = useRef();
  const karlyOnlyOnChange = (e) => {
    e.preventDefault;
    const formData = new FormData(kalryOnlyListForm.current);

    setCheckedKarlyOnly(formData.getAll('kalryOnly'));
  };

  return (
    <form
      ref={kalryOnlyListForm}
      className={styles.formContainer}
      onChange={karlyOnlyOnChange}
    >
      <KalryOnlyList filterName={'kalryOnly'} />
    </form>
  );
};

/* ------------------------------ benefitsList ------------------------------ */
export const BenefitsListForm = () => {
  const setCheckedbenefits = useSetRecoilState(checkedBenefitsListAtom);
  const benefitsListForm = useRef();

  const benefitsOnChange = (e) => {
    e.preventDefault;
    const formData = new FormData(benefitsListForm.current);

    const benefitsList = formData.getAll('benefits');

    setCheckedbenefits(benefitsList);
  };

  return (
    <form
      ref={benefitsListForm}
      className={styles.formContainer}
      onChange={benefitsOnChange}
    >
      <BenefitsList />
    </form>
  );
};

/* -------------------------------- priceList ------------------------------- */
export const PriceListForm = () => {
  const setCheckedPrice = useSetRecoilState(checkedPriceListAtom);
  const priceListForm = useRef();
  const priceOnChange = (e) => {
    e.preventDefault;
    const formData = new FormData(priceListForm.current);

    const priceList = formData
      .getAll('price')
      .map((price) => price.split(',').map((item) => parseInt(item)));

    setCheckedPrice(priceList);
  };

  return (
    <form
      ref={priceListForm}
      className={styles.formContainer}
      onChange={priceOnChange}
    >
      <PriceList />
    </form>
  );
};

export const AccordionItemContainer = ({ index, text, children }) => {
  return (
    <AccordionItem index={index} width="220px" handelArrow>
      <div className={styles.Handle}>{text}</div>
      <div className={styles.panel}>
        <NavMenuUl>
          <CategoryListForm />
        </NavMenuUl>
      </div>
      <div className={styles.accordionLine} />
    </AccordionItem>
  );
};

export const FilterList = () => {
  return (
    <div className={styles.productListNav}>
      <FilterContainer />
      <AccordionItemContainer index={'0'} text={'카테고리'}>
        <NavMenuUl>
          <CategoryListForm />
        </NavMenuUl>
      </AccordionItemContainer>
      <AccordionItemContainer index={'1'} text={'브랜드'}>
        <NavMenuUl>
          <BrandListForm />
        </NavMenuUl>
      </AccordionItemContainer>
      <AccordionItemContainer index={'2'} text={'가격'}>
        <NavMenuUl>
          <PriceListForm />
        </NavMenuUl>
      </AccordionItemContainer>
      <AccordionItemContainer index={'3'} text={'혜택'}>
        <NavMenuUl>
          <BenefitsListForm />
        </NavMenuUl>
      </AccordionItemContainer>
      <AccordionItemContainer index={'4'} text={'유형'}>
        <NavMenuUl>
          <KalryOnlyListForm />
        </NavMenuUl>
      </AccordionItemContainer>
    </div>
  );
};
