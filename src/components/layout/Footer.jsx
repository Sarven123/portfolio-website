import { profile } from '../../data/profile'
import styles from './Footer.module.css'

const YEAR = new Date().getFullYear()

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <p className={styles.copy}>
          © {YEAR} {profile.name}. All rights reserved.
        </p>
        <div className={styles.socials}>
          <a href={profile.socials.github} className={styles.link}>
            GitHub
          </a>
          <a href={profile.socials.linkedin} className={styles.link}>
            LinkedIn
          </a>
          <a href={`mailto:${profile.contact.email}`} className={styles.link}>
            Email
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
