import styles from './Button.module.css'

function Button({ href, onClick, variant = 'primary', children, ...rest }) {
  const className = `${styles.button} ${styles[variant] ?? ''}`.trim()

  if (href) {
    return (
      <a href={href} className={className} {...rest}>
        {children}
      </a>
    )
  }

  return (
    <button type="button" onClick={onClick} className={className} {...rest}>
      {children}
    </button>
  )
}

export default Button
