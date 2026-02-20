import { GeoResApi } from "@/app/types";
import { NextRequest, NextResponse } from "next/server";
import type { NextRequest as RequestType } from "next/server";

const MY_LOCATION = {
  lat: 53.20029, // твоя точка
  lng: 50.15078,
};

export async function GET(request: RequestType) {
  // const ipString = request.headers.get("x-forwarded-for") as string | null;

  const ip = "178.176.76.54";
  // const ip =
  //   ipString?.split(",")[0]?.trim() ||
  //   (request.headers.get("x-real-ip") as string) ||
  //   "unknown";

  // if (!ip || ip === "unknown" || ip.length < 7) {
  //   return NextResponse.json(
  //     { error: `Invalid IP: ${ip}` as const },
  //     { status: 400 },
  //   );
  // }

  try {
    const geoRes = await fetch(
      `https://api.ip2location.io/?key=${process.env.GEO_KEY}&ip=${ip}`,
      {
        headers: { "User-Agent": "YourApp/1.0" },
      },
    );

    if (!geoRes.ok) throw new Error("Geo failed");

    const geo: GeoResApi = await geoRes.json();

    const userLat = parseFloat(geo.latitude);
    const userLng = parseFloat(geo.longitude);

    // 2️⃣ Получаем маршрут через OSRM
    const routeRes = await fetch(
      `https://router.project-osrm.org/route/v1/driving/${MY_LOCATION.lng},${MY_LOCATION.lat};${userLng},${userLat}?overview=full&geometries=geojson`,
    );

    if (!routeRes.ok) throw new Error("Route failed");

    const routeData = await routeRes.json();

    const coordinates = routeData.routes?.[0]?.geometry?.coordinates || [];

    return NextResponse.json({
      user: {
        city: geo.city_name,
        country: geo.country_name,
        lat: userLat,
        lng: userLng,
      },
      route: coordinates,
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
