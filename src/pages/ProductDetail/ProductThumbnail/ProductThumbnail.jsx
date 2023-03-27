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

function ProductThumbnail({ product }) {
  const [count, setCount] = useRecoilState(countState);
  const [cartData, setCartData] = useRecoilState(cartDataState);

  useEffect(() => {
    setCount({
      [product.id]: 1,
    });
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
            className={styles.ProductThumb}
            src={product.image.thumbnail}
            alt="탱탱 쫄면"
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
        <ul>
          <li>
            <button href="" className={styles.Active}>
              상품설명
            </button>
          </li>
          <li>
            <button href="">상세정보</button>
          </li>
          <li>
            <button href="">
              후기 <span>(1,000)</span>
            </button>
          </li>
          <li>
            <button href="">문의</button>
          </li>
        </ul>
        <div className={styles.ProductDetailInner}>
          <div className={styles.GoodsIntro}>
            <img src={product.image.banner} alt="탱탱 쫄면" />
            <p className={styles.GoodsTitle}>
              <span>{product.description}</span>
              {product.name}
            </p>
            <p className={styles.GoodsDescription}>
              쫄면의 진가는 매콤새콤한 양념과 탱탱한 면발에서 찾을 수 있지요.
              풀무원은 이 맛을 더 부담 없이 즐길 수 있도록 튀기지 않고 만든
              탱탱쫄면을 선보입니다. 밀가루와 감자 전분을 적절히 배합해 탄력이
              좋고, 입에 넣었을 때는 찰지게 씹히죠. 고추장을 넣어 숙성한
              비빔장은 자연스럽고 깊은 맛을 냅니다. 간단하게 조리해 마지막 한
              가닥까지 탱탱한 식감을 즐겨보세요. 취향에 따라 다양한 고명을 올려
              드셔도 좋아요.
            </p>
          </div>
          <div className={styles.GoodsPoint}>
            {/* <h3>
                <span>Karly's Check Point</span>

              </h3> */}
            <img src={product.image.view} alt="탱탱 쫄면" />
            <img src={product.image.info} alt="탱탱 쫄면" />
            <img src="/assets/product-detail/why-carly.png" alt="탱탱 쫄면" />
          </div>
        </div>
      </section>
    </>
  );
}

export default ProductThumbnail;