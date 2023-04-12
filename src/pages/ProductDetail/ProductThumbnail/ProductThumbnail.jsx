import styles from '@/pages/ProductDetail/ProductThumbnail/ProductThumbnail.module.scss';
import Counter from '@/components/Counter/Counter';
import IconHeart from '@/assets/product-detail/ic-heart.svg';
import { getPaymentPrice } from '@/utils';
import { getPriceFormat, saveCartData } from '../../../utils';
import { countState } from '@/store/CounterState.js';
import { useRecoilState, useSetRecoilState, useRecoilValue } from 'recoil';
import { useEffect } from 'react';
import { Button } from '../../../components/Button/Button';
import { cartDataState } from '@/store/cartModalState.js';
import ProductDetailMenu from '../ProductDetailMenu/ProductDetailMenu';

function ProductThumbnail({ product }) {
  const [count, setCount] = useRecoilState(countState);
  const [cartData, setCartData] = useRecoilState(cartDataState);

  useEffect(() => {
    setCount({
      [product.id]: 1,
    });
    console.log('product 정보 출력 => ', product);
  }, []);

  const handleCartBtnClick = () => {
    saveCartData(product.id, count[product.id], cartData, setCartData);
    alert(
      `장바구니에 "${product.name}" 상품이 ${count[product.id]}개 담겼습니다`
    );
  };

  return (
    <>
      <secttion className={styles.ProductBox}>
        <div className={styles.ProductInner1}>
          <img
            alt={product.image.alt}
            className={styles.ProductThumb}
            src={product.image.thumbnail}
          />
        </div>
        <div className={styles.ProductInner2}>
          <div className={styles.ProductInnerDetail}>
            <p className={styles.SubTitle}>샛별배송</p>
            <p className={styles.ProductTitle}>{product.name}</p>
            <p className={styles.ProductTitleInfo}>{product.description}</p>
            <div className={styles.ProductCost}>
              <span>{getPriceFormat(getPaymentPrice(product))}</span>
              <span>원</span>
            </div>
            <p className={styles.InfoText}>
              로그인 후, 적립 혜택이 제공됩니다.
            </p>
          </div>
          <ul>
            <li>
              <p className={styles.ListTitle}>배송</p>
              <div className={styles.ListContent}>
                <p className={styles.ListContentTitle}>샛별배송</p>
                <p>
                  23시 전 주문 시 내일 아침 7시 전 도착
                  <p>(대구 부산 울산 샛별배송 운영시간 별도 확인)</p>
                </p>
              </div>
            </li>
            <li>
              <p className={styles.ListTitle}>판매자</p>
              <div className={styles.ListContent}>
                <p className={styles.ListContentTitle}>칼리</p>
              </div>
            </li>
            <li>
              <p className={styles.ListTitle}>포장타입</p>
              <div className={styles.ListContent}>
                <p className={styles.ListContentTitle}>상온 (종이포장)</p>
                <p>택배배송은 에코 포장이 스티로폼으로 대체됩니다.</p>
              </div>
            </li>
            <li>
              <p className={styles.ListTitle}>판매단위</p>
              <div className={styles.ListContent}>
                <p className={styles.ListContentTitle}>1봉</p>
              </div>
            </li>
            <li>
              <p className={styles.ListTitle}>원산지</p>
              <div className={styles.ListContent}>
                <p className={styles.ListContentTitle}>상세페이지 별도표기</p>
              </div>
            </li>
            <li>
              <p className={styles.ListTitle}>알레르기정보</p>
              <div className={styles.ListContent}>
                <p className={styles.ListContentTitle}>
                  -대두, 밀, 쇠고기 함유
                </p>
                <p className={styles.ListContentTitle}>
                  -계란, 우유, 메밀, 땅콩, 고등어, 게, 돼지고기, 새우, 복숭아,
                  토마토, 아황산류, 호두, 잣, 닭고기, 오징어, 조개류(굴, 전복,
                  홍합 포함)를 사용한 제품과 같은 제조시설에서 제조
                </p>
              </div>
            </li>
            <li>
              <p className={styles.ListTitle}>상품선택</p>
              <div className={styles.ListContentBox}>
                <div className={styles.CountProduct}>
                  <p className={styles.ListContentTitle}>{product.name}</p>
                  <div className={styles.CountQuantity}>
                    <Counter name={product.id} />
                    <p>{getPriceFormat(getPaymentPrice(product))}원</p>
                  </div>
                </div>
              </div>
            </li>
          </ul>
          <div className={styles.TotalPrice}>
            <p className={styles.TotalPriceDetail}>
              총 상품금액:{' '}
              <span>
                {getPriceFormat(getPaymentPrice(product) * count[product.id])}
              </span>
              원
            </p>
            <p className={styles.TotalPriceInfo}>
              <span>적립</span>
              로그인 후, 적립 혜택 제공
            </p>
          </div>
          <div className={styles.ButtonGroup}>
            <a href="?" className={styles.ButtonLike}>
              {/* <img src={IconHeart} alt="동네가게 바로가기 배너" /> */}
              <img
                src="/assets/product-detail/ic-heart.svg"
                alt="찜하기 버튼"
              />
            </a>
            <a href="?" className={styles.ButtonNotice}>
              <img
                src="/assets/product-detail/ic-disabled-alarm.svg"
                alt="재입고 알림 버튼"
              />
            </a>
            <Button className={styles.ButtonCart} onClick={handleCartBtnClick}>
              장바구니 담기
            </Button>
          </div>
        </div>
      </secttion>
      <section className={styles.ProductDetail}>
        <ProductDetailMenu />
        <div className={styles.ProductDetailInner}>
          <div className={styles.GoodsIntro}>
            <img src={product.image.banner} alt={product.image.alt} />
            <p className={styles.GoodsTitle}>
              <span>{product.description}</span>
              {product.name}
            </p>
            <p className={styles.GoodsDescription}>{product.explanation}</p>
          </div>
          <div className={styles.GoodsPoint}>
            {/* <h3>
                <span>Karly's Check Point</span>

              </h3> */}
            <img src={product.image.view} alt={product.image.alt} />
            <img src={product.image.info} alt={product.image.alt} />
            <img
              src="/assets/product-detail/why-carly.png"
              alt={product.image.alt}
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default ProductThumbnail;
