import styles from './FilterList.module.css';
import { useSetRecoilState, useRecoilState } from 'recoil';
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
  checkedKalryOnlyListAtom,
  checkedPriceListAtom,
  checkedBenefitsListAtom,
  renderAllFilterListSelector,
} from '@/pages/ProductList/@recoil/renderState';

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
  // const setCheckedCategory = useSetRecoilState(renderAllFilterListSelector);

  const categoryForm = useRef();
  const categoryOnChange = (e) => {
    e.preventDefault;
    const formData = new FormData(categoryForm.current);

    setCheckedCategory(formData.getAll('category') || []);
  };

  //brand form cotrolled
  const setCheckedBrand = useSetRecoilState(checkedBrandListAtom);
  const brandListForm = useRef();
  const brandOnChange = (e) => {
    e.preventDefault;
    const formData = new FormData(brandListForm.current);

    setCheckedBrand(formData.getAll('brand') || []);

    // console.log(brandListForm.current, '브랜드레프 커렌트값');
    // console.log(CheckedKarlyOnly, '첵칼리');
  };

  //kalryOnly form cotrolled
  const [CheckedKarlyOnly, setCheckedKarlyOnly] = useRecoilState(
    checkedKalryOnlyListAtom
  );
  const kalryOnlyListForm = useRef();
  const karlyOnlyOnChange = (e) => {
    e.preventDefault;
    const formData = new FormData(kalryOnlyListForm.current);

    // console.log(formData3.get('kalryOnly'));

    //왜 checkedKarlyOnly에 문자열이 들어갈까... 배열이아니라?
    setCheckedKarlyOnly(formData.getAll('kalryOnly'));
    // console.log(CheckedKarlyOnly);

    // debugger;
  };

  const [CheckedPrice, setCheckedPrice] = useRecoilState(checkedPriceListAtom);
  const priceListForm = useRef();
  const priceOnChange = (e) => {
    e.preventDefault;
    const formData = new FormData(priceListForm.current);

    const priceList = formData
      .getAll('price')
      .map((price) => price.split(',').map((item) => parseInt(item)));

    setCheckedPrice(priceList);

    console.log(priceListForm.current, '가격레프 커렌트값');
    console.log(CheckedPrice, '첵프라이스');
    // debugger;
  };

  const [checkedbenefits, setCheckedbenefits] = useRecoilState(
    checkedBenefitsListAtom
  );
  const benefitsListForm = useRef();

  const benefitsOnChange = (e) => {
    e.preventDefault;
    const formData = new FormData(benefitsListForm.current);

    // debugger;

    console.log(formData.getAll('한정상품'), '한정상품한정상품한정상품');
    const benefitsList = formData.getAll('benefits');

    setCheckedbenefits(benefitsList);

    console.log(benefitsListForm.current, '가격레프 커렌트값');
    console.log(checkedbenefits, '첵프라이스');
    // debugger;
  };

  return (
    <div className={styles.productListNav}>
      <FilterContainer />
      <AccordionItem index={0} width="220px" handelArrow>
        <div className={styles.Handle}>카테고리</div>
        <div className={styles.panel}>
          <NavMenuUl>
            <form
              className={styles.formContainer}
              onChange={categoryOnChange}
              ref={categoryForm}
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
              ref={brandListForm}
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
              onChange={priceOnChange}
              ref={priceListForm}
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
              onChange={benefitsOnChange}
              ref={benefitsListForm}
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
              ref={kalryOnlyListForm}
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
