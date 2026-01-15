import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Process from './components/Process';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import AIQuoteAssistant from './components/AIQuoteAssistant';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-brand-200">
      <Navbar />
      
      <main>
        <Hero />
        <Services />
        
        {/* Why Choose Us / Trust Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-brand-900 rounded-2xl p-8 md:p-16 text-center shadow-xl relative overflow-hidden">
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Why Choose Luis Landscape?</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
                  <div className="p-4">
                    <div className="text-4xl font-bold text-green-400 mb-2">10+</div>
                    <div className="text-lg font-medium">Years Experience</div>
                  </div>
                  <div className="p-4">
                    <div className="text-4xl font-bold text-green-400 mb-2">500+</div>
                    <div className="text-lg font-medium">Happy Clients</div>
                  </div>
                  <div className="p-4">
                    <div className="text-4xl font-bold text-green-400 mb-2">100%</div>
                    <div className="text-lg font-medium">Satisfaction Guaranteed</div>
                  </div>
                </div>
              </div>
              {/* Decorative circles */}
              <div className="absolute top-0 left-0 -mt-10 -ml-10 w-40 h-40 bg-green-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
              <div className="absolute bottom-0 right-0 -mb-10 -mr-10 w-40 h-40 bg-green-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
            </div>
          </div>
        </section>

        <Gallery />
        <Process />
        <Testimonials />

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Ready to Transform Your Yard?</h2>
                <p className="text-lg text-gray-600 mb-8">
                  Contact us today for a free estimate. Whether it's a simple mow or a complete patio redesign, we're here to help.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start p-4 bg-white rounded-lg shadow-sm">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 rounded-full bg-brand-100 flex items-center justify-center text-brand-600 font-bold">1</div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-bold text-gray-900">Request a Quote</h4>
                      <p className="text-gray-600">Fill out the form or use our AI assistant to get a rough estimate.</p>
                    </div>
                  </div>
                  <div className="flex items-start p-4 bg-white rounded-lg shadow-sm">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 rounded-full bg-brand-100 flex items-center justify-center text-brand-600 font-bold">2</div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-bold text-gray-900">On-Site Visit</h4>
                      <p className="text-gray-600">We'll visit your property to confirm measurements and discuss details.</p>
                    </div>
                  </div>
                  <div className="flex items-start p-4 bg-white rounded-lg shadow-sm">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 rounded-full bg-brand-100 flex items-center justify-center text-brand-600 font-bold">3</div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-bold text-gray-900">Get Scheduled</h4>
                      <p className="text-gray-600">Approve the quote and we'll get you on the schedule immediately.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="lg:mt-0">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <AIQuoteAssistant />
    </div>
  );
};

export default App;