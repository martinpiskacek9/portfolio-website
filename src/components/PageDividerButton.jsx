import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";

const PageDividerButton = ({ btnLink, btnHeading, btnText, side }) => {
  return (
    <div className={"w-full h-full flex bg-neutral-950/30 hover:bg-neutral-950/5 duration-300"}>
      <Link
      to={btnLink}
      className={`divider-btn w-full h-full py-26 sm:py-0 flex items-center justify-center flex-col text-3xl lg:text-4xl font-bebas tracking-widest font-bold uppercase ${ side === "left" ? "pl-0 xl:pl-35 2xl:pl-75" : "pr-0 xl:pr-35 2xl:pr-75" }`}
      >
        {btnHeading}
        <p className="text-xs font-montserrat mt-2 mb-6 lg:mt-4 lg:mb-8 font-light tracking-widest duration-300">
            {btnText}
        </p>
        <FontAwesomeIcon className="text-base" icon={faArrowRightLong} />
      </Link>
    </div>
  )
}

export default PageDividerButton