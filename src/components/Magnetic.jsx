import { useRef } from 'react';
import { gsap } from '../lib/gsap';

export default function Magnetic({ children, className = '', strength = 0.35 }) {
  const ref = useRef(null);
  const quick = useRef(null);

  const ensureQuick = () => {
    if (quick.current || !ref.current) return;
    quick.current = {
      x: gsap.quickTo(ref.current, 'x', { duration: 0.5, ease: 'power3.out' }),
      y: gsap.quickTo(ref.current, 'y', { duration: 0.5, ease: 'power3.out' }),
    };
  };

  const handleMove = (e) => {
    const el = ref.current;
    if (!el) return;
    ensureQuick();
    const rect = el.getBoundingClientRect();
    quick.current.x((e.clientX - rect.left - rect.width / 2) * strength);
    quick.current.y((e.clientY - rect.top - rect.height / 2) * strength);
  };

  const handleLeave = () => {
    if (!quick.current) return;
    quick.current.x(0);
    quick.current.y(0);
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={`inline-block will-change-transform ${className}`}
    >
      {children}
    </div>
  );
}
