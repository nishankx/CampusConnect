import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",        // FULL WIDTH (can't overflow)
        height: "70px",
        padding: "0 24px",
        boxSizing: "border-box",
        zIndex: 9999,          // ALWAYS ON TOP
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",

        background: "rgba(0,0,0,0.25)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(255,138,52,0.25)",
        color: "white",
      }}
    >
      <div style={{ fontSize: 22, fontWeight: 700 }}>Campus Connect</div>

      <div style={{ display: "flex", gap: "18px" }}>
        <Link style={linkStyle} to="/">Home</Link>
        <Link style={linkStyle} to="/clubs">Clubs</Link>
        <Link style={linkStyle} to="/marketplace">Marketplace</Link>
        <Link style={linkStyle} to="/dashboard">Dashboard</Link>
        <Link style={buttonStyle} to="/login">Login</Link>
      </div>
    </nav>
  );
}

const linkStyle = {
  color: "white",
  textDecoration: "none",
  padding: "6px 10px",
  borderRadius: "8px",
  fontSize: "15px",
};

const buttonStyle = {
  ...linkStyle,
  border: "1px solid rgba(255,138,52,0.45)",
  boxShadow: "0 0 10px rgba(255,138,52,0.4)",
};
