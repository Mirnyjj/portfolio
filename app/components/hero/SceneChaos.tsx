"use client";

import { CardProps } from "@/app/types";
import { Canvas } from "@react-three/fiber";
import { Card } from "./CardUI";
import { useState } from "react";

export default function SceneChaosUI() {
  const [textareaValue, setTextareaValue] = useState("");

  const cards: CardProps[] = [
    {
      position: [-6, 2, 0],
      rotation: [0, 0, -0.1],
      speed: 1,
      content: (
        <div className="flex flex-col">
          <input
            type="text"
            placeholder="Username"
            className="border p-1 rounded w-full mb-2 border-cyan-200 placeholder:text-cyan-200 text-black"
          />
          <input
            type="email"
            placeholder="Email"
            className="border p-1 rounded w-full mb-2 border-cyan-200 placeholder:text-cyan-200 text-black"
          />
          <input
            type="password"
            placeholder="Password"
            className="border p-1 rounded w-full mb-2 border-cyan-200 placeholder:text-cyan-200 text-black"
          />
          <input
            type="number"
            placeholder="Age"
            className="border p-1 rounded w-full mb-2 border-cyan-200 placeholder:text-cyan-200 text-black"
          />
        </div>
      ),
    },
    {
      position: [4, -2, 0],
      rotation: [0, 0, 0.15],
      speed: 0.8,
      content: (
        <div className="flex flex-col">
          <label className="flex items-center gap-2 text-zinc-800">
            <input type="checkbox" className="accent-blue-500" />
            Согласиться с условиями
          </label>
          <label className="flex items-center gap-2 text-zinc-800 mt-1">
            <input
              type="radio"
              name="gender"
              value="male"
              className="accent-green-500"
            />
            Мужской
          </label>
          <label className="flex items-center gap-2 text-zinc-800">
            <input
              type="radio"
              name="gender"
              value="female"
              className="accent-pink-500"
            />
            Женский
          </label>
          <button className="mt-2 px-4 py-1 bg-blue-500 text-white rounded cursor-pointer hover:bg-blue-600 transition">
            Отправить
          </button>
        </div>
      ),
    },
    {
      position: [-1, 4, 0],
      rotation: [0, 0, 0],
      speed: 1.2,
      content: (
        <div className="flex flex-col">
          <textarea
            value={textareaValue}
            onChange={(e) => setTextareaValue(e.target.value)}
            maxLength={200}
            placeholder="Введите текст..."
            className="border p-1 rounded w-full mb-1 border-cyan-200 placeholder:text-cyan-200 text-black resize-none overflow-auto min-h-[60px]"
          />
          <span className="text-xs text-gray-500">
            {textareaValue.length}/200 символов
          </span>
        </div>
      ),
    },
    {
      position: [4, 1, 0],
      rotation: [0, 0, 0.08],
      speed: 0.9,
      content: (
        <select className="border p-1 rounded w-full mb-2 border-cyan-200 text-black">
          <option value="">Выберите вариант</option>
          <option value="option1">Вариант 1</option>
          <option value="option2">Вариант 2</option>
          <option value="option3">Вариант 3</option>
        </select>
      ),
    },
    {
      position: [-4, -2, 0],
      rotation: [0, 0, -0.05],
      speed: 1.1,
      content: (
        <div className="flex flex-col">
          <input
            type="file"
            className="border p-1 rounded w-full mb-2 border-cyan-200 text-black"
          />
          <input
            type="date"
            className="border p-1 rounded w-full mb-2 border-cyan-200 text-black"
          />
          <input
            type="time"
            className="border p-1 rounded w-full mb-2 border-cyan-200 text-black"
          />
        </div>
      ),
    },
    {
      position: [0, -4, 0],
      rotation: [0, 0, 0.05],
      speed: 1,
      content: (
        <div className="flex flex-col">
          <progress value={70} max={100} className="mb-2 w-full" />
          <meter min={0} max={100} value={40} className="w-full mb-2" />
          <output className="text-sm text-gray-700">Результат: 40</output>
        </div>
      ),
    },
  ];

  return (
    <Canvas camera={{ position: [0, 0, 12], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={0.8} />

      {cards.map((card, i) => (
        <Card key={i} {...card} />
      ))}
    </Canvas>
  );
}
