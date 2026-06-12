import HeroSlider from "../components/HeroSlider";
import { heroImages } from "../../images-config";
import { useState, useEffect } from "react";

const Hero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [current]);

  const active = heroImages[current];
  const isFirst = current === 0;

  return (
    <>
      <section
        id="hero"
        key={heroImages[current].id}
        className="relative flex justify-center items-end w-full h-screen overflow-hidden motion-preset-fade-lg motion-duration-3000"
      >
        <img
          src={active.image}
          alt={active.alt || "Fotografie – Martin Piskáček"}
          className="absolute inset-0 w-full h-full object-cover"
          loading={isFirst ? "eager" : "lazy"}
          fetchPriority={isFirst ? "high" : "auto"}
        />

        {/* Gradient shora dolů */}
        <div className="absolute inset-0 bg-linear-to-b from-black/80 via-transparent to-black/95" />

        {/* Gradient zleva doprava */}
        <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/30 to-transparent" />
      </section>

      <div className="h-full w-full absolute top-0 px-11 pt-60 flex">
        <div className="flex p-0 md:p-11 w-full lg:items-start items-center justify-center flex-col">
          <h1 className="text-4xl sm:text-5xl text-center font-montserrat font-black mb-2 lg:text-6xl">
            MARTIN PISKÁČEK
          </h1>

          <h5 className="font-montserrat uppercase font-light text-lg">
            Fotograf
          </h5>

          <p className="my-12 text-center font-raleway text-md md:text-lg tracking-widest">
            AKCE • PORTRÉTY • SVATBY •&nbsp;CHATY&nbsp;&&nbsp;UBYTOVÁNÍ
          </p>

          <button
          onClick={() => {
            document
              .getElementById("contact")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
          className="border-2 lg:px-16 px-10 py-6 btn">
            DOMLUVIT FOCENÍ
          </button>
        </div>
      </div>

      <HeroSlider
        link={active.link}
        heading={active.heading}
        current={current}
        total={heroImages.length}
        onNext={() => setCurrent((c) => (c + 1) % heroImages.length)}
        onPrev={() =>
          setCurrent((c) => (c - 1 + heroImages.length) % heroImages.length)
        }
      />
    </>
  );
};

export default Hero;