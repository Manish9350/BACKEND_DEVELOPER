import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const dotRef = useRef(null);

  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return;

    const dot = dotRef.current;

    const handleMove = (e) => {
      dot.style.opacity = '1';
      dot.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
    };

    window.addEventListener('mousemove', handleMove);
    document.body.classList.add('custom-cursor');

    return () => {
      window.removeEventListener('mousemove', handleMove);
      document.body.classList.remove('custom-cursor');
    };
  }, []);

  if (typeof window === 'undefined' || !window.matchMedia('(pointer: fine)').matches) {
    return null;
  }

  return <div ref={dotRef} className="cursor-dot" />;
}
