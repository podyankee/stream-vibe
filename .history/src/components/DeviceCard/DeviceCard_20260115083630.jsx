import './DeviceCard.scss'

const DeviceCard = (props) => {
  const { title, description, imgSrc } = props

  return (
    <div className="device-card">
      <header className="device-card__header">
        <div className="device-card__image-wrapper"></div>
        <h3 className="device-card__title h4"></h3>
      </header>
      <div className="device-card__description"></div>
    </div>
  )
}

export default DeviceCard
