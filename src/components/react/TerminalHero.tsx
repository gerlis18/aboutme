import { motion, useReducedMotion } from 'motion/react';

import type { Intro } from '../../types/profile';

interface Props {
  intro: Intro;
}

function TypedLine({ children, delay = 0 }: { children: string; delay?: number }) {
  const reduceMotion = useReducedMotion();

  return (
    <span className="block" aria-label={children}>
      <span aria-hidden="true">
        {Array.from(children).map((character, index) => (
          <motion.span
            key={`${character}-${index}`}
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: reduceMotion ? 0 : delay + index * 0.035 }}
          >
            {character}
          </motion.span>
        ))}
      </span>
    </span>
  );
}

export default function TerminalHero({ intro }: Props) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className="border border-white/15 bg-terminal text-[#e9ede8] shadow-[12px_12px_0_#c7f464]"
      initial={reduceMotion ? false : { opacity: 0, x: -28 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="flex items-center gap-2 border-b border-white/15 px-4 py-3">
        <span className="size-2.5 rounded-full bg-coral" />
        <span className="size-2.5 rounded-full bg-[#f4c95d]" />
        <span className="size-2.5 rounded-full bg-acid" />
        <span className="ml-3 font-mono text-[10px] uppercase tracking-[0.2em] text-white/45">
          profile.sh
        </span>
      </div>
      <div className="min-h-[25rem] p-5 font-mono sm:p-8 lg:min-h-[29rem] lg:p-10">
        <p className="mb-8 text-xs text-acid">$ whoami --verbose</p>
        <h1 className="font-sans text-5xl font-bold leading-[0.9] tracking-[-0.06em] text-white sm:text-7xl xl:text-8xl">
          {intro.name}
        </h1>
        <div className="mt-8 max-w-2xl space-y-3 text-sm leading-7 text-white/72 sm:text-base">
          <TypedLine delay={0.45}>{intro.description}</TypedLine>
          <TypedLine delay={1.15}>{intro.aka}</TypedLine>
        </div>
        <p className="mt-10 flex items-center gap-2 text-xs text-acid sm:text-sm">
          <span aria-hidden="true">›</span>
          <span>{intro.tagline}</span>
          <motion.span
            className="inline-block h-4 w-2 bg-acid"
            aria-hidden="true"
            animate={reduceMotion ? undefined : { opacity: [1, 0, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
          />
        </p>
      </div>
    </motion.div>
  );
}
