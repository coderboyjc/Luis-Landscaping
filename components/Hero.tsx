import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div id="home" className="relative pt-32 pb-20 md:pt-32 md:pb-24 flex items-center min-h-[100dvh] md:min-h-[85vh] bg-white overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <picture>
          <source media="(min-width: 768px)" srcSet="/images/pexels-pixabay-280222.jpg" />
          <img
            src="/images/pexels-maksgelatin-4596639.jpg"
            alt="Beautiful landscaped lawn in Maryland"
            className="w-full h-full object-cover"
          />
        </picture>
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/95 to-green-800/70"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="lg:w-2/3">
          <div className="inline-flex items-center px-3 py-1 rounded-full border border-green-400 bg-green-900/50 text-green-100 text-sm font-medium mb-6 backdrop-blur-sm">
            <span className="flex h-2 w-2 rounded-full bg-green-400 mr-2"></span>
            Now booking for Spring Cleanup
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight mb-6">
            Transform Your Yard Into a <span className="text-green-400">Maryland Masterpiece</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-100 mb-8 max-w-2xl leading-relaxed">
            Reliable, professional, and licensed landscaping services for residential and commercial properties. Serving Montgomery, Howard, and Prince George's counties.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#contact" className="inline-flex justify-center items-center px-8 py-4 border border-transparent text-lg font-bold rounded-lg text-brand-900 bg-white hover:bg-gray-50 transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
              Get Free Quote
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <a href="#services" className="inline-flex justify-center items-center px-8 py-4 border-2 border-green-400/50 text-lg font-semibold rounded-lg text-white hover:bg-green-800/50 transition-all backdrop-blur-sm">
              View Services
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-y-4 gap-x-8 text-white/90 font-medium text-sm md:text-base">
            <div className="flex items-center"><CheckCircle className="w-5 h-5 text-green-400 mr-2" /> Licensed & Insured</div>
            <div className="flex items-center"><CheckCircle className="w-5 h-5 text-green-400 mr-2" /> 5-Star Rated</div>
            <div className="flex items-center"><CheckCircle className="w-5 h-5 text-green-400 mr-2" /> Free Estimates</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;