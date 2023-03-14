import styles from './NewBadge.module.css';

import New from '@/assets/header/ic-new-tag.svg';

function NewBadge() {
  return (
    <img
      alt="새로 생긴 것을 의미하는 n 모양 이미지"
      className={styles.newBadge}
      src={New}
    />
  );
}

export default NewBadge;
