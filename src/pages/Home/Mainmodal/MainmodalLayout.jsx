import Mainmodal from './Mainmodal';
import styles from './MainmodalLayout.module.scss';
import { useRecoilValue } from 'recoil';
import ReactDOM from 'react-dom';
import { productMainmodalState } from './@recoil/MainmodalState';

function MainmodalLayout() {
  const isVisible = useRecoilValue(productMainmodalState);

  if (isVisible) {
    return ReactDOM.createPortal(
      <div className={styles.mainmodalLayout}>
        <Mainmodal />
      </div>,
      document.getElementById('mainModalPortal')
    );
  }
}

export default MainmodalLayout;