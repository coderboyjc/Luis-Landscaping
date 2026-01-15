import React from 'react';
import { Shovel, Flower2, Scissors, Sun, Ruler, Droplets } from 'lucide-react';
import { ServiceItem } from '../types';

const services: ServiceItem[] = [
  {
    id: 'mowing',
    title: 'Lawn Mowing & Maintenance',
    description: 'Weekly or bi-weekly mowing, trimming, and edging to keep your grass healthy and sharp.',
    icon: 'scissors'
  },
  {
    id: 'hardscaping',
    title: 'Hardscaping & Patios',
    description: 'Custom stone patios, walkways, and retaining walls designed to last.',
    icon: 'ruler'
  },
  {
    id: 'mulching',
    title: 'Mulching & Flower Beds',
    description: 'Premium mulch installation and bed edging to protect plants and enhance curb appeal.',
    icon: 'shovel'
  },
  {
    id: 'cleanup',
    title: 'Seasonal Cleanup',
    description: 'Spring and fall leaf removal and debris cleanup to prepare your yard for the season.',
    icon: 'sun'
  },
  {
    id: 'planting',
    title: 'Tree & Shrub Planting',
    description: 'Expert selection and planting of native Maryland species that thrive in our climate.',
    icon: 'flower'
  },
  {
    id: 'drainage',
    title: 'Drainage Solutions',
    description: 'Fix standing water issues with french drains, grading, and dry creek beds.',
    icon: 'droplets'
  }
];

const IconMap: Record<string, React.ReactNode> = {
  scissors: <Scissors className="w-8 h-8" />,
  ruler: <Ruler className="w-8 h-8" />,
  shovel: <Shovel className="w-8 h-8" />,
  sun: <Sun className="w-8 h-8" />,
  flower: <Flower2 className="w-8 h-8" />,
  droplets: <Droplets className="w-8 h-8" />
};

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-brand-600 font-semibold tracking-wide uppercase text-sm mb-2">Our Expertise</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Complete Landscape Solutions</h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From routine maintenance to complete transformations, we treat every property like it's our own.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow p-8 border border-gray-100 group">
              <div className="w-14 h-14 bg-brand-50 rounded-lg flex items-center justify-center text-brand-600 mb-6 group-hover:bg-brand-600 group-hover:text-white transition-colors">
                {IconMap[service.icon]}
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h4>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;