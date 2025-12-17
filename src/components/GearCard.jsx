const GearCard = ({ heading, image }) => {
  return (
    <div className="w-100 h-full flex flex-col items-center justify-end border">
      <img src={image} className="" />
      <h4>{heading}</h4>
    </div>
  )
}

export default GearCard
