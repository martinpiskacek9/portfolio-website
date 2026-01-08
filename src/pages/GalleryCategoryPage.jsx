import { useParams } from "react-router-dom";
import { useState, useMemo } from "react";
import ErrorPage from "./ErrorPage";
import Lightbox from "../components/Lightbox";
import { heroImages } from "../../images-config";

const CATEGORY_META = {
  landscapes: { heading: heroImages[0].heading, heroImg: heroImages[0].image },
  automotive: { heading: heroImages[1].heading, heroImg: heroImages[1].image },
  travel: { heading: heroImages[2].heading, heroImg: heroImages[2].image },
  horses: { heading: heroImages[3].heading, heroImg: heroImages[3].image },
};

const fullModules = import.meta.glob("../assets/imgs/**/*.webp", {
  eager: true,
  import: "default",
});

const IMAGES = {};
Object.entries(fullModules).forEach(([path, fullUrl]) => {
  const match = path.match(/imgs\/(.*?)\//);
  if (!match) return;

  const category = match[1];
  if (!IMAGES[category]) IMAGES[category] = [];

  IMAGES[category].push({
    fullUrl,
    name: path.split("/").pop(),
  });
});

const GalleryCategoryPage = () => {
  const { category } = useParams();
  const meta = CATEGORY_META[category];
  const [activeImage, setActiveImage] = useState(null);

  if (!meta) return <ErrorPage />;

  const images = IMAGES[category] || [];

  const cols = useMemo(() => {
    const c = [[], [], []];
    images.forEach((img, i) => c[i % 3].push(img));
    return c;
  }, [images]);

  return (
    <section>
      {/* Hero */}
      <div
        className="w-full h-80 md:h-160 flex items-center justify-center flex-col bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.4)), url(${meta.heroImg})`,
        }}
      >
        <h1 className="text-3xl md:text-5xl font-montserrat font-black tracking-wide italic uppercase">
          {meta.heading}
        </h1>
      </div>

      {/* Gallery */}
      {images.length === 0 ? (
        <p className="text-center mt-8 text-neutral-400">
          No images found in this category.
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 p-6 md:p-[4vw]">
          {cols.map((col, idx) => (
            <div key={idx} className="flex flex-col gap-2">
              {col.map((img) => {

                const [loaded, setLoaded] = useState(false);

                return (
                  <img
                    key={img.fullUrl}
                    src={img.fullUrl}
                    alt={img.name}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-auto cursor-zoom-in object-cover"
                    onClick={() => setActiveImage(img.fullUrl)}
                  />
                );
              })}
            </div>
          ))}
        </div>
      )}

      {/* Lightbox */}
      <Lightbox
        isOpen={!!activeImage}
        imageSrc={activeImage}
        onClose={() => setActiveImage(null)}
      />
    </section>
  );
}

export default GalleryCategoryPage;