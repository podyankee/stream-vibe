import './Hero.scss'

export default () => {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero__panno">
        <div className="hero__panno-inner container"></div>
      </div>
      <div className="hero__body">
        <div className="hero__body-inner container"></div>
      </div>
    </section>
  )
}
