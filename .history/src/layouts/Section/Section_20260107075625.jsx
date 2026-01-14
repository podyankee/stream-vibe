import clsx from 'clsx'
import './Section.scss'

export default (props) => {
  const { className, title, titleId, description, actions, children } = props

  return (
    <section
      className={clsx(className, 'section', 'container')}
      aria-labelledby={titleId}
    >
      <header className="section__header">
        <div className="section__info">
          <h2 className="section__title h3" id={titleId}>
            {title}
          </h2>
        </div>
        {actions && <div className="section__actions">{actions}</div>}
      </header>
      <div className="section__body">{children}</div>
    </section>
  )
}
