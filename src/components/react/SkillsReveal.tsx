import { Briefcase, Code, MessageCircle } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';

import type { Skill, Social, SocialIcon, SocialLink } from '../../types/profile';

interface Props {
  skills: Skill[];
  social: Social;
}

const icons = {
  github: Code,
  linkedin: Briefcase,
  twitter: MessageCircle,
} satisfies Record<SocialIcon, typeof Code>;

export default function SkillsReveal({ skills, social }: Props) {
  const reduceMotion = useReducedMotion();
  const socialLinks: SocialLink[] = Object.values(social);

  return (
    <section className="grid gap-16 py-24 lg:grid-cols-[1.35fr_0.65fr] lg:py-36">
      <div>
        <p className="eyebrow mb-5 text-coral">02 / Working set</p>
        <h2 className="max-w-xl text-4xl font-bold tracking-[-0.045em] sm:text-6xl">
          Tools are useful. Judgment is the work.
        </h2>
        <div className="mt-14 space-y-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={reduceMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: reduceMotion ? 0 : index * 0.08 }}
            >
              <div className="mb-3 flex items-end justify-between font-mono text-sm">
                <span>{skill.name}</span>
                <span className="text-muted">{skill.percent}%</span>
              </div>
              <div className="h-2 overflow-hidden bg-current/10">
                <motion.div
                  className="h-full bg-coral"
                  initial={reduceMotion ? { width: `${skill.percent}%` } : { width: 0 }}
                  whileInView={{ width: `${skill.percent}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: reduceMotion ? 0 : 0.8, delay: index * 0.08 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.aside
        className="section-rule self-end pt-6"
        initial={reduceMotion ? false : { opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <p className="eyebrow mb-8">Find me elsewhere</p>
        <ul className="space-y-3">
          {socialLinks.map((item) => {
            const Icon = icons[item.icon];
            return (
              <li key={item.icon}>
                <a
                  className="group flex items-center justify-between border-b border-current/15 py-4 transition-colors hover:border-coral hover:text-coral"
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="font-mono text-sm">{item.username}</span>
                  <Icon
                    className="size-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </a>
              </li>
            );
          })}
        </ul>
      </motion.aside>
    </section>
  );
}
