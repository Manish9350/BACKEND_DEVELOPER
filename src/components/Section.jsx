import Reveal from './Reveal';
import SplitHeading from './SplitHeading';

export default function Section({ id, index, eyebrow, title, children, className = '' }) {
  return (
    <section id={id} className={`px-6 py-24 sm:py-32 ${className}`}>
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 flex flex-col gap-2 border-b border-white/10 pb-6 sm:flex-row sm:items-end sm:justify-between">
          <SplitHeading as="h2" text={title} className="hero-title text-4xl sm:text-5xl" />
          <Reveal className="flex items-center gap-3 text-sm font-semibold uppercase tracking-widest text-gray-500">
            {index && <span className="text-accent">{index}</span>}
            {eyebrow}
          </Reveal>
        </div>
        {children}
      </div>
    </section>
  );
}
