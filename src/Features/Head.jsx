import AuroraGlow from "../Common/auora";
import ScrollReveal from "../Common/ScrollReveal";


export const Head = () => {
  return (
    <section
      className="
        relative
        flex
        flex-col-reverse
        items-center
        gap-12
        px-5
        text-white
        md:flex-row
        md:items-center
        md:justify-between
        lg:px-0
      "
    >
      

      {/* متن اصلی */}
      <ScrollReveal
        direction="right"
        duration={400}
        className="
          relative
          z-10
          w-full
          max-w-2xl
          md:w-[60%]
        "
      >
        <div
          className="
            flex
            flex-col
            items-center
            text-center
            md:items-start
            md:text-right
          "
        >
          <p className="mb-3 text-sm text-gray-400">سلام، من امیرعلی هستم!</p>

          <h1
            className="
              max-w-xl
              text-4xl
              font-bold
              leading-tight
              sm:text-5xl
              md:text-6xl
            "
          >
            توسعه‌دهنده
            <span className="text-cyan-300"> فرانت‌اند</span>
          </h1>

          <p className="mt-5 text-sm text-gray-400 sm:text-base">
            React · Tailwind · UI
          </p>

          <ScrollReveal direction="up" delay={100} duration={350}>
            <div
              className="
                mt-8
                flex
                flex-wrap
                items-center
                justify-center
                gap-4
                md:justify-start
              "
            >
              <a
                href="#projects"
                className="
                  button-hover
                  rounded-lg
                  bg-white/10
                  px-6
                  py-3
                  text-base
                  font-bold
                  text-white
                  hover:-translate-y-1
                  transition-all
                  duration-200
                "
              >
                <span className="relative z-10">نمونه کارها</span>
              </a>

              <a
                href="#contact"
                className="
                  button-hover
                  rounded-lg
                  bg-cyan-400/10
                  px-6
                  py-3
                  text-base
                  font-bold
                  text-cyan-200
                  hover:-translate-y-1
                  transition-all
                  duration-200
                "
              >
                <span className="relative z-10">ارتباط با من</span>
              </a>
            </div>
          </ScrollReveal>
        </div>
      </ScrollReveal>

      {/* کارت BUILD / SHIP / REFINE */}
      <ScrollReveal
        direction="left"
        delay={100}
        duration={400}
        className="
    relative
    z-10
    w-full
    max-w-[520px]
    md:w-[45%]
  "
      >
       <div className="w-full " >
          <figure className="w-full ">
            <img className="animate-avatarFloat"  src="./public/images/avatar.png" alt="avatar" />
          </figure>
       </div>
      </ScrollReveal>
    </section>
  );
};
