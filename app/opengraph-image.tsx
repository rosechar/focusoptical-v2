import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const alt = "Focus Optical — Optician & Eye Exams in Rochester Hills, MI";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const fill = { position: "absolute", top: 0, left: 0, width: "100%", height: "100%" } as const;

// Satori needs a real bold font file; fetch the site's display face at build time and
// fall back to the default sans if the network is unavailable.
async function loadDisplayFont(): Promise<ArrayBuffer | null> {
  try {
    const css = await fetch(
      "https://fonts.googleapis.com/css2?family=Schibsted+Grotesk:wght@800&display=swap",
      { headers: { "User-Agent": "Mozilla/5.0" } },
    ).then((r) => r.text());
    const url = css.match(/src: url\(([^)]+)\) format\('(?:truetype|opentype|woff)'\)/)?.[1];
    if (!url) return null;
    return await fetch(url).then((r) => r.arrayBuffer());
  } catch {
    return null;
  }
}

export default async function OpenGraphImage() {
  const [photo, font] = await Promise.all([
    readFile(join(process.cwd(), "public/images/glasses1.jpeg")),
    loadDisplayFont(),
  ]);
  const src = `data:image/jpeg;base64,${photo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          color: "#fff",
          backgroundColor: "#14181a",
        }}
      >
        <img src={src} alt="" width={1200} height={630} style={{ ...fill, objectFit: "cover" }} />
        <div
          style={{
            ...fill,
            backgroundImage:
              "linear-gradient(100deg, rgba(20,24,26,0.95) 0%, rgba(20,24,26,0.8) 45%, rgba(20,24,26,0.25) 100%)",
          }}
        />
        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "0 80px",
            maxWidth: 800,
          }}
        >
          <div
            style={{
              fontSize: 22,
              letterSpacing: 4,
              textTransform: "uppercase",
              color: "#cdd9ec",
              marginBottom: 20,
            }}
          >
            Rochester Hills, MI · since 1984
          </div>
          <div
            style={{
              fontFamily: font ? "Schibsted Grotesk" : undefined,
              fontSize: 92,
              fontWeight: 800,
              lineHeight: 1,
              letterSpacing: -2,
              marginBottom: 26,
            }}
          >
            Focus Optical
          </div>
          <div style={{ fontSize: 32, lineHeight: 1.35, color: "rgba(255,255,255,0.92)" }}>
            Independent optician. Eye exams, glasses made by hand, and free
            adjustments for anyone.
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: font
        ? [{ name: "Schibsted Grotesk", data: font, weight: 800, style: "normal" }]
        : undefined,
    },
  );
}
