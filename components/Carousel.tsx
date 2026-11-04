"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import ImageSlot from "./ImageSlot";

// Para adicionar mais figurinhas: coloque o arquivo em public/img/figurinhas/ e inclua o caminho aqui
const STORIES = [
  "/img/figurinhas/figurinha-1.webp",
  "/img/figurinhas/figurinha-2.webp",
  "/img/figurinhas/figurinha-3.jpg",
  "/img/figurinhas/figurinha-4.jpg",
  "/img/figurinhas/figurinha-5.jpg",
];

export default function Carousel() {
  const [current, setCurrent] = useState(2);
  const [paused, setPaused] = useState(false);
  const [offset, setOffset] = useState(0);
  const wrapRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  // Calcula o deslocamento para centralizar o slide ativo
  const recenter = useCallback(() => {
    const wrap = wrapRef.current;
    const slide = trackRef.current?.children[current] as HTMLElement | undefined;
    if (!wrap || !slide) return;
    // Slide ativo cresce para 220px durante a transição; usamos a largura final
    const activeWidth = 220;
    setOffset(slide.offsetLeft + activeWidth / 2 - wrap.clientWidth / 2);
  }, [current]);

  useEffect(() => {
    recenter();
    window.addEventListener("resize", recenter);
    return () => window.removeEventListener("resize", recenter);
  }, [recenter]);

  // Autoplay (pausa quando o mouse está em cima)
  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setCurrent((c) => (c + 1) % STORIES.length), 3500);
    return () => clearInterval(id);
  }, [paused]);

  return (
    <>
      <div
        className="carousel"
        ref={wrapRef}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div className="carousel__track" ref={trackRef} style={{ transform: `translateX(${-offset}px)` }}>
          {STORIES.map((src, i) => (
            <ImageSlot
              key={src}
              src={src}
              alt={`Figurinha ${i + 1}`}
              label={`figurinha ${i + 1}`}
              className={`slide ${i === current ? "active" : ""}`}
              onClick={() => setCurrent(i)}
            />
          ))}
        </div>
      </div>
      <div className="dots">
        {STORIES.map((_, i) => (
          <button
            key={i}
            aria-label={`Ir para figurinha ${i + 1}`}
            className={i === current ? "active" : ""}
            onClick={() => setCurrent(i)}
          />
        ))}
      </div>
    </>
  );
}
