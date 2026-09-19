import Section from '../layout/Section'
import SectionHeading from '../ui/SectionHeading'
import ProjectCard from '../ui/ProjectCard'
import styles from './ProjectsSection.module.css'

// Inline placeholder data — moves to src/data/projects.js in Phase 4.
const PLACEHOLDER_PROJECTS = [
  {
    id: 'project-one',
    title: 'Project One',
    description:
      'A short placeholder summary of what this project does and why it matters.',
    tags: ['React', 'Node'],
    link: '#',
  },
  {
    id: 'project-two',
    title: 'Project Two',
    description:
      'Another placeholder project description — swap in real work later.',
    tags: ['JavaScript', 'CSS'],
    link: '#',
  },
  {
    id: 'project-three',
    title: 'Project Three',
    description:
      'A third placeholder entry to preview the grid at three columns.',
    tags: ['Vite', 'Design'],
    link: '#',
    repo: '#',
  },
]

function ProjectsSection() {
  return (
    <Section id="projects" ariaLabel="Projects">
      <SectionHeading
        eyebrow="Selected work"
        title="Projects"
        description="A few things I've built — placeholder entries until real projects are added."
      />
      <div className={styles.grid}>
        {PLACEHOLDER_PROJECTS.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </Section>
  )
}

export default ProjectsSection
