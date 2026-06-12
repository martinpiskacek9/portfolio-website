const PageDivider = () => {
  return (
    <section>
      <div className="w-full h-full sm:py-0 sm:h-65 lg:h-120 relative overflow-hidden flex flex-col sm:flex-row">
        {/* Obrázek */}
        <img
          src="imgs/DSC00592.jpg"
          alt="Dekorační fotografie – oddělení sekcí"
          className="absolute w-full h-full object-cover top-0 left-0"
        />

        {/* Gradient */}
        <div className="absolute w-full h-full bg-linear-to-b from-black/30 to-black" />

      </div>
    </section>
  );
};

export default PageDivider;