import Section from './Section';
import Reveal from './Reveal';
import Tilt from './Tilt';
import { skills } from '../data';

export default function Skills() {
  return (
    <Section id="skills" index="02" eyebrow="Toolbox" title="Skills" className="bg-[#111112]">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((group, i) => (
          <Reveal key={group.category} delay={i * 0.06}>
            <Tilt max={8}>
              <div className="card-hard h-full rounded-2xl p-6 text-left">
                <h3 className="text-accent mb-4 text-xs font-bold uppercase tracking-widest">
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-gray-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Tilt>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
