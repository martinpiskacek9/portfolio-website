import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";

const Lightbox = ({ isOpen, images, index, setIndex, onClose }) => {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, index]);

  if (!isOpen) return null;

  const next = () =>
    setIndex((i) => (i + 1) % images.length);

  const prev = () =>
    setIndex((i) => (i - 1 + images.length) % images.length);

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-150 bg-black/95 flex items-center justify-center"
    >
      <div className="relative flex items-center justify-center w-full md:px-22 px-11">
        <button
          onClick={(e) => { e.stopPropagation(); prev(); }}
          className="absolute md:left-6 left-2 text-xl md:text-3xl opacity-70 hover:opacity-100"
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>

        <img
          onClick={(e) => e.stopPropagation()}
          src={images[index].url}
          className="max-w-full max-h-[95vh] object-contain"
        />

        <button
          onClick={(e) => { e.stopPropagation(); next(); }}
          className="absolute md:right-6 right-2 text-xl md:text-3xl opacity-70 hover:opacity-100"
        >
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>

      <button
        onClick={(e) => { e.stopPropagation(); onClose(); }}
        className="absolute top-4 right-4 md:top-6 md:right-6 text-xl md:text-2xl opacity-70 hover:opacity-100"
      >
        <FontAwesomeIcon icon={faXmark} />
      </button>
    </div>
  );
};

export default Lightbox;
