import clsx from 'clsx'
import './Badge.scss'
import Icon from '@/components/Icon'

const Badge = (props) => {
  const {
    className,
    mode = '',
    isBig = false,
    children,
    iconName,
    hasFillIcon,
    IconAriaLabel,
  } = props

  return (
    <div
      className={clsx(className, 'badge', {
        [`badge--${mode}`]: mode,
        'badge--big': isBig,
      })}
    >
      {iconName && (
        <Icon
          className="badge__icon"
          name={iconName}
          hasFill={hasFillIcon}
          ariaLabel={IconAriaLabel}
        />
      )}
      <span>{children}</span>
    </div>
  )
}
export default Badge
