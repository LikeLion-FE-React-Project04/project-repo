import styles from '@/components/PageTitle/PageTitle.module.scss';

function PageTitle(props) {
  return (
    <h2 className={styles.SubpageTitle}>{props.text}</h2>
  )
}

export default PageTitle