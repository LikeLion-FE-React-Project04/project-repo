import styles from './NewBadge.module.css';

import New from '@/assets/header/ic-new-tag.svg';

function NewBadge() {
  return <img alt={''} className={styles.newBadge} src={New} />;
}

export default NewBadge;
