import styles from './Footer.module.css'

const YEAR = new Date().getFullYear()

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <p className={styles.copy}>© {YEAR} Your Name. All rights reserved.</p>
        <div className={styles.socials}>
          <a href="#" className={styles.link}>
            GitHub
          </a>
          <a href="#" className={styles.link}>
            LinkedIn
          </a>
          <a href="mailto:you@example.com" className={styles.link}>
            Email
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
