import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const features = [
  {
    title: 'Expert Recruitment',
    description: 'We match you with qualified professionals based on your project requirements.',
  },
  {
    title: 'Satisfaction Guarantee',
    description: 'Work with confidence knowing your satisfaction is our priority.',
  },
  {
    title: 'Advanced Management Tools',
    description: 'Seamlessly manage teams and projects with our comprehensive toolkit.',
  },
  {
    title: 'Flexible Payment Options',
    description: 'Choose milestone or hourly payments to support long-term collaboration.',
  },
];

const FeatureList = () => {
  return (
    <div className="space-y-6">
      {features.map((feature) => (
        <div key={feature.title} className="flex gap-4">
          <CheckCircle2 className="text-emerald-500 flex-shrink-0" size={24} />
          <div>
            <h3 className="font-semibold mb-1">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeatureList;