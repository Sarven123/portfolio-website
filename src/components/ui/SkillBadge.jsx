import styles from './SkillBadge.module.css'

function SkillBadge({ children }) {
  return <span className={styles.badge}>{children}</span>
}

export default SkillBadge
