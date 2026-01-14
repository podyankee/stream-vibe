import './Logo.scss'

export default (props) => {
  // const { className, loading = 'lazy' } = props

  const title = 'Home'

  return (
    <a className="logo" href="/" title={title} aria-label={title}>
      <img
        className="logo__image"
        src="/logo.svg"
        alt=""
        width="100"
        height="100"
        loading="lazy"
      />
    </a>
  )
}
