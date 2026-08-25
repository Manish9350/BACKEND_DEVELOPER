import { useRef } from 'react';
import { gsap } from '../lib/gsap';

export default function Tilt({ children, className = '', max = 10 }) {
  const wrapRef = useRef(null);
  const innerRef = useRef(null);
  const quick = useRef(null);

  const ensureQuick = () => {
    if (quick.current || !innerRef.current) return;
    quick.current = {
      rx: gsap.quickTo(innerRef.current, 'rotationX', { duration: 0.6, ease: 'power3.out' }),
      ry: gsap.quickTo(innerRef.current, 'rotationY', { duration: 0.6, ease: 'power3.out' }),
      s: gsap.quickTo(innerRef.current, 'scale', { duration: 0.6, ease: 'power3.out' }),
    };
  };

  const handleMove = (e) => {
    const el = wrapRef.current;
    if (!el) return;
    ensureQuick();
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    quick.current.rx(-py * max);
    quick.current.ry(px * max);
    quick.current.s(1.02);
  };

  const handleLeave = () => {
    if (!quick.current) return;
    quick.current.rx(0);
    quick.current.ry(0);
    quick.current.s(1);
  };

  return (
    <div ref={wrapRef} onMouseMove={handleMove} onMouseLeave={handleLeave} className={`tilt-wrap ${className}`}>
      <div ref={innerRef} className="tilt-inner h-full">
        {children}
      </div>
    </div>
  );
}
