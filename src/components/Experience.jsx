import Section from './Section';
import Reveal from './Reveal';
import Tilt from './Tilt';
import { experience } from '../data';

export default function Experience() {
  return (
    <Section id="experience" index="03" eyebrow="Career" title="Experience">
      <div className="flex flex-col gap-6">
        {experience.map((job, i) => (
          <Reveal key={job.company} delay={i * 0.1}>
            <Tilt max={4}>
              <div className="card-hard rounded-2xl p-6 text-left sm:p-8">
                <div className="mb-4 flex flex-wrap items-baseline justify-between gap-2 border-b border-white/10 pb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white">{job.role}</h3>
                    {job.link ? (
                      <a
                        href={job.link}
                        target="_blank"
                        rel="noreferrer"
                        className="text-accent font-semibold underline decoration-1 underline-offset-4 hover:opacity-80"
                      >
                        {job.company} &#8599;
                      </a>
                    ) : (
                      <p className="text-accent font-semibold">{job.company}</p>
                    )}
                  </div>
                  <div className="text-right text-sm font-semibold uppercase tracking-widest text-gray-500">
                    <p>{job.period}</p>
                    <p>{job.location}</p>
                  </div>
                </div>
                <ul className="grid gap-2 sm:grid-cols-2">
                  {job.points.map((point, idx) => (
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
