import Button from '@/components/Button'
import './Socials.scss'
import clsx from 'clsx'

const Socials = (props) => {
  const { className, links = [] } = props

  return (
    <div className={clsx(className, 'socials')}>
      <ul className="socials__list">
        {links.map(({ label, iconName }, index) => (
          <li className="socials__item" key={index}>
            <Button
              className="socials__link"
              mode="black-10"
              href="/"
              target="_blank"
            />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Socials
