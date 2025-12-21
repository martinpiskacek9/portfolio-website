import { useParams } from "react-router-dom";

const CATEGORY_META = {
  landscapes: { title: "landscapes" },
  automotive: { title: "automotive" },
  travel: { title: "travel" },
  horses: { title: "horses" },
};

export default function GalleryCategory() {
  const { category } = useParams();
  const meta = CATEGORY_META[category];

  if (!meta) {
    return (
      <section className="p-6">
        <h1 className="text-2xl font-bold uppercase">error</h1>
        <p className="mt-2 text-neutral-400">
          URL kategorie: <span className="font-mono">{category}</span>
        </p>
      </section>
    );
  }

  return (
    <section className="p-6">
      <h1 className="text-3xl font-bold">{meta.title}</h1>
      <p className="mt-2 text-neutral-400">
        Tady bude galerie pro kategorii: <span className="font-mono">{category}</span>
      </p>
    </section>
  );
}
