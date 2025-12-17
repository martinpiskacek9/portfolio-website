const GearCard = ({ heading, image }) => {
  return (
    <div className="border-3 border-neutral-500/20 bg-radial from-neutral-900 to-transparent rounded-4xl p-8 flex-1 min-w-110 min-h-90 flex flex-col items-center justify-end gap-8">
      
        <div className="w-full flex items-center justify-center">
          <img className="max-h-90" src={image} alt={heading} />
        </div>

        <h4>{heading}</h4>

    </div>
  )
}

export default GearCard
