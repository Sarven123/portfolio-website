import { motion } from 'framer-motion'
import Section from '../layout/Section'
import SectionHeading from '../ui/SectionHeading'
import ProjectCard from '../ui/ProjectCard'
import { projects } from '../../data/projects'
import styles from './ProjectsSection.module.css'

const gridVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

function ProjectsSection() {
  return (
    <Section id="projects" ariaLabel="Projects">
      <SectionHeading
        eyebrow="Selected work"
        title="Projects"
        description="A few things I've built."
      />
      <motion.div
        className={styles.grid}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={gridVariants}
      >
        {projects.map((project) => (
          <motion.div key={project.id} variants={cardVariants}>
            <ProjectCard {...project} />
          </motion.div>
        ))}
      </motion.div>
    </Section>
  )
}

export default ProjectsSection
