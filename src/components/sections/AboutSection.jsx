import Section from '../layout/Section'
import SectionHeading from '../ui/SectionHeading'
import SkillBadge from '../ui/SkillBadge'
import Button from '../ui/Button'
import styles from './AboutSection.module.css'

const PLACEHOLDER_SKILLS = [
  'JavaScript',
  'React',
  'CSS',
  'Node.js',
  'Figma',
  'Accessibility',
]

function AboutSection() {
  return (
    <Section id="about" ariaLabel="About me">
      <SectionHeading eyebrow="About" title="A bit more about me" />
      <div className={styles.content}>
        <div className={styles.bio}>
          <p>
            Placeholder bio paragraph one — replace with your real
            background, what drew you to development, and the kind of work
            you enjoy.
          </p>
          <p>
            Placeholder bio paragraph two — mention experience, notable
            roles, or a personal detail that makes the page feel like you.
          </p>
        </div>
        <div className={styles.side}>
          <h3 className={styles.skillsTitle}>Skills</h3>
          <ul className={styles.skills}>
            {PLACEHOLDER_SKILLS.map((skill) => (
              <li key={skill}>
                <SkillBadge>{skill}</SkillBadge>
              </li>
            ))}
          </ul>
          <Button href="#" variant="ghost">
            Download résumé
          </Button>
        </div>
      </div>
    </Section>
  )
}

export default AboutSection
