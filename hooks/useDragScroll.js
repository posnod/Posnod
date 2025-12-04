import { useRef } from "react";

export default function useDragScroll() {
  const scrollRefCart = useRef(null);

  const onMouseDown = (e) => {
    const slider = scrollRefCart.current;
    if (!slider) return;

    slider.isDown = true;
    slider.startX = e.pageX - slider.offsetLeft;
    slider.scrollLeftStart = slider.scrollLeft;
  };

  const onMouseLeaveOrUp = () => {
    const slider = scrollRefCart.current;
    if (!slider) return;
    slider.isDown = false;
  };

  const onMouseMove = (e) => {
    const slider = scrollRefCart.current;
    if (!slider || !slider.isDown) return;

    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - slider.startX) * 1.2;
    slider.scrollLeft = slider.scrollLeftStart - walk;
  };

  return {
    scrollRefCart,
    onMouseDown,
    onMouseLeaveOrUp,
    onMouseMove,
  };
}
