import GalleryCategory from "../components/GalleryCategory"
import { heroImages } from "../../images-config";

const Gallery = () => {
  return (
    <section>
        <div
        className="w-full h-80 md:h-140 flex items-center justify-center flex-col bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.4)), url(imgs/_DSC7881.webp)" }}
        >
            <h1 className="uppercase text-4xl md:text-5xl font-montserrat font-black tracking-wide italic">galerie</h1>
        </div>

        <div className="w-full h-full py-6 md:py-26 px-6 md:px-26 2xl:px-36 flex flex-col gap-6 items-center justify-center">
            <div className="flex w-full h-140 md:h-full gap-6 md:flex-row flex-col">
                <GalleryCategory link={heroImages[0].link} heading={heroImages[0].heading} img={heroImages[0].image} className="flex-1" />
                <GalleryCategory link={heroImages[1].link} heading={heroImages[1].heading} img={heroImages[1].image} className="flex-1" />
            </div>

            <div className="flex w-full h-140 md:h-full gap-6 md:flex-row flex-col">
                <GalleryCategory link={heroImages[2].link} heading={heroImages[2].heading} img={heroImages[2].image} className="flex-1" />
                <GalleryCategory link={heroImages[3].link}heading={heroImages[3].heading} img={heroImages[3].image} className="flex-1" />
            </div>
        </div>
    </section>
  )
}

export default Gallery