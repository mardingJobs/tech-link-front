import React from 'react';
import SearchBar from './SearchBar';
import TrustedBy from './TrustedBy';

const Hero = () => {
  return (
    <div className="bg-emerald-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="max-w-3xl mb-8">
          <h1 className="text-5xl font-bold mb-6">
            Scale your professional workforce with{' '}
            <span className="italic">freelancers</span>
          </h1>
          <SearchBar />
        </div>
        <TrustedBy />
      </div>
    </div>
  );
};

export default Hero;