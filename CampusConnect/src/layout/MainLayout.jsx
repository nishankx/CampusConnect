import { Outlet } from "react-router-dom";
import Navbar from "/src/components/Navbar";
import Footer from "/src/components/Footer";
import OrbScene from "/src/components/R3F/OrbScene";

export default function MainLayout() {
  return (
    <div
      style={{
        position: "relative",
        minHeight: "100vh",
        width: "100vw",
        overflowX: "hidden",     // IMPORTANT FIX
        color: "white",
      }}
    >
      <OrbScene />  {/* Fullscreen background */}

      <div style={{ position: "relative", zIndex: 10 }}>
        <Navbar />

        {/* Prevent page from hiding behind navbar */}
        <div style={{ paddingTop: "90px" }} />

        <main
          style={{
            width: "100%",
            maxWidth: "1100px",
            margin: "0 auto",
            padding: "20px",
            minHeight: "60vh",     // page stays inside screen
          }}
        >
          <Outlet />
        </main>

        <Footer />
      </div>
    </div>
  );
}
