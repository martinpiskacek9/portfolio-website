import About from "./pages/About";
import Navbar from "./components/Navbar";
import Galleries from "./pages/Galleries";
import Hero from "./pages/Hero"
import Contact from "./pages/Contact";
import PageDivider from "./components/PageDivider";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
    <header>
      <Navbar />
    </header>

    <main>
      <Hero />
      <Galleries />
      <PageDivider />
      <About />
      <Contact />
    </main>

    <Footer />
    </>
  )
}

export default App;