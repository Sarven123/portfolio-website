import Section from '../layout/Section'
import SectionHeading from '../ui/SectionHeading'
import SkillBadge from '../ui/SkillBadge'
import Button from '../ui/Button'
import { profile } from '../../data/profile'
import styles from './AboutSection.module.css'

function AboutSection() {
  return (
    <Section id="about" ariaLabel="About me">
      <SectionHeading eyebrow="About" title="A bit more about me" />
      <div className={styles.content}>
        <div className={styles.bio}>
          {profile.bio.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <div className={styles.side}>
          <h3 className={styles.skillsTitle}>Skills</h3>
          <ul className={styles.skills}>
            {profile.skills.map((skill) => (
              <li key={skill}>
                <SkillBadge>{skill}</SkillBadge>
              </li>
            ))}
          </ul>
          <Button href={profile.resumeUrl} variant="ghost">
            Download résumé
          </Button>
        </div>
      </div>
    </Section>
  )
}

export default AboutSection
