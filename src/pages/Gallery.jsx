import GalleryCategory from "../components/GalleryCategory"
import { heroImages } from "../../images-config";

const Gallery = () => {
  return (
    <section>
        <div
        className="w-full h-100 flex items-center justify-center flex-col bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.4)), url(imgs/_DSC7881.webp)" }}
        >
            <h1 className="text-5xl font-montserrat font-black tracking-wide italic">GALLERY</h1>
        </div>

        <div className="w-full h-full py-26 px-6 md:px-26 2xl:px-36 flex flex-col gap-6 items-center justify-center">
            <div className="flex gap-6">
                <GalleryCategory heading={heroImages[0].heading} img={heroImages[0].image} />
                <GalleryCategory heading={heroImages[1].heading} img={heroImages[1].image} />
            </div>

            <div className="flex gap-6">
                <GalleryCategory heading={heroImages[2].heading} img={heroImages[2].image} />
                <GalleryCategory heading={heroImages[3].heading} img={heroImages[3].image} />
            </div>
        </div>
    </section>
  )
}

export default Gallery