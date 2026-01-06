'use client';

import React, { forwardRef } from 'react';

type Topic = {
  id: number;
  title: string;
  desc: string;
  color: string;
};

interface Props {
  topics: Topic[];
};

const FeedCards = forwardRef<HTMLDivElement, Props>(
  ({ topics }, ref) => {
    return (
      <div
        ref={ref}
        className="flex gap-6 overflow-x-auto scrollbar-hide"
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
