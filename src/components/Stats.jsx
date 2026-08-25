import { useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from '../lib/gsap';
import Reveal from './Reveal';
import { stats } from '../data';

function parseValue(value) {
  const match = value.match(/^(\d+)(.*)$/);
  return match ? { num: Number(match[1]), suffix: match[2] } : { num: 0, suffix: value };
}

function StatNumber({ value }) {
  const { num, suffix } = parseValue(value);
  const [display, setDisplay] = useState(0);
  const ref = useRef(null);

  useGSAP(() => {
    const counter = { val: 0 };
    gsap.to(counter, {
      val: num,
      duration: 1.4,
      ease: 'power2.out',
      onUpdate: () => setDisplay(Math.round(counter.val)),
      scrollTrigger: {
        trigger: ref.current,
        start: 'top 85%',
        once: true,
      },
    });
  }, { scope: ref });

  return (
    <p ref={ref} className="stat-num text-accent text-5xl sm:text-6xl">
      {display}
      {suffix}
    </p>
  );
}

export default function Stats() {
  return (
    <section className="border-y border-white/10 bg-[#111112] px-6 py-16">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 sm:grid-cols-4">
        {stats.map((stat, i) => (
          <Reveal key={stat.label} delay={i * 0.08} className="text-center sm:text-left">
            <StatNumber value={stat.value} />
            <p className="mt-2 text-sm text-gray-400">{stat.label}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
