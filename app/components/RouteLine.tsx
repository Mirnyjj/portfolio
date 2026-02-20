import * as THREE from "three";

export default function RouteLine({ points }: { points: THREE.Vector3[] }) {
  if (!points.length) return null;

  // Фильтруем точки с NaN
  const filteredPoints = points.filter(
    (p) => !Number.isNaN(p.x) && !Number.isNaN(p.y) && !Number.isNaN(p.z),
  );

  if (!filteredPoints.length) return null;

  const geometry = new THREE.BufferGeometry().setFromPoints(filteredPoints);
  const material = new THREE.LineBasicMaterial({ color: 0x00ffcc });

  return <primitive object={new THREE.Line(geometry, material)} />;
}
