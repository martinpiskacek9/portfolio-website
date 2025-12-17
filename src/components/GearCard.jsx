const GearCard = ({ heading, image }) => {
  return (
    <div className="border-3 border-neutral-500/20 bg-radial from-neutral-900 to-transparent rounded-4xl p-8 w-100 min-h-90 flex flex-col items-center justify-end gap-8">
      
        <div className="w-full flex items-center justify-center">
          <img src={image} alt={heading} />
        </div>

        <h4>{heading}</h4>

    </div>
  )
}

export default GearCard
