import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from '../lib/gsap';
import { profile, tickerItems } from '../data';
import Marquee from './Marquee';
import Magnetic from './Magnetic';

export default function Hero() {
  const sectionRef = useRef(null);
  const glowRef = useRef(null);
  const glowInnerRef = useRef(null);
  const badgeRef = useRef(null);
  const titleRef = useRef(null);
  const rowRef = useRef(null);
  const contentRef = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.from(badgeRef.current, { opacity: 0, y: 16, duration: 0.6 })
        .from(
          titleRef.current.children,
          { opacity: 0, y: 60, rotateX: -40, transformOrigin: '50% 100%', stagger: 0.12, duration: 0.8 },
          '-=0.3'
        )
        .from(rowRef.current, { opacity: 0, y: 20, duration: 0.6 }, '-=0.4');

      gsap.to(glowRef.current, {
        y: 160,
        ease: 'none',
        scrollTrigger: { trigger: sectionRef.current, start: 'top top', end: 'bottom top', scrub: 1 },
      });

      gsap.to(contentRef.current, {
        y: -60,
        scale: 0.94,
        opacity: 0.4,
        ease: 'none',
        scrollTrigger: { trigger: sectionRef.current, start: 'top top', end: 'bottom top', scrub: 1 },
      });

      if (window.matchMedia('(pointer: fine)').matches) {
        const setGlowX = gsap.quickTo(glowInnerRef.current, 'x', { duration: 0.8, ease: 'power3.out' });
        const setGlowY = gsap.quickTo(glowInnerRef.current, 'y', { duration: 0.8, ease: 'power3.out' });

        const handleMove = (e) => {
          const rect = sectionRef.current.getBoundingClientRect();
          setGlowX((e.clientX - rect.left - rect.width / 2) * 0.15);
          setGlowY((e.clientY - rect.top) * 0.1);
        };

        sectionRef.current.addEventListener('mousemove', handleMove);
        return () => sectionRef.current?.removeEventListener('mousemove', handleMove);
      }
    },
    { scope: sectionRef }
  );

  return (
    <section id="top" ref={sectionRef} className="relative overflow-hidden pt-32">
      <div
        ref={glowRef}
        className="pointer-events-none absolute -top-40 left-1/2 h-[560px] w-[560px] -translate-x-1/2 rounded-full opacity-25 blur-3xl"
      >
        <div
          ref={glowInnerRef}
          className="h-full w-full rounded-full"
          style={{ background: 'radial-gradient(circle, #cbfe4b 0%, transparent 70%)' }}
        />
      </div>

      <div ref={contentRef} className="relative mx-auto max-w-6xl px-6" style={{ transformStyle: 'preserve-3d' }}>
        <p ref={badgeRef} className="mb-6 flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-gray-400">
          <span className="h-2 w-2 rounded-full bg-accent" />
          Available for backend roles &mdash; {profile.location}
        </p>

        <h1 ref={titleRef} className="hero-title text-[15vw] sm:text-[9vw] lg:text-[7.5vw]" style={{ perspective: 800 }}>
          <span className="block">{profile.name}</span>
          <span className="block">
            <em>Backend</em> Developer
          </span>
        </h1>

        <div ref={rowRef} className="mt-8 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <p className="max-w-md text-lg text-gray-400">{profile.tagline}</p>

          <div className="flex flex-wrap gap-3">
            <Magnetic>
              <a
                href="#projects"
                className="btn-accent block rounded-full px-6 py-3 text-sm font-bold uppercase tracking-wide"
              >
                View Work
              </a>
            </Magnetic>
            <Magnetic>
              <a
                href="#contact"
                className="block rounded-full border border-white/20 px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:border-accent hover:text-accent"
              >
                Contact
              </a>
            </Magnetic>
          </div>
        </div>
      </div>

      <div className="relative mt-16">
        <Marquee items={tickerItems} />
      </div>
    </section>
  );
}
