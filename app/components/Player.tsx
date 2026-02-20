"use client";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function Player({ points }: { points: THREE.Vector3[] }) {
  const ref = useRef<THREE.Mesh>(null!);
  const index = useRef(0);
  const speed = 0.02;

  useFrame(() => {
    if (!ref.current || index.current >= points.length) return;

    const target = points[index.current];
    const pos = ref.current.position;

    const dir = new THREE.Vector3().subVectors(target, pos).normalize();

    pos.add(dir.multiplyScalar(speed));

    if (pos.distanceTo(target) < 0.1) {
      index.current++;
    }
  });

  return (
    <mesh ref={ref}>
      <boxGeometry args={[0.5, 0.5, 0.5]} />
      <meshStandardMaterial color="orange" />
    </mesh>
  );
}
