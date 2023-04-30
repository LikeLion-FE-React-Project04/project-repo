import { useResetRecoilState, useRecoilValue, useRecoilState } from 'recoil';
import { useEffect, useState } from 'react';

import styles from './CartAccordion.module.scss';
import CartDataCheckBox from './CartDataCheckBox';
import CartAccordionHandle from './CartAccordionHandle';
import CartAccordionPanelItem from './CartAccordionPanelItem';

import {
  cartDataState,
  selectedState,
  cartProductTypeState,
  totalItemCountState,
  totalActiveItemCountState,
} from '@/store/cartModalState.js';
import AccordionItem from '@/components/Accordion/AccordionItem';
import { countState } from '@/components/Counter/@recoil/counterState.js';

export default function CartAccordion() {
  const [cartData, setCartData] = useRecoilState(cartDataState);
  const cartProducts = useRecoilValue(cartProductTypeState);
  const [count, setCount] = useRecoilState(countState);
  const [select, setSelect] = useRecoilState(selectedState);
  const resetCount = useResetRecoilState(countState);
  const resetSelect = useResetRecoilState(selectedState);
  const [selectAllState, setselectAll] = useState(true);
  const totalItemCount = useRecoilValue(totalItemCountState);
  const totalActiveItemCount = useRecoilValue(totalActiveItemCountState);

  // 초기화
  useEffect(() => {
    cartData.map((cartProduct) => {
      setCount((prev) => {
        return { ...prev, [cartProduct.productId]: cartProduct.quantity };
      });

      setSelect((prev) => {
        return { ...prev, [cartProduct.productId]: true };
      });
    });

    return () => {
      resetSelect();
      resetCount();
    };
  }, [cartData]);

  // 수정 필요
  useEffect(() => {
    if (Object.keys(select).length != 0) {
      const newSelect = { ...select };

      Object.keys(select).map((v) => (newSelect[v] = selectAllState));
      setSelect(newSelect);
    }
  }, [selectAllState]);

  // 선택 삭제
  async function handleDeleteAll() {
    let sel = { ...select };

    setCartData((prev) => {
      let newData = [...prev];

      Object.entries(sel).map(([k, v]) => {
        if (v) {
          newData = newData.filter((data) => {
            return data.productId != k;
          });
        }
      });

      return newData;
    });
  }

  return (
    <>
      <div className={styles.cartAccordionSelectLayout}>
        {/* 전체 선택 체크박스 */}
        <CartDataCheckBox name="selectedAll" visibleLabel>
          <span className={styles.selectAll}>
            전체선택 ({totalActiveItemCount}/{totalItemCount})
          </span>
        </CartDataCheckBox>
        <span className={styles.bar}>|</span>
        <button className={styles.delselectedItem} onClick={handleDeleteAll}>
          선택삭제
        </button>
      </div>

      {/* 아코디언 영역 */}
      {cartProducts[0]['data'].length == 0 &&
      cartProducts[1]['data'].length == 0 &&
      cartProducts[2]['data'].length == 0 ? (
        <div className={styles.nothing}>장바구니에 담긴 상품이 없습니다</div>
      ) : (
        <>
          {/* 냉장 보관 아코디언 */}
          {cartProducts[0]['data'].length != 0 && (
            <AccordionItem index={1} width="742px" handelArrow active>
              <CartAccordionHandle type="cold" />
              {cartProducts[0]['data'].map((product) => {
                return <CartAccordionPanelItem product={product} />;
              })}
            </AccordionItem>
          )}
          {/* 냉동 보관 아코디언 */}
          {cartProducts[1]['data'].length != 0 && (
            <AccordionItem index={2} width="742px" handelArrow active>
              <CartAccordionHandle type="frozen" />
              {cartProducts[1]['data'].map((product) => {
                return <CartAccordionPanelItem product={product} />;
              })}
            </AccordionItem>
          )}
          {/* 상온 보관 아코디언 */}
          {cartProducts[2]['data'].length != 0 && (
            <AccordionItem index={3} width="742px" handelArrow active>
              <CartAccordionHandle type="temperature" />
              {cartProducts[2]['data'].map((product) => {
                return <CartAccordionPanelItem product={product} />;
              })}
            </AccordionItem>
          )}
        </>
      )}

      <div className={styles.cartAccordionSelectLayout}>
        {/* 수정 필요 */}
        <CartDataCheckBox name="selectedAll" visibleLabel>
          <span className={styles.selectAll}>
            전체선택 ({totalActiveItemCount}/{totalItemCount})
          </span>
        </CartDataCheckBox>
        <span className={styles.bar}>|</span>
        <button className={styles.delselectedItem} onClick={handleDeleteAll}>
          선택삭제
        </button>
      </div>
    </>
  );
}
