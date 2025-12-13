import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Gear from "./pages/Gear";

const App = () => {
  return (
    <>
    <header>
      <Navbar />
    </header>

    <main>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gear" element={<Gear />} />
        </Routes>
    </main>

    <Footer />
    </>
  )
}

export default App;