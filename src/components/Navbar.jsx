import { faBars, faX } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react';
import MobileNavbar from "./MobileNavbar";

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <nav className="absolute z-50 font-bebas flex items-center justify-between w-full p-8 tracking-wide md:px-12 md:py-12 lg:px-26 lg:py-12 duration-300">

        {/* LOGO */}
        <a className="text-2xl md:text-3xl" href="/">Martin Piskáček</a>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex items-center justify-end gap-10 text-lg">
          <li><a href="/">home</a></li>
          <li><a href="#galleries">galleries</a></li>
          <li><a href="#about">about me</a></li>
          <li><a href="#contact">contact</a></li>
        </ul>

        {/* OPEN / CLOSE NAVBAR BUTTON */}
        <button onClick={toggleNavbar} className="md:hidden text-xl">{isOpen ? <FontAwesomeIcon icon={faX} /> : <FontAwesomeIcon icon={faBars} />}</button>

      </nav>

      {/* MOBILE MENU */}
      <MobileNavbar isOpen={isOpen} close={() => setIsOpen(false)} />
    </>
  )
}

export default Navbar;