import React from 'react';
import { MessageSquare, ClipboardCheck, Smile } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Request a Quote',
    description: 'Fill out our simple online form or chat with our AI assistant to get a rough estimate in minutes.',
    icon: <MessageSquare className="w-8 h-8 text-white" />
  },
  {
    number: '02',
    title: 'Expert Consultation',
    description: 'We visit your property to confirm measurements, discuss your vision, and finalize the plan.',
    icon: <ClipboardCheck className="w-8 h-8 text-white" />
  },
  {
    number: '03',
    title: 'Enjoy Your Yard',
    description: 'Our professional crew gets to work, delivering top-quality results so you can relax and enjoy.',
    icon: <Smile className="w-8 h-8 text-white" />
  }
];

const Process: React.FC = () => {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-brand-600 font-semibold tracking-wide uppercase text-sm mb-2">How It Works</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900">Simple 3-Step Process</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connector Line (Desktop only) */}
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gray-100 -z-10"></div>

          {steps.map((step, index) => (
            <div key={index} className="relative flex flex-col items-center text-center group">
              <div className="w-24 h-24 bg-brand-600 rounded-2xl rotate-3 flex items-center justify-center shadow-lg mb-8 group-hover:rotate-6 transition-transform duration-300 border-4 border-white ring-1 ring-gray-100">
                <div className="-rotate-3 group-hover:-rotate-6 transition-transform duration-300">
                    {step.icon}
                </div>
              </div>
              
              <div className="px-4">
                  <h4 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
             <a href="#contact" className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-brand-600 hover:bg-brand-700 md:py-4 md:text-lg md:px-10 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Start Your Project Now
             </a>
        </div>
      </div>
    </section>
  );
};

export default Process;