import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import MobileNavbar from "./MobileNavbar";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const closeAll = () => {
    setIsGalleryOpen(false);
    setIsOpen(false);
  };

  // PŘESMĚROVÁNÍ A SCROLL
  const scrollToSection = (id) => {
    closeAll();
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
      <nav className="lg:absolute z-110 fixed font-montserrat uppercase flex items-start justify-between w-full p-8 tracking-wide lg:px-22 pg:py-12 duration-300">

        {/* LOGO */}
        <NavLink
          to="/"
          className={`lg:text-2xl text-xl font-black tracking-wider font-bebas
            ${isOpen ? "hidden lg:block" : "block"}`}
          onClick={closeAll}
        >
          Martin Piskáček
        </NavLink>

        {/* DESKTOP MENU */}
        <ul className="hidden lg:flex items-start justify-end gap-10 font-bold text-sm h-10">

          <li className="h-full">
            <NavLink to="/" className="h-full flex items-center" onClick={closeAll}>
              úvod
            </NavLink>
          </li>

          {/* GALLERY */}
          <li
            className="relative h-full"
            onMouseEnter={() => setIsGalleryOpen(true)}
            onMouseLeave={() => setIsGalleryOpen(false)}
          >
            <NavLink
              to="/galerie"
              className="h-full flex items-center"
              onClick={closeAll}
            >
              galerie
            </NavLink>

            <ul
              className={`absolute -left-4 flex flex-col gap-2 font-medium bg-neutral-950 px-4 py-2 transition-all duration-200
                ${isGalleryOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-1"}`}
            >
              <li>
                <NavLink to="/galerie/kone" onClick={closeAll}>
                  lidé a koně
                </NavLink>
              </li>
              <li>
                <NavLink to="/galerie/akce" onClick={closeAll}>
                  akce
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/galerie/krajina"
                  className="whitespace-nowrap"
                  onClick={closeAll}
                >
                  krajina
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/galerie/automotive"
                  className="whitespace-nowrap"
                  onClick={closeAll}
                >
                  automotive
                </NavLink>
              </li>
            </ul>
          </li>

          <li className="h-full">
            <button
              className="uppercase h-full flex items-center"
              onClick={() => scrollToSection("about")}
            >
              o mně
            </button>
          </li>

          <li className="h-full">
            <button
              className="uppercase h-full flex items-center"
              onClick={() => scrollToSection("contact")}
            >
              kontakt
            </button>
          </li>

          <li className="h-full flex items-center ml-8">
            <a
              href="https://www.instagram.com/piskacek_foto/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-xl"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </li>
        </ul>

        {/* MOBILE TOGGLE */}
        <button onClick={toggleNavbar} className="lg:hidden text-xl absolute right-6">
          {isOpen ? <FontAwesomeIcon icon={faXmark} /> : <FontAwesomeIcon icon={faBars} />}
        </button>
      </nav>

      {/* MOBILE MENU */}
      <MobileNavbar
        isOpen={isOpen}
        close={closeAll}
        scrollToSection={scrollToSection}
      />
    </>
  );
};

export default Navbar;