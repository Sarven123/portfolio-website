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
          <a
            href={`https://github.com/${profile.socials.github}`}
            className={styles.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(profile.contact.email)}`}
            className={styles.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
