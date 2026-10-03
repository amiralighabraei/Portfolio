const AuroraGlow = ({
  color = "#22d3ee",
  size = "w-80 h-80",
  opacity = "opacity-20",
  duration = "18s",
  className = "",
}) => {
  return (
    <div
      aria-hidden="true"
      className={`
        pointer-events-none
        absolute
        rounded-full
        ${size}
        ${opacity}
        ${className}
      `}
      style={{
        background: `radial-gradient(
          circle,
          ${color} 0%,
          ${color} 20%,
          transparent 70%
        )`,
        animation: `auroraFloat ${duration} ease-in-out infinite`,
        willChange: "transform",
      }}
    />
  );
};

export default AuroraGlow;