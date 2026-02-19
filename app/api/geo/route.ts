import { NextRequest, NextResponse } from "next/server";
import type { NextRequest as RequestType } from "next/server";

export async function GET(request: RequestType) {
  const ipString = request.headers.get("x-forwarded-for") as string | null;

  const ip =
    ipString?.split(",")[0]?.trim() ||
    (request.headers.get("x-real-ip") as string) ||
    "unknown";

  if (!ip || ip === "unknown" || ip.length < 7) {
    return NextResponse.json(
      { error: `Invalid IP: ${ip}` as const },
      { status: 400 },
    );
  }

  try {
    const response = await fetch(
      `https://api.ip2location.io/?key=${process.env.GEO_KEY}&ip=${ip}`,
      {
        headers: { "User-Agent": "YourApp/1.0" },
      },
    );

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    const geoData = (await response.json()) as any;

    return NextResponse.json({
      ip,
      country: geoData.country_name,
      region: geoData.region_name,
      city: geoData.city_name,
      latitude: parseFloat(geoData.latitude),
      longitude: parseFloat(geoData.longitude),
      timezone: geoData.time_zone,
    });
  } catch (error: unknown) {
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error";

    return NextResponse.json(
      {
        error: "Geolocation service failed" as const,
        ip,
        rawError: errorMessage,
      },
      { status: 503 },
    );
  }
}
