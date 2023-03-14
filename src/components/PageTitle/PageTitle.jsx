import styles from '@/components/PageTitle/PageTitle.module.scss';

function PageTitle({ className = null, text = '기본'}) {
  const combinedClassNames = `${styles.SubpageTitle} ${className}`.trim();

  return <h2 className={combinedClassNames}>{text}</h2>;
}

export default PageTitle;
