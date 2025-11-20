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
    <section
    className="flex justify-center items-end w-full h-screen py-12 px-18 bg-center bg-cover bg-no-repeat"
    style={{ backgroundImage: `url(${heroImages[current].image})` }}
    >
      <HeroSlider onNext={next} onPrev={prev} link={heroImages[current].link} heading={heroImages[current].heading} />
    </section>
  )
}

export default Hero
