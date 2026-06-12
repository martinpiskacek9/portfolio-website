import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

const MobileNavbar = ({ isOpen, close, scrollToSection }) => {
  const [activeMenu, setActiveMenu] = useState("main");

  useEffect(() => {
    if (!isOpen) setActiveMenu("main");
  }, [isOpen]);

  const handleSectionClick = (id) => {
    close();
    scrollToSection(id);
  };

  const handleNavClick = () => close();

  if (!isOpen) return null;

  return (
    <div className="lg:hidden fixed inset-0 z-100 bg-neutral-950 overflow-hidden font-raleway uppercase">

      {/* SLIDING CONTAINER */}
      <div
        className={`flex w-[200%] h-full transition-transform duration-500 ease-in-out ${
          activeMenu === "gallery" ? "-translate-x-1/2" : "translate-x-0"
        }`}
      >

        {/* MAIN MENU */}
        <ul className="w-1/2 h-full flex flex-col items-center justify-center gap-8 text-2xl">
          <li>
            <NavLink
              to="/"
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
                close();
              }}
            >
              úvod
            </NavLink>
          </li>

          <li>
            <button
              onClick={() => setActiveMenu("gallery")}
              className="flex items-center gap-3 uppercase"
            >
              galerie
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </li>

          <li>
            <NavLink to="/o-mne" className="uppercase" onClick={() => handleSectionClick("about")}>
              o mně
            </NavLink>
          </li>

          <li>
            <NavLink to="/cenik" className="uppercase" onClick={() => handleSectionClick("about")}>
              ceník
            </NavLink>
          </li>

          <li>
            <button className="uppercase" onClick={() => handleSectionClick("contact")}>
              kontakt
            </button>
          </li>

          
          <li className="flex items-center mt-8">
            <a
              href="https://www.instagram.com/piskacek_foto/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-3xl"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </li>
        </ul>

        {/* GALLERY SUBMENU */}
        <ul className="w-1/2 h-full flex flex-col items-center justify-center gap-8 text-2xl">

          <li className="mb-4">
            <button
              onClick={() => setActiveMenu("main")}
              className="flex items-center gap-2 uppercase text-lg"
            >
              <FontAwesomeIcon icon={faChevronLeft} />
              zpět
            </button>
          </li>

          <li>
            <NavLink to="/galerie/eventy" onClick={handleNavClick}>
              eventy & akce
            </NavLink>
          </li>
          <li>
            <NavLink to="/galerie/chaty" onClick={handleNavClick}>
              chaty & ubytování
            </NavLink>
          </li>
          <li>
            <NavLink to="/galerie/portrety" onClick={handleNavClick}>
              portréty&nbsp;&&nbsp;rodiny
            </NavLink>
          </li>
          <li>
            <NavLink to="/galerie/svatby" onClick={handleNavClick}>
              svatby
            </NavLink>
          </li>
        </ul>

      </div>
    </div>
  );
};

export default MobileNavbar;
