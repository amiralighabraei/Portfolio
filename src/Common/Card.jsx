
import React from "react";
import { FaReact, FaJs, FaGitAlt, FaGithub } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { HiOutlineGlobeAlt } from "react-icons/hi2";

const skills = {
  React: FaReact,
  JavaScript: FaJs,
  "Tailwind CSS": SiTailwindcss,
  "REST API": HiOutlineGlobeAlt,
  "Git & GitHub": FaGithub,
};

export const Card = ({ title, description }) => {
  const Icon = skills[title];

  return (
    <div className="group relative w-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-white/[0.06]">
      <div className="relative flex min-h-36 flex-col items-center justify-center gap-3 text-center">
        {Icon && (
          <Icon
            size={34}
            className="shrink-0 text-cyan-300 transition-transform duration-300 group-hover:scale-110"
          />
        )}

        <h3 className="text-base font-semibold text-gray-200 transition-colors group-hover:text-white">
          {title}
        </h3>

        <p className="text-sm leading-6 text-gray-400">
          {description}
        </p>
      </div>
    </div>
  );
};
