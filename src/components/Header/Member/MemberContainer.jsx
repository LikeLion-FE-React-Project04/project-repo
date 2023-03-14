import styles from './MemberContainer.module.css'

function MemberContainer({ children }) {
  return <ul className={styles.headerMember}>{children}</ul>
}

export default MemberContainer
