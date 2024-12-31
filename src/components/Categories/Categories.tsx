import React from 'react';
import { Monitor, PenTool, BarChart3, Languages, Video, Brain, Music, Briefcase, LineChart } from 'lucide-react';

const categories = [
  { icon: <Monitor size={24} />, name: 'Programming & Tech' },
  { icon: <PenTool size={24} />, name: 'Graphics & Design' },
  { icon: <BarChart3 size={24} />, name: 'Digital Marketing' },
  { icon: <Languages size={24} />, name: 'Writing & Translation' },
  { icon: <Video size={24} />, name: 'Video & Animation' },
  { icon: <Brain size={24} />, name: 'AI Services' },
  { icon: <Music size={24} />, name: 'Music & Audio' },
  { icon: <Briefcase size={24} />, name: 'Business' },
  { icon: <LineChart size={24} />, name: 'Consulting' },
];

const Categories = () => {
  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-4">
          {categories.map((category) => (
            <a
              key={category.name}
              href="#"
              className="flex flex-col items-center p-4 bg-white rounded-lg hover:shadow-md transition-shadow"
            >
              <div className="text-gray-600 mb-2">{category.icon}</div>
              <span className="text-sm text-center text-gray-700">{category.name}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;