import { imageSlider } from "../../image-slider-config"

const ImageSlider = () => {
  return (
    <div
    className="w-full h-140 flex items-center justify-center py-4 px-12 relative bg-cover bg-bottom bg-no-repeat"
    style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(imgs/_DSC7681.webp)` }}
    >

    <div className="w-full overflow-hidden h-full p-12">
        <div className="flex w-full h-full animate-marquee gap-8">
            {imageSlider.concat(imageSlider).map((img, i) => (
                <img
                key={i}
                src={img.image}
                className="h-full w-auto"
                />
            ))}
        </div>

    </div>

    </div>
  )
}

export default ImageSlider
