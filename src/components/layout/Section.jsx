import { motion } from 'framer-motion'
import styles from './Section.module.css'

const variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
}

function Section({ id, ariaLabel, className = '', children }) {
  return (
    <section
      id={id}
      aria-label={ariaLabel}
      className={`${styles.section} ${className}`.trim()}
    >
      <motion.div
        className={styles.inner}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={variants}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        {children}
      </motion.div>
    </section>
  )
}

export default Section
