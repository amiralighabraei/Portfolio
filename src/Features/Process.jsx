import React from "react";
import { StepsCard } from "../Common/StepsCard";
import { workSteps } from "../data";
import ScrollReveal from "../Common/ScrollReveal";

export const Process = () => {
  return (
    <section
      className="
        mt-24
        flex
        w-full
        flex-col
        gap-8
        md:mt-32
      "
    >
      <ScrollReveal direction="right" duration={400}>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-gray-500">0/4 روند</p>

          <h2 className="text-4xl font-bold text-white">
            از ایده تا وبسایت نهایی
          </h2>
        </div>
      </ScrollReveal>

      <div
        className="
          grid
          grid-cols-1
          gap-4
          sm:grid-cols-2
          lg:grid-cols-4
        "
      >
        {workSteps.map((item, index) => (
          <ScrollReveal
            key={item.id}
            direction="up"
            delay={index * 80}
            duration={350}
          >
            <StepsCard {...item} />
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
};