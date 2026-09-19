import styles from './ScrollCue.module.css'

// Static for now — gains a scroll-linked animation in the motion pass (Phase 5).
function ScrollCue({ targetId }) {
  return (
    <a href={`#${targetId}`} className={styles.cue} aria-label="Scroll to next section">
      <span className={styles.line} aria-hidden="true" />
      <span className={styles.label}>Scroll</span>
    </a>
  )
}

export default ScrollCue
