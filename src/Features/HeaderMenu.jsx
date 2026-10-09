
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { headerMenuData, icons } from "../data";

export const HeaderMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleHandler = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <header
      className="
        fixed left-1/2 top-4 z-50
        w-[92%] max-w-6xl -translate-x-1/2
        overflow-hidden rounded-2xl
        border border-white/[0.09]
        bg-[#0B1020]/85 text-white
        shadow-[0_8px_30px_rgba(0,0,0,0.12)]
        backdrop-blur-md
        sm:top-5 sm:w-[90%] sm:rounded-3xl
      "
    >
      <div className="flex items-center justify-between gap-6 px-4 py-3 sm:gap-8 sm:px-6 sm:py-4">
        <a
          href="#"
          className="
            shrink-0 text-sm font-bold tracking-tight
            transition-colors duration-200
            hover:text-cyan-300 sm:text-base
          "
        >
          امیرعلی غبرائی
        </a>

        <ul className="hidden shrink-0 items-center gap-2 sm:flex">
          {icons.map((item, index) => (
            <li
              className="text-lg text-gray-400 transition-all duration-200 hover:-translate-y-0.5 hover:text-cyan-300"
              key={item.Index ?? item.href ?? index}
            >
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={item.href}
                aria-label={item.title ?? "Social profile"}
              >
                {item.logo}
              </a>
            </li>
          ))}
        </ul>

        <nav className="hidden flex-1 md:block">
          <ul className="flex items-center justify-end gap-2 lg:gap-5">
            {headerMenuData.map((item) => (
              <li key={item.path}>
                <a
                  href={item.path}
                  className="
                    relative block rounded-lg px-2 py-2
                    text-xs font-medium text-gray-300
                    transition-colors duration-200
                    hover:text-cyan-300
                    after:absolute after:bottom-1 after:left-2
                    after:right-2 after:h-px after:origin-right
                    after:scale-x-0 after:bg-cyan-300
                    after:transition-transform after:duration-200
                    hover:after:origin-left hover:after:scale-x-100
                    lg:px-3 lg:text-sm
                  "
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          onClick={toggleHandler}
          aria-label={isOpen ? "بستن منو" : "باز کردن منو"}
          aria-expanded={isOpen}
          className="
            flex h-10 w-10 shrink-0 items-center
            justify-center rounded-xl border
            border-white/10 bg-white/[0.04]
            text-lg text-gray-300
            transition-colors duration-200
            hover:border-cyan-300/30
            hover:text-cyan-300
            md:hidden
          "
        >
          {isOpen ? <IoClose /> : <GiHamburgerMenu />}
        </button>
      </div>

      <div
        className={`
          grid transition-[grid-template-rows,opacity]
          duration-300 ease-out md:hidden
          ${
            isOpen
              ? "grid-rows-[1fr] opacity-100"
              : "grid-rows-[0fr] opacity-0"
          }
        `}
      >
        <div className="overflow-hidden">
          <div className="border-t border-white/[0.08] px-4 pb-4 pt-3">
            <ul className="flex flex-col gap-1">
              {headerMenuData.map((item) => (
                <li key={item.path}>
                  <a
                    href={item.path}
                    onClick={() => setIsOpen(false)}
                    className="
                      block rounded-xl px-4 py-3
                      text-center text-sm font-medium
                      text-gray-300
                      transition-colors duration-200
                      hover:bg-cyan-400/[0.07]
                      hover:text-cyan-200
                    "
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-3 flex items-center justify-center gap-5 border-t border-white/[0.08] pt-4 sm:hidden">
              {icons.map((item, index) => (
                <a
                  key={item.Index ?? item.href ?? index}
                  target="_blank"
                  rel="noopener noreferrer"
                  href={item.href}
                  aria-label={item.title ?? "Social profile"}
                  className="
                    text-xl text-gray-400
                    transition-colors duration-200
                    hover:text-cyan-300
                  "
                >
                  {item.logo}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
