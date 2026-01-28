const About = () => {
  return (
    <section
    id="about"
    className="w-full flex justify-center items-center py-26 px-6 md:px-26 2xl:px-52"
    >
      <div className="w-full h-full flex justify-between items-stretch gap-18 flex-col lg:flex-row">
        <div className="flex-3 xl:flex-7 h-full">
          <h2 className="text-center md:text-left">Get to know me</h2>
          <p>My name is Martin, I am 26 years old and I come from South Bohemia, a region full of beautiful nature that led me to photography. I have been dedicated to photography for about 7 years, and during that time it has become not only my hobby, but also the way I see the world around me. At the beginning, I focused mainly on landscape photography, but over time I moved into other genres as well, such as photographing people with horses, various events, and also cars.<br /><br />In my work, I focus on composition, light, and atmosphere, which I always try to capture exactly as I felt it at the moment I pressed the shutter. I see every shoot as a small story that I try to tell through a single image. My goal is for the viewer to pause for a moment and feel transported to the place where the photograph was taken. Photography is, for me, a way to preserve the atmosphere of a moment that will never be repeated.</p>
        </div>
        <div
        className="flex-2 xl:flex-3 bg-bottom bg-cover bg-no-repeat hidden lg:block aspect-3/4"
        style={{ backgroundImage: "url(imgs/_DSC9937.webp)" }}
        />
      </div>
    </section>
  )
}

export default About
