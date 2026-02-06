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
  }, []);

  const active = heroImages[current];
  const isFirst = current === 0;

  return (
    <>
      <section
        id="hero"
        className="relative flex justify-center items-end w-full h-screen overflow-hidden"
      >
        {/* HERO IMAGE */}
        <img
          src={active.image}
          alt={active.alt || "Fotografie – Martin Piskáček"}
          className="absolute inset-0 w-full h-full object-cover"
          loading={isFirst ? "eager" : "lazy"}
          fetchpriority={isFirst ? "high" : "auto"}
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-linear-to-b from-black/80 via-transparent to-black/95" />

        {/* SEO H1 */}
        <h1 className="sr-only">
          Martin Piskáček – Fotograf z jižních Čech | Krajina, portréty, akce, auta
        </h1>
      </section>

      <HeroSlider
        link={active.link}
        heading={active.heading}
        onNext={() => setCurrent((c) => (c + 1) % heroImages.length)}
        onPrev={() => setCurrent((c) => (c - 1 + heroImages.length) % heroImages.length)}
      />
    </>
  );
};

export default Hero;
