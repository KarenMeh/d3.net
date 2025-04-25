import React from 'react';
import { Globe, MapPin } from 'lucide-react';
import SectionTitle from './SectionTitle';

const GlobalPresence = () => {
  const locations = [
    { name: "San Francisco", country: "USA", role: "Headquarters", employees: "250+", clients: "500+" },
    { name: "New York", country: "USA", role: "Regional Office", employees: "150+", clients: "300+" },
    { name: "London", country: "UK", role: "European Hub", employees: "200+", clients: "400+" },
    { name: "Berlin", country: "Germany", role: "Tech Center", employees: "100+", clients: "200+" },
    { name: "Singapore", country: "Singapore", role: "APAC Headquarters", employees: "180+", clients: "350+" },
    { name: "Sydney", country: "Australia", role: "Regional Office", employees: "120+", clients: "250+" }
  ];

  return (
    <section id="global" className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white relative overflow-hidden font-['Inter',sans-serif]">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIgMS44LTQgNC00czQgMS44IDQgNC0xLjggNC00IDQtNC0xLjgtNC00TTAgNGMwLTIuMiAxLjgtNCA0LTRzNCAxLjggNCA0LTEuOCA0LTQgNC00LTEuOC00LTR6bTAgNTJjMC0yLjIgMS44LTQgNC00czQgMS44IDQgNC0xLjggNC00IDQtNC0xLjgtNC00eiIvPjwvZz48L2c+PC9zdmc+')] opacity-10"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle
          title="Global Presence"
          subtitle="Worldwide Healthcare IT Excellence"
          description="Delivering secure and reliable healthcare technology solutions across six strategic locations worldwide."
          light={true}
        />
        
        <div className="mt-16 relative">
          <div className="hidden lg:block mb-16">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-800 rounded-2xl opacity-50"></div>
              <div className="relative bg-gradient-to-b from-blue-800/50 to-blue-900/50 backdrop-blur-sm rounded-2xl p-8 border border-blue-700/30">
                <Globe className="absolute right-8 top-8 h-32 w-32 text-blue-500/20" />
                <div className="grid grid-cols-3 gap-8">
                  {locations.map((location, index) => (
                    <div 
                      key={index}
                      className="bg-blue-800/40 backdrop-blur-sm rounded-xl p-6 border border-blue-700/30 hover:bg-blue-700/40 transition-all duration-300"
                    >
                      <div className="flex items-start mb-4">
                        <MapPin className="h-5 w-5 text-teal-400 mt-1 mr-2 flex-shrink-0" />
                        <div>
                          <h3 className="font-semibold text-xl text-white mb-1 font-['Inter',sans-serif]">{location.name}</h3>
                          <p className="text-blue-200 font-['Inter',sans-serif]">{location.country}</p>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="text-teal-300 text-sm font-medium font-['Inter',sans-serif]">{location.role}</div>
                        <div className="flex justify-between text-sm text-blue-200 font-['Inter',sans-serif]">
                          <span>Employees: {location.employees}</span>
                          <span>Clients: {location.clients}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:hidden">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {locations.map((location, index) => (
                <div 
                  key={index}
                  className="bg-blue-800/40 backdrop-blur-sm rounded-xl p-6 border border-blue-700/30"
                >
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-teal-300 mt-1 mr-2 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-white mb-1 font-['Inter',sans-serif]">{location.name}</h3>
                      <p className="text-blue-200 text-sm font-['Inter',sans-serif]">{location.country}</p>
                      <div className="mt-2 text-teal-300 text-sm font-['Inter',sans-serif]">{location.role}</div>
                      <div className="mt-2 text-sm text-blue-200 font-['Inter',sans-serif]">
                        <div>Employees: {location.employees}</div>
                        <div>Clients: {location.clients}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-blue-800/50 to-blue-900/50 backdrop-blur-sm rounded-xl p-8 border border-blue-700/30 text-center">
            <div className="text-4xl font-bold text-white mb-2 font-['Inter',sans-serif]">30+</div>
            <div className="text-teal-300 font-['Inter',sans-serif]">Countries Served</div>
            <p className="mt-2 text-blue-200 text-sm font-['Inter',sans-serif]">Providing healthcare IT solutions globally</p>
          </div>
          
          <div className="bg-gradient-to-br from-blue-800/50 to-blue-900/50 backdrop-blur-sm rounded-xl p-8 border border-blue-700/30 text-center">
            <div className="text-4xl font-bold text-white mb-2 font-['Inter',sans-serif]">1000+</div>
            <div className="text-teal-300 font-['Inter',sans-serif]">Team Members</div>
            <p className="mt-2 text-blue-200 text-sm font-['Inter',sans-serif]">Dedicated healthcare IT professionals</p>
          </div>
          
          <div className="bg-gradient-to-br from-blue-800/50 to-blue-900/50 backdrop-blur-sm rounded-xl p-8 border border-blue-700/30 text-center">
            <div className="text-4xl font-bold text-white mb-2 font-['Inter',sans-serif]">2000+</div>
            <div className="text-teal-300 font-['Inter',sans-serif]">Active Clients</div>
            <p className="mt-2 text-blue-200 text-sm font-['Inter',sans-serif]">Trusted by healthcare providers worldwide</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalPresence;