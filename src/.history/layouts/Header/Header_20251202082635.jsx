import './Header.scss'
import Logo from '@/components/Logo'

export default (props) => {
  const menuItems = [
    {
      label: 'Home',
      href: '/',
    },
    {
      label: 'Movies & Shows',
      href: '/',
    },
    {
      label: 'Support',
      href: '/',
    },
    {
      label: 'Subscriptions',
      href: '/',
    },
  ]

  return (
    <header className="header">
      <div className="header__inner container">
        <Logo className="header__logo" loading="eager" />
        <nav className="header__menu">
          <ul className="header__menu-list">
						{menuItems.map((menuItem, index) => ())}
					</ul>
        </nav>
      </div>
    </header>
  )
}
