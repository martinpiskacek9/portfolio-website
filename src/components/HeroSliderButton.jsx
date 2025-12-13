const HeroSliderButton = ({icon, onClick}) => {
  return (
    <button onClick={onClick} className="text-sm rounded-full p-4 hover:bg-neutral-500/30">{icon}</button>
  )
}

export default HeroSliderButton