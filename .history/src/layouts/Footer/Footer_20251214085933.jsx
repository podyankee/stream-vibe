import './Footer.scss'

export default () => {
  const menuItems = [
    {
      title: 'Home',
      links: ['Categories', 'Devices', 'Pricing', 'FAQ'],
    },
    {
      title: 'Movies',
      links: ['Gernes', 'Trending', 'New Release', 'Popular'],
    },
    {
      title: '',
      links: ['', '', '', ''],
    },
  ]

  return (
    <footer className="footer">
      <div className="footer__inner container">
        <nav className="footer__menu">
          <div className="footer__menu-column"></div>
        </nav>
        <div className="footer__extra"></div>
      </div>
    </footer>
  )
}
