import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import ScrollReveal from "../Common/ScrollReveal";

export const ProjectCard = ({
  title,
  description,
  img,
  href,
  tools,
}) => {
  return (
    <ScrollReveal direction="up" duration={350}>
      <div
        className="
          bg-white/[0.065]
          rounded-2xl
          flex
          flex-col
          p-6
          gap-1
          overflow-hidden
          hover:-translate-y-2
          transition-transform
          w-full
          hover:border
          hover:border-cyan-700
          duration-200
        "
      >
        <a href={href}>
          <figure className="w-full">
            <img src={img} alt="project-img" />
          </figure>
        </a>

        <div
          className="
            flex
            items-center
            justify-between
            text-white
            w-full
          "
        >
          <h3 className="text-3xl font-bold">{title}</h3>

          <a href={href}>
            <GoArrowUpRight />
          </a>
        </div>

        <div
          className="
            text-sm
            text-gray-500
            flex
            flex-col
            gap-2
          "
        >
          <p>{tools}</p>
          <p>{description}</p>
        </div>
      </div>
    </ScrollReveal>
  );
};