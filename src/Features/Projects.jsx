import React from "react";
import { ProjectCard } from "../Common/ProjectCard";
import { projectData } from "../data";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="mt-24 scroll-mt-32 md:mt-32"
    >
      <div className="flex flex-col items-start gap-4">
        <p className="text-sm text-gray-500">
          03 / پروژه ها
        </p>

        <h2 className="text-3xl font-bold text-white sm:text-4xl">
          نمونه‌کارهای من
        </h2>

        <p className="max-w-2xl text-sm leading-7 text-gray-400 sm:text-base">
          مجموعه‌ای از پروژه‌های من در توسعه رابط‌های کاربری مدرن،
          طراحی واکنش‌گرا و پیاده‌سازی قابلیت‌های تعاملی با React
          و Tailwind CSS.
        </p>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2">
        {projectData.map((item) => (
          <ProjectCard key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
};