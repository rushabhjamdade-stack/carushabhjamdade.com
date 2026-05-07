import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "CA Rushabh Jamdade — Debit. Credit. Deploy.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          padding: "72px 80px",
          backgroundColor: "#0b0d0c",
          backgroundImage:
            "radial-gradient(800px 400px at 90% 0%, rgba(245,185,69,0.08), transparent 60%), radial-gradient(600px 300px at 0% 100%, rgba(95,182,255,0.05), transparent 60%)",
          fontFamily: "Inter, system-ui, sans-serif",
        }}
      >
        {/* Top app-bar style */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            marginBottom: "56px",
          }}
        >
          <div
            style={{
              width: "44px",
              height: "44px",
              background: "#f5b945",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#0b0d0c",
              fontSize: "20px",
              fontWeight: 700,
              fontFamily: "monospace",
              letterSpacing: "-1px",
            }}
          >
            RJ
          </div>
          <div
            style={{
              color: "#e8efe9",
              fontSize: "26px",
              fontWeight: 600,
            }}
          >
            CA Rushabh Jamdade
          </div>
          <div
            style={{
              marginLeft: "16px",
              color: "#8a948c",
              fontSize: "18px",
              fontFamily: "monospace",
            }}
          >
            ● rushabh_workbook.xlsx
          </div>
        </div>

        {/* Section kicker */}
        <div
          style={{
            color: "#5a635c",
            fontSize: "16px",
            letterSpacing: "3px",
            textTransform: "uppercase",
            fontFamily: "monospace",
            marginBottom: "20px",
          }}
        >
          § 01 — The Operator
        </div>

        {/* Headline */}
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            color: "#e8efe9",
            fontSize: "144px",
            lineHeight: 0.95,
            letterSpacing: "-6px",
            fontWeight: 400,
          }}
        >
          <span>Debit</span>
          <span style={{ color: "#f5b945" }}>.</span>
          <span>Credit</span>
          <span style={{ color: "#f5b945" }}>.</span>
          <span style={{ color: "#f5b945", fontStyle: "italic" }}>Deploy</span>
        </div>

        {/* Tagline */}
        <div
          style={{
            color: "#c2cdc4",
            fontSize: "26px",
            marginTop: "36px",
            maxWidth: "880px",
            lineHeight: 1.4,
          }}
        >
          Chartered Accountant. I build the tools finance professionals actually need.
        </div>

        {/* Bottom bar */}
        <div
          style={{
            display: "flex",
            gap: "20px",
            marginTop: "auto",
            color: "#5a635c",
            fontSize: "18px",
            fontFamily: "monospace",
          }}
        >
          <span>carushabhjamdade.com</span>
          <span style={{ color: "#2c3431" }}>·</span>
          <span style={{ color: "#f5b945" }}>850+</span>
          <span>downloads</span>
          <span style={{ color: "#2c3431" }}>·</span>
          <span style={{ color: "#f5b945" }}>3</span>
          <span>Excel toolkits</span>
          <span style={{ color: "#2c3431" }}>·</span>
          <span style={{ color: "#f5b945" }}>1</span>
          <span>live product</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
