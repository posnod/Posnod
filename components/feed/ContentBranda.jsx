'use client';
import { ChevronRight, ChevronLeft, Target, Plus, Menu } from 'lucide-react';
import useButtonCart from '@/hooks/useButtonCart';
import useDragScroll from '@/hooks/useDragScroll';
import Cart from './Cart';

const ContentBranda = ({ topics }) => {
  const { scrollRef, scrollLeft, scrollRight } = useButtonCart();
  const { scrollRefCart, onMouseDown, onMouseLeaveOrUp, onMouseMove } = useDragScroll();

  return (
    <div className='px-4 md:px-8'>
      {/* Header */}
      <div className='flex items-center justify-between flex-wrap gap-3'>
        <h2 className='text-base md:text-lg font-semibold flex items-center gap-2'>
          <Target size={20} /> Topik
        </h2>

        <div className='flex items-center gap-3'>
          <Plus
            size={26}
            className='cursor-pointer hover:scale-110 transition'
          />
          <Menu
            size={26}
            className='cursor-pointer hover:scale-110 transition'
          />

          {/* Arrow Nav (hidden on small screen) */}
          <div className='hidden sm:flex items-center gap-3'>
            <button
              onClick={scrollLeft}
              type='button'
            >
              <ChevronLeft
                size={26}
                className='hover:scale-110 transition'
              />
            </button>
            <button
              onClick={scrollRight}
              type='button'
            >
              <ChevronRight
                size={26}
                className='hover:scale-110 transition'
              />
            </button>
          </div>
        </div>
      </div>

      {/* Scroll List */}
      <div
        ref={(el) => {
          scrollRef.current = el;
          scrollRefCart.current = el;
        }}
        className='flex gap-4 sm:gap-6 overflow-x-auto no-scrollbar mt-5 sm:mt-6 pb-4'
        onMouseDown={onMouseDown}
        onMouseUp={onMouseLeaveOrUp}
        onMouseLeave={onMouseLeaveOrUp}
        onMouseMove={onMouseMove}
      >
        {topics.map((item, idx) => (
          <Cart
            key={idx}
            item={item}
          />
        ))}
      </div>
    </div>
  );
};

export default ContentBranda;
