import Section from '../layout/Section'
import SectionHeading from '../ui/SectionHeading'
import ProjectCard from '../ui/ProjectCard'
import { projects } from '../../data/projects'
import styles from './ProjectsSection.module.css'

function ProjectsSection() {
  return (
    <Section id="projects" ariaLabel="Projects">
      <SectionHeading
        eyebrow="Selected work"
        title="Projects"
        description="A few things I've built — placeholder entries until real projects are added."
      />
      <div className={styles.grid}>
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </Section>
  )
}

export default ProjectsSection
