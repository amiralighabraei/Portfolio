
import { GoArrowUpRight } from "react-icons/go";
import ScrollReveal from "../Common/ScrollReveal";

export const Contact = () => {
  return (
    <section
      id="contact"
      className="
        mt-24
        flex
        w-full
        flex-col
        gap-8
        scroll-mt-32
        md:mt-32
      "
    >
      <ScrollReveal direction="right" duration={400}>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-gray-500">
            05 / ارتباط با من
          </p>

          <h2 className="text-4xl font-bold text-white">
            پروژه‌ای در نظر دارید؟
          </h2>
        </div>
      </ScrollReveal>

      <ScrollReveal direction="up" delay={100} duration={400}>
        <div
          className="
            main-bg
            flex
            w-full
            flex-col
            gap-6
            rounded-3xl
            p-6
            sm:p-8
            md:p-10
            lg:p-12
          "
        >
          <p className="text-base text-gray-400">
            بیایید یک سایت مفید و مؤثر بسازیم!
          </p>

          <a
            target="_blank"
            href="https://mail.google.com/mail/?view=cm&fs=1&to=amiralighabraei@gmail.com"
            className="
              group
              flex
              w-fit
              items-center
              gap-2
              rounded-xl
              bg-white
              px-5
              py-3
              text-sm
              font-bold
              text-black
              transition-transform
              duration-200
              hover:-translate-y-1
            "
          >
            <span>حالا شروع کنید!</span>

            <GoArrowUpRight
              className="
                transition-transform
                duration-200
                group-hover:translate-x-0.5
                group-hover:-translate-y-0.5
              "
            />
          </a>

          <div className="flex flex-col gap-2 text-sm text-gray-500">
            <a
              target="_blank"
              href="https://mail.google.com/mail/?view=cm&fs=1&to=amiralighabraei@gmail.com"
              className="
                w-fit
                transition-colors
                duration-200
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
                w-fit
                transition-colors
                duration-200
                hover:text-cyan-300
              "
            >
              GitHub
            </a>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
};

