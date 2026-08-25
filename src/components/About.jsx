import Section from './Section';
import Reveal from './Reveal';
import Tilt from './Tilt';
import { summary } from '../data';

export default function About() {
  return (
    <Section id="about" index="01" eyebrow="About" title="About Me">
      <div className="grid gap-4 sm:grid-cols-2">
        {summary.map((line, i) => (
          <Reveal key={i} delay={i * 0.08}>
            <Tilt max={8}>
              <div className="card-hard h-full rounded-2xl p-6 text-left">
                <p className="leading-relaxed text-gray-300">{line}</p>
              </div>
            </Tilt>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
