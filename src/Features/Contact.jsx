
import { GoArrowUpRight } from "react-icons/go";
import ScrollReveal from "../Common/ScrollReveal";

export const Contact = () => {
  return (
    <section
      id="contact"
      className="
        relative mt-24 flex w-full flex-col gap-8
        scroll-mt-32 md:mt-32
      "
    >
      <div className="pointer-events-none absolute -right-12 top-20 -z-10 h-48 w-48 rounded-full bg-purple-500/[0.07] blur-3xl" />

      <ScrollReveal direction="right" duration={400}>
        <div className="flex flex-col gap-4">
          <p className="text-sm tracking-wider text-gray-500">
            05 / ارتباط با من
          </p>

          <h2 className="max-w-2xl text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
            ایده‌ای برای ساختن دارید؟
          </h2>

          <p className="max-w-xl text-sm leading-8 text-gray-400 sm:text-base">
            اگر برای توسعه یک وب‌سایت یا پیاده‌سازی یک رابط کاربری به دنبال
            همکاری هستید، خوشحال می‌شوم درباره پروژه‌تان بیشتر بدانم.
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal
        direction="up"
        delay={100}
        duration={400}
        className="w-full"
      >
        <div
          className="
            group relative w-full overflow-hidden rounded-3xl
            border border-white/[0.09] bg-white/[0.035]
            p-6 transition-colors duration-300
            hover:border-cyan-400/20
            sm:p-8 md:p-10 lg:p-12
          "
        >
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-purple-400/[0.06] via-transparent to-cyan-400/[0.05]" />

          <div className="relative flex flex-col gap-8">
            <div className="flex flex-col gap-3">
              <span className="text-xs font-medium tracking-widest text-cyan-300">
                LET'S CONNECT
              </span>

              <h3 className="max-w-2xl text-2xl font-semibold leading-relaxed text-white sm:text-3xl md:text-4xl">
                بیایید ایده‌تان را به یک تجربه وب کاربردی تبدیل کنیم.
              </h3>

              <p className="max-w-xl text-sm leading-7 text-gray-400">
                برای شروع گفتگو درباره پروژه، بررسی ایده‌ها یا آشنایی با
                زمینه‌های همکاری، از طریق ایمیل با من در ارتباط باشید.
              </p>
            </div>

            <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
              <a
                target="_blank"
                href="https://mail.google.com/mail/?view=cm&fs=1&to=amiralighabraei@gmail.com"
                className="
                  group/button inline-flex w-fit items-center gap-3
                  rounded-xl bg-white px-5 py-3.5
                  text-sm font-semibold text-gray-950
                  transition-all duration-200
                  hover:-translate-y-0.5 hover:bg-cyan-50
                "
              >
                <span>شروع گفتگو</span>

                <GoArrowUpRight
                  className="
                    text-lg transition-transform duration-200
                    group-hover/button:translate-x-0.5
                    group-hover/button:-translate-y-0.5
                  "
                />
              </a>

              <div className="flex flex-col gap-3 text-sm">
                <a
                  target="_blank"
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=amiralighabraei@gmail.com"
                  className="
                    w-fit break-all text-gray-400
                    transition-colors duration-200
                    hover:text-cyan-300
                  "
                >
                  amiralighabraei@gmail.com
                </a>

                <a
                  href="https://github.com/amiralighabraei"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    w-fit text-gray-400
                    transition-colors duration-200
                    hover:text-cyan-300
                  "
                >
                  GitHub
                </a>
              </div>
            </div>

            <div className="h-px w-full bg-gradient-to-r from-purple-400/40 via-white/[0.08] to-cyan-400/40" />

            <div className="flex flex-col gap-2 text-xs text-gray-500 sm:flex-row sm:items-center sm:justify-between">
              <span>آماده گفتگو درباره پروژه‌های فرانت‌اند</span>
              <span>React · JavaScript · Tailwind CSS</span>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
};
