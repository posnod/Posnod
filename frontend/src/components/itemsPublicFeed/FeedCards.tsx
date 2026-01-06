'use client';

import React, { forwardRef, useRef } from 'react';

type Topic = {
  id: number;
  title: string;
  desc: string;
  color: string;
};

interface Props {
  topics: Topic[];
}

const FeedCards = forwardRef<HTMLDivElement, Props>(
  ({ topics }, externalRef) => {
    const isDown = useRef(false);
    const startX = useRef(0);
    const scrollLeft = useRef(0);

    const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
      isDown.current = true;
      startX.current = e.pageX - e.currentTarget.offsetLeft;
      scrollLeft.current = e.currentTarget.scrollLeft;
    };

    const handleMouseLeave = () => {
      isDown.current = false;
    };

    const handleMouseUp = () => {
      isDown.current = false;
    };

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
      if (!isDown.current) return;
      e.preventDefault();

      const x = e.pageX - e.currentTarget.offsetLeft;
      const walk = (x - startX.current) * 1.2; // speed
      e.currentTarget.scrollLeft = scrollLeft.current - walk;
    };

    return (
      <div
        ref={externalRef}
        className="flex gap-6 overflow-x-auto scrollbar-hide select-none"
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        {topics.map((item) => (
          <div
            key={item.id}
            className="min-w-80 h-99 bg-gray-200 rounded-2xl p-6 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className={`w-8 h-8 rounded-full ${item.color}`} />
                <span className="text-sm font-medium">{item.title}</span>
              </div>

              <p className="text-lg font-semibold leading-relaxed">
                {item.desc}
              </p>
            </div>

            <button className="mt-6 bg-white rounded-full px-4 py-2 text-sm flex items-center justify-between">
              Memahami emosi, Kepribadian ...
              <span className="ml-2">→</span>
            </button>
          </div>
        ))}
      </div>
    );
  }
);


export default FeedCards;
