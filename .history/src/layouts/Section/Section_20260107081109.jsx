import clsx from 'clsx'
import './Section.scss'

export default (props) => {
  const {
    className,
    title,
    titleId,
    description,
    actions,
    isActionsHiddenOnMobile = false,
    children,
  } = props

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
          {description && (
            <div className="section__description">
              <p>{description}</p>
            </div>
          )}
        </div>
        {actions && (
          <div
            className={clsx('section__actions', {
              'hidden-mobile': isActionsHiddenOnMobile,
            })}
          >
            {actions}
          </div>
        )}
      </header>
      <div className="section__body">{children}</div>
    </section>
  )
}
