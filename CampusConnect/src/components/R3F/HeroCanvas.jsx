import { Canvas } from "@react-three/fiber";
import Scene from "./Scene";

export default function HeroCanvas() {
  return (
    <div style={{ width: "100%", height: "400px" }}>
      <Canvas camera={{ position: [3, 3, 3], fov: 60 }}>
        <Scene />
      </Canvas>
    </div>
  );
}
