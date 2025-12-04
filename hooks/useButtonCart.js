import { useRef } from 'react';

const useButtonCart = () => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
  };
  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
  };

  return {
    scrollRef,
    scrollLeft,
    scrollRight,
  };
}

export default useButtonCart;