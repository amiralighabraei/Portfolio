import React from "react";
import { Card } from "../Common/Card";
import { skillsdata } from "../data";
import ScrollReveal from "../Common/ScrollReveal";


export const Skills = () => {
  return (
    <section
      id="skills"
      className="
        mt-24
        flex
        flex-col
        items-start
        justify-start
        gap-8
        px-5
        text-left
        md:mt-32
        lg:px-0
        scroll-mt-32
        
      "
    >
      

      <ScrollReveal direction="right" duration={400}>
        <div className="flex flex-col items-start gap-5 text-left">
          <p className="text-sm text-gray-600">
            02 / مهارت‌ها
          </p>

          <h2 className="text-4xl font-bold text-white">
            ابزارهای مورد استفاده:
          </h2>
        </div>
      </ScrollReveal>

      <ScrollReveal
        direction="up"
        delay={100}
        duration={400}
        className="w-full"
      >
        <div className="grid w-full grid-cols-1 gap-3 md:grid-cols-3">
          {skillsdata.map((item, index) => (
             <Card key={item.title} title={item.title} description={item.description} />
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
};