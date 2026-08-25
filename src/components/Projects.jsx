import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from '../lib/gsap';
import Reveal from './Reveal';
import SplitHeading from './SplitHeading';
import { profile, projects } from '../data';

export default function Projects() {
  const containerRef = useRef(null);
  const trackRef = useRef(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add('(min-width: 768px)', () => {
        const track = trackRef.current;
        const container = containerRef.current;
        const cards = gsap.utils.toArray('.h-card', track);
        const getDistance = () => track.scrollWidth - container.offsetWidth;

        const applyDepth = () => {
          const center = window.innerWidth / 2;
          cards.forEach((card) => {
            const rect = card.getBoundingClientRect();
            const delta = gsap.utils.clamp(-1, 1, (rect.left + rect.width / 2 - center) / center);
            gsap.set(card, {
              rotateY: delta * -16,
              scale: 1 - Math.abs(delta) * 0.12,
              opacity: 1 - Math.abs(delta) * 0.45,
            });
          });
        };

        const tween = gsap.to(track, {
          x: () => -getDistance(),
          ease: 'none',
          scrollTrigger: {
            trigger: container,
            start: 'top top',
            end: () => '+=' + getDistance(),
            scrub: 1,
            pin: true,
            invalidateOnRefresh: true,
            onUpdate: applyDepth,
            onRefresh: applyDepth,
          },
        });

        applyDepth();

        return () => tween.scrollTrigger?.kill();
      });

      return () => mm.revert();
    },
    { scope: containerRef, dependencies: [] }
  );

  return (
    <section id="projects" className="bg-[#111112] py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-14 flex flex-col gap-2 border-b border-white/10 pb-6 sm:flex-row sm:items-end sm:justify-between">
          <SplitHeading as="h2" text="Projects" className="hero-title text-4xl sm:text-5xl" />
          <Reveal className="flex items-center gap-3 text-sm font-semibold uppercase tracking-widest text-gray-500">
            <span className="text-accent">04</span>
            Selected Work
          </Reveal>
        </div>
      </div>

      <div ref={containerRef} className="relative overflow-hidden md:h-screen">
        <div
          ref={trackRef}
          className="h-rail flex snap-x snap-mandatory gap-6 overflow-x-auto px-6 pb-4 md:h-full md:snap-none md:items-center md:overflow-visible md:px-[8vw] md:pb-0"
        >
          {projects.map((project, i) => (
            <a
              key={project.name}
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="h-card card-hard group flex w-[85vw] shrink-0 snap-center flex-col rounded-2xl p-6 text-left transition-colors sm:w-[70vw] md:w-[480px] md:p-8 lg:w-[540px]"
            >
              <div className="mb-4 flex items-start justify-between gap-2">
                <span className="text-accent stat-num text-4xl">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="flex items-center gap-3 text-xs font-semibold uppercase tracking-widest text-gray-500">
                  {project.live && (
                    <span className="text-accent flex items-center gap-1.5">
                      <span className="bg-accent h-1.5 w-1.5 animate-pulse rounded-full" />
                      Live
                    </span>
                  )}
                  {project.year}
                </span>
              </div>

              <h3 className="group-hover:text-accent mb-1 text-xl font-bold text-white transition-colors">
                {project.name}
              </h3>

              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-gray-500">
                {project.linkLabel} &#8599;
              </p>

              <ul className="mb-5 space-y-2 text-sm text-gray-400">
                {project.points.map((point, idx) => (
                  <li key={idx} className="flex gap-2">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gray-600" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto flex flex-wrap gap-2 border-t border-white/10 pt-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-gray-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </a>
          ))}

          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="h-card card-hard flex w-[85vw] shrink-0 snap-center flex-col items-start justify-center rounded-2xl p-6 text-left sm:w-[70vw] md:w-[420px] md:p-8 lg:w-[480px]"
          >
            <p className="text-accent mb-3 text-xs font-bold uppercase tracking-widest">More work</p>
            <h3 className="hero-title mb-4 text-3xl">Check GitHub</h3>
            <p className="mb-6 text-sm text-gray-400">
              More backend projects, experiments, and open-source contributions live on my GitHub profile.
            </p>
            <span className="btn-accent rounded-full px-5 py-2.5 text-sm font-bold uppercase tracking-wide">
              {profile.githubLabel}
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
