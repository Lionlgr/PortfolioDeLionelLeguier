import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #09090b 0%, #18181b 100%)",
          color: "#22d3ee",
          fontSize: 18,
          fontWeight: 700,
          letterSpacing: -0.5,
          borderRadius: 8,
        }}
      >
        LL
      </div>
    ),
    { ...size },
  );
}
