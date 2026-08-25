import Reveal from './Reveal';
import Magnetic from './Magnetic';
import { profile } from '../data';

export default function Contact() {
  return (
    <section id="contact" className="px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl text-center">
        <Reveal>
          <p className="text-accent mb-4 text-sm font-bold uppercase tracking-widest">
            Get in touch
          </p>
        </Reveal>

        <Reveal delay={0.05}>
          <h2 className="hero-title mx-auto max-w-4xl text-5xl sm:text-7xl">
            Let&rsquo;s build something <em>reliable</em>.
          </h2>
        </Reveal>

        <Reveal delay={0.15}>
          <a
            href={`mailto:${profile.email}`}
            className="text-accent mt-10 inline-block break-all text-3xl font-extrabold tracking-tight sm:text-5xl underline decoration-2 underline-offset-8 hover:opacity-80 transition-opacity"
          >
            {profile.email}
          </a>
        </Reveal>

        <Reveal delay={0.25} className="mt-12 flex flex-wrap items-center justify-center gap-4 text-sm font-semibold uppercase tracking-widest">
          <Magnetic>
            <a
              href={`tel:${profile.phone.replace(/[^+\d]/g, '')}`}
              className="block rounded-full border border-white/20 px-6 py-3 text-white transition-colors hover:border-accent hover:text-accent"
            >
              {profile.phone}
            </a>
          </Magnetic>
          <Magnetic>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="block rounded-full border border-white/20 px-6 py-3 text-white transition-colors hover:border-accent hover:text-accent"
            >
              LinkedIn
            </a>
          </Magnetic>
          <Magnetic>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="block rounded-full border border-white/20 px-6 py-3 text-white transition-colors hover:border-accent hover:text-accent"
            >
              GitHub
            </a>
          </Magnetic>
        </Reveal>
      </div>
    </section>
  );
}
