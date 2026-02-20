"use client";

import { useMemo } from "react";
import { latLngToWorld } from "@/lib/geo";
import dynamic from "next/dynamic";
import { UserResApiGeo } from "../types";
import * as THREE from "three";
const Canvas = dynamic(
  () => import("@react-three/fiber").then((mod) => mod.Canvas),
  { ssr: false },
);

const Player = dynamic(() => import("./Player"), { ssr: false });
const RouteLine = dynamic(() => import("./RouteLine"), { ssr: false });
const Collectibles = dynamic(() => import("./Collectibles"), { ssr: false });

export default function Game({ data }: { data: UserResApiGeo | null }) {
  if (!data) return;
  const points = useMemo(() => {
    if (!data || !data.route.length) return [];

    const validRoute = data.route.filter(
      ([lng, lat]) =>
        typeof lng === "number" &&
        typeof lat === "number" &&
        !Number.isNaN(lng) &&
        !Number.isNaN(lat),
    );

    if (!validRoute.length) return [];

    const first = latLngToWorld(validRoute[0][1], validRoute[0][0]);

    return validRoute
      .map(([lng, lat]) => {
        const p = latLngToWorld(lat, lng);

        const scale = 10;
        const x = (p.x - first.x) * scale;
        const z = (p.z - first.z) * scale;
        const y = 0;

        if ([x, y, z].some((v) => Number.isNaN(v))) return null;

        return new THREE.Vector3(x, y, z);
      })
      .filter((p) => p !== null) as THREE.Vector3[];
  }, [data]);
  console.log(points, "points");
  return (
    <Canvas camera={{ position: [0, 40, 40], fov: 50 }}>
      <ambientLight intensity={1} />
      <directionalLight intensity={0.5} position={[5, 10, 5]} />

      <RouteLine points={points} />
      <Collectibles points={points} />
      <Player points={points} />
    </Canvas>
  );
}
