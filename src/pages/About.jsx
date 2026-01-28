const About = () => {
  return (
    <section
    id="about"
    className="w-full flex justify-center items-center py-26 px-6 md:px-26 2xl:px-52"
    >
      <div className="w-full h-full flex justify-between items-stretch gap-18 flex-col lg:flex-row">
        <div className="flex-3 xl:flex-7 h-full">
          <h2 className="text-center md:text-left">kdo jsem?</h2>
          <p>Jmenuji se Martin, je mi 26 let a pocházím z jižních Čech, kraje plného krásné přírody, který mě k focení přivedl. Fotografii se věnuji přibližně 7 let a za tu dobu se stala nejen mým koníčkem, ale i způsobem, jak vnímám svět kolem sebe. Ze začátku jsem se nejvíce věnoval focení krajiny, ale časem jsem zavítal i do dalších žánrů, například k focení lidí s koňmi, různých akcí a také automobilů.<br /><br />Ve fotografiích se soustředím na kompozici, světlo a atmosféru, kterou se snažím zachytit tak, jak na mě působila v ten moment, kdy jsem zmáčkl spoušť. Každé focení beru jako malý příběh, který se snažím vyprávět jedním obrazem. Mým cílem je, aby se divák při pohledu na fotografie dokázal na chvíli zastavit a přenést se na místo, kde snímek vznikl. Fotografie je pro mě způsob, jak uchovat atmosféru okamžiku, který už se nikdy nebude opakovat.</p>
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
