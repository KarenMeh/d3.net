import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from './Hero';
import AboutUs from './AboutUs';
import Services from './Services';
import IndustrySolutions from './IndustrySolutions';
import Contact from './Contact';

interface HomeProps {
  language: string;
}

const Home: React.FC<HomeProps> = ({ language }) => {
  const location = useLocation();

  useEffect(() => {
    // Handle scroll to section when navigating from other pages
    if (location.state?.scrollTo) {
      const sectionId = location.state.scrollTo;
      const section = document.getElementById(sectionId);
      if (section) {
        const headerHeight = 80;
        const sectionTop = section.offsetTop - headerHeight;
        
        // Small delay to ensure the page has loaded
        setTimeout(() => {
          window.scrollTo({
            top: sectionTop,
            behavior: 'smooth'
          });
        }, 100);
      }
      
      // Clear the state to prevent re-scrolling on page refresh
      window.history.replaceState({}, document.title);
    }
  }, [location.state]);

  return (
    <main>
      <Hero language={language} />
      <AboutUs language={language} />
      <Services language={language} />
      <IndustrySolutions language={language} />
      <Contact language={language} />
    </main>
  );
};

export default Home; 