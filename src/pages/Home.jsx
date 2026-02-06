import About from "./About";
import Galleries from "./Galleries";
import Hero from "./Hero";
import Contact from "./Contact";
import PageDivider from "../components/PageDivider";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Martin Piskáček - Fotograf</title>

        <meta
          name="description"
          content="Fotograf z jižních Čech - krajina, akce, portréty, auta, zvířata. Zachycuji atmosféru okamžiku v té nejhezčí podobě."
        />

        <meta property="og:title" content="Martin Piskáček - Fotograf" />
        <meta
          property="og:description"
          content="Fotograf z jižních Čech - krajina, akce, portréty, auta, zvířata. Zachycuji atmosféru okamžiku v té nejhezčí podobě."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.martinpiskacek.cz/" />
        <meta
          property="og:image"
          content="https://www.martinpiskacek.cz/imgs/_DSC7681.webp"
        />

        <link rel="canonical" href="https://www.martinpiskacek.cz/" />
      </Helmet>

      {/* Obsah stránky */}
      <Hero />
      <Galleries />
      <PageDivider />
      <About />
      <Contact />
    </>
  );
};

export default Home;
