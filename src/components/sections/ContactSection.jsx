import Section from '../layout/Section'
import SectionHeading from '../ui/SectionHeading'
import Button from '../ui/Button'
import styles from './ContactSection.module.css'

function ContactSection() {
  return (
    <Section id="contact" ariaLabel="Contact">
      <SectionHeading
        eyebrow="Get in touch"
        title="Let's build something."
        description="Placeholder contact prompt — swap in your real email and socials."
      />
      <div className={styles.actions}>
        <Button href="mailto:you@example.com">Email me</Button>
        <Button href="#" variant="ghost">
          GitHub
        </Button>
        <Button href="#" variant="ghost">
          LinkedIn
        </Button>
      </div>
    </Section>
  )
}

export default ContactSection
