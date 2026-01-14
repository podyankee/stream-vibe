import './CategoryCard.scss'

const CategoryCard = (props) => {
  const { title, images = [] } = props

  return (
    <a href="/movies" className="category-card">
      <div className="category-card__images"></div>
      <div className="category-card__body"></div>
    </a>
  )
}

export default CategoryCard
