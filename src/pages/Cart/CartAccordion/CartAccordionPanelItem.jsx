import styles from './CartAccordionPanelItem.module.scss';
import testImg from '@/assets/product/tangtang/thumbnail.jpg';
import Counter from '@/components/Counter/Counter.jsx';
import { getPriceFormat } from '@/utils';
import CartDataCheckBox from './CartDataCheckBox';
import { useRecoilState } from 'recoil';
import { countState } from '@/store/CounterState';
import { cartDataState } from '../../../store/cartModalState';
import { alertModalMoveState, alertModalState, alertModalText, alertModalUiType, caseOfRemoveProduct } from '../../../components/AlertBox/@recoil/alertModalState';
import { useSetRecoilState } from 'recoil';
import { darkFilterState } from '../../../store/darkFilterState';
import { useRecoilValue } from 'recoil';

function CartAccordionPanelItem({
  product = {
    id: 'product-ekfk',
    name: '[풀무원] 탱탱쫄면 (4개입)',
    description: '튀기지 않아 부드럽고 매콤한',
    price: 4980,
    saleRatio: 0,
    salePrice: 0,
    image: {
      thumbnail: 'assets/product/tangtang/thumbnail.jpg',
      view: 'tangtang/detail-view.jpg',
      banner: 'tangtang/detail-banner.jpg',
      info: 'tangtang/detail-info.jpg',
      alt: '풀무원 탱탱쫄면',
    },
    stock: 11,
    category: '샐러드ㆍ간편식',
    kalryOnly: 'false',
    brand: '풀무원',
    storageType: 'frozen',
  },
}) {
  const [cartData, setCartData] = useRecoilState(cartDataState);
  const [count, setCount] = useRecoilState(countState);

  // 경고창 컴포넌트와 연결하려고 추가한 부분
  const setDarkFilterState = useSetRecoilState(darkFilterState);
  const setAlertModalState = useSetRecoilState(alertModalState); 
  const setAlertModalText = useSetRecoilState(alertModalText);
  const setAlertModalMoveState = useSetRecoilState(alertModalMoveState);
  const setAlertModalUiType = useSetRecoilState(alertModalUiType);
  const setCaseOfRemoveProduct = useSetRecoilState(caseOfRemoveProduct);

  const makeAlert = () => {
    setAlertModalState(true);   // 경고창을 띄운다
    setDarkFilterState(true);  // 다크필터를 띄운다
    setAlertModalText('삭제하시겠습니까?');  // 텍스트를 설정한다
    setAlertModalMoveState({  // 이동 여부를 설정한다
      needToMove: false,
      moveUrl: '',
    });
    setAlertModalUiType('confirmAndCancel'); // 버튼 타입을 설정한다.
    setCaseOfRemoveProduct({ // 제품을 지울 생각이 있는 걸 알린다
      needToRemove: true,
      product: product,
    })
  }

  const handleCloseBtn = () => {
    makeAlert();

    // 원래 코드
    // setCartData((prev) => {
    //   const cartArr = prev.filter((data) => {
    //     return data.productId !== product.id;
    //   });
    
    //   return cartArr;
    // });
  }

  return (
    <div className={styles.CartAccordionPanelItem}>
      <CartDataCheckBox name={product.id} />
      <div
        className={styles.panelImg}
        style={{
          backgroundImage: `url(${product.image.thumbnail})`,
        }}
      />
      <span className={styles.panelTitle}>{product.name}</span>
      <Counter
        name={product.id}
        // 카트데이터 변경
        minusBtnEvent={() => {
          let cartItems = [...cartData];
          let cartItemIndex = cartItems.findIndex(
            (item) => item.productId == product.id
          );

          cartItems[cartItemIndex] = {
            ...cartItems[cartItemIndex],
            quantity: cartItems[cartItemIndex].quantity - 1,
          };
          setCartData(cartItems);
        }}
        plusBtnEvent={() => {
          let cartItems = [...cartData];
          let cartItemIndex = cartItems.findIndex(
            (item) => item.productId == product.id
          );

          cartItems[cartItemIndex] = {
            ...cartItems[cartItemIndex],
            quantity: cartItems[cartItemIndex].quantity + 1,
          };
          setCartData(cartItems);
        }}
      />
      <span className={styles.panelPrice}>{`${getPriceFormat(
        (product.saleRatio ? product.salePrice : product.price) *
          count[product.id]
      )}원`}</span>
      <button className={styles.closeBtn} onClick={handleCloseBtn} />
    </div>
  );
}

export default CartAccordionPanelItem;
