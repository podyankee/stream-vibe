import './Logo.scss'

export default (props) => {
  const { className, loading = 'lazy' } = props

  const title = 'Home'

  return (
    <a className="logo" href="/" title={title} aria-label={title}>
      <img
        className="logo__image"
        src="/logo.svg"
        alt=""
        width={199}
        height={60}
        loading={loading}
      />
    </a>
  )
}
