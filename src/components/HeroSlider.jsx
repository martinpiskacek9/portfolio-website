import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import HeroSliderButton from "./HeroSliderButton";

const HeroSlider = ({ heading, link, onNext, onPrev }) => {
  return (
    <div className="text-2xl flex items-center justify-between w-full">
      <HeroSliderButton onClick={onPrev} icon={<FontAwesomeIcon icon={faChevronLeft} />}></HeroSliderButton>
      <a className="motion-preset-fade motion-delay-300 motion-duration-1500 motion-preset-slide-right" href={link}>{heading}</a>
      <HeroSliderButton onClick={onNext} icon ={<FontAwesomeIcon icon={faChevronRight} />}></HeroSliderButton>
    </div>
  )
}

export default HeroSlider;