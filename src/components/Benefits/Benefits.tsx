import React from 'react';
import { Grid3X3, RefreshCcw, Zap, DollarSign } from 'lucide-react';
import BenefitCard from './BenefitCard';

const benefits = [
  {
    icon: <Grid3X3 size={32} />,
    title: 'Access to 700+ Professional Categories',
    description: 'Find top talent across hundreds of specialized fields'
  },
  {
    icon: <RefreshCcw size={32} />,
    title: 'Simple & User-Friendly Experience',
    description: 'Enjoy a seamless platform designed for efficiency'
  },
  {
    icon: <Zap size={32} />,
    title: 'High-Quality Work Delivery',
    description: 'Get outstanding results within your budget and timeline'
  },
  {
    icon: <DollarSign size={32} />,
    title: 'Pay Only for Quality Results',
    description: 'Fair pricing model based on successful delivery'
  }
];

const Benefits = () => {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Make it happen with freelancers
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit) => (
            <BenefitCard key={benefit.title} {...benefit} />
          ))}
        </div>
        <div className="text-center mt-12">
          <button className="bg-gray-900 text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors">
            Join Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Benefits;