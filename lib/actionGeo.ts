import { GeoProps } from "@/app/types";

export async function getGeo(): Promise<GeoProps | null> {
  // const host = "http://localhost:3000";
  const host = process.env.VERCEL_URL
    ? process.env.VERCEL_URL
    : "http://localhost:3000";

  try {
    const res = await fetch(`${host}/api/geo`);
    if (!res.ok) {
      console.error("Geo API error:", res.status);
      return null;
    }

    const text = await res.text();
    if (!text) return null;

    return JSON.parse(text) as GeoProps;
  } catch (err) {
    console.error("Geo fetch failed:", err);
    return null;
  }
}
