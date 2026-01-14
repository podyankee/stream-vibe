import 'swiper/css'
import './Slider.scss'
import SliderNavigation from './components/SliderNavigation'

const defaultSliderParams = {
  sliderPerView: 5,
  sliderPerGroup: 5,
  spaceBetween: 30,
}

const Slider = (props) => {
  const {
    children,
    navigationTargetElementId = null,
    sliderParams = defaultSliderParams,
  } = props
  return (
    <div className="slider" data-js-slider="">
      <div className="slider__swiper swiper" data-js-slider-swiper="">
        <ul className="slider__list swiper-wrapper">
          {children.map((slide, index) => (
            <li className="slider__item swiper-slide" key={index}>
              {slide}
            </li>
          ))}
        </ul>
      </div>
      {!navigationTargetElementId && (
        <SliderNavigation className="slider__navigation" />
      )}
    </div>
  )
}

export default Slider
