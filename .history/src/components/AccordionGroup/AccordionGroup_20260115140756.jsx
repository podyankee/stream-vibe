import './AccordionGroup.scss'

const AccordionGroup = (props) => {
  const { columns = 1, children, isOrderedList = true } = props

  const ListTag = isOrderedList ? 'ol' : 'ul'

  return <div>AccordionGroup</div>
}

export default AccordionGroup
