"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import ImageSlot from "./ImageSlot";

// Troque/adicione arquivos em public/img/story-1.jpg ... story-9.jpg
const STORIES = Array.from({ length: 9 }, (_, i) => `/img/story-${i + 1}.jpg`);

export default function Carousel() {
  const [current, setCurrent] = useState(4);
  const [paused, setPaused] = useState(false);
  const [offset, setOffset] = useState(0);
  const wrapRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  // Calcula o deslocamento para centralizar o slide ativo
  const recenter = useCallback(() => {
    const wrap = wrapRef.current;
    const slide = trackRef.current?.children[current] as HTMLElement | undefined;
    if (!wrap || !slide) return;
    // Slide ativo cresce para 155px durante a transição; usamos a largura final
    const activeWidth = 155;
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
              alt={`Exemplo de story ${i + 1}`}
              label={`story ${i + 1}`}
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
            aria-label={`Ir para story ${i + 1}`}
            className={i === current ? "active" : ""}
            onClick={() => setCurrent(i)}
          />
        ))}
      </div>
    </>
  );
}
