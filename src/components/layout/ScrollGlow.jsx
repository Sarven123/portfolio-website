import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'
import styles from './ScrollGlow.module.css'

// A single ambient glow that drifts down the page as the user scrolls,
// so sections hand off to each other instead of cutting between flat blocks.
function ScrollGlow() {
  const shouldReduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll()

  const top = useTransform(scrollYProgress, [0, 1], ['-10%', '90%'])
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.15, 0.5, 0.85, 1],
    [0.5, 0.3, 0.5, 0.3, 0.5],
  )

  if (shouldReduceMotion) {
    return <div className={styles.glow} style={{ top: '30%', opacity: 0.4 }} aria-hidden="true" />
  }

  return (
    <motion.div
      className={styles.glow}
      style={{ top, opacity }}
      aria-hidden="true"
    />
  )
}

export default ScrollGlow
