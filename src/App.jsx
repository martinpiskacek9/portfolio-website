import About from "./pages/About";
import Navbar from "./components/Navbar";
import Galleries from "./pages/Galleries";
import Hero from "./pages/Hero"
import PageDivider from "./components/PageDivider";

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
    </main>
    </>
  )
}

export default App;