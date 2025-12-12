const PageDivider = () => {
  return (
    <section>
        <div
        className="relative w-full h-180 bg-cover bg-no-repeat flex items-center justify-center font-black font-montserrat uppercase"
        style={{ backgroundImage: `radial-gradient(rgba(0,0,0,0.2), rgba(0,0,0,1)), url("imgs/_DSC5754.webp")` }}
        >
            <div className="absolute w-full h-full bg-linear-to-b from-black via-transparent to-black top-0" />

        </div>
    </section>
    
  )
}

export default PageDivider