import React from "react";
import ScrollReveal from "../Common/ScrollReveal";

export const Footer = () => {
  return (
    <footer className="mt-24 md:mt-32">
      <ScrollReveal direction="up" delay={100} duration={350}>
        <div
          className="
            flex
            flex-col
            gap-5
            border-t
            border-white/[0.065]
            px-4
            py-8
            sm:px-6
            lg:px-0
          "
        >
          <div className="flex flex-col gap-3">
            <h4 className="text-2xl font-bold text-white">
              امیرعلی غبرائی
            </h4>

            <p className="text-sm text-gray-500">
              ساخته شده با React و Tailwind
            </p>
          </div>

          <div className="flex items-center justify-between">
            <p className="text-xs text-gray-600">
              © {new Date().getFullYear()} تمامی حقوق محفوظ است.
            </p>
          </div>
        </div>
      </ScrollReveal>
    </footer>
  );
};