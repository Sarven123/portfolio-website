import { motion, useScroll } from 'framer-motion'
import styles from './ScrollProgress.module.css'

// Directly reflects scroll position (no autoplay/looping), so it isn't
// gated behind prefers-reduced-motion — same reasoning as a native scrollbar.
function ScrollProgress() {
  const { scrollYProgress } = useScroll()

  return (
    <motion.div
      className={styles.bar}
      style={{ scaleX: scrollYProgress }}
      aria-hidden="true"
    />
  )
}

export default ScrollProgress
