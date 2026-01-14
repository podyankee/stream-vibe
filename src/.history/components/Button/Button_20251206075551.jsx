import './Button.scss'
import clsx from 'clsx'

export default (props) => {
  const {
    className,
    type = 'button',
    href,
    children,
    label,
    isLabelHidden = false,
    iconName,
  } = props

  const isLink = href !== undefined
  const Component = isLink ? 'a' : 'button'
  const linkAttributes = { href }
  const buttonAttributes = { type }
  const attributesByTag = isLink ? linkAttributes : buttonAttributes
  const title = isLabelHidden ? label : undefined

  return (
    <Component
      className={clsx('button', className)}
      title={title}
      aria-label={title}
      {...attributesByTag}
    >
      {!isLabelHidden && <span className="button__label">{label}</span>}
    </Component>
  )
}
