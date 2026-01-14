import './Header.scss'
import Logo from '@/components/Logo'

export default (props) => {
  return (
    <header className="header">
      <div className="header__inner container">
        <Logo className="header__logo" loading="eager" />
        <nav className="header__menu">
          <div className="header__menu-list"></div>
        </nav>
      </div>
    </header>
  )
}
