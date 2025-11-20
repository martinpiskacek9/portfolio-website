import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const HeroSlider = () => {
  return (
    <div>
      <button><FontAwesomeIcon icon={faChevronLeft} /></button>
      <a href="#">TRAVEL</a>
      <button><FontAwesomeIcon icon={faChevronRight} /></button>
    </div>
  )
}

export default HeroSlider;