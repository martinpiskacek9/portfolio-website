import { Helmet } from "react-helmet-async";
import GalleryCategory from "../components/GalleryCategory";
import { heroImages } from "../../images-config";

const Gallery = () => {
  return (
    <>
      <Helmet>
        <title>Galerie – Martin Piskáček</title>
        <meta
          name="description"
          content="Vítejte v mé galerii! Prohlédněte si mé portfolio fotografií: krajina, portréty, akce, auta a zvířata."
        />

        <meta property="og:title" content="Galerie - Martin Piskáček" />
        <meta
          property="og:description"
          content="Vítejte v mé galerii! Prohlédněte si mé portfolio fotografií: krajina, portréty, akce, auta a zvířata."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.martinpiskacek.cz/galerie" />
        <meta
          property="og:image"
          content="https://www.martinpiskacek.cz/imgs/_DSC7881.webp"
        />
      </Helmet>

      <section>
        <div
          className="w-full h-80 md:h-140 flex items-center justify-center flex-col bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.4)), url(imgs/_DSC7881.webp)",
          }}
        >
          <h1 className="uppercase text-4xl md:text-5xl font-montserrat font-black tracking-wide italic">
            galerie
          </h1>
        </div>

        <div className="w-full h-full py-6 xl:py-26 px-6 xl:px-26 flex flex-col gap-6 items-center justify-center">
          <div className="xl:flex grid w-full h-full xl:h-full gap-6 flex-row md:grid-cols-3 md:grid-rows-2 grid-cols-1 grid-rows-5">
            {heroImages.map((item, index) => (
              <GalleryCategory
                key={item.id || index}
                link={item.link}
                heading={item.heading}
                img={item.image}
                className="flex-1"
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Gallery;
