import React from 'react';
import { Star } from 'lucide-react';
import { Testimonial } from '../types';

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: "Sarah Jenkins",
    location: "Bethesda, MD",
    text: "Luis Landscape transformed our backyard from a mud pit into a beautiful oasis. The team was punctual, polite, and the pricing was very fair.",
    rating: 5
  },
  {
    id: '2',
    name: "Michael Torres",
    location: "Silver Spring, MD",
    text: "I've used several lawn services in Montgomery County over the years, and Luis is by far the most reliable. My lawn has never looked better.",
    rating: 5
  },
  {
    id: '3',
    name: "David Chen",
    location: "Rockville, MD",
    text: "They did an amazing job on our retaining wall. Very professional crew and they cleaned up perfectly afterward. Highly recommended!",
    rating: 5
  }
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-brand-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">What Our Neighbors Say</h2>
          <p className="text-lg text-gray-600 mt-2">Trusted by families across Maryland.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.id} className="bg-white p-8 rounded-xl shadow-md border-t-4 border-brand-500">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`w-5 h-5 ${i < t.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} />
                ))}
              </div>
              <p className="text-gray-700 italic mb-6">"{t.text}"</p>
              <div>
                <p className="font-bold text-gray-900">{t.name}</p>
                <p className="text-sm text-gray-500">{t.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;