import { useRecoilValue } from "recoil";

import styles from "./ProductReviewList.module.scss";

import { Badge } from '@/components/Badge/Badge.jsx';

import {
  reviewLimitAtom,
  riviewOffsetSelector,
  productNameAtom,
} from '@/pages/ProductDetail/ProductReview/@recoil/renderState';

export default function ProductReviewList({ data }) {
  const limit = useRecoilValue(reviewLimitAtom);
  const offset = useRecoilValue(riviewOffsetSelector);
  const productName = useRecoilValue(productNameAtom)

  return (
    <>
      {
        data.slice(offset, offset + limit).map((item, index) => {
          return (
            // eslint-disable-next-line react/jsx-key
            <div className={styles.productReviewList}>
              <div className={styles.badgeNameWrapper}>
                <Badge uiType='bestBadge'>베스트</Badge>
                <Badge className={styles.purpleBadge} uiType='purpleBadge'>퍼플</Badge>
                <span>{item.starWriter}</span>
              </div>

              <article>
                <div className={styles.productInfo}>{productName}</div>
                <p className={styles.productDescription}>{item.textarea}</p>
                <footer className={styles.productInfo}>{item.date.toDate().toLocaleDateString()}</footer>
              </article>
            </div>
          )
        })
      }
    </>
  )
}