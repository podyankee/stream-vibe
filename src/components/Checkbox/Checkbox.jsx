import getIdFromTitle from '@/utils/getIdFromTitle'
import './Checkbox.scss'
import clsx from 'clsx'

const Checkbox = (props) => {
  const {
    className,
    id = getIdFromTitle(props.label),
    label,
    isRequired,
  } = props

  return (
    <label className={clsx(className, 'checkbox')} htmlFor={id}>
      <input
        className="checkbox__input"
        id={id}
        type="checkbox"
        required={isRequired}
      />
      <span className="checkbox__label">{label}</span>
    </label>
  )
}
export default Checkbox
