import { useParams } from "react-router-dom";
import { useState, useMemo, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import ErrorPage from "./ErrorPage";
import Lightbox from "../components/Lightbox";
import { heroImages } from "../../images-config";

const CATEGORY_META = {
  krajina: { heading: heroImages[0].heading, heroImg: heroImages[0].image },
  automotive: { heading: heroImages[1].heading, heroImg: heroImages[1].image },
  cestovani: { heading: heroImages[2].heading, heroImg: heroImages[2].image },
  kone: { heading: heroImages[3].heading, heroImg: heroImages[3].image },
  akce: { heading: heroImages[4].heading, heroImg: heroImages[4].image },
};

const modules = import.meta.glob(
  ["../assets/imgs/**/*.webp", "../assets/imgs/**/*.jpg"],
  { eager: true, import: "default" }
);

const ALL_IMAGES = Object.entries(modules).map(([path, url]) => {
  const category = path.match(/imgs\/(.*?)\//)[1];
  return { url, category };
});

/* 🔹 hook */
const useColumnCount = () => {
  const getCount = () => {
    if (window.innerWidth >= 1024) return 3;
    if (window.innerWidth >= 768) return 2;
    return 1;
  };

  const [count, setCount] = useState(getCount());

  useEffect(() => {
    const onResize = () => setCount(getCount());
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return count;
};

const GalleryCategoryPage = () => {
  const { category } = useParams();
  const meta = CATEGORY_META[category];
  const [activeIndex, setActiveIndex] = useState(null);
  const colCount = useColumnCount();

  if (!meta) return <ErrorPage />;

  const images = ALL_IMAGES.filter(img => img.category === category);

  const cols = useMemo(() => {
    const c = Array.from({ length: colCount }, () => []);
    images.forEach((img, i) => {
      c[i % colCount].push({ ...img, index: i });
    });
    return c;
  }, [images, colCount]);

  const seoTitle = `${meta.heading} – Galerie - Martin Piskáček`;
  const seoDescription = `Galerie ${meta.heading}. Prohlédněte si fotografie z galerie ${meta.heading}.`;
  const ogImage = `https://www.martinpiskacek.cz/${meta.heroImg}`;

  return (
    <>
      <Helmet>
        <title>{seoTitle}</title>
        <meta name="description" content={seoDescription} />
        <link rel="canonical" href={`https://www.martinpiskacek.cz/galerie/${category}`} />

        {/* OpenGraph */}
        <meta property="og:title" content={seoTitle} />
        <meta property="og:description" content={seoDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://www.martinpiskacek.cz/galerie/${category}`} />
        <meta property="og:image" content={ogImage} />
      </Helmet>

      <section>
        {/* Hero */}
        <div className="w-full h-80 md:h-140 relative flex items-center justify-center">
          <img
            src={meta.heroImg}
            alt={`${meta.heading} – hero image`}
            className="absolute w-full h-full object-cover top-0 left-0"
            fetchPriority="high"
          />
          <div className="absolute w-full h-full bg-linear-to-b from-black/60 via-black/40 to-black/60" />
          <h1 className="relative text-3xl md:text-5xl font-black italic uppercase z-10">
            {meta.heading}
          </h1> 
        </div>

        {/* Gallery */}
        <div
          className={`grid gap-4 p-6 md:p-[4vw]`}
          style={{ gridTemplateColumns: `repeat(${colCount}, 1fr)` }}
        >
          {cols.map((col, colIdx) => (
            <div key={colIdx} className="flex flex-col gap-4">
              {col.map(img => (
                <img
                  key={img.url}
                  src={img.url}
                  loading="lazy"
                  className="w-full cursor-zoom-in object-cover"
                  onClick={() => setActiveIndex(img.index)}
                  alt={`${meta.heading} – fotografie ${img.index + 1}`}
                />
              ))}
            </div>
          ))}
        </div>

        <Lightbox
          isOpen={activeIndex !== null}
          images={images}
          index={activeIndex}
          setIndex={setActiveIndex}
          onClose={() => setActiveIndex(null)}
        />
      </section>
    </>
  );
};

export default GalleryCategoryPage;
