import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

export default function Scene() {
  const cubeRef = useRef();

  // simple animation loop
  useFrame(() => {
    cubeRef.current.rotation.x += 0.01;
    cubeRef.current.rotation.y += 0.01;
  });

  return (
    <>
      <ambientLight intensity={0.4} />
      <directionalLight intensity={1} position={[3, 3, 3]} />

      <mesh ref={cubeRef} position={[0, 0, 0]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="#1f6feb" />
      </mesh>

      <OrbitControls enableZoom={true} />
    </>
  );
}
