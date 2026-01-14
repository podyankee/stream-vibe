import 'swiper/css'
import './Slider.scss'

const Slider = (props) => {
  const { children } = props
  return (
    <div className="slider">
      <div className="slider__swiper swiper">
        <ul className=" slider__list swiper-wrapper">
          <ul className="slider__list swiper-wrapper">
            <li className="slider__item swiper-slide" b></li>
          </ul>
        </ul>
      </div>
    </div>
  )
}

export default Slider
