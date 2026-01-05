import GalleryCategory from "../components/GalleryCategory"
import { heroImages } from "../../images-config";

const Galleries = () => {
  return (
    <section
    id="galleries"
    className="w-full h-full flex flex-col items-center justify-start py-26 relative"
    >
      <h2 className="z-30">Galleries</h2>
      <div className="z-50 w-full xl:w-full xl:flex xl:flex-row items-center justify-center md:w-auto flex flex-col gap-6 px-6 md:grid grid-rows-2 grid-cols-2">
        <GalleryCategory link={heroImages[0].link} heading={heroImages[0].heading} img={heroImages[0].image} className="w-full md:w-80 xl:w-70" />
        <GalleryCategory link={heroImages[1].link} heading={heroImages[1].heading} img={heroImages[1].image} className="w-full md:w-80 xl:w-70" />
        <GalleryCategory link={heroImages[2].link} heading={heroImages[2].heading} img={heroImages[2].image} className="w-full md:w-80 xl:w-70" />
        <GalleryCategory link={heroImages[3].link} heading={heroImages[3].heading} img={heroImages[3].image} className="w-full md:w-80 xl:w-70" />
      </div>
    </section>
  )
}

export default Galleries
