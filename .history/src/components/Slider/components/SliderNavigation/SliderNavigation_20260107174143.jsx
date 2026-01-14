import Button from '@/components/Button'
import clsx from 'clsx'
import './SliderNavigation.scss'

const SliderNavigation = (props) => {
  const { className, id, hasPagination = true } = props

  return (
    <div className={clsx(className, 'slider-navigation')} id={id}>
      <Button className="slider-navigation__arrow-button slider-navigation__arrow-button-previous " />
    </div>
  )
}

export default SliderNavigation
