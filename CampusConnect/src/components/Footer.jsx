import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        padding: "14px 24px",
        zIndex: 20,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",

        background: "rgba(0,0,0,0.25)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(255,138,52,0.25)",

        color: "white",
        boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
      }}
    >
      <div style={{ fontSize: 22, fontWeight: 700, letterSpacing: 0.5 }}>
        Campus Connect
      </div>

      <div style={{ display: "flex", gap: "16px", fontSize: 15 }}>
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
  transition: "0.25s",
};

const buttonStyle = {
  ...linkStyle,
  border: "1px solid rgba(255,138,52,0.45)",
  boxShadow: "0 0 8px rgba(255,138,52,0.3)",
};
