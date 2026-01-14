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
      title: 'Shows',
      links: ['Gernes', 'Trending', 'New Release', 'Popular'],
    },
    {
      title: 'Support',
      links: ['Contact Us'],
    },
    {
      title: 'Subscription',
      links: ['Plans', 'Features'],
    },
    {
      title: 'Connect With Us',
      socialLinks: [
        {
          label: 'Facebook',
          iconName: 'facebook',
        },
        {
          label: 'Twitter',
          iconName: 'twitter',
        },
        {
          label: 'LinkedIn',
          iconName: 'linked-in',
        },
      ],
    },
  ]

  return (
    <footer className="footer">
      <div className="footer__inner container">
        <nav className="footer__menu">
          {menuItems.map(({ title, links, socialLinks }) => (
            <div className="footer__menu-column">
              <a href="/" className="footer__menu-title">
                {title}
              </a>
            </div>
          ))}
        </nav>
        <div className="footer__extra"></div>
      </div>
    </footer>
  )
}
