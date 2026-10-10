import { useRef, useCallback, Suspense } from "react";
import { Canvas } from "@react-three/fiber";

import LiquidMetalOrb from "./LiquidMetalOrb";

// ─── Canvas Fallback ──────────────────────────────────────────────────────────

function CanvasFallback() {
  return <div className="w-full h-full" />;
}

// ─── Hero Section ─────────────────────────────────────────────────────────────

export default function HeroSection() {
  // Shared mouse position ref (avoids re-renders, passed to orb)
  const mousePos = useRef({ x: 0, y: 0 });

  const handleMouseMove = useCallback((e) => {
    const { clientX, clientY, currentTarget } = e;
    const { width, height } = currentTarget.getBoundingClientRect();
    // Normalize to [-1, 1]
    mousePos.current.x = (clientX / width) * 2 - 1;
    mousePos.current.y = -((clientY / height) * 2 - 1);
  }, []);

  return (
    <section className="sm:flex p-2 sm:p-10 h-[80vh] relative" id="Home">
      <div className=" left absolute top-0 left-0 sm:static w-full lg:w-1/2 flex justify-center sm:pt-0 items-center flex-col p-5 h-full ">
        <h1 className="text-text-main text-[2rem]  sm:text-[4rem]  leading-8 sm:leading-18 font-primary text-center">
          A Better Website for
          <span className="font-bold">
            <br />
            Better First Impression.
          </span>
        </h1>
        <p className=" text-center font-secondary text-text-muted capitalize text-[0.8rem] sm:text-base leading-6 mt-3 w-full sm:w-[60%]">
          I help businesses turn their online presence into a website that looks
          professional, builds trust, and makes it easier for customers to take
          action.
        </p>
        <p className="font-secondary text-center text-text-muted capitalize text-[0.7rem] sm:text-base leading-6 mt-3">
          Modern interfaces. Smooth interactions. Clean, responsive code.
        </p>
        <div className="btns flex gap-5 mt-5">
          <a
            target="_blank"
            href="https://www.instagram.com/lohit_kcodes/"
            className="text-white bg-primary-btn rounded-4xl font-bold px-[18px] py-2  sm:px-10 sm:py-2 text-sm  flex items-center justify-center text-center font-secondary"
          >
            Start Now
          </a>
          <a
            href="#Projects"
            className="text-secondary-btn-text bg-secondary-btn rounded-4xl font-bold px-[18px] py-2 sm:px-10 sm:py-2 flex items-center justify-center text-center text-sm font-secondary"
          >
            Explore My Work
          </a>
        </div>
      </div>
      <div
        className="relative hidden  w-full lg:w-1/2 h-full overflow-hidden lg:flex items-center justify-center"
        onMouseMove={handleMouseMove}
      >
        {/* ── 3D WebGL Canvas — Background Layer (z-0) ── */}
        {/* Optimize this for mobile and add to the website its hidden for smaller screens */}
        <div className=" absolute inset-0 -z-1 opacity-40 sm:opacity-100">
          <Suspense fallback={<CanvasFallback />}>
            <Canvas
              camera={{ position: [0, 0, 6], fov: 45 }}
              gl={{
                antialias: true,
                alpha: true,
                powerPreference: "high-performance",
              }}
              dpr={[1, 2]}
              style={{ width: "100%", height: "100%" }}
            >
              <LiquidMetalOrb mousePos={mousePos} />
            </Canvas>
          </Suspense>
        </div>

        {/* ── Radial vignette overlay for depth ── */}
        {/* <div
          className="absolute inset-0 z-[5] pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 70% 70% at 50% 50%, transparent 30%, rgba(0,0,0,0.55) 100%)",
          }}
        /> */}

        {/* ── Bottom gradient fade ── */}
        {/* <div
          className="absolute bottom-0 left-0 right-0 h-40 z-[5] pointer-events-none"
          style={{
            background:
              "linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 100%)",
          }}
        /> */}

        {/* Shimmer keyframe */}
        <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); opacity: 1; }
          100% { transform: translateX(200%); opacity: 1; }
        }
      `}</style>
      </div>
    </section>
  );
}
