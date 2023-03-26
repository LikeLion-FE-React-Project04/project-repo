import styles from "./ProductReviewList.module.scss";

import { Badge } from '@/components/Badge/Badge.jsx';

export default function ProductReviewList({ data }) {
  return (
    <>
      {
        data.map((item, index) => {
          return (
            // eslint-disable-next-line react/jsx-key
            <div className={styles.productReviewList}>
              <div>
                <Badge uiType='bestBadge'>베스트</Badge>
                <Badge className={styles.purpleBadge} uiType='purpleBadge'>퍼플</Badge>
                <span className={styles.name}>{item.writer}</span>
              </div>

              <article>
                <div className={styles.productInfo}>{item.title}</div>
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