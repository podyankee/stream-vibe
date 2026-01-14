import Icon from '@/components/Icon'
import './Button.scss'
import clsx from 'clsx'

export default (props) => {
  const {
    className,
    type = 'button',
    href,
    children,
    mode = '',
    label,
    isLabelHidden = false,
    iconName,
    iconPosition = 'before',
  } = props

  const isLink = href !== undefined
  const Component = isLink ? 'a' : 'button'
  const linkAttributes = { href }
  const buttonAttributes = { type }
  const attributesByTag = isLink ? linkAttributes : buttonAttributes
  const title = isLabelHidden ? label : undefined
  const iconComponent = iconName && (
    <Icon className="button__icon" name={iconName} />
  )

  return (
    <Component
      className={clsx('button', className, { [`button--${mode}`]: mode })}
      title={title}
      aria-label={title}
      {...attributesByTag}
    >
      {iconPosition === 'before' && iconComponent}
      {!isLabelHidden && <span className="button__label">{label}</span>}
      {iconPosition === 'after' && iconComponent}
    </Component>
  )
}
