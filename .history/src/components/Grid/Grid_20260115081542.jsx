import clsx from 'clsx'
import './Grid.scss'

const Grid = (props) => {
  const { columns = 1, children } = props

  return (
    <ul
      className={clsx('grid', {
        [`grid--${columns}`]: columns > 1,
      })}
    >
      {children.map((child, index) => (
        <li className="grid__item" key={index}></li>
      ))}
    </ul>
  )
}

export default Grid
