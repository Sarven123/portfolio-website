import Section from '../layout/Section'
import Button from '../ui/Button'
import ScrollCue from '../ui/ScrollCue'
import { profile } from '../../data/profile'
import styles from './HeroSection.module.css'

function HeroSection() {
  return (
    <Section id="hero" ariaLabel="Introduction" className={styles.section}>
      <p className={styles.eyebrow}>{profile.eyebrow}</p>
      <h1 className={styles.name}>{profile.name}</h1>
      <p className={styles.role}>{profile.role}</p>
      <p className={styles.intro}>{profile.intro}</p>
      <div className={styles.actions}>
        <Button href="#projects">See my work</Button>
        <Button href="#contact" variant="ghost">
          Get in touch
        </Button>
      </div>
      <div className={styles.cueWrap}>
        <ScrollCue targetId="projects" />
      </div>
    </Section>
  )
}

export default HeroSection
