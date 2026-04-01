"use client";

import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import * as THREE from "three";
import { Html } from "@react-three/drei";
import { CardProps } from "@/app/types";

export const Card: React.FC<CardProps> = ({
  position,
  rotation,
  speed,
  content,
}) => {
  const ref = useRef<THREE.Group>(null);
  const bgRef = useRef<THREE.Mesh>(null);
  const [flipped, setFlipped] = useState(false);

  // анимация парения + плавный флип
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime() * speed;
    if (ref.current) {
      // плавное парение
      ref.current.position.x = position[0] + Math.sin(t * 0.5) * 0.3;
      ref.current.position.y = position[1] + Math.sin(t + position[0]) * 0.5;
      ref.current.position.z = position[2];

      // вращение для эффекта флипа
      const targetRotation = flipped ? Math.PI : 0;
      ref.current.rotation.y += (targetRotation - ref.current.rotation.y) * 0.1;
      ref.current.rotation.z = rotation[2] + Math.sin(t) * 0.05;
    }

    // мерцающий фон
    if (bgRef.current) {
      const r = (Math.sin(t * 1) + 1) / 2;
      const g = (Math.sin(t * 1.3 + 2) + 1) / 2;
      const b = (Math.sin(t * 1.7 + 4) + 1) / 2;
      (bgRef.current.material as THREE.MeshBasicMaterial).color.setRGB(r, g, b);
    }
  });

  return (
    <group ref={ref} onClick={() => setFlipped(!flipped)}>
      {/* Фон карточки */}
      <mesh ref={bgRef} scale={[1, 1, 1]}>
        <planeGeometry args={[1, 1]} />
        <meshBasicMaterial />
      </mesh>

      {/* Лицевая сторона */}
      <Html
        center
        transform
        distanceFactor={10}
        style={{
          width: "100%",
          height: "100%",
          pointerEvents: "auto",
          backfaceVisibility: "hidden",
        }}
      >
        <div className="w-full h-full p-2 bg-transparent rounded shadow-lg flex flex-col justify-around text-sm">
          {!flipped && content}
        </div>
      </Html>

      {/* Обратная сторона */}
      <Html
        center
        transform
        distanceFactor={10}
        style={{
          width: "100%",
          height: "100%",
          pointerEvents: "none",
          transform: "rotateY(180deg)",
          backfaceVisibility: "hidden",
        }}
      >
        <div className="w-full h-full p-2 bg-transparent rounded shadow-lg flex items-center justify-center text-sm"></div>
      </Html>
    </group>
  );
};
