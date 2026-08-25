import { useEffect, useState } from 'react';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from '../lib/gsap';
import Magnetic from './Magnetic';

const links = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Work' },
  { href: '#education', label: 'Education' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeHref, setActiveHref] = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useGSAP(() => {
    const triggers = links
      .map((l) => {
        const section = document.querySelector(l.href);
        if (!section) return null;
        return ScrollTrigger.create({
          trigger: section,
          start: 'top center',
          end: 'bottom center',
          onToggle: (self) => {
            if (self.isActive) setActiveHref(l.href);
          },
        });
      })
      .filter(Boolean);

    return () => triggers.forEach((t) => t.kill());
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-[#0b0b0c]/90 backdrop-blur border-b border-white/10' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <a href="#top" className="hero-title text-xl">
          MV<span className="text-accent">.</span>
        </a>

        <ul className="hidden items-center gap-8 text-sm font-semibold uppercase tracking-widest text-gray-300 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={`underline-grow ${activeHref === l.href ? 'text-accent' : ''}`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <Magnetic className="hidden md:inline-block">
          <a
            href="#contact"
            className="btn-accent block rounded-full px-5 py-2 text-sm font-bold uppercase tracking-wide"
          >
            Hire Me
          </a>
        </Magnetic>

        <button
          className="p-2 text-white md:hidden"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <path d="M6 6l12 12M18 6l-12 12" strokeLinecap="round" />
            ) : (
              <path d="M3 6h18M3 12h18M3 18h18" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </nav>

      {open && (
        <ul className="flex flex-col gap-1 border-b border-white/10 bg-[#0b0b0c]/95 px-6 pb-4 text-gray-200 md:hidden">
          {[...links, { href: '#contact', label: 'Contact' }].map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block py-2 text-sm font-semibold uppercase tracking-widest hover:text-accent"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
