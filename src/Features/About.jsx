import { currentFocus } from "../data";
import { BiArrowFromRight } from "react-icons/bi";
import ScrollReveal from "../Common/ScrollReveal";
import AuroraGlow from "../Common/auora";

export const About = () => {
  return (<section
  id = "about"
    className="
    relative
    mt-24
    flex
    flex-col
    items-center
    justify-between
    gap-10
    px-5
    md:mt-32
    md:flex-row
    scroll-mt-32
    md:items-start
    lg:px-0
  "
>
  

  {/* متن */}
  <ScrollReveal
    direction="right"
    duration={400}
    className="relative z-10 w-full md:w-[58%]"
  >
    <div className="flex flex-col items-start gap-5">
      <div className="flex items-center gap-3">
        <span className="text-xs text-gray-600" >01 / درباره من</span>
      </div>

      <h2 className="max-w-2xl text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
        توسعه‌دهنده‌ای که به جزئیات توجه دارد
      </h2>

      <p className="max-w-xl text-sm leading-7 text-gray-500 sm:text-base">
        من ایده‌ها رو به رابط کاربری‌هایی تبدیل می‌کنم
        که ساده و لذت‌بخش هستند.
      </p>
    </div>
  </ScrollReveal>

  {/* Focus Card */}
  <ScrollReveal
    direction="left"
    delay={100}
    duration={400}
    className="relative z-10 w-full md:w-[35%]"
  >
    <div className="main-bg flex w-full flex-col gap-4 rounded-2xl p-5 sm:p-6">
        <p className="text-sm text-gray-400">تمرکز فعلی :</p>
      {currentFocus.map((item, index) => (
        <div
          key={index}
          className="
          flex
          items-center
            gap-2
            text-sm
            text-gray-400
            transition-colors
            duration-200
            hover:text-cyan-300
          "
        >
          <BiArrowFromRight className="shrink-0 text-cyan-400" />
          <p>{item}</p>
        </div>
      ))}
    </div>
  </ScrollReveal>
</section>);
};