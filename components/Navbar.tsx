import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, TreePine, Mail, MapPin, Instagram, Facebook, ArrowRight } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll for sticky navbar effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Testimonials', href: '#testimonials' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg py-2' : 'bg-white py-4'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          <div className="flex items-center">
            <a href="#home" className="flex-shrink-0 flex items-center group">
              <TreePine className="h-8 w-8 text-brand-600 transition-transform group-hover:scale-110" />
              <span className="ml-2 font-bold text-xl md:text-2xl text-gray-900 tracking-tight">Luis Landscape</span>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-600 hover:text-brand-600 font-medium transition-colors relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-brand-600 after:transition-all hover:after:w-full"
              >
                {link.name}
              </a>
            ))}
            <a href="#contact" className="bg-brand-600 text-white px-6 py-3 rounded-full font-bold hover:bg-brand-700 transition-all hover:shadow-xl hover:-translate-y-0.5 flex items-center">
              <Phone className="w-4 h-4 mr-2" /> (301) 555-0123
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(true)}
              className="inline-flex items-center justify-center p-2.5 rounded-xl text-gray-900 hover:bg-gray-100 transition-colors"
              aria-label="Open menu"
            >
              <Menu className="h-7 w-7" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-[60] md:hidden transition-all duration-500 ease-in-out ${isOpen ? 'visible' : 'invisible'
          }`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-gray-900/60 backdrop-blur-sm transition-opacity duration-500 ${isOpen ? 'opacity-100' : 'opacity-0'
            }`}
          onClick={() => setIsOpen(false)}
        />

        {/* Drawer */}
        <div
          className={`absolute right-0 top-0 h-full w-[85%] max-w-sm bg-white shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] transform ${isOpen ? 'translate-x-0' : 'translate-x-full'
            } flex flex-col`}
        >
          {/* Drawer Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-100">
            <div className="flex items-center">
              <TreePine className="h-7 w-7 text-brand-600" />
              <span className="ml-2 font-bold text-lg text-gray-900 uppercase tracking-tight">Luis Landscape</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2.5 rounded-xl text-gray-400 hover:text-gray-900 hover:bg-gray-100 transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Drawer Content */}
          <div className="flex-1 overflow-y-auto pt-10 pb-8 px-6">
            <div className="flex flex-col space-y-1">
              {navLinks.map((link, index) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`py-4 text-2xl font-bold text-gray-900 hover:text-brand-600 transition-all flex items-center justify-between group ${isOpen ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'
                    }`}
                  style={{ transitionDelay: `${index * 75}ms` }}
                >
                  {link.name}
                  <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all text-brand-600" />
                </a>
              ))}
            </div>

            {/* CTA in Drawer */}
            <div className={`mt-12 transition-all duration-700 delay-300 ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
              }`}>
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center bg-brand-600 text-white px-6 py-5 rounded-2xl font-bold text-lg shadow-lg shadow-brand-100 hover:bg-brand-700 active:scale-[0.98] transition-all"
              >
                Get Free Quote
              </a>
            </div>
          </div>

          {/* Drawer Footer */}
          <div className={`p-8 border-t border-gray-100 bg-gray-50/80 transition-all duration-700 delay-400 ${isOpen ? 'opacity-100' : 'opacity-0'
            }`}>
            <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-6">Connect With Us</p>
            <div className="space-y-5">
              <a href="tel:3015550123" className="flex items-center text-gray-700 hover:text-brand-600 font-semibold transition-colors group">
                <div className="w-10 h-10 rounded-xl bg-brand-50 flex items-center justify-center mr-4 group-hover:bg-brand-100 transition-colors">
                  <Phone className="w-5 h-5 text-brand-600" />
                </div>
                (301) 555-0123
              </a>
              <a href="mailto:info@luislandscape.com" className="flex items-center text-gray-700 hover:text-brand-600 font-semibold transition-colors group">
                <div className="w-10 h-10 rounded-xl bg-brand-50 flex items-center justify-center mr-4 group-hover:bg-brand-100 transition-colors">
                  <Mail className="w-5 h-5 text-brand-600" />
                </div>
                info@luislandscape.com
              </a>
              <div className="flex items-center text-gray-700 font-semibold">
                <div className="w-10 h-10 rounded-xl bg-brand-50 flex items-center justify-center mr-4">
                  <MapPin className="w-5 h-5 text-brand-600" />
                </div>
                Maryland, USA
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 mt-10">
              <a href="#" className="w-12 h-12 rounded-2xl bg-white shadow-sm border border-gray-100 flex items-center justify-center text-gray-500 hover:text-brand-600 hover:border-brand-100 hover:shadow-md transition-all">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="w-12 h-12 rounded-2xl bg-white shadow-sm border border-gray-100 flex items-center justify-center text-gray-500 hover:text-brand-600 hover:border-brand-100 hover:shadow-md transition-all">
                <Facebook className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;