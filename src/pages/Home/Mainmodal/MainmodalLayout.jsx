import MainModal from './MainModal';
import styles from './MainModalLayout.module.scss';
import { useRecoilValue } from 'recoil';
import ReactDOM from 'react-dom';
import { productMainModalState } from './@recoil/MainModalState';

function MainModalLayout() {
  const isVisible = useRecoilValue(productMainModalState);

  if (isVisible) {
    return ReactDOM.createPortal(
      <div className={styles.mainModalLayout}>
        <MainModal />
      </div>,
      document.getElementById('mainModalPortal')
    );
  }
}

export default MainModalLayout;