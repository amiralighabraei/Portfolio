
import React from "react";
import { HiArrowUpRight } from "react-icons/hi2";

export const StepsCard = ({ title, description, id }) => {
  return (
    <div
      className="
        group relative flex min-h-60 w-full flex-col
        justify-between gap-8 overflow-hidden rounded-2xl
        border border-white/[0.09]
        bg-white/[0.035] p-6
        transition-all duration-300 ease-out
        hover:-translate-y-1
        hover:border-cyan-400/30
        hover:bg-white/[0.055]
        sm:p-7
        h-full
      "
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-purple-400/[0.045] via-transparent to-cyan-400/[0.035] opacity-70 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="relative flex items-center justify-between">
        <span className="text-sm font-medium tracking-wider text-cyan-300">
          {String(id).padStart(2, "0")}
          <span className="mx-1 text-gray-600">/</span>
          <span className="text-gray-500">04</span>
        </span>

        <HiArrowUpRight 
          className="
            text-xl text-gray-600
            transition-all duration-300
            group-hover:-translate-y-0.5
            group-hover:translate-x-0.5
            group-hover:text-cyan-300
          "
        />
      </div>

      <div className="relative flex flex-col gap-3">
        <h3 className="text-2xl font-semibold tracking-tight text-white transition-colors duration-300 group-hover:text-cyan-50 sm:text-3xl">
          {title}
        </h3>

        <p className="max-w-sm text-sm leading-7 text-gray-400">
          {description}
        </p>
      </div>

      <div className="relative h-px w-full overflow-hidden bg-white/[0.08]">
        <div className="h-full w-0 bg-gradient-to-r from-purple-400 to-cyan-400 transition-all duration-500 group-hover:w-full" />
      </div>
    </div>
  );
};
