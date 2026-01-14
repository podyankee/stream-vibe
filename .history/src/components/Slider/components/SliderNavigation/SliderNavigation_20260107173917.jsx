import './SliderNavigation.scss'
import clsx from 'clsx'

const SliderNavigation = (props) => {
  const { className, id, hasPagination = true } = props

  return <div className={clsx(className, 'slider-navigation')} id={id}></div>
}

export default SliderNavigation
