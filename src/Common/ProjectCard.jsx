
import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import { FiExternalLink } from "react-icons/fi";
import ScrollReveal from "../Common/ScrollReveal";

export const ProjectCard = ({
  title,
  description,
  img,
  href,
  tools,
}) => {
  const technologies = Array.isArray(tools)
    ? tools
    : tools?.split(",").map((tool) => tool.trim()).filter(Boolean) || [];

  return (
    <ScrollReveal direction="up" duration={350}>
      <article
        className="
          group relative flex h-full w-full flex-col overflow-hidden
          rounded-2xl border border-gray-200/80 bg-white/70
          p-3 transition-all duration-300
          hover:-translate-y-1 hover:border-cyan-500/50
          hover:shadow-lg hover:shadow-cyan-950/5
          dark:border-white/10 dark:bg-white/[0.035]
          dark:hover:border-cyan-400/30
          dark:hover:shadow-cyan-950/20
        "
      >
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`View ${title} project`}
          className="
            relative block aspect-[16/10] overflow-hidden
            rounded-xl bg-gray-100 dark:bg-white/5
          "
        >
          <img
            src={img}
            alt={`${title} project preview`}
            loading="lazy"
            className="
              h-full w-full object-cover object-top
              transition-transform duration-500
              group-hover:scale-[1.035]
            "
          />

          <div
            className="
              absolute inset-0 bg-gradient-to-t
              from-black/35 via-transparent to-transparent
              opacity-60 transition-opacity duration-300
              group-hover:opacity-100
            "
          />

          <span
            className="
              absolute bottom-3 right-3 flex h-10 w-10
              translate-y-2 items-center justify-center
              rounded-full border border-white/20
              bg-black/50 text-white opacity-0
              backdrop-blur-sm transition-all duration-300
              group-hover:translate-y-0 group-hover:opacity-100
            "
          >
            <FiExternalLink size={17} />
          </span>
        </a>

        <div className="flex flex-1 flex-col px-2 pb-2 pt-5">
          <div className="flex items-start justify-between gap-4">
            <h3
              className="
                text-xl font-bold tracking-tight text-gray-900
                transition-colors duration-200
                group-hover:text-cyan-600
                dark:text-white dark:group-hover:text-cyan-300
                sm:text-2xl
              "
            >
              {title}
            </h3>

            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${title} project`}
              className="
                flex h-9 w-9 shrink-0 items-center justify-center
                rounded-full border border-gray-200 text-gray-600
                transition-all duration-200
                hover:border-cyan-500 hover:bg-cyan-500
                hover:text-white
                dark:border-white/10 dark:text-gray-300
                dark:hover:border-cyan-400 dark:hover:bg-cyan-400
                dark:hover:text-gray-950
              "
            >
              <GoArrowUpRight size={20} />
            </a>
          </div>

          <p
            className="
              mt-3 text-sm leading-6 text-gray-600
              dark:text-gray-400
            "
          >
            {description}
          </p>

          {technologies.length > 0 && (
            <div className="mt-5 flex flex-wrap gap-2">
              {technologies.map((tool, index) => (
                <span
                  key={`${tool}-${index}`}
                  className="
                    rounded-md border border-gray-200/80
                    bg-gray-100/80 px-2.5 py-1
                    text-xs font-medium text-gray-600
                    dark:border-white/10 dark:bg-white/5
                    dark:text-gray-300
                  "
                >
                  {tool}
                </span>
              ))}
            </div>
          )}
        </div>
      </article>
    </ScrollReveal>
  );
};
