import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const MobileNavbar = ({ isOpen, close }) => {
  if (!isOpen) return null;

  return (
    <ul className="md:hidden text-2xl fixed inset-0 flex flex-col items-center justify-center gap-10 z-10 bg-neutral-950 motion-preset-slide-left motion-duration-500 font-bebas">
      <li><a onClick={close} href="/">home</a></li>
      <li><a onClick={close} href="#galleries">galleries <FontAwesomeIcon icon={faChevronDown} /></a></li>
      <li><a onClick={close} href="#about">about me</a></li>
      <li><a onClick={close} href="#contact">contact</a></li>
    </ul>
  );
};

export default MobileNavbar;
