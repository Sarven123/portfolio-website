import { motion, useReducedMotion } from 'framer-motion'
import styles from './ScrollCue.module.css'

function ScrollCue({ targetId }) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <a href={`#${targetId}`} className={styles.cue} aria-label="Scroll to next section">
      <motion.span
        className={styles.line}
        aria-hidden="true"
        animate={
          shouldReduceMotion ? undefined : { y: [0, 8, 0], opacity: [1, 0.4, 1] }
        }
        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <span className={styles.label}>Scroll</span>
    </a>
  )
}

export default ScrollCue
