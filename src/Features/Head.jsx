
import ScrollReveal from "../Common/ScrollReveal";

export const Head = () => {
  return (
    <section
      className="
        relative flex w-full flex-col-reverse
        items-center gap-12 px-5 py-8
        text-white sm:gap-14
        md:flex-row md:justify-between md:gap-8
        lg:px-0 lg:py-4
      "
    >
      <div className="pointer-events-none absolute -left-12 top-1/4 -z-10 h-48 w-48 rounded-full bg-purple-500/[0.07] blur-3xl" />

      <ScrollReveal
        direction="right"
        duration={400}
        className="relative z-10 w-full max-w-2xl md:w-[58%]"
      >
        <div
          className="
            flex flex-col items-center gap-5
            text-center md:items-start md:text-right
          "
        >
          <p className="text-sm tracking-wide text-gray-400">
            سلام، من امیرعلی هستم!
          </p>

          <h1
            className="
              max-w-xl text-4xl font-bold leading-tight
              sm:text-5xl md:text-5xl lg:text-6xl
            "
          >
            توسعه‌دهنده
            <span className="text-cyan-300"> فرانت‌اند</span>
          </h1>

          <p className="max-w-xl text-sm leading-8 text-gray-400 sm:text-base">
            رابط‌های کاربری مدرن و واکنش‌گرا توسعه می‌دهم؛
            با تمرکز بر ساختار کامپوننت‌محور، تجربه کاربری
            و جزئیات بصری، با استفاده از React و Tailwind CSS.
          </p>

          <ScrollReveal direction="up" delay={100} duration={350}>
            <div
              className="
                mt-3 flex flex-wrap items-center
                justify-center gap-4 md:justify-start
              "
            >
              <a
                href="#projects"
                className="
                  button-hover rounded-xl border border-white/10
                  bg-white/[0.07] px-6 py-3
                  text-sm font-semibold text-white
                  transition-all duration-200
                  hover:-translate-y-1 hover:border-white/20
                  hover:bg-white/10
                "
              >
                <span className="relative z-10">مشاهده نمونه‌کارها</span>
              </a>

              <a
                href="#contact"
                className="
                  button-hover rounded-xl border border-cyan-300/20
                  bg-cyan-400/10 px-6 py-3
                  text-sm font-semibold text-cyan-200
                  transition-all duration-200
                  hover:-translate-y-1 hover:border-cyan-300/40
                  hover:bg-cyan-400/[0.15]
                "
              >
                <span className="relative z-10">ارتباط با من</span>
              </a>
            </div>
          </ScrollReveal>

          <div className="mt-3 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-gray-500 md:justify-start">
            <span>React</span>
            <span className="h-1 w-1 rounded-full bg-cyan-400/70" />
            <span>JavaScript</span>
            <span className="h-1 w-1 rounded-full bg-cyan-400/70" />
            <span>Tailwind CSS</span>
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal
        direction="left"
        delay={100}
        duration={400}
        className="relative z-10 w-full max-w-[420px] md:w-[42%]"
      >
        <div className="relative mx-auto w-full max-w-[360px] md:max-w-full">
          <div className="pointer-events-none absolute inset-8 rounded-full bg-cyan-400/[0.07] blur-3xl" />

          <div className="relative overflow-hidden rounded-3xl border border-white/[0.09] bg-white/[0.025] p-3 sm:p-4">
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-purple-400/[0.07] via-transparent to-cyan-400/[0.06]" />

            <figure className="relative overflow-hidden rounded-2xl">
              <img
                className="animate-avatarFloat block h-auto w-full object-contain"
                src="/images/avatar.png"
                alt="تصویر امیرعلی، توسعه‌دهنده فرانت‌اند"
                fetchPriority="high"
              />
            </figure>

            <div className="relative flex items-center justify-between gap-3 px-2 pb-1 pt-4">
              <div className="flex flex-col gap-1">
                <span className="text-sm font-semibold text-white">
                  Frontend Developer
                </span>
                <span className="text-xs text-gray-500">
                  Building for the web
                </span>
              </div>

              <div className="h-2 w-2 shrink-0 rounded-full bg-cyan-300 shadow-[0_0_10px_rgba(103,232,249,0.35)]" />
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
};
