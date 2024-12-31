import React from 'react';
import { Briefcase } from 'lucide-react';

const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <Briefcase className="text-teal-500" size={24} />
      <span className="text-xl font-bold">FreelanceHub</span>
    </div>
  );
};

export default Logo;