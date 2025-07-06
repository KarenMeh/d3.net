import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Impressum from './components/Impressum';
import Datenschutz from './components/Datenschutz';
import AGB from './components/AGB';
import Footer from './components/Footer';
import "slick-carousel/slick/slick.css";    // Slick carousel base styles
import "slick-carousel/slick/slick-theme.css";  // Slick carousel theme styles

function App() {
  const [language, setLanguage] = useState('en');

  return (
    <Router>
      <div className="font-sans text-gray-800 bg-gradient-to-b from-white to-gray-50">
        <Navbar language={language} setLanguage={setLanguage} />
        <Routes>
          <Route path="/" element={<Home language={language} />} />
          <Route path="/impressum" element={<Impressum language={language} />} />
          <Route path="/datenschutz" element={<Datenschutz language={language} />} />
          <Route path="/agb" element={<AGB language={language} />} />
        </Routes>
        <Footer language={language} />
      </div>
    </Router>
  );
}

export default App;