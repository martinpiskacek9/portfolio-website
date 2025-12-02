import Navbar from "./components/Navbar";
import Galleries from "./pages/Galleries";
import Hero from "./pages/Hero"

const App = () => {
  return (
    <>
    <header>
      <Navbar />
    </header>

    <main>
      <Hero />
      <Galleries />
    </main>
    </>
  )
}

export default App;