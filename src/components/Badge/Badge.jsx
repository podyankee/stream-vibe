import clsx from 'clsx'
import './Badge.scss'

const Badge = (props) => {
  const { className, mode = '', isBig = false, children } = props

  return (
    <div
      className={clsx(className, Badge, {
        [`badge--${mode}`]: mode,
        'badge--big': isBig,
      })}
    >
      {children}
    </div>
  )
}
export default Badge
