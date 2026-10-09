
import React from "react";
import { currentFocus } from "../data";
import { BiArrowFromRight } from "react-icons/bi";
import ScrollReveal from "../Common/ScrollReveal";

export const About = () => {
  return (
    <section
      id="about"
      className="
        relative mt-24 flex flex-col items-center
        justify-between gap-10 px-5
        scroll-mt-32 md:mt-32 md:flex-row
        md:items-start lg:px-0
      "
    >
      <div className="pointer-events-none absolute -left-16 top-10 -z-10 h-48 w-48 rounded-full bg-purple-500/[0.07] blur-3xl" />

      <ScrollReveal
        direction="right"
        duration={400}
        className="relative z-10 w-full md:w-[58%]"
      >
        <div className="flex flex-col items-start gap-5">
          <span className="text-xs tracking-wider text-gray-500">
            01 / درباره من
          </span>

          <h2 className="max-w-2xl text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
            توسعه‌دهنده فرانت‌اند با تمرکز بر تجربه کاربری
          </h2>

          <p className="max-w-xl text-sm leading-8 text-gray-400 sm:text-base">
            به‌عنوان توسعه‌دهنده فرانت‌اند، روی طراحی و پیاده‌سازی رابط‌های
            کاربری مدرن، واکنش‌گرا و قابل استفاده تمرکز دارم. با React و
            Tailwind CSS رابط‌هایی ساختارمند و کامپوننت‌محور توسعه می‌دهم
            و با استفاده از JavaScript و REST API، تعاملات پویا و مدیریت
            داده‌ها را در اپلیکیشن‌های وب پیاده‌سازی می‌کنم. در فرایند توسعه،
            کدنویسی خوانا، استفاده مجدد از کامپوننت‌ها و توجه به جزئیات بصری
            را برای ساخت تجربه‌ای یکپارچه و روان در اولویت قرار می‌دهم.
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal
        direction="left"
        delay={100}
        duration={400}
        className="relative z-10 w-full md:w-[35%]"
      >
        <div
          className="
            relative flex w-full flex-col gap-5
            overflow-hidden rounded-2xl
            border border-white/[0.09]
            bg-white/[0.035] p-5
            transition-colors duration-300
            hover:border-cyan-400/20
            sm:p-6
          "
        >
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-purple-400/[0.05] via-transparent to-cyan-400/[0.04]" />

          <div className="relative flex items-center gap-3">
            <div className="h-8 w-1 rounded-full bg-gradient-to-b from-purple-400 to-cyan-400" />

            <div className="flex flex-col gap-1">
              <h3 className="text-sm font-semibold text-white">
                حوزه‌های تخصصی
              </h3>
              <p className="text-xs text-gray-500">
                مهارت‌ها و زمینه‌های کاری
              </p>
            </div>
          </div>

          <div className="relative flex flex-col gap-4">
            {currentFocus.map((item, index) => (
              <div
                key={index}
                className="
                  flex items-start gap-3
                  text-sm leading-6 text-gray-400
                  transition-colors duration-200
                  hover:text-cyan-300
                "
              >
                <BiArrowFromRight
                  className="mt-1 shrink-0 text-base text-cyan-400"
                />
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
};
