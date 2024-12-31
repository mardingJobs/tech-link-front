import React from 'react';

const services = [
  {
    title: 'Website Development',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=500&q=80',
    backgroundColor: 'bg-emerald-800',
  },
  {
    title: 'Logo Design',
    image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=500&q=80',
    backgroundColor: 'bg-orange-500',
  },
  {
    title: 'SEO',
    image: 'https://images.unsplash.com/photo-1571721795195-a2ca2d3370a9?auto=format&fit=crop&w=500&q=80',
    backgroundColor: 'bg-emerald-800',
  },
  {
    title: 'Architecture & Interior Design',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=500&q=80',
    backgroundColor: 'bg-purple-900',
  },
  {
    title: 'Social Media Marketing',
    image: 'https://images.unsplash.com/photo-1611926653458-09294b3142bf?auto=format&fit=crop&w=500&q=80',
    backgroundColor: 'bg-olive-700',
  },
  {
    title: 'Voice Over',
    image: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=500&q=80',
    backgroundColor: 'bg-brown-900',
  },
];

const PopularServices = () => {
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Popular services</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {services.map((service) => (
            <a
              key={service.title}
              href="#"
              className="group relative rounded-lg overflow-hidden aspect-square"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover"
              />
              <div className={`absolute inset-0 ${service.backgroundColor} opacity-80`}></div>
              <div className="absolute inset-0 p-4 flex items-end">
                <h3 className="text-white font-semibold group-hover:underline">
                  {service.title}
                </h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularServices;