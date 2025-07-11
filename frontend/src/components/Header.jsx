// frontend/src/components/Header.jsx

import React from 'react';

const Header = () => {
  return (
    <header className="bg-gray-900 text-white shadow-md p-4 flex items-center justify-center">
      <h1 className="text-3xl font-bold tracking-wider">
        Echo<span className="text-green-400">!</span>
      </h1>
    </header>
  );
};

export default Header;