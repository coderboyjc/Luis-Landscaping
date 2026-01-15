import React from 'react';
import { TreePine, Phone, Mail, MapPin, Facebook, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div>
            <div className="flex items-center mb-4">
              <TreePine className="h-8 w-8 text-green-500 mr-2" />
              <span className="font-bold text-xl tracking-tight">Luis Landscape</span>
            </div>
            <p className="text-gray-400 mb-6">
              Professional landscaping services dedicated to making Maryland beautiful, one yard at a time.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Facebook className="w-6 h-6" /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Instagram className="w-6 h-6" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4 border-b border-gray-800 pb-2 inline-block">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="text-gray-400 hover:text-green-400 transition-colors">Home</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-green-400 transition-colors">Services</a></li>
              <li><a href="#gallery" className="text-gray-400 hover:text-green-400 transition-colors">Gallery</a></li>
              <li><a href="#testimonials" className="text-gray-400 hover:text-green-400 transition-colors">Testimonials</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-green-400 transition-colors">Get Quote</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-4 border-b border-gray-800 pb-2 inline-block">Services</h4>
            <ul className="space-y-3">
              <li className="text-gray-400">Lawn Mowing</li>
              <li className="text-gray-400">Mulching & Edging</li>
              <li className="text-gray-400">Patio Installation</li>
              <li className="text-gray-400">Retaining Walls</li>
              <li className="text-gray-400">Seasonal Cleanup</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-4 border-b border-gray-800 pb-2 inline-block">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone className="w-5 h-5 text-green-500 mr-3 mt-1" />
                <span className="text-gray-400">(301) 555-0123</span>
              </li>
              <li className="flex items-start">
                <Mail className="w-5 h-5 text-green-500 mr-3 mt-1" />
                <span className="text-gray-400">info@luislandscape.com</span>
              </li>
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-green-500 mr-3 mt-1" />
                <span className="text-gray-400">Silver Spring, MD<br/>Serving Montgomery & PG Counties</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Luis Landscape. All rights reserved.</p>
          <div className="mt-4 md:mt-0">
            <span className="mr-4">MHIC #123456</span>
            <span>Licensed & Insured</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;