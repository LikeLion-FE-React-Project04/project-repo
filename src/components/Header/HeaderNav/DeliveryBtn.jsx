import { forwardRef } from 'react';

import styles from './DeliveryBtn.module.css';

const DeliveryBtn = forwardRef((_, ref) => {
  return (
    <ul ref={ref}>
      <li>
        <button className={styles.deliveryBtn}>
          <span className={styles.deliveryBtnText}>샛별·낮</span> 배송안내
        </button>
      </li>
    </ul>
  );
});

DeliveryBtn.displayName = 'DeliveryBtn';

export default DeliveryBtn;
