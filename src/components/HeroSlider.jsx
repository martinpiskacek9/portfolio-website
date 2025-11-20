import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import HeroSliderButton from "./HeroSliderButton";


const HeroSlider = () => {
  return (
    <div className="text-2xl flex items-center justify-between w-full">
      <HeroSliderButton icon={<FontAwesomeIcon icon={faChevronLeft} />}></HeroSliderButton>
      <a href="#">TRAVEL</a>
      <HeroSliderButton icon ={<FontAwesomeIcon icon={faChevronRight} />}></HeroSliderButton>
    </div>
  )
}

export default HeroSlider;