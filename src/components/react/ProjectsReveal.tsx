import { ArrowUpRight, Code } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

export interface Project {
  title: string;
  description: string;
  url?: string;
  repo?: string;
  tags: string[];
  featured: boolean;
}

interface Props {
  projects: Project[];
}

export default function ProjectsReveal({ projects }: Props) {
  const reduceMotion = useReducedMotion();

  return (
    <section className="py-24 lg:py-36">
      <div className="mb-14 grid gap-6 lg:grid-cols-2 lg:items-end">
        <div>
          <p className="eyebrow mb-5 text-coral">03 / Selected work</p>
          <h2 className="text-4xl font-bold tracking-[-0.045em] sm:text-6xl">
            Production work, built with care.
          </h2>
        </div>
        <p className="max-w-lg text-lg leading-8 text-muted lg:justify-self-end">
          Nearly nine years shaping web experiences—from Angular platforms and
          delivery pipelines to modern Astro and React applications.
        </p>
      </div>

      <div className="border-t border-current/20">
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            className="group grid gap-7 border-b border-current/20 py-9 sm:grid-cols-[4rem_1fr_auto] sm:items-start"
            initial={reduceMotion ? false : { opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ delay: reduceMotion ? 0 : index * 0.09 }}
          >
            <span className="font-mono text-xs text-muted">
              {String(index + 1).padStart(2, "0")}
            </span>
            <div>
              <div className="mb-4 flex flex-wrap items-center gap-3">
                <h3 className="text-2xl font-bold tracking-tight transition-colors group-hover:text-coral sm:text-3xl">
                  {project.title}
                </h3>
                {project.featured ? (
                  <span className="bg-acid px-2 py-1 font-mono text-[10px] uppercase tracking-wider text-terminal">
                    Current role
                  </span>
                ) : null}
              </div>
              <p className="max-w-2xl leading-7 text-muted">
                {project.description}
              </p>
              <ul
                className="mt-5 flex flex-wrap gap-2"
                aria-label="Role technologies"
              >
                {project.tags.map((tag) => (
                  <li
                    className="border border-current/20 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider"
                    key={tag}
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex gap-3 sm:justify-end">
              {project.repo ? (
                <a
                  className="grid size-10 place-items-center border border-current/25 transition-colors hover:bg-coral hover:text-terminal"
                  href={project.repo}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${project.title} source code`}
                >
                  <Code className="size-4" aria-hidden="true" />
                </a>
              ) : null}
              {project.url ? (
                <a
                  className="grid size-10 place-items-center border border-current/25 transition-colors hover:bg-acid hover:text-terminal"
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`View ${project.title} company page`}
                >
                  <ArrowUpRight className="size-4" aria-hidden="true" />
                </a>
              ) : null}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
