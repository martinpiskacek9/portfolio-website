import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ScrollToTop from "./components/ScrollToTop";
import Gallery from "./pages/Gallery";
import GalleryCategoryPage from "./pages/GalleryCategoryPage";
import ErrorPage from "./pages/ErrorPage";

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
        <Route path="/galerie" element={<Gallery />} />
        <Route path="/galerie/:category" element={<GalleryCategoryPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </main>

    <Footer />
    </>
  )
}

export default App;