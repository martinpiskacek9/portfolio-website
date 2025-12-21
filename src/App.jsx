import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Gear from "./pages/Gear";
import ScrollToTop from "./components/ScrollToTop";
import Gallery from "./pages/Gallery";
import GalleryCategory from "./pages/GalleryCategory";

import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
    <header>
      <Navbar />
    </header>

    <main>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gear" element={<Gear />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/gallery/:category" element={<GalleryCategory />} />
      </Routes>
    </main>

    <Footer />
    </>
  )
}

export default App;