import 'swiper/css'
import './Slider.scss'

const Slider = (props) => {
  const { children, navigationTargetElementId = null } = props
  return (
    <div className="slider">
      <div className="slider__swiper swiper">
        <ul className=" slider__list swiper-wrapper">
          <ul className="slider__list swiper-wrapper">
            {children.map((slide, index) => (
              <li className="slider__item swiper-slide" key={index}>
                {slide}
              </li>
            ))}
          </ul>
        </ul>
      </div>
    </div>
  )
}

export default Slider
