import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
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
      <nav className="lg:absolute z-110 fixed font-raleway uppercase flex items-start justify-between w-full p-8 tracking-wide lg:p-12 duration-300">

        {/* LOGO */}
        <NavLink to="/" className="text-xl lg:text-2xl font-black tracking-wider">
          Martin Piskáček
        </NavLink>

        {/* DESKTOP MENU */}
        <ul className="hidden font-raleway lg:flex items-start justify-end gap-8 font-bold text-sm h-10">
          <li className="h-full">
            <NavLink to="/" className="h-full flex items-center">
              úvod
            </NavLink>
          </li>

          {/* GALLERY DROPDOWN */}
          <li className="relative group h-full">
            <NavLink to="/gallery" className="h-full flex items-center">
              galerie
            </NavLink>

            <ul className="absolute flex opacity-0 invisible -left-4 flex-col gap-2 font-medium bg-neutral-950 px-4 py-2 group-hover:opacity-100 group-hover:visible transition-opacity duration-200">
              <li>
                <NavLink to="/gallery/landscapes">
                  krajina
                </NavLink>
              </li>
              <li>
                <NavLink to="/gallery/automotive">
                  automotive
                </NavLink>
              </li>
              <li>
                <NavLink to="/gallery/travel">
                  cestování
                </NavLink>
              </li>
              <li>
                <NavLink to="/gallery/horses" className="whitespace-nowrap">
                  lidé a koně
                </NavLink>
              </li>
            </ul>
          </li>

          <li className="h-full">
            <button className="uppercase h-full flex items-center" onClick={() => scrollToSection("about")}>
              o mně
            </button>
          </li>

          <li className="h-full">
            <NavLink to="/gear" className="uppercase h-full flex items-center">
              vybavení
            </NavLink>
          </li>

          <li className="h-full">
            <button className="uppercase h-full flex items-center" onClick={() => scrollToSection("contact")}>
              kontakt
            </button>
          </li>
        </ul>

        {/* MOBILE TOGGLE */}
        <button onClick={toggleNavbar} className="lg:hidden text-xl">
          {isOpen ? <FontAwesomeIcon icon={faXmark} /> : <FontAwesomeIcon icon={faBars} />}
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
