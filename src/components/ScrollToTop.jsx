import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpLong } from '@fortawesome/free-solid-svg-icons'

const ScrollToTop = () => {

    const toTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

  return (
    <button onClick={toTop} className="text-sm rounded-full p-4 hover:bg-neutral-500/30">
        <FontAwesomeIcon className="text-xl" icon={faArrowUpLong} />
    </button>
  )
}

export default ScrollToTop;