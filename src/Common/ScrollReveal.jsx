
import { useEffect, useRef } from "react";

const ScrollReveal = ({
  children,
  direction = "up",
  delay = 0,
  duration = 350,
  className = "",
}) => {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        element.classList.add("is-visible");
        observer.unobserve(element);
      },
      {
        threshold: 0,
        rootMargin: "0px 0px -40px 0px",
      },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      data-direction={direction}
      className={`scroll-reveal ${className}`}
      style={{
        "--delay": `${delay}ms`,
        "--duration": `${duration}ms`,
      }}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;

