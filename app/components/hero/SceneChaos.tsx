"use client";

import { Canvas } from "@react-three/fiber";
import { Card } from "./CardUI";
import { useMemo, useState } from "react";
import { CardProps } from "@/app/types";

export default function SceneChaosUI() {
  const [value, setValue] = useState("");
  const getRandomColor = () =>
    `hsl(${Math.floor(Math.random() * 360)}, 70%, 80%)`;

  const htmlTags = [
    "<area/>",
    "<a/>",
    "<br/>",
    "<col/>",
    "<hr/>",
    "<img/>",
    "<input/>",
    "<link/>",
    "<meta/>",

    "<source/>",
    "<track/>",
    "<main/>",
    "<command/>",
    "<keygen/>",
    "<menuitem/>",
    "<nav/>",
    "<header/>",
    "<footer/>",
    "<aside/>",
    "<summary/>",
    "<details/>",
    "<figcaption/>",
    "<figure/>",
    "<dialog/>",
    "<progress/>",
    "<meter/>",
    "<canvas/>",
    "<svg/>",
    "<circle/>",
    "<rect/>",
    "<line/>",
    "<ellipse/>",
    "<polygon/>",
    "<polyline/>",
    "<path/>",
    "<stop/>",
    "<animate/>",
    "<animateTransform/>",
    "<text/>",
    "<tspan/>",
    "<image/>",
    "<use/>",
    "<clipPath/>",
    "<mask/>",
    "<filter/>",
    "<foreignObject/>",
    "<template/>",
    "<slot/>",
  ];

  const totalCards = 50;
  const cards: CardProps[] = htmlTags.map((tag, i) => {
    const center = [
      (Math.random() - 0.5) * 20, // X: -10 .. 10
      (Math.random() - 0.5) * 10, // Y: -5 .. 5
      (Math.random() - 0.5) * 2, // Z: -1 .. 1
    ];

    return {
      position: center,
      rotation: [0, 0, (Math.random() - 0.5) * 0.2],
      radius: 1 + Math.random() * 2, // амплитуда движения
      angleOffset: Math.random() * Math.PI * 2,
      speed: 0.2 + Math.random() * 0.5,
      bgColor: getRandomColor(),
      content: <div className="text-black">{tag}</div>,
    };
  });

  return (
    <Canvas camera={{ position: [0, 0, 12], fov: 50 }} gl={{ antialias: true }}>
      {/* свет */}
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 5, 5]} intensity={1} />

      {/* карточки */}
      {cards.map((card, i) => (
        <Card key={i} {...card} />
      ))}
    </Canvas>
  );
}
