import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons'


const PageDividerButton = ({ btnLink, btnHeading, btnText, side }) => {
  return (
    <div className={`w-full h-full bg-neutral-950/30 hover:bg-neutral-950/5 duration-300 ${ side === "left" ? "pl-75" : "pr-75" }`}>
      <a
      href={btnLink}
      className="divider-btn h-full flex items-center justify-center flex-col text-4xl font-bebas tracking-widest font-bold uppercase"
      >
        {btnHeading}
        <p className="text-xs font-montserrat mt-4 mb-8 font-light tracking-widest">
            {btnText}
        </p>
        <FontAwesomeIcon className="text-base" icon={faArrowRightLong} />
      </a>
    </div>
  )
}

export default PageDividerButton