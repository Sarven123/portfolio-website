import Section from '../layout/Section'
import Button from '../ui/Button'
import ScrollCue from '../ui/ScrollCue'
import styles from './HeroSection.module.css'

function HeroSection() {
  return (
    <Section id="hero" ariaLabel="Introduction" className={styles.section}>
      <p className={styles.eyebrow}>Hi, I&apos;m</p>
      <h1 className={styles.name}>Your Name</h1>
      <p className={styles.role}>Frontend Developer &amp; Creative Technologist</p>
      <p className={styles.intro}>
        I build fast, thoughtful web experiences — placeholder intro copy to
        be replaced with your own pitch.
      </p>
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
