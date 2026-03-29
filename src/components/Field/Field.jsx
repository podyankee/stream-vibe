import clsx from 'clsx'
import './Field.scss'
import { getIdFromTitle } from '@/utils/getIdFromTitle'

const Field = (props) => {
  const {
    className,
    id = getIdFromTitle(props),
    label,
    type,
    placeholder,
    isRequired,
  } = props

  const Component = type === 'textarea' ? 'textarea' : 'input'

  return (
    <div className={clsx(className, 'field')}>
      <label className="field__label" htmlFor={id}>
        {label}{' '}
        {isRequired && (
          <span className="field__required-star" aria-hidden="true">
            *
          </span>
        )}
      </label>
      <div className="field__body">
        <Component
          className="fieldControl"
          id={id}
          type={type}
          placeholder="placeholder"
          required={isRequired}
        />
      </div>
    </div>
  )
}
export default Field
