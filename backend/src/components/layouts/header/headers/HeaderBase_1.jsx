import React from 'react';

const HeaderBase = ({ Left, Center, Right }) => {
  return (
    <header className="max-w-full h-25 bg-white border-b border-dark">
      <div>
        <div>
          {Left}
        </div>
        <div>
          {Center}
        </div>
        <div>
          {Right}
        </div>
      </div>
    </header>
  );
};

export default HeaderBase;