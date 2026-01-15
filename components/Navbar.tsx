import React, { useState } from 'react';
import { Menu, X, Phone, TreePine } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <TreePine className="h-8 w-8 text-brand-600 mr-2" />
              <span className="font-bold text-xl text-gray-900 tracking-tight">Luis Landscape</span>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-600 hover:text-brand-600 font-medium transition-colors">Home</a>
            <a href="#services" className="text-gray-600 hover:text-brand-600 font-medium transition-colors">Services</a>
            <a href="#gallery" className="text-gray-600 hover:text-brand-600 font-medium transition-colors">Gallery</a>
            <a href="#testimonials" className="text-gray-600 hover:text-brand-600 font-medium transition-colors">Testimonials</a>
            <a href="#contact" className="bg-brand-600 text-white px-5 py-2.5 rounded-full font-medium hover:bg-brand-700 transition-colors shadow-lg flex items-center">
              <Phone className="w-4 h-4 mr-2" /> (301) 555-0123
            </a>
          </div>

          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#home" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-brand-600 hover:bg-brand-50">Home</a>
            <a href="#services" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-brand-600 hover:bg-brand-50">Services</a>
            <a href="#gallery" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-brand-600 hover:bg-brand-50">Gallery</a>
            <a href="#testimonials" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-brand-600 hover:bg-brand-50">Testimonials</a>
            <a href="#contact" onClick={() => setIsOpen(false)} className="block w-full text-center mt-4 bg-brand-600 text-white px-4 py-3 rounded-lg font-bold">
              Get Free Quote
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;