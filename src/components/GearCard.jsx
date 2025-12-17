const GearCard = ({ heading, image, rotate }) => {
  return (
    <div className="w-100 h-115 flex flex-col items-center gap-8 justify-end p-6">
      
        <div className="w-full flex-1 flex items-center justify-center">
          <img
            src={image}
            alt={heading}
            className={`object-contain ${
              rotate ? "rotate-90" : ""
            }`}
          />
        </div>

        <h4>{heading}</h4>

    </div>
  )
}

export default GearCard
