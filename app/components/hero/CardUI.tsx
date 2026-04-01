"use client";

import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import * as THREE from "three";
import { Html } from "@react-three/drei";
import { CardProps } from "@/app/types";
import { useMouse } from "@/app/hooks/useMouse";

export const Card: React.FC<CardProps> = ({
  position: center,
  speed,
  content,
  bgColor,
  radius,
  angleOffset,
}) => {
  const ref = useRef<THREE.Group>(null);
  const [flipped, setFlipped] = useState(false);
  const mouse = useMouse();
  useFrame(({ clock }) => {
    if (!ref.current) return;

    const t = clock.getElapsedTime() * speed;

    // восьмерка или рассредоточенное движение
    const baseX = center[0] + radius * Math.sin(t + angleOffset);
    const baseY =
      center[1] +
      radius * Math.sin(t + angleOffset) * Math.cos(t + angleOffset);
    const baseZ = center[2] + Math.sin(t * 2 + angleOffset) * 0.5;

    // координаты мыши в “плоскости XY”
    const cursorX = mouse.x * 10; // масштаб под сцену
    const cursorY = mouse.y * 5;

    // вектор от мыши к карточке
    const dx = baseX - cursorX;
    const dy = baseY - cursorY;
    const dist = Math.sqrt(dx * dx + dy * dy);

    let offsetX = 0,
      offsetY = 0;

    const influenceRadius = 2; // как близко нужно подходить, чтобы карточка убегала
    const fleeStrength = 1; // сила убегания

    if (dist < influenceRadius) {
      const factor = (influenceRadius - dist) / influenceRadius;
      offsetX = (dx / dist) * factor * fleeStrength;
      offsetY = (dy / dist) * factor * fleeStrength;
    }

    // финальная позиция
    ref.current.position.set(baseX + offsetX, baseY + offsetY, baseZ);

    ref.current.lookAt(0, 0, 0);

    const targetRotation = flipped ? Math.PI : 0;
    ref.current.rotation.y += (targetRotation - ref.current.rotation.y) * 0.1;
    ref.current.rotation.z = Math.sin(t * 1.5 + angleOffset) * 0.1;
  });

  return (
    <group ref={ref} onClick={() => setFlipped(!flipped)}>
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
        <div
          className="w-full h-full p-2 rounded shadow-lg flex flex-col justify-around text-sm"
          style={{ backgroundColor: bgColor }}
        >
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
