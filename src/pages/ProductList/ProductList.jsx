import { useRecoilValue } from 'recoil';
import { Link } from 'react-router-dom';

import styles from './ProductList.module.css';
import { FilterList } from './FilterList';
import { Pagination } from './Pagination';
import { useResetRenderAllFilter } from './@recoilHook/useResetRenderAllFilter';

import CartModalLayout from './../../components/CartModal/CartModalLayout';
import {
  SortLowerPriceButton,
  SortUpperPriceButton,
  DummyButtons,
} from './SortButton';

import banner from '@/assets/product-list/product-list-banner.png';
import notFountIcon from '@/assets/product-list/ic-notFound.svg';
import resetIcon from '@/assets/product-list/ic-return.svg';

import {
  renderAllFilterListSelector,
  limitAtom,
  offsetSelector,
} from '@/pages/ProductList/@recoil/renderState';
import ProductCard from '@/components/ProductCard/ProductCard';

const ProductCards = () => {
  const renderAllFilterList = useRecoilValue(renderAllFilterListSelector);
  const limit = useRecoilValue(limitAtom);
  const offset = useRecoilValue(offsetSelector);

  return (
    <>
      {renderAllFilterList
        .slice(offset, offset + limit)
        .map((product, index) => {
          return (
            <div key={`product-${index}`} style={{ marginBottom: '100px' }}>
              <ProductCard product={product} isListCard />
            </div>
          );
        })}
    </>
  );
};

export const ProductListBanner = () => {
  return (
    <Link to="/productList">
      <img
        alt="이번주의 신상 랭킹보러가기 이미지 배너"
        className={styles.productListBanner}
        src={banner}
      />
    </Link>
  );
};

const IsCheckedRenderAllfilter = () => {
  const renderAllFilterList = useRecoilValue(renderAllFilterListSelector);
  const hasRenderAllFilterList = renderAllFilterList.length > 0;

  const onClick = useResetRenderAllFilter();

  if (hasRenderAllFilterList) {
    return <ProductCards />;
  }

  return (
    <div className={styles.hasNotFountPageContainer}>
      <img
        src={notFountIcon}
        alt={'필터 조건에 맞는 상품이 없을때 나오는 아이콘'}
      />
      <span className={styles.hasNotFountPageText}>
        선택하신 필터와 일치하는 상품이 없습니다.
      </span>
      <button className={styles.hasNotFountPageButton} onClick={onClick}>
        <img src={resetIcon} alt={'초기화버튼 앞 되돌리기 아이콘'} />
        <span className={styles.hasNotFountPageButtonText}>버튼초기화</span>
      </button>
    </div>
  );
};

export const ProductList = () => {
  const renderAllFilterListNum = useRecoilValue(renderAllFilterListSelector);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.innerContainer}>
          <div>
            <ProductListBanner />
          </div>
          <div className={styles.productListTitle}>신상품</div>
          <section className={styles.product}>
            <FilterList />
            <div className={styles.girdContainer}>
              <div className={styles.sortButtonContainer}>
                <div className={styles.totalRenderNum}>
                  총 {renderAllFilterListNum.length}건
                </div>
                <DummyButtons text={'신상품순'} />
                <DummyButtons text={'판매량순'} />
                <DummyButtons text={'혜택순'} />
                <SortLowerPriceButton />
                <SortUpperPriceButton />
              </div>
              <div className={styles.productCardsWrapper}>
                <IsCheckedRenderAllfilter />
              </div>
            </div>
          </section>
          <Pagination />
        </div>
      </div>
      <CartModalLayout />
    </>
  );
};
export default ProductList;
