import React from "react";

export const StepsCard = ({ title, description, id }) => {
  return (
    <div
      className="
        flex
        min-h-52
        w-full
        flex-col
        gap-4
        rounded-2xl
        main-bg
        p-6
        transition-transform
        duration-200
        hover:-translate-y-2
        hover:border
        hover:border-cyan-700
      "
    >
      <p className="text-sm text-gray-500">
        {id}/4
      </p>

      <h3 className="text-3xl font-bold text-white">
        {title}
      </h3>

      <p className=" text-sm text-gray-500 lg:block">
        {description}
      </p>
    </div>
  );
};