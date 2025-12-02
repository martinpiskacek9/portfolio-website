import GalleryCategory from "../components/GalleryCategory"

const Galleries = () => {
  return (
    <section
    id="galleries"
    className="w-full h-full flex flex-col items-center justify-center gap-4 p-26"
    >
      <h2>Galleries</h2>
      <GalleryCategory />
      <GalleryCategory />
      <GalleryCategory />
      <GalleryCategory />
    </section>
  )
}

export default Galleries
