import { useGetCookieEvent } from './MainModal/useGetCookieEvent';
import { LineBanner } from './LineBanner/LineBanner';
import { useSignOut } from '@/firebase/auth';
import MainCarousel from './Carousel/MainCarousel';
import ProductsCarousel from './Carousel/ProductsCarousel';
import styles from './Home.module.scss';
import PageTitle from '../../components/PageTitle/PageTitle';
import CartModal from '@/components/CartModal/CartModal';
import CartModalLayout from '../../components/CartModal/CartModalLayout';
import { useRecoilState } from 'recoil';
import { productMainModalState } from './MainModal/@recoil/MainModalState';
import MainModalLayout from './MainModal/MainModalLayout';
import { transparentFilterState } from '../../components/TransparentFilter/@recoil/transparentFilterState';
import { useSetRecoilState } from 'recoil';
import { useDocumentTitle } from '@/hooks/useDocumentTitle';

function Home() {
  useDocumentTitle('Karly - 멋쟁이사조처럼');

  const {isVisible, setIsVisible} = useGetCookieEvent();
  const setTransparentFilter = useSetRecoilState(transparentFilterState);

  const { signOut } = useSignOut();
  const handleSignOut = async () => {
    signOut();
  };

  return (
    <div className={styles.home}>
      <MainCarousel />
      <PageTitle className={styles.subTitle}>이 상품 어때요?</PageTitle>
      <div className={styles.productCarouselLayout}>
        <ProductsCarousel />
      </div>
      <LineBanner />
      <PageTitle className={styles.subTitle}>놓치면 후회할 가격</PageTitle>
      <div className={styles.productCarouselLayout}>
        <ProductsCarousel />
      </div>
      {isVisible ? <MainModalLayout /> : null}
      <CartModalLayout />
    </div>
  );
}

export default Home;
