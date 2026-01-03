import React from 'react';

const Container = ({ children, className = '' }) => {
  return (
    <div className={`mx-auto w-7xl ${className}`}>
      {children}
    </div>
  );
};

export default Container;