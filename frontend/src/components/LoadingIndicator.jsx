// frontend/src/components/LoadingIndicator.jsx

import React from 'react';

const LoadingIndicator = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-gray-900 bg-opacity-75 z-50">
      <div className="w-16 h-16 border-4 border-dashed border-green-400 border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
};

export default LoadingIndicator;