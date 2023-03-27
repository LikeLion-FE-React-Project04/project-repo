import styles from './CartAccordion.module.scss';
import AccordionItem from '@/components/Accordion/AccordionItem';
import CartAccordionHandle from './CartAccordionHandle';
import CartAccordionPanelItem from './CartAccordionPanelItem';
import {
  cartDataState,
  selectedState,
  cartProductTypeState,
  totalItemCountState,
  totalActiveItemCountState,
} from '@/store/cartModalState.js';
import { useRecoilState } from 'recoil';
import { useRecoilValue } from 'recoil';

import { countState } from '@/store/CounterState';
import { useEffect, useState } from 'react';
import CartDataCheckBox from './CartDataCheckBox';
import { useResetRecoilState } from 'recoil';

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

  // 스냅샷 데이터?
  const [snapshotCount, setSnapshotCount] = useState({});
  const [snapshotSelect, setSnapshotSelect] = useState({});

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

  // useEffect(() => {
  //   setSnapshotCount(count);
  //   setSnapshotSelect(select);
  //   console.log('실행되었어요!!!');
  //   console.log('setSnapshotCount1: ', snapshotCount);
  //   console.log('setSnapshotSelect1: ', snapshotSelect);
  //   if (
  //     Object.keys(snapshotCount).length != 0 &&
  //     Object.keys(snapshotSelect).length != 0
  //   ) {
  //     cartData.map((cartProduct) => {
  //       console.log('setSnapshotCount: ', snapshotCount);
  //       console.log('setSnapshotSelect: ', snapshotSelect);
  //       setCount((prev) => {
  //         return { ...prev, [cartProduct.productId]: cartProduct.quantity };
  //       });

  //       setSelect((prev) => {
  //         return { ...prev, [cartProduct.productId]: true };
  //       });
  //     });
  //   }

  //   return () => {
  //     console.log('클린업 실행');
  //     resetSelect();
  //     resetCount();
  //   };
  // }, [cartData]);

  // useEffect(() => {
  //   console.log('zzz');
  //   setSnapshotCount(count);
  //   setSnapshotSelect(select);
  // }, [cartData]);

  // 수정 필요
  useEffect(() => {
    if (Object.keys(select).length != 0) {
      const newSelect = { ...select };

      Object.keys(select).map((v) => (newSelect[v] = selectAllState));
      setSelect(newSelect);
    }
  }, [selectAllState]);

  function handleselectAll() {
    setselectAll(!selectAllState);
  }

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
        {/* 수정 필요 */}
        <CartDataCheckBox name="selectedAll" />
        <button className={styles.selectAll} onClick={handleselectAll}>
          <span className={styles.p}>
            전체선택 ({totalActiveItemCount}/{totalItemCount})
          </span>
        </button>
        <span className={styles.bar}>|</span>
        <button className={styles.delselectedItem} onClick={handleDeleteAll}>
          선택삭제
        </button>
      </div>
      {cartProducts[0]['data'].length == 0 &&
      cartProducts[1]['data'].length == 0 &&
      cartProducts[2]['data'].length == 0 ? (
        <div className={styles.nothing}>장바구니에 담긴 상품이 없습니다</div>
      ) : (
        <>
          {cartProducts[0]['data'].length != 0 && (
            <AccordionItem index={1} width="742px" handelArrow active>
              <CartAccordionHandle type="cold" />
              {cartProducts[0]['data'].map((product) => {
                return <CartAccordionPanelItem product={product} />;
              })}
            </AccordionItem>
          )}
          {cartProducts[1]['data'].length != 0 && (
            <AccordionItem index={2} width="742px" handelArrow active>
              <CartAccordionHandle type="frozen" />
              {cartProducts[1]['data'].map((product) => {
                return <CartAccordionPanelItem product={product} />;
              })}
            </AccordionItem>
          )}
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
        <CartDataCheckBox name="selectedAll" />
        <button className={styles.selectAll} onClick={handleselectAll}>
          전체선택 ({totalActiveItemCount}/{totalItemCount})
        </button>
        <span className={styles.bar}>|</span>
        <button className={styles.delselectedItem} onClick={handleDeleteAll}>
          선택삭제
        </button>
      </div>
    </>
  );
}
