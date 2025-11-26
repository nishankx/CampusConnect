import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";
import { useRef, useState } from "react";
import * as THREE from "three";

// COLOR SHIFT
function getAmberCinematic(t, offset = 0) {
  const palette = [
    new THREE.Color("#D46227"),
    new THREE.Color("#FF8A34"),
    new THREE.Color("#F7B36A"),
  ];

  const cycle = ((t + offset) * 0.6) % palette.length;
  const i = Math.floor(cycle);
  const next = (i + 1) % palette.length;

  return palette[i].clone().lerp(palette[next], cycle - i);
}

// ONE orb instance
function Orb({ position, baseScale, offset }) {
  const materialRef = useRef(null);
  const orbRef = useRef(null);
  const [time, setTime] = useState(0);

  useFrame((_, delta) => {
    const newTime = time + delta * 0.9;
    setTime(newTime);

    // Only color + distortion change
    const neonColor = getAmberCinematic(newTime, offset);

    if (materialRef.current) {
      materialRef.current.color = neonColor;
      materialRef.current.emissive = neonColor;
      materialRef.current.emissiveIntensity = 0.9;

      materialRef.current.distort =
        0.45 + 0.07 * Math.sin(newTime * 3.4 + offset);

      materialRef.current.speed = 2.1;
    }

    if (orbRef.current) {
      // REMOVE floating positional changes — fixed orb
      const scalePulse = baseScale + 0.02 * Math.sin(newTime * 2.2 + offset);
      orbRef.current.scale.set(scalePulse, scalePulse, scalePulse);
    }
  });

  return (
    <Sphere ref={orbRef} args={[1.8, 64, 64]} position={position}>
      <MeshDistortMaterial
        ref={materialRef}
        distort={0.45}
        speed={2.2}
        roughness={0.3}
        metalness={0.5}
      />
    </Sphere>
  );
}

export default function OrbScene() {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: -1,
        background: "black",
        pointerEvents: "none",
        overflow: "hidden",
      }}
    >
      {/* GLOBAL BLUR OVERLAY */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backdropFilter: "blur(40px)",
          WebkitBackdropFilter: "blur(40px)",
          zIndex: 5,
        }}
      />

      <Canvas
        camera={{ position: [0, 0, 7], fov: 55 }}
        gl={{ alpha: true, antialias: true }}
        style={{ filter: "blur(8px)" }}
      >
        <ambientLight intensity={0.35} />
        <directionalLight position={[4, 4, 4]} intensity={0.7} color="#FF8A34" />

        {/* LARGE, FIXED ORBS */}
        <Orb position={[0, 0, -3]} baseScale={1.4} offset={0} />
        <Orb position={[-3, 1.5, -4]} baseScale={1.1} offset={2.2} />
        <Orb position={[3, -1.8, -4]} baseScale={1.15} offset={3.5} />

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.6}
        />
      </Canvas>
    </div>
  );
}
