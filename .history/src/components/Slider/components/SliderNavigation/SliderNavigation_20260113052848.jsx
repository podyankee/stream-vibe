import Button from '@/components/Button'
import clsx from 'clsx'
import './SliderNavigation.scss'

const SliderNavigation = (props) => {
  const { className, id, hasPagination = true, mode = '' } = props

  return (
    <div
      className={clsx(className, 'slider-navigation', {
        [`slider-navigation--${mode}`]: mode,
      })}
      id={id}
      data-js-slider-navigation=""
    >
      <Button
        className="slider-navigation__arrow-button slider-navigation__arrow-button-previous "
        mode="black-10"
        iconName="arrow-left"
        label="Previous slide"
        isLabelHidden
        extraAttrs={{
          'data-js-slider-previous-button': '',
        }}
      />
      {hasPagination && <div className="slider-navigation__pagination" />}
      <Button
        className="slider-navigation__arrow-button slider-navigation__arrow-button-next "
        mode="black-10"
        iconName="arrow-right"
        label="Next slide"
        isLabelHidden
        extraAttrs={{
          'data-js-slider-next-button': '',
        }}
      />
    </div>
  )
}

export default SliderNavigation
