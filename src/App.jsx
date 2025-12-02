import Navbar from "./components/Navbar";
import PageDivider from "./components/PageDivider";
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
      <PageDivider />
    </main>
    </>
  )
}

export default App;