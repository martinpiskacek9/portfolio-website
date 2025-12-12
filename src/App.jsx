import About from "./pages/About";
import Navbar from "./components/Navbar";
import Galleries from "./pages/Galleries";
import Hero from "./pages/Hero"
import Contact from "./pages/Contact";

const App = () => {
  return (
    <>
    <header>
      <Navbar />
    </header>

    <main>
      <Hero />
      <Galleries />
      <About />
      <Contact />
    </main>
    </>
  )
}

export default App;