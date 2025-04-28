import React, { useState, useEffect, useRef } from 'react';
import { MapPin, Building, Users, Briefcase, Globe, Award } from 'lucide-react';
import SectionTitle from './SectionTitle';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Slick Carousel Settings
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
};

// Counter Animation Component
const AnimatedCounter = ({ end, duration = 2000, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          let startTime;
          const startValue = 0;
          
          const step = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            setCount(Math.floor(progress * (end - startValue) + startValue));
            
            if (progress < 1) {
              window.requestAnimationFrame(step);
            }
          };
          
          window.requestAnimationFrame(step);
          observer.unobserve(countRef.current);
        }
      },
      { threshold: 0.1 }
    );
    
    if (countRef.current) {
      observer.observe(countRef.current);
    }
    
    return () => {
      if (countRef.current) {
        observer.unobserve(countRef.current);
      }
    };
  }, [end, duration]);
  
  return (
    <div ref={countRef} className="text-4xl font-bold text-white mb-2">
      {count}{suffix}
    </div>
  );
};

const GlobalPresence = () => {
  const locations = [
    { 
      name: "San Francisco", 
      country: "USA", 
      role: "Headquarters", 
      employees: "250+", 
      clients: "500+",
      icon: <Building className="h-8 w-8 text-teal-300" />
    },
    { 
      name: "New York", 
      country: "USA", 
      role: "Regional Office", 
      employees: "150+", 
      clients: "300+",
      icon: <Building className="h-8 w-8 text-teal-300" />
    },
    { 
      name: "London", 
      country: "UK", 
      role: "European Hub", 
      employees: "200+", 
      clients: "400+",
      icon: <Globe className="h-8 w-8 text-teal-300" />
    },
    { 
      name: "Berlin", 
      country: "Germany", 
      role: "Tech Center", 
      employees: "100+", 
      clients: "200+",
      icon: <Award className="h-8 w-8 text-teal-300" />
    },
    { 
      name: "Singapore", 
      country: "Singapore", 
      role: "APAC Headquarters", 
      employees: "180+", 
      clients: "350+",
      icon: <Globe className="h-8 w-8 text-teal-300" />
    },
    { 
      name: "Sydney", 
      country: "Australia", 
      role: "Regional Office", 
      employees: "120+", 
      clients: "250+",
      icon: <Building className="h-8 w-8 text-teal-300" />
    }
  ];

  return (
    <section id="global" className="py-20 bg-white text-black relative overflow-hidden font-['Inter',sans-serif]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Global Presence"
          subtitle="Worldwide Healthcare IT Excellence"
          description="Delivering secure and reliable healthcare technology solutions across six strategic locations worldwide."
          light={false}
        />

        {/* Carousel Section */}
        <div className="mt-16">
          <Slider {...settings}>
            {locations.map((location, index) => (
              <div key={index} className="outline-none">
                <div 
                  className="p-6 rounded-lg mx-2 flex items-center justify-center"
                  style={{
                    background: 'linear-gradient(100deg, #0059A8 0%, #00427C 100%)',
                    fontFamily: 'Inter, sans-serif',
                    height: '280px',
                  }}
                >
                  <div className="flex flex-col items-center text-center w-full">
                    <div className="flex flex-col items-center justify-center mb-4">
                      {location.icon}
                      <h3 className="font-semibold text-3xl text-white mt-2">{location.name}</h3>
                    </div>
                    <p className="text-white text-xl mb-3">{location.country}</p>
                    <div className="mb-5 px-4 py-1 bg-blue-800 bg-opacity-50 rounded-full">
                      <p className="text-teal-300 text-lg font-medium">{location.role}</p>
                    </div>
                    <div className="flex justify-center gap-8 text-white">
                      <div className="flex items-center">
                        <Users className="h-5 w-5 text-teal-300 mr-2" />
                        <span className="text-lg">{location.employees}</span>
                      </div>
                      <div className="flex items-center">
                        <Briefcase className="h-5 w-5 text-teal-300 mr-2" />
                        <span className="text-lg">{location.clients}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* Additional Stats with Animation */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="backdrop-blur-sm rounded-xl p-8 border border-blue-200 text-center" 
               style={{
                background: 'linear-gradient(100deg, #0059A8 0%, #00427C 100%)',
                fontFamily: 'Inter, sans-serif',
              }}>
            <div className="flex justify-center mb-2">
              <Globe className="h-10 w-10 text-teal-300" />
            </div>
            <AnimatedCounter end={30} suffix="+" />
            <div className="text-white">Countries Served</div>
            <p className="mt-2 text-white text-sm">Providing healthcare IT solutions globally</p>
          </div>
          
          <div className="backdrop-blur-sm rounded-xl p-8 border border-blue-200 text-center" 
               style={{
                background: 'linear-gradient(100deg, #0059A8 0%, #00427C 100%)',
                fontFamily: 'Inter, sans-serif',
              }}>
            <div className="flex justify-center mb-2">
              <Users className="h-10 w-10 text-teal-300" />
            </div>
            <AnimatedCounter end={1000} suffix="+" />
            <div className="text-white">Team Members</div>
            <p className="mt-2 text-white text-sm">Dedicated healthcare IT professionals</p>
          </div>
          
          <div className="backdrop-blur-sm rounded-xl p-8 border border-blue-200 text-center" 
               style={{
                background: 'linear-gradient(100deg, #0059A8 0%, #00427C 100%)',
                fontFamily: 'Inter, sans-serif',
              }}>
            <div className="flex justify-center mb-2">
              <Briefcase className="h-10 w-10 text-teal-300" />
            </div>
            <AnimatedCounter end={2000} suffix="+" />
            <div className="text-white">Active Clients</div>
            <p className="mt-2 text-white text-sm">Trusted by healthcare providers worldwide</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalPresence;