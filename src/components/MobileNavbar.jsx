import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

const MobileNavbar = ({ isOpen, close, scrollToSection }) => {
  if (!isOpen) return null;

  const handleSectionClick = (id) => {
    close();
    scrollToSection(id);
  };

  return (
    <ul className="md:hidden text-2xl fixed inset-0 flex flex-col items-center justify-center gap-10 z-10 bg-neutral-950 motion-preset-slide-left motion-duration-500 font-bebas">
      <li>
        <NavLink to="/" onClick={close}>
          home
        </NavLink>
      </li>

      <li>
        <button onClick={() => handleSectionClick("galleries")}>
          galleries <FontAwesomeIcon icon={faChevronDown} />
        </button>
      </li>

      <li>
        <button onClick={() => handleSectionClick("about")}>
          about me
        </button>
      </li>

      <li>
        <button onClick={() => handleSectionClick("contact")}>
          contact
        </button>
      </li>

      <li>
        <NavLink to="/gear" onClick={close}>
          my gear
        </NavLink>
      </li>
    </ul>
  );
};

export default MobileNavbar;
