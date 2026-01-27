import clsx from 'clsx'
import './Content.scss'

export default (props) => {
  const { children, isResetPaddingTop = false } = props

  return (
    <main
      className={clsx('content', {
        'content--reset-padding-top': isResetPaddingTop,
      })}
    >
      {children}
    </main>
  )
}
