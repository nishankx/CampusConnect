import OrbScene from "../components/R3F/OrbScene";

export default function Home() {
  return (
    <div style={{ position: "relative", minHeight: "80vh", color: "white" }}>
      <OrbScene />

      <div style={{ position: "relative", zIndex: 10 }}>
        <h1>Welcome to Campus Connect</h1>
        <p>A dynamic space for your campus community.</p>
      </div>
    </div>
  );
}
