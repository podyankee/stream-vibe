import 'swiper/css'
import './Slider.scss'

const Slider = () => {
  return (
    <div className="slider">
      <div className="slider__swiper swiper">
        <ul className=" slider__list swiper-wrapper"></ul>
      </div>
    </div>
  )
}

export default Slider
