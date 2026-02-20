"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { UserResApiGeo } from "../types";

const Game = dynamic(() => import("../components/Game"), { ssr: false });

export default function Page() {
  const [data, setData] = useState<UserResApiGeo | null>(null);

  useEffect(() => {
    fetch("/api/geo")
      .then((res) => res.json())
      .then(setData);
  }, []);

  if (!data) return <div>Строим маршрут...</div>;

  return <Game data={data} />;
}
