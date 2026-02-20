import * as THREE from "three";

export function latLngToWorld(lat: number, lng: number) {
  if (
    typeof lat !== "number" ||
    typeof lng !== "number" ||
    Number.isNaN(lat) ||
    Number.isNaN(lng)
  ) {
    return { x: 0, z: 0 };
  }

  const R = 6378137;

  const clampedLat = Math.max(Math.min(lat, 89.9999), -89.9999);

  const x = R * THREE.MathUtils.degToRad(lng);
  const z =
    R *
    Math.log(Math.tan(Math.PI / 4 + THREE.MathUtils.degToRad(clampedLat) / 2));

  return { x, z };
}
