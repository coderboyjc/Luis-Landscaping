import React from 'react';

const projects = [
  { id: 1, title: "Paver Patio in Bethesda", img: "https://picsum.photos/600/400?random=1" },
  { id: 2, title: "Lawn Renovation in Silver Spring", img: "https://picsum.photos/600/400?random=2" },
  { id: 3, title: "Retaining Wall in Rockville", img: "https://picsum.photos/600/400?random=3" },
  { id: 4, title: "Garden Design in Columbia", img: "https://picsum.photos/600/400?random=4" },
  { id: 5, title: "Spring Cleanup in Hyattsville", img: "https://picsum.photos/600/400?random=5" },
  { id: 6, title: "Walkway Installation in Laurel", img: "https://picsum.photos/600/400?random=6" },
];

const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div className="mb-4 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Recent Projects</h2>
            <p className="text-lg text-gray-600 mt-2">See the quality of our craftsmanship.</p>
          </div>
          <a href="#contact" className="text-brand-600 font-semibold hover:text-brand-700 flex items-center">
            Start Your Project &rarr;
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div key={project.id} className="group relative overflow-hidden rounded-xl shadow-lg cursor-pointer">
              <img 
                src={project.img} 
                alt={project.title} 
                className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-6">
                  <p className="text-white font-bold text-lg">{project.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;