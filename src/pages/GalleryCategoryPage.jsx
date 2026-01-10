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

const modules = import.meta.glob("../assets/imgs/**/*.webp", {
  eager: true,
  import: "default",
});

const ALL_IMAGES = Object.entries(modules).map(([path, url]) => {
  const category = path.match(/imgs\/(.*?)\//)[1];
  return { url, category };
});

const GalleryCategoryPage = () => {
  const { category } = useParams();
  const meta = CATEGORY_META[category];
  const [activeIndex, setActiveIndex] = useState(null);

  if (!meta) return <ErrorPage />;

  const images = ALL_IMAGES.filter(img => img.category === category);

  const cols = useMemo(() => {
    const c = [[], [], []];
    images.forEach((img, i) => c[i % 3].push({ ...img, index: i }));
    return c;
  }, [images]);

  return (
    <section>
      {/* Hero */}
      <div
        className="w-full h-80 md:h-140 flex items-center justify-center flex-col bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.4)), url(${meta.heroImg})`,
        }}
      >
        <h1 className="text-3xl md:text-5xl font-montserrat font-black tracking-wide italic uppercase">
          {meta.heading}
        </h1>
      </div>

      {/* Gallery */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-6 md:p-[4vw]">
        {cols.map((col, idx) => (
          <div key={idx} className="flex flex-col gap-4">
            {col.map((img) => (
              <img
                key={img.url}
                src={img.url}
                loading="lazy"
                decoding="async"
                className="w-full h-auto cursor-zoom-in object-cover"
                onClick={() => setActiveIndex(img.index)}
              />
            ))}
          </div>
        ))}
      </div>

      {/* Lightbox */}
      <Lightbox
        isOpen={activeIndex !== null}
        images={images}
        index={activeIndex}
        setIndex={setActiveIndex}
        onClose={() => setActiveIndex(null)}
      />
    </section>
  );
};

export default GalleryCategoryPage;
