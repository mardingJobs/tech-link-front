import React from 'react';
import { Search } from 'lucide-react';
import Navigation from './Navigation';
import Logo from './Logo';

const Header = () => {
  return (
    <header className="border-b">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <Logo />
        <Navigation />
      </div>
    </header>
  );
};

export default Header;