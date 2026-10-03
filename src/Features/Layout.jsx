import { Outlet } from "react-router";

export const Layout = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#060912]">

      {/* Mesh Gradient */}
      <div
        className="
          pointer-events-none
          fixed
          inset-0
          z-0
          bg-[radial-gradient(circle_at_15%_15%,rgba(139,92,246,0.12),transparent_32%),radial-gradient(circle_at_85%_65%,rgba(6,182,212,0.08),transparent_32%)]
        "
      />

      {/* Grid */}
      <div
        className="
          pointer-events-none
          fixed
          inset-0
          z-0
          opacity-[0.025]
        "
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />

      {/* Glass Overlay */}
      <div className="pointer-events-none fixed inset-0 z-0 bg-white/[0.015]" />

      {/* Content */}
      <main className="relative z-10">
        <Outlet />
      </main>

    </div>
  );
};