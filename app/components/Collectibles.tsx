"use client";
import * as THREE from "three";
export default function Collectibles({ points }: { points: THREE.Vector3[] }) {
  return (
    <>
      {points
        .filter((_: any, i: number) => i % 10 === 0)
        .map((p: any, i: number) => (
          <mesh key={i} position={p}>
            <sphereGeometry args={[0.4, 8, 8]} />
            <meshStandardMaterial color="gold" />
          </mesh>
        ))}
    </>
  );
}
