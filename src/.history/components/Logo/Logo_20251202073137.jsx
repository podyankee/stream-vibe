import './Logo.scss'

export default (props) => {
  // const { className, loading = 'lazy' } = props

  const title = 'Home'

  return <a className="logo" href="/" title={title} aria-label={title}></a>
}
