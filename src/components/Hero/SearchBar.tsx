import React from 'react';
import { Search } from 'lucide-react';

const SearchBar = () => {
  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Search for any service..."
        className="w-full px-4 py-3 pr-12 rounded-lg text-gray-900"
      />
      <button className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-emerald-900 rounded-lg">
        <Search className="text-white" size={20} />
      </button>
    </div>
  );
};

export default SearchBar;