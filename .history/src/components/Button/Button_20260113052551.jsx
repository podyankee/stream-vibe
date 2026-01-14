import Icon from '@/components/Icon'
import clsx from 'clsx'
import './Button.scss'

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
    hasFillIcon,
    extraAttrs,
  } = props

  const isLink = href !== undefined
  const Component = isLink ? 'a' : 'button'
  const linkAttributes = { href }
  const buttonAttributes = { type }
  const specificProps = isLink ? linkAttributes : buttonAttributes
  const title = isLabelHidden ? label : undefined
  const iconComponent = iconName && (
    <Icon className="button__icon" name={iconName} hasFill={hasFillIcon} />
  )

  return (
    <Component
      className={clsx('button', className, { [`button--${mode}`]: mode })}
      title={title}
      aria-label={title}
      {...specificProps}
      {...extraAttrs}
    >
      {iconPosition === 'before' && iconComponent}
      {!isLabelHidden && <span className="button__label">{label}</span>}
      {iconPosition === 'after' && iconComponent}
    </Component>
  )
}
