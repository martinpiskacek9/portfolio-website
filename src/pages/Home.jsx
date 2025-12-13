import About from "./About";
import Galleries from "./Galleries";
import Hero from "./Hero";
import Contact from "./Contact";
import PageDivider from "../components/PageDivider";

const Home = () => {
  return (
    <>
      <Hero />
      <Galleries />
      <PageDivider />
      <About />
      <Contact />
    </>
  );
};

export default Home;