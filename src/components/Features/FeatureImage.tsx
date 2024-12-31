import React from 'react';

const FeatureImage = () => {
  return (
    <div className="relative">
      <img
        src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80"
        alt="Professional collaboration"
        className="rounded-lg shadow-xl"
      />
      <div className="absolute -top-4 -right-4 bg-white rounded-lg shadow-lg p-4">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
          <span className="text-sm font-medium">92% Success Rate</span>
        </div>
      </div>
      <div className="absolute bottom-4 left-4 bg-white rounded-lg shadow-lg p-4">
        <div className="flex items-center gap-2">
          <div className="h-8 w-1 bg-emerald-500 rounded-full"></div>
          <div>
            <div className="text-sm font-medium">Project Growth</div>
            <div className="text-xs text-gray-500">Jan - May 2024</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureImage;