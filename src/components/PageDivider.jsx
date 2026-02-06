const PageDivider = () => {
  return (
    <section>
      <div className="w-full h-full sm:py-0 sm:h-65 lg:h-65 relative flex flex-col sm:flex-row">
        {/* Obrázek */}
        <img
          src="imgs/_DSC5754.webp"
          alt="Dekorační fotografie – oddělení sekcí"
          className="absolute w-full h-full object-cover top-0 left-0"
        />
        {/* Gradient */}
        <div className="absolute w-full h-full bg-linear-to-b from-black/10 to-black/90" />
      </div>
    </section>
  );
};

export default PageDivider;
