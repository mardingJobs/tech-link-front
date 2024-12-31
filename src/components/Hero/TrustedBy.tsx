import React from 'react';

const TrustedBy = () => {
  return (
    <div className="mt-12">
      <p className="text-gray-300 mb-4">Trusted by:</p>
      <div className="flex items-center gap-8">
        <img src="https://upload.wikimedia.org/wikipedia/commons/0/05/Meta_Platforms_Inc._logo.svg" 
             alt="Meta" className="h-8 opacity-75" />
        <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" 
             alt="Google" className="h-8 opacity-75" />
        <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" 
             alt="Netflix" className="h-8 opacity-75" />
        <img src="https://upload.wikimedia.org/wikipedia/commons/8/81/PayPal_Logo.svg" 
             alt="PayPal" className="h-8 opacity-75" />
      </div>
    </div>
  );
};

export default TrustedBy;