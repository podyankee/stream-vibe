import { Image } from 'minista'
import './CategoryCard.scss'

const CategoryCard = (props) => {
  const { title, images = [] } = props

  return (
    <a href="/movies" className="category-card">
      <div className="category-card__images">
        {images.map((imgSrc, index) => (
          <Image src={imgSrc} />
        ))}
      </div>
      <div className="category-card__body"></div>
    </a>
  )
}

export default CategoryCard
