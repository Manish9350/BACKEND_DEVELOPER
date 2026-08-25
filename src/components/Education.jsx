import Section from './Section';
import Reveal from './Reveal';
import Tilt from './Tilt';
import { education } from '../data';

export default function Education() {
  return (
    <Section id="education" index="05" eyebrow="Background" title="Education">
      <div className="mx-auto max-w-3xl">
        {education.map((edu) => (
          <Reveal key={edu.school}>
            <Tilt max={6}>
              <div className="card-hard rounded-2xl p-6 text-left sm:p-8">
                <div className="mb-2 flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-2xl font-bold text-white">{edu.school}</h3>
                  <span className="text-sm font-semibold uppercase tracking-widest text-gray-500">
                    {edu.period}
                  </span>
                </div>
                <p className="text-accent mb-3 font-semibold">{edu.degree}</p>
                <ul className="space-y-2">
                  {edu.points.map((point, idx) => (
                    <li key={idx} className="flex gap-2 text-sm text-gray-400">
                      <span className="text-accent mt-1 shrink-0">&#9670;</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Tilt>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
