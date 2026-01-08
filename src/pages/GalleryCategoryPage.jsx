import { useParams } from "react-router-dom";
import ErrorPage from "./ErrorPage";

const CATEGORY_META = {
  landscapes: { title: "Landscapes", heroImg: "/imgs/landscapes.webp" },
  travel: { title: "Travel", heroImg: "/imgs/travel.webp" },
  automotive: { title: "Automotive", heroImg: "/imgs/automotive.webp" },
  horses: { title: "People & Horses", heroImg: "/imgs/horses.webp" },
};

const modules = import.meta.glob("../assets/imgs/thumbs/**/*.webp", { eager: true, import: "default" });

const IMAGES = {};
Object.entries(modules).forEach(([path, url]) => {
  const match = path.match(/thumbs\/(.*?)\//);
  if (match) {
    const category = match[1];
    if (!IMAGES[category]) IMAGES[category] = [];
    IMAGES[category].push(url);
  }
});

export default function GalleryCategoryPage() {
  const { category } = useParams();
  const meta = CATEGORY_META[category];

  if (!meta) return <ErrorPage />;

  const images = IMAGES[category] || [];

  const cols = [[], []];
  images.forEach((img, i) => cols[i % 2].push(img));

  return (
    <section>
      <div
        className="w-full h-80 md:h-120 flex items-center justify-center flex-col bg-cover bg-top bg-no-repeat bg-gray-300"
        style={{ backgroundImage: `url(${meta.heroImg})` }}
      >
        <h1 className="text-5xl font-bold italic text-white uppercase font-raleway">{meta.title}</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 p-6 md:p-[4vw]">
        {cols.map((col, idx) => (
          <div key={idx} className="flex flex-col gap-2">
            {col.map((src) => (
              <img key={src} src={src} alt="" className="w-full h-auto" />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
