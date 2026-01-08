import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Gear from "./pages/Gear";
import ScrollToTop from "./components/ScrollToTop";
import Gallery from "./pages/Gallery";
import GalleryCategoryPage from "./pages/GalleryCategoryPage";
import ErrorPage from "./pages/ErrorPage";

import { Routes, Route } from "react-router-dom";
import Lightbox from "./components/Lightbox";

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
        <Route path="/gallery/:category" element={<GalleryCategoryPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </main>

    <Lightbox />
    <Footer />
    </>
  )
}

export default App;