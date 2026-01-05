import { useParams } from "react-router-dom";
import { useMemo } from "react";
import imgAutomotive from "../imgs/automotive.webp";
import imgHorses from "../imgs/horses.webp";
import imgLandscapes from "../imgs/landscapes.webp";
import imgTravel from "../imgs/travel.webp";

const CATEGORY_META = {
  landscapes: { title: "landscapes", heroImg: imgLandscapes },
  automotive: { title: "automotive", heroImg: imgAutomotive },
  travel: { title: "travel", heroImg: imgTravel},
  horses: { title: "people & horses", heroImg: imgHorses },
};

export default function GalleryCategoryPage() {
  const { category } = useParams();
  const meta = CATEGORY_META[category];

  const allThumbs = useMemo(() => {
    const modules = import.meta.glob("../assets/imgs/thumbs/**/*.webp", {
        eager: true,
        import: "default"
    });

    return Object.entries(modules).map(([path, url]) => ({
        path,
        url,
        name: path.split("/").pop() ?? path,
    }));
  }, []);

  const thumbsForCategory = useMemo(() => {
    if(!category) return [];

    return allThumbs
        .filter((img) => img.path.includes(`/thumbs/${category}/`))
        .sort((a, b) => a.name.localeCompare(b.name));
  }, [allThumbs, category]);
  
  const cols = useMemo(() => {
    const c = [[], [], []];
    thumbsForCategory.forEach((img, i) => c[i % 3].push(img));
    return c;
  }, [thumbsForCategory]);

  if (!meta) {
    return (
      <section className="flex items-center justify-center w-full h-100">
          <h1 className="text-2xl font-bold uppercase">error</h1>
      </section>
    );
  }

  return (
    <section className="">
      <div
        className="w-full py-12 px-6 md:px-16 2xl:px-28 h-80 md:h-100 flex items-center justify-center flex-col bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.4)), url(${meta.heroImg})` }}
        >
          <h1 className="uppercase text-4xl md:text-5xl font-montserrat font-black tracking-wide italic">{meta.title}</h1>
      </div>


      {thumbsForCategory.length === 0 ? (
        <p className="mt-6 text-neutral-400">
          ERROR
        </p>
      ) : (
        <div className="w-full h-full py-6 md:py-26 px-6 md:px-12 flex-col gap-6 md:gap-2 grid grid-cols-1 md:grid-cols-3">
          {cols.map((col, colIndex) => (
            <div key={colIndex} className="flex flex-col gap-6 md:gap-2">
              {col.map((img) => (
                <img
                  key={img.path}
                  src={img.url}
                  alt={img.name}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-auto"
                />
              ))}
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
