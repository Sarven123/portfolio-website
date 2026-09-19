import Button from './Button'
import styles from './ProjectCard.module.css'

function ProjectCard({ title, description, tags = [], link, repo }) {
  return (
    <article className={styles.card}>
      <div className={styles.media} aria-hidden="true" />
      <div className={styles.body}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        {tags.length > 0 && (
          <ul className={styles.tags}>
            {tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
        )}
        <div className={styles.links}>
          {link && (
            <Button href={link} variant="ghost">
              View project
            </Button>
          )}
          {repo && (
            <a href={repo} className={styles.repoLink}>
              Source
            </a>
          )}
        </div>
      </div>
    </article>
  )
}

export default ProjectCard
