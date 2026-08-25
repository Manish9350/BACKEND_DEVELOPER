import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from '../lib/gsap';

export default function SplitHeading({ text, as: Tag = 'h2', className = '' }) {
  const ref = useRef(null);
  const words = text.split(' ');

  useGSAP(
    () => {
      gsap.from(ref.current.querySelectorAll('.word > span'), {
        yPercent: 110,
        opacity: 0,
        duration: 0.7,
        ease: 'power4.out',
        stagger: 0.06,
        scrollTrigger: { trigger: ref.current, start: 'top 85%', once: true },
      });
    },
    { scope: ref }
  );

  return (
    <Tag ref={ref} className={className}>
      {words.map((word, i) => (
        <span className="word" key={i}>
          <span>
            {word}
            {i < words.length - 1 ? ' ' : ''}
          </span>
        </span>
      ))}
    </Tag>
  );
}
