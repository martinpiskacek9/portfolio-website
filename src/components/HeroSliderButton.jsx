const HeroSliderButton = ({icon, onClick}) => {
  return (
    <button onClick={onClick} className="text-sm rounded-full p-4 hover:bg-neutral-300/33">{icon}</button>
  )
}

export default HeroSliderButton