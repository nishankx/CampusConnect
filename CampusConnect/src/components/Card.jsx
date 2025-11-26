export default function Card({ title, subtitle, children }) {
  return (
    <div style={{
      background:"white",
      padding:"16px",
      borderRadius:"8px",
      marginBottom:"16px",
      boxShadow:"0 1px 4px rgba(0,0,0,0.1)"
    }}>
      {title && <h3>{title}</h3>}
      {subtitle && <p style={{ color:"#555" }}>{subtitle}</p>}
      <div>{children}</div>
    </div>
  );
}
