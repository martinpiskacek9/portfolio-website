import { Helmet } from "react-helmet-async";
import GalleryCategory from "../components/GalleryCategory";
import { heroImages } from "../../images-config";

const Gallery = () => {
  return (
    <>
      <Helmet>
        <title>Galerie - Martin Piskáček</title>
        <meta
          name="description"
          content="Vítejte v mé galerii! Prohlédněte si mé fotografie: krajina, portréty, akce, auta a zvířata."
        />
        <link rel="canonical" href="https://www.martinpiskacek.cz/galerie" />

        {/* OpenGraph */}
        <meta property="og:title" content="Galerie - Martin Piskáček" />
        <meta
          property="og:description"
          content="Vítejte v mé galerii! Prohlédněte si mé fotografie: krajina, portréty, akce, auta a zvířata."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.martinpiskacek.cz/galerie" />
        <meta
          property="og:image"
          content="https://www.martinpiskacek.cz/imgs/_DSC7881.webp"
        />
      </Helmet>

      <section>
        {/* Hero */}
        <div className="w-full h-80 md:h-140 relative flex items-center justify-center flex-col">
          <img
            src="imgs/_DSC7881.webp"
            alt="Galerie fotografií – Martin Piskáček"
            className="absolute w-full h-full object-cover top-0 left-0"
            fetchPriority="high"
          />
          <div className="absolute w-full h-full bg-linear-to-b from-black/60 via-black/40 to-black/60" />
          <h1 className="relative uppercase text-4xl md:text-5xl font-montserrat font-black tracking-wide italic z-10">
            galerie
          </h1>
        </div>

        {/* Kategorie */}
        <div className="w-full h-full py-6 xl:py-26 px-6 xl:px-26 flex flex-col gap-6 items-center justify-center">
          <div className="xl:flex grid w-full h-full xl:h-full gap-6 flex-row md:grid-cols-3 md:grid-rows-2 grid-cols-1 grid-rows-5">
            {heroImages.map((item, index) => (
              <GalleryCategory
                key={item.id || index}
                link={item.link}
                heading={item.heading}
                img={item.image}
                className="flex-1"
                altText={`${item.heading} – fotografie z galerie Martina Piskáčka`}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Gallery;
