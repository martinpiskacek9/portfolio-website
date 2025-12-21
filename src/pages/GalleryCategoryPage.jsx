import { useParams } from "react-router-dom";
import React, { useMemo } from "react";

const CATEGORY_META = {
  landscapes: { title: "landscapes" },
  automotive: { title: "automotive" },
  travel: { title: "travel" },
  horseserá: { title: "horses" },
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
      <section className="p-6">
          <h1 className="text-2xl font-bold uppercase">error</h1>
      </section>
    );
  }

  return (
    <section className="w-full py-12 px-6 md:px-16 2xl:px-28">
      <h1 className="text-3xl font-black tracking-wide uppercase">{meta.title}</h1>

      {thumbsForCategory.length === 0 ? (
        <p className="mt-6 text-neutral-400">
          Nenašel jsem žádné thumbnails v{" "}
          <span className="font-mono">src/assets/imgs/thumbs/{category}</span>
        </p>
      ) : (
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {cols.map((col, colIndex) => (
            <div key={colIndex} className="flex flex-col gap-6">
              {col.map((img) => (
                <img
                  key={img.path}
                  src={img.url}
                  alt={img.name}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-auto rounded-xl"
                />
              ))}
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
