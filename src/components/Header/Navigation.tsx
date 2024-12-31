import React from 'react';

const Navigation = () => {

  const popLoginPage = () => {
    window.open('/login', '_blank', 'width=400,height=600');
  }

  return (
    <nav className="flex items-center gap-6">
      <a href="#" className="text-gray-600 hover:text-gray-900">Explore</a>
      <a href="#" className="text-gray-600 hover:text-gray-900">Find Work</a>
      <button onClick={popLoginPage} className="bg-teal-500 text-white px-4 py-2 rounded-lg hover:bg-teal-600">
        登录
      </button>
    </nav>
  );
};

export default Navigation;