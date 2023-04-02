// import { Mainmodal } from './Mainmodal/Mainmodal';
import { useGetCookieEvent } from './Mainmodal/useGetCookieEvent';
import { Linebanner } from './Linebanner/Linebanner';
import { useSignOut } from '@/firebase/auth';
import MainCarousel from './Carousel/MainCarousel';
import ProductsCarousel from './Carousel/ProductsCarousel';
import styles from './Home.module.scss';
import PageTitle from '../../components/PageTitle/PageTitle';
import CartModal from '@/components/CartModal/CartModal';
import CartModalLayout from '../../components/CartModal/CartModalLayout';
import { useRecoilState } from 'recoil';
import { productMainmodalState } from './Mainmodal/@recoil/MainmodalState';
import MainmodalLayout from './Mainmodal/MainmodalLayout';
import { transparentFilterState } from '../../components/TransparentFilter/@recoil/transparentFilterState';
import { useSetRecoilState } from 'recoil';

function Home() {
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
      <Linebanner />
      <PageTitle className={styles.subTitle}>놓치면 후회할 가격</PageTitle>
      <div className={styles.productCarouselLayout}>
        <ProductsCarousel />
      </div>
      {isVisible ? <MainmodalLayout /> : null}
      <CartModalLayout />
    </div>
  );
}

export default Home;
