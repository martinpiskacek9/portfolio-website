import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import HeroSliderButton from "./HeroSliderButton";

const HeroSlider = ({ heading, link, onNext, onPrev }) => {
  return (
    <div className="w-full flex items-center justify-between absolute left-1/2 -translate-x-1/2 bottom-0 p-8">
      <HeroSliderButton onClick={onPrev} icon={<FontAwesomeIcon icon={faChevronLeft} />}></HeroSliderButton>
      <a className="font-raleway font-light text-lg uppercase motion-preset-fade motion-delay-300 motion-duration-1500 motion-preset-slide-right tracking-widest"href={link}>{heading}</a>
      <HeroSliderButton onClick={onNext} icon ={<FontAwesomeIcon icon={faChevronRight} />}></HeroSliderButton>
    </div>
  )
}

export default HeroSlider;