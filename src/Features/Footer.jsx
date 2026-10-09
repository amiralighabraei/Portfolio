
import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import ScrollReveal from "../Common/ScrollReveal";

export const Footer = () => {
  return (
    <footer className="mt-24 md:mt-32">
      <ScrollReveal direction="up" delay={100} duration={350}>
        <div
          className="
            flex flex-col gap-6
            border-t border-white/[0.08]
            py-7 sm:flex-row sm:items-center
            sm:justify-between sm:py-8
          "
        >
          <a
            href="#"
            className="
              w-fit text-base font-semibold text-gray-300
              transition-colors duration-200
              hover:text-cyan-300
            "
          >
            امیرعلی غبرائی
          </a>

          <a
            href="#contact"
            className="
              group flex w-fit items-center gap-2
              text-sm text-gray-500
              transition-colors duration-200
              hover:text-cyan-300
            "
          >
            <span>گفتگو درباره یک پروژه</span>

            <GoArrowUpRight
              className="
                text-base transition-transform duration-200
                group-hover:-translate-y-0.5
                group-hover:translate-x-0.5
              "
            />
          </a>

          <p className="text-xs leading-6 text-gray-600">
            © {new Date().getFullYear()} تمامی حقوق محفوظ است.
          </p>
        </div>
      </ScrollReveal>
    </footer>
  );
};
