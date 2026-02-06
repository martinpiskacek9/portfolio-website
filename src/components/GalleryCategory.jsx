import { NavLink } from "react-router-dom";

const GalleryCategory = ({ heading, img, link, className = "" }) => {
  return (
    <div className={`h-90 overflow-hidden hover:outline outline-neutral-400 ${className}`}>
      <div
      className="w-full xl:h-full h-90 flex bg-center bg-no-repeat bg-cover hover:scale-105 duration-300 hover:duration-300 outline-neutral-300 hover:outline"
      style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url(${img})` }}
      >
        <NavLink to={link} className="font-montserrat w-full h-full flex items-center justify-center md:opacity-0 opacity-100 text-2xl md:text-xl uppercase font-bold hover:opacity-100 bg-black/50 hover:bg-black/80 hover:text-neutral-50 duration-300"
        >
          {heading}
        </NavLink>
      </div>
    </div>
  )
}

export default GalleryCategory
