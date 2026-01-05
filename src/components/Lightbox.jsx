import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";


const Lightbox = ({ isOpen, src, onClose }) => {

    if (!isOpen) return null;

    return (
        <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-neutral-950"
        onClick={onClose}
        >
            <div
            className="relative max-w-[90vw] max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
            >
                <button
                onClick={onClose}
                className="absolute -top-4 -right-4 bg-black p-2 roundel-full hover:bg-neutral-800"
                aria-label="Close"
                >
                    <FontAwesomeIcon icon={faX} />
                </button>

                <img
                    src={src}
                    alt={alt}
                    className="max-w-full max-h-[90vh] rounded-lg shadow-lg"
                />
            </div>
        </div>
    )
}

export default Lightbox;