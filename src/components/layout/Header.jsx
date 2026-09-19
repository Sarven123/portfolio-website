import { profile } from '../../data/profile'
import { useActiveSection } from '../../hooks/useActiveSection'
import styles from './Header.module.css'

const NAV_LINKS = [
  { href: '#projects', id: 'projects', label: 'Projects' },
  { href: '#about', id: 'about', label: 'About' },
  { href: '#contact', id: 'contact', label: 'Contact' },
]

const SECTION_IDS = ['hero', 'projects', 'about', 'contact']

function Header() {
  const activeId = useActiveSection(SECTION_IDS)

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <a href="#hero" className={styles.logo}>
          {profile.name}
        </a>
        <nav className={styles.nav} aria-label="Primary">
          {NAV_LINKS.map((link) => {
            const isActive = activeId === link.id
            return (
              <a
                key={link.href}
                href={link.href}
                className={`${styles.link} ${isActive ? styles.active : ''}`.trim()}
                aria-current={isActive ? 'true' : undefined}
              >
                {link.label}
              </a>
            )
          })}
        </nav>
      </div>
    </header>
  )
}

export default Header
