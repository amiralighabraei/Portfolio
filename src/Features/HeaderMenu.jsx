import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { headerMenuData , icons } from "../data";

export const HeaderMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleHandler = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <header
      className="
        fixed
        top-5
        left-1/2
        z-50
        p-4
        w-[90%]
        -translate-x-1/2
        overflow-hidden
        rounded-4xl
        main-bg
        text-white
        backdrop-blur-sm
      "
    >
      <div className="flex items-center justify-between p-4">
        <span className="w-[30%] font-semibold">
          امیرعلی غبرائی
        </span>

        <ul className="
        w-[15%]
        flex
        items-center
        justifycenter
        gap-1
        text-2xl
        hover:text-cyan-300
        ">
          {icons.map(item => (
            <li className=" transition-all hover:-translate-y-1 p-1 duration-200 text-white hover:text-cyan-300" key={item.Index}>
              <a target="_blank" href= {item.href}>{item.logo}</a></li>
          ))}
        </ul>

        <ul
          className="
            hidden
            w-[55%]
            items-center
            justify-evenly
            md:flex
          "
        >
          {headerMenuData.map((item) => (
            <li className="text-white text-sm font-bold hover:-translate-y-1 transition-all duration-200" key={item.path}>
              <a
                href={item.path}
                className="
                  hover:text-cyan-300
                  p-1
                "
              >
                {item.title}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={toggleHandler}
          className="
            group
            relative
            flex
            h-9
            w-9
            items-center
            justify-center
            overflow-hidden
            rounded-xl
            md:hidden
            text-lg
          "
        >
          <span
            className="
              absolute
              inset-y-0
              left-0
              w-0
              bg-cyan-400/15
              transition-[width]
              duration-300
              ease-out
              group-hover:w-full
            "
          />
          

          <span
            className="
              relative
              z-10
              transition-colors
              duration-200
              group-hover:text-cyan-300
            "
          >
            {isOpen ? <IoClose /> : <GiHamburgerMenu />}
          </span>
        </button>
      </div>

      <div
        className={`
          grid
          transition-[grid-template-rows,opacity]
          duration-300
          ease-out
          md:hidden
          ${
            isOpen
              ? "grid-rows-[1fr] opacity-100"
              : "grid-rows-[0fr] opacity-0"
          }
        `}
      >
        <div className="overflow-hidden">
          <div className="border-t border-white/10 px-4 py-6">
            <ul className="flex flex-col items-center gap-3">
              {headerMenuData.map((item) => (
                <li key={item.path} className="w-full">
                  <a
                    href={item.path}
                    onClick={() => setIsOpen(false)}
                    className="
                      group
                      relative
                      block
                      overflow-hidden
                      rounded-xl
                      px-4
                      py-3
                      text-center
                      transition-colors
                      duration-200
                      hover:text-cyan-200
                    "
                  >
                    <span
                      className="
                        absolute
                        inset-y-0
                        left-0
                        -z-10
                        w-0
                        bg-cyan-400/10
                        transition-[width]
                        duration-300
                        ease-out
                        group-hover:w-full
                      "
                    />

                    <span className="relative z-10">
                      {item.title}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};