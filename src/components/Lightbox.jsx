import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";

const Lightbox = ({ isOpen, imageSrc, onClose }) => {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-150 bg-black flex p-8 flex-col"
    >
      <div className="flex justify-end">
        <button
          onClick={onClose}
          className="hover:opacity-75 opacity-50 text-2xl"
        >
          <FontAwesomeIcon icon={faXmark} />
        </button>
      </div>

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <img
          onClick={(e) => e.stopPropagation()}
          src={imageSrc}
          alt=""
          className="max-w-[90vw] max-h-[80vh] object-contain"
        />
      </div>
    </div>
  );
};

export default Lightbox;
