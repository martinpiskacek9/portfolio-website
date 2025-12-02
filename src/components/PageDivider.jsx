const PageDivider = () => {
  return (
    <div className="hidden md:block relative w-full h-[400px] overflow-visible">
      <img src="../../imgs/_DSC3987-HDR-4.webp" className="absolute -top-[300px] w-full h-[700px] object-cover object-top" />
      <div className="absolute bg-linear-to-t from-black/70 to-black -top-[300px] w-full h-[700px]" />
    </div>
  )
}

export default PageDivider
