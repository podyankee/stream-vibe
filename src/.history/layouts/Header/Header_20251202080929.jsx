import './Header.scss'
import Logo from '@/components/Logo'

export default (props) => {
  return (
    <header className="header">
      <div className="header__inner container">
        <Logo loading="eager" />
      </div>
    </header>
  )
}
