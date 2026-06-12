import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HeroSliderButton from "./HeroSliderButton";

const HeroSlider = ({
  heading,
  link,
  onNext,
  onPrev,
  current,
  total,
}) => {
  return (
    <div className="w-full flex items-center justify-between absolute left-1/2 -translate-x-1/2 bottom-0 p-8">
      <HeroSliderButton
        onClick={onPrev}
        icon={<FontAwesomeIcon icon={faChevronLeft} />}
      />

      <div className="flex flex-col items-center">
        <a
          className="font-raleway font-normal text-md md:text-xl uppercase motion-preset-fade motion-delay-300 motion-duration-1500 motion-preset-slide-right tracking-widest"
          href={link}
        >
          {heading}
        </a>

        <span className="font-montserrat text-sm text-white/70 tracking-[0.25em] mt-2">
          {String(current + 1).padStart(2, "0")} /{" "}
          {String(total).padStart(2, "0")}
        </span>
      </div>

      <HeroSliderButton
        onClick={onNext}
        icon={<FontAwesomeIcon icon={faChevronRight} />}
      />
    </div>
  );
};

export default HeroSlider;