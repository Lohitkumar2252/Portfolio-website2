import { useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import {
  MeshDistortMaterial,
  Environment,
  Lightformer,
  Sphere,
} from "@react-three/drei";

export default function MobileOrb() {
  const meshRef = useRef(null);
  const materialRef = useRef(null);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (!meshRef.current || !materialRef.current) return;

    // Idle drift
    meshRef.current.rotation.x = Math.sin(t * 0.3) * 0.08;
    meshRef.current.rotation.y = Math.sin(t * 0.2) * 0.12 + t * 0.06;
    meshRef.current.rotation.z = Math.sin(t * 0.15) * 0.05;

    // Organic pulsing
    const baseDist = 0.38;
    const pulseDist = Math.sin(t * 0.7) * 0.06 + Math.sin(t * 1.3) * 0.04;
    materialRef.current.distort = baseDist + pulseDist;

    // Subtle breathing
    const scale = 1 + Math.sin(t * 0.5) * 0.015 + Math.sin(t * 0.8) * 0.01;
    meshRef.current.scale.setScalar(scale);
  });

  const viewportWidth = useThree((s) => s.viewport.width);
  const radius = viewportWidth * 0.3;

  return (
    <>
      <Environment resolution={128} frames={1}>
        <color attach="background" args={["#0b0b10"]} />
        <Lightformer form="rect" intensity={4} position={[0, 5, 2]} scale={[10, 3, 1]} />
        <Lightformer form="rect" intensity={2} position={[-6, 1, 2]} scale={[4, 6, 1]} />
        <Lightformer form="rect" intensity={2} position={[6, -1, 2]} scale={[4, 6, 1]} />
        <Lightformer form="rect" intensity={1} position={[0, -5, 3]} scale={[8, 2, 1]} />
      </Environment>

      <ambientLight intensity={0.2} />
      <directionalLight position={[5, 5, 5]} intensity={2.5} color="#e8f0ff" />

      <Sphere ref={meshRef} args={[radius, 40, 40]}>
        <MeshDistortMaterial
          ref={materialRef}
          color="#d0d8e8"
          metalness={1.0}
          roughness={0.05}
          distort={0}
          speed={2.2}
          envMapIntensity={1.5}
          clearcoat={0}
        />
      </Sphere>
    </>
  );
}