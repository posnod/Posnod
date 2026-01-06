'use client';

import { useRef } from 'react';
import FeedActions from './FeedActions';
import FeedCards from './FeedCards';
import Base from '../icons/system/Base';

type Topic = {
  id: number;
  title: string;
  desc: string;
  color: string;
};

type Props = {
  topics: Topic[];
};

const FeedContent = ({ topics }: Props) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return;

    scrollRef.current.scrollBy({
      left: direction === 'right' ? 320 : -320,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <div className='max-w-7xl mx-auto flex justify-between items-center gap-2 mb-5 px-6'>
        <div className='flex justify-between items-center gap-4'>
          <Base />
          <h2 className='font-semibold text-2xl'>Topik</h2>
        </div>

        <FeedActions
          onLeft={() => scroll('left')}
          onRight={() => scroll('right')}
        />
      </div>

      <FeedCards
        ref={scrollRef}
        topics={topics}
      />
    </>
  );
};

export default FeedContent;
