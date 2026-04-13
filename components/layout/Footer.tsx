export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid rgba(255,255,255,0.04)",
        padding: 24,
      }}
    >
      <div
        className="max-w-[1200px] mx-auto flex justify-between items-center flex-wrap gap-4"
      >
        <div className="flex items-center gap-0">
          <span style={{ color: "#FF9933", fontWeight: 800, fontSize: 17 }}>
            RJ
          </span>
          <span style={{ color: "#222", margin: "0 10px" }}>|</span>
          <span style={{ color: "#444", fontSize: 12.5 }}>
            CA Rushabh Jamdade · FinLens Advisory · Pune
          </span>
        </div>
        <span style={{ color: "#333", fontSize: 11.5 }}>
          &copy; 2026 · Built with AI & a lot of chai ☕
        </span>
      </div>
    </footer>
  );
}
