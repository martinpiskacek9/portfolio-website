import About from "./pages/About";
import Navbar from "./components/Navbar";
import Galleries from "./pages/Galleries";
import Hero from "./pages/Hero"
import ImageSlider from "./components/ImageSlider";

const App = () => {
  return (
    <>
    <header>
      <Navbar />
    </header>

    <main>
      <Hero />
      <Galleries />
      <ImageSlider />
      <About />
    </main>
    </>
  )
}

export default App;