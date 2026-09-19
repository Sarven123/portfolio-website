import styles from './Header.module.css'

const NAV_LINKS = [
  { href: '#projects', label: 'Projects' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
]

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <a href="#hero" className={styles.logo}>
          Your Name
        </a>
        <nav className={styles.nav} aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className={styles.link}>
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Header
