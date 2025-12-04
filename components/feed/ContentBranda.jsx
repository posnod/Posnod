'use client';
import { ChevronRight, ChevronLeft, Target, Plus, Menu } from 'lucide-react';
import useButtonCart from '@/hooks/useButtonCart';
import useDragScroll from '@/hooks/useDragScroll';
import Cart from './Cart';

const ContentBranda = ({ topics }) => {
  const { scrollRef, scrollLeft, scrollRight } = useButtonCart();
  const { scrollRefCart, onMouseDown, onMouseLeaveOrUp, onMouseMove } = useDragScroll();

  return (
    <div className='px-8'>
      <div className='flex items-center justify-between'>
        <h2 className='text-lg font-semibold flex items-center gap-2'>
          <Target size={20} /> Topik
        </h2>

        <div className='flex items-center gap-3'>
          <Plus
            size={28}
            className='cursor-pointer hover:scale-110 transition'
          />
          <Menu
            size={28}
            className='cursor-pointer hover:scale-110 transition'
          />

          {/* tombol kanan kiri */}
          <div className='flex items-center gap-3'>
            <button onClick={scrollLeft} type='button'>
              <ChevronLeft
                size={28}
                className='hover:scale-110 transition'
              />
            </button>

            <button
              onClick={scrollRight}
              type='button'
            >
              <ChevronRight
                size={28}
                className='hover:scale-110 transition'
              />
            </button>
          </div>
        </div>
      </div>

      {/* scrollable list */}
      <div
        ref={(el) => {
          scrollRef.current = el;
          scrollRefCart.current = el;
        }}
        className='flex gap-6 overflow-x-auto no-scrollbar mt-6 pb-4 '
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
