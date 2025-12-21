import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import MobileNavbar from "./MobileNavbar";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  // PŘESMĚROVÁNÍ A SCROLL
  const scrollToSection = (id) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <nav className="lg:absolute z-110 fixed font-raleway uppercase flex items-center justify-between w-full p-8 tracking-wide lg:px-12 lg:py-12 duration-300">

        {/* LOGO */}
        <NavLink to="/" className="text-xl lg:text-2xl font-black tracking-wider">
          Martin Piskáček
        </NavLink>

        {/* DESKTOP MENU */}
        <ul className="hidden font-raleway lg:flex items-center justify-end gap-8 font-bold text-sm">
          <li>
            <NavLink to="/">home</NavLink>
          </li>

          <li>
            <button className="uppercase" onClick={() => scrollToSection("galleries")}>
              gallery
            </button>
          </li>

          <li>
            <button className="uppercase" onClick={() => scrollToSection("about")}>
              about me
            </button>
          </li>

          <li>
            <NavLink to="/gear">my gear</NavLink>
          </li>

          <li>
            <button className="uppercase" onClick={() => scrollToSection("contact")}>
              contact
            </button>
          </li>
        </ul>

        {/* MOBILE TOGGLE */}
        <button onClick={toggleNavbar} className="lg:hidden text-xl">
          {isOpen ? <FontAwesomeIcon icon={faX} /> : <FontAwesomeIcon icon={faBars} />}
        </button>
      </nav>

      {/* MOBILE MENU */}
      <MobileNavbar
        isOpen={isOpen}
        close={() => setIsOpen(false)}
        scrollToSection={scrollToSection}
      />
    </>
  );
};

export default Navbar;
