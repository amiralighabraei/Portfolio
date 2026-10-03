import React from "react";

export const Card = ({ title }) => {
  return (
    <div
      className="
        group
        relative
        w-full
        cursor-default
        rounded-xl
        p-[1px]
        transition-transform
        duration-300
        ease-out
        hover:-translate-y-1
        hover:border border-cyan-700
      "
    >

      {/* Card */}
      <div
        className="
          relative
          flex
          min-h-20
          w-full
          items-center
          justify-center
          rounded-[11px]
          bg-white/6.5
          px-4
          py-5
          text-white
        "
      >
        {title}
      </div>
    </div>
  );
};