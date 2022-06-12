import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import SharedLayout from './components/SharedLayout';
import PixelArtMaker from './components/PixelArtMaker/PixelArtMaker';
import Wheelspin from './components/Wheelspin/Wheelspin';
import MemoryGame from './components/MemoryGame/MemoryGame';
import CryptoPriceWidget from './components/CryptoPriceWidget/CryptoPriceWidget';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="portfolio/pixel_art_maker" element={<PixelArtMaker />} />
          <Route path="portfolio/wheelspin" element={<Wheelspin />} />
          <Route path="portfolio/memory_game" element={<MemoryGame />} />
          <Route path="portfolio/crypto_price_widget" element={<CryptoPriceWidget />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
