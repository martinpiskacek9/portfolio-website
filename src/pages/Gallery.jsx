const Gallery = () => {
  return (
    <section>
        <div
        className="w-full h-100 flex items-center justify-center flex-col bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.4)), url(imgs/_DSC7881.webp)" }}
        >
          <h1 className="text-5xl font-montserrat font-black tracking-wide italic">GALLERY</h1>
        </div>

        <div className="w-full h-full py-26 px-6 md:px-26 2xl:px-36 flex gap-6">
            <div className="flex-1 h-full border flex flex-col gap-6">
                <img src="imgs/_DSC2223.webp" alt="" />
                <img src="imgs/_DSC2223.webp" alt="" />
                <img src="imgs/_DSC2223.webp" alt="" />
            </div>
            <div className="flex-1 h-full flex flex-col border gap-6">
                <img src="imgs/_DSC2223.webp" alt="" />
                <img src="imgs/_DSC2223.webp" alt="" />
                <img src="imgs/_DSC2223.webp" alt="" />
            </div>
            <div className="flex-1 h-full flex flex-col border gap-6">
                <img src="imgs/_DSC2223.webp" alt="" />
                <img src="imgs/_DSC2223.webp" alt="" />
                <img src="imgs/_DSC2223.webp" alt="" />
            </div>
        </div>
    </section>
  )
}

export default Gallery
