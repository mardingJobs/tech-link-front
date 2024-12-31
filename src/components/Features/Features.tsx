import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import FeatureImage from './FeatureImage';
import FeatureList from './FeatureList';

const Features = () => {
  return (
    <div className="bg-emerald-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-8">
              Professional Solutions for{' '}
              <span className="text-emerald-500">Business Growth</span>
            </h2>
            <FeatureList />
            <button className="mt-8 bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors">
              Try Now
            </button>
          </div>
          <FeatureImage />
        </div>
      </div>
    </div>
  );
};

export default Features;