import React from "react";
import { ProjectCard } from "../Common/ProjectCard";
import { projectData } from "../data";
import AuroraGlow from "../Common/auora";

export const Projects = () => {
  return (
    <div className=" mt-24 md:mt-32">
      <div
        className="
        w-full
        flex
        flex-col
        gap-5
        items-start
        scroll-mt-32
        relative
        "
        id="projects"
      >
        
        <p
          className="
            text-small
            text-gray-500
            "
        >
          0/3 نمونه کار ها
        </p>
        <h2
          className="
            text-4xl
            font-bold
            text-white
            "
        >
          پروژه هایی که نحوه کار را نشان میدهند:
        </h2>
      </div>
      <div
        className="
        grid 
        grid-cols-1
        gap-4
        md:grid-cols-2
        mt-6
        "
      >
        {projectData.map((item) => (
          <ProjectCard key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};
