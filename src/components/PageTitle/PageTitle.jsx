import styles from '@/components/PageTitle/PageTitle.module.scss';

function PageTitle({ className = null, children}) {
  const combinedClassNames = `${styles.SubpageTitle} ${className}`.trim();

  return <h2 className={combinedClassNames}>{children}</h2>;
}

export default PageTitle;
