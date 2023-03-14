import styles from './TopbannerText.module.css'

function TopbannerText() {
  return (
    <a href="/">
      지금 가입하고 인기상품 <span className={styles.boldText}>100</span>
      원에 받아가세요
    </a>
  )
}

export default TopbannerText
