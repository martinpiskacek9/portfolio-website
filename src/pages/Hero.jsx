import HeroSlider from "../components/HeroSlider"
import { heroImages } from "../../images-config";
import { useState, useEffect } from "react";

const Hero = () => {

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 5000);

    return () => clearInterval(interval);
  }, [current]);

  const next = () => {
    setCurrent((prev) => (prev + 1) % heroImages.length);
  };

  const prev = () => {
    setCurrent((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };

  return (
    <>
      <section
      id="hero"
      key={heroImages[current].id}
      className="flex justify-center items-end w-full h-screen py-12 px-18 bg-center bg-cover bg-no-repeat motion-preset-blur-right-sm motion-duration-3000"
      style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0), rgba(0,0,0,0.95)), url(${heroImages[current].image})` }}
      >
      </section>
      <HeroSlider onNext={next} onPrev={prev} link={heroImages[current].link} heading={heroImages[current].heading} />
    </>
  )
}

export default Hero
