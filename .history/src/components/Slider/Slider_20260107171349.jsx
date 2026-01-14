import 'swiper/css'
import './Slider.scss'

const Slider = () => {
  return (
    <div className="slider">
      <div className="swiper">
        <div className="swiper-wrapper">
          <div className="swiper-slide">Slide 1</div>
          <div className="swiper-slide">Slide 2</div>
          <div className="swiper-slide">Slide 3</div>
          ...
        </div>
      </div>
    </div>
  )
}

export default Slider
