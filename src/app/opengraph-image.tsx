import { ImageResponse } from "next/og";

export const alt = "Lionel Leguier — Développeur Fullstack (Python / React)";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background:
            "radial-gradient(900px 500px at 80% -10%, rgba(34,211,238,0.18), transparent 60%), radial-gradient(700px 400px at -10% 110%, rgba(99,102,241,0.18), transparent 60%), #09090b",
          color: "#fafafa",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            fontSize: 22,
            color: "#22d3ee",
            letterSpacing: 4,
            textTransform: "uppercase",
          }}
        >
          <div
            style={{
              width: 48,
              height: 48,
              borderRadius: 10,
              border: "1px solid #27272a",
              background: "#0f0f11",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#22d3ee",
              fontSize: 20,
              fontWeight: 700,
            }}
          >
            LL
          </div>
          Portfolio
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div style={{ fontSize: 88, fontWeight: 700, letterSpacing: -2, lineHeight: 1 }}>
            Lionel Leguier
          </div>
          <div
            style={{
              fontSize: 32,
              color: "#22d3ee",
              letterSpacing: 4,
              textTransform: "uppercase",
            }}
          >
            Développeur Fullstack — Python / React
          </div>
          <div style={{ marginTop: 12, fontSize: 26, color: "#a1a1aa", maxWidth: 900 }}>
            Master MIAGE · Alternance Vinci Energies · Lauréat hackathons européens
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontSize: 22,
            color: "#71717a",
          }}
        >
          <div>lionel-leguier.vercel.app</div>
          <div style={{ color: "#22d3ee" }}>Disponible — septembre 2026</div>
        </div>
      </div>
    ),
    { ...size },
  );
}
