import React from 'react';
import FooterColumn from './FooterColumn';
import { footerData } from './footerData';

const Footer = () => {
  return (
    <footer className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {footerData.map((column) => (
            <FooterColumn 
              key={column.title} 
              title={column.title} 
              links={column.links} 
            />
          ))}
        </div>
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-center text-gray-500 text-sm">
            © 2024 FreelanceHub. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;