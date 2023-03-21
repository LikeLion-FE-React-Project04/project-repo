import styles from '@/components/PageTitle/PageTitle.module.scss';

function PageTitle({ className = null, children, uiType = '' }) {
  const combinedClassNames = `${styles.SubpageTitle} ${className} ${getUiStyle(uiType)}`.trim();

  return <h2 className={combinedClassNames}>{children}</h2>;
}

function getUiStyle(uiType) {
  let uiStyle;

  switch (uiType) {
    case 'productReviewAndInquiry':
      uiStyle = styles.productReviewAndInquiry;
      break;
  }

  return uiStyle;
}

export default PageTitle;
