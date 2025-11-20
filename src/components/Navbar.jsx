import { faBars, faX, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react';

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  }

  const closeNavbar = () => {
    setIsOpen(false);
  }

  return (
    <>
      <nav className="absolute z-1000 font-bebas flex items-center justify-between w-full p-8 tracking-wide md:px-26 md:py-12 duration-300">

        <a className="text-2xl md:text-3xl" href="/">Martin Piskáček</a>

        <div className="motion-preset-fade motion-duration-300">
          <ul className="hidden md:flex items-center justify-end gap-10 text-lg">
            <li><a href="/">home</a></li>
            <li><a href="#galleries">galleries</a></li>
            <li><a href="#about">about me</a></li>
            <li><a href="#contact">contact</a></li>
          </ul>
          <button onClick={toggleNavbar} className="md:hidden text-xl">{isOpen ? <FontAwesomeIcon icon={faX} /> : <FontAwesomeIcon icon={faBars} />}</button>
        </div>
      </nav>
      <>
        {isOpen && (
          <ul className="md:hidden text-2xl fixed inset-0 flex flex-col items-center justify-center gap-10 z-500 bg-neutral-950 motion-preset-slide-left motion-duration-500 font-bebas">
            <li><a onClick={closeNavbar} href="/">home</a></li>
            <li><a onClick={closeNavbar} href="#galleries">galleries <FontAwesomeIcon icon={faChevronDown} /></a></li>
            <li><a onClick={closeNavbar} href="#about">about me</a></li>
            <li><a onClick={closeNavbar} href="#contact">contact</a></li>
          </ul>
        )}
      </>
    </>
  )
}

export default Navbar;