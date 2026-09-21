import Section from '../layout/Section'
import SectionHeading from '../ui/SectionHeading'
import Button from '../ui/Button'
import { profile } from '../../data/profile'
import styles from './ContactSection.module.css'

function ContactSection() {
  return (
    <Section id="contact" ariaLabel="Contact">
      <SectionHeading
        eyebrow="Get in touch"
        title="Let's build something."
        description={profile.contact.prompt}
      />
      <div className={styles.actions}>
        <Button
          href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(profile.contact.email)}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Email me
        </Button>
        <Button
          href={`https://github.com/${profile.socials.github}`}
          variant="ghost"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </Button>
      </div>
    </Section>
  )
}

export default ContactSection
