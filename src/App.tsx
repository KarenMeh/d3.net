import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import Compliance from './components/Compliance';
import GlobalPresence from './components/GlobalPresence';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [language, setLanguage] = useState('en');

  return (
    <div className="font-sans text-gray-800 bg-gradient-to-b from-white to-gray-50">
      <Navbar language={language} setLanguage={setLanguage} />
      <main>
        <Hero language={language} />
        <AboutUs language={language} />
        <Services language={language} />
        <Compliance language={language} />
        <GlobalPresence language={language} />
        <Contact language={language} />
      </main>
      <Footer language={language} />
    </div>
  );
}

export default App;