import styles from './Section.module.css'

function Section({ id, ariaLabel, className = '', children }) {
  return (
    <section
      id={id}
      aria-label={ariaLabel}
      className={`${styles.section} ${className}`.trim()}
    >
      <div className={styles.inner}>{children}</div>
    </section>
  )
}

export default Section
