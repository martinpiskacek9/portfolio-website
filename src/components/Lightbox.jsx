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
      className="fixed inset-0 z-50 bg-black/80 flex flex-col"
    >
      <div className="flex justify-end p-6">
        <button
          onClick={onClose}
          className="text-white uppercase text-sm tracking-wider hover:opacity-70"
        >
          Close ✕
        </button>
      </div>

      <div className="flex flex-1 items-center justify-center px-6 pb-10">
        <img
          onClick={(e) => e.stopPropagation()}
          src={imageSrc}
          alt=""
          className="max-w-[90vw] max-h-[80vh] object-contain rounded-lg shadow-2xl"
        />
      </div>
    </div>
  );
};

export default Lightbox;
