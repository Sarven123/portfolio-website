import styles from './SectionHeading.module.css'

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className={styles.wrap}>
      {eyebrow && <p className={styles.eyebrow}>{eyebrow}</p>}
      <h2 className={styles.title}>{title}</h2>
      {description && <p className={styles.description}>{description}</p>}
    </div>
  )
}

export default SectionHeading
