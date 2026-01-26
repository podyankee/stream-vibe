import clsx from 'clsx'
import './Grid.scss'

const Grid = (props) => {
  const { columns = 1, children } = props

  return (
    <ul
      className={clsx('grid', {
        [`grid--${columns}`]: columns > 1,
      })}
    ></ul>
  )
}

export default Grid
