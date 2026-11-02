import { useEffect, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";

import MobileOrb from "./MobileOrb";
import LiquidMetalOrb from "./LiquidMetalOrb";
const MOBILE_QUERY = "(max-width: 767px), (pointer: coarse)";

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(
    () => typeof window !== "undefined" && window.matchMedia(MOBILE_QUERY).matches,
  );

  useEffect(() => {
    const mq = window.matchMedia(MOBILE_QUERY);
    const onChange = (e) => setIsMobile(e.matches);
    setIsMobile(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return isMobile;
}

// ─── Mobile ──────────────────────────────────────────────────────────────────

function MobileCanvas() {
  const wrapRef = useRef(null);
  const [visible, setVisible] = useState(true);

  // Stop rendering completely when the hero is scrolled out of view.
  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={wrapRef} className="w-full h-full">
      <Canvas
        frameloop={visible ? "always" : "never"}
        camera={{ position: [0, 0, 6], fov: 45 }}
        dpr={1}
        gl={{
          antialias: false,
          alpha: true,
          stencil: false,
          powerPreference: "high-performance",
        }}
        style={{ width: "100%", height: "100%" }}
      >
        <MobileOrb />
      </Canvas>
    </div>
  );
}

// ─── Desktop ─────────────────────

function DesktopCanvas({ mousePos }) {
  return (
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
  );
}

// ─── Picks one based on screen ───────────────────────────────────────────────

export default function OrbCanvas({ mousePos }) {
  const isMobile = useIsMobile();
  return isMobile ? <MobileCanvas /> : <DesktopCanvas mousePos={mousePos} />;
}
