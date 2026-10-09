import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import {
  MeshDistortMaterial,
  Environment,
  Sphere,
  MeshTransmissionMaterial,
} from "@react-three/drei";

export default function LiquidMetalOrb({ mousePos }) {
  const meshRef = useRef(null);
  const materialRef = useRef(null);

  // Smoothly interpolated target rotation values
  const smoothed = useRef({ x: 0, y: 0 });

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();

    if (!meshRef.current || !materialRef.current) return;

    // Target rotation from mouse (gentle tilt)
    const targetX = mousePos.current.y * 0.4;
    const targetY = mousePos.current.x * 0.4;

    // Lerp toward target for silky smooth response
    smoothed.current.x += (targetX - smoothed.current.x) * 0.05;
    smoothed.current.y += (targetY - smoothed.current.y) * 0.05;

    // Apply rotation: base idle drift + mouse influence
    meshRef.current.rotation.x = smoothed.current.x + Math.sin(t * 0.3) * 0.08;
    meshRef.current.rotation.y =
      smoothed.current.y + Math.sin(t * 0.2) * 0.12 + t * 0.06;
    meshRef.current.rotation.z = Math.sin(t * 0.15) * 0.05;

    // ✅ FIXED: Smooth mouse distance with clamp (prevents spikes)
    const rawMouseDist = Math.sqrt(
      mousePos.current.x * mousePos.current.x +
        mousePos.current.y * mousePos.current.y,
    );
    // Clamp to [0, 0.1] to prevent aggressive distortion spikes
    const clampedMouseDist = Math.min(rawMouseDist * 0.08, 0.1);

    // Animate the distortion factor dynamically for organic pulsing
    const baseDist = 0.38;
    const pulseDist = Math.sin(t * 0.7) * 0.06 + Math.sin(t * 1.3) * 0.04;
    materialRef.current.distort = baseDist + pulseDist + clampedMouseDist;

    // Subtle scale breathing
    const scale = 1 + Math.sin(t * 0.5) * 0.015 + Math.sin(t * 0.8) * 0.01;
    meshRef.current.scale.setScalar(scale);
  });

  return (
    <>
      {/* Studio environment for chrome reflections */}

      <Environment preset="studio" />
    

      {/* Ambient light for base brightness */}
      <ambientLight intensity={0.15} />

      {/* Key light - cool white rim */}
      <directionalLight position={[5, 5, 5]} intensity={3.5} color="#e8f0ff" />

      {/* Fill light - subtle warm bounce */}
      <directionalLight
        position={[-4, -2, -3]}
        intensity={1.2}
        color="#ffffff"
      />

      {/* Top rim light for chrome sheen */}
      <pointLight position={[0, 6, 2]} intensity={4} color="#ffffff" />

      {/* Bottom contrast shadow light */}
      <pointLight position={[0, -5, 1]} intensity={0.8} color="#1a1a2e" />

      {/* Left accent light */}
      <pointLight position={[-6, 2, 1]} intensity={2} color="#c8d8ff" />

      {/* Right accent light */}
      <pointLight position={[6, -1, 1]} intensity={1.5} color="#ffffff" />

      <Sphere ref={meshRef} args={[1.8, 64, 64]}>
        <MeshDistortMaterial
          ref={materialRef}
          color="#d0d8e8"
          metalness={1.0}
          roughness={0.05}
          distort={0}
          speed={2.2}
          envMapIntensity={3.5}
          clearcoat={1}
          clearcoatRoughness={0.3}
        />
      </Sphere>
    </>
  );
}
