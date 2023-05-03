import { useRecoilValue } from 'recoil';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';

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

import notFountIcon from '@/assets/product-list/ic-notFound.svg';
import resetIcon from '@/assets/product-list/ic-return.svg';

import {
  renderAllFilterListSelector,
  limitAtom,
  offsetSelector,
} from '@/pages/ProductList/@recoil/renderState';
import ProductCard from '@/components/ProductCard/ProductCard';

import { useDocumentTitle } from '@/hooks/useDocumentTitle';

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
      <LazyLoadImage
        alt="이번주의 신상 랭킹보러가기 이미지 배너"
        className={styles.productListBanner}
        src='assets/product-list/product-list-banner.avif'
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
      <LazyLoadImage
        alt={'필터 조건에 맞는 상품이 없을때 나오는 아이콘'}
        src={notFountIcon}
      />
      <span className={styles.hasNotFountPageText}>
        선택하신 필터와 일치하는 상품이 없습니다.
      </span>
      <button
        aria-labelledby={'초기화 버튼'}
        className={styles.hasNotFountPageButton}
        onClick={onClick}
      >
        <LazyLoadImage src={resetIcon} alt={'초기화버튼 앞 되돌리기 아이콘'} />
        <span className={styles.hasNotFountPageButtonText}>버튼초기화</span>
      </button>
    </div>
  );
};

export const SortButtonList = () => {
  const renderAllFilterListNum = useRecoilValue(renderAllFilterListSelector);

  return (
    <div className={styles.sortButtonContainer}>
      <div className={styles.totalRenderNum}>
        총 {renderAllFilterListNum.length}건
      </div>
      <DummyButtons
        AlternativeText={'상품들을 신상품 순으로 정렬 해주는 버튼'}
        text={'신상품순'}
      />
      <DummyButtons
        AlternativeText={'상품들을 판매량 순으로 정렬 해주는 버튼'}
        text={'판매량순'}
      />
      <DummyButtons
        AlternativeText={'상품들을 혜택 순으로 정렬 해주는 버튼'}
        text={'혜택순'}
      />
      <SortLowerPriceButton />
      <SortUpperPriceButton />
    </div>
  );
};

export const ProductList = () => {
  useDocumentTitle('상품 - Karly');

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
              <SortButtonList />
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
