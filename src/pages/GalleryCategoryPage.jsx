import { useParams } from "react-router-dom";
import ErrorPage from "./ErrorPage";
import { heroImages } from "../../images-config";

const CATEGORY_META = {
  landscapes: { heading: heroImages[0].heading, heroImg: heroImages[0].image },
  automotive: { heading: heroImages[1].heading, heroImg: heroImages[1].image },
  travel: { heading: heroImages[2].heading, heroImg: heroImages[2].image },
  horses: { heading: heroImages[3].heading, heroImg: heroImages[3].image },
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
        className="w-full h-80 md:h-120 flex items-center justify-center flex-col bg-cover bg-bottom bg-no-repeat bg-gray-300"
        style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.4)), url(${meta.heroImg})` }}
      >
        <h1 className="text-3xl md:text-5xl font-montserrat font-black tracking-wide italic uppercase">{meta.heading}</h1>
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
