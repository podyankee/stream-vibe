import Button from '@/components/Button'
import clsx from 'clsx'
import './SliderNavigation.scss'

const SliderNavigation = (props) => {
  const { className, id, hasPagination = true } = props

  return (
    <div className={clsx(className, 'slider-navigation')} id={id}>
      <Button
        className="slider-navigation__arrow-button slider-navigation__arrow-button-previous "
        mode="black-10"
        iconName="arrow-left"
        label="Previous slide"
        isLabelHidden
      />
      <Button
        className="slider-navigation__arrow-button slider-navigation__arrow-button-next "
        mode="black-10"
        iconName="arrow-right"
        label="Next slide"
        isLabelHidden
      />
    </div>
  )
}

export default SliderNavigation
