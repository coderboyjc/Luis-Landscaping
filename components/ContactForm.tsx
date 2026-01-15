import React, { useState } from 'react';
import { Send } from 'lucide-react';

const ContactForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
      setSubmitted(true);
    }, 1000);
  };

  if (submitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center h-full flex flex-col justify-center items-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
          <Send className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h3>
        <p className="text-gray-600">Thanks for contacting Luis Landscape. We'll be in touch within 24 hours to schedule your free estimate.</p>
        <button 
          onClick={() => setSubmitted(false)}
          className="mt-6 text-brand-600 font-medium hover:text-brand-700 underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-white rounded-xl shadow-lg p-8">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
        <input type="text" id="name" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-colors" placeholder="John Doe" />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
          <input type="tel" id="phone" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-colors" placeholder="(301) 555-0123" />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
          <input type="email" id="email" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-colors" placeholder="john@example.com" />
        </div>
      </div>

      <div>
        <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">Service Interested In</label>
        <select id="service" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-colors bg-white">
          <option value="">Select a service...</option>
          <option value="mowing">Lawn Mowing & Maintenance</option>
          <option value="hardscaping">Patios & Hardscaping</option>
          <option value="cleanup">Spring/Fall Cleanup</option>
          <option value="mulch">Mulching</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Project Details</label>
        <textarea id="message" rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-colors" placeholder="Tell us about your yard..."></textarea>
      </div>

      <button type="submit" className="w-full bg-brand-600 text-white font-bold text-lg py-4 rounded-lg hover:bg-brand-700 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
        Request Free Estimate
      </button>
      
      <p className="text-xs text-gray-500 text-center mt-4">
        By submitting this form, you agree to receive communications from Luis Landscape. Your information is kept private.
      </p>
    </form>
  );
};

export default ContactForm;