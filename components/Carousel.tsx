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
  "/img/figurinhas/figurinha-6.jpg",
  "/img/figurinhas/figurinha-7.jpg",
  "/img/figurinhas/figurinha-8.jpg",
  "/img/figurinhas/figurinha-9.jpg",
  "/img/figurinhas/figurinha-10.jpg",
];

const AUTOPLAY_MS = 3500;

/**
 * Carrossel com rolagem nativa (scroll-snap): funciona com swipe no celular,
 * trackpad, teclado e botões. A figurinha mais perto do centro fica em destaque.
 */
export default function Carousel() {
  const [current, setCurrent] = useState(0);
  const currentRef = useRef(0);
  const trackRef = useRef<HTMLUListElement>(null);
  const pausedRef = useRef(false);
  const resumeTimer = useRef<ReturnType<typeof setTimeout>>(undefined);

  const goTo = useCallback((i: number) => {
    const track = trackRef.current;
    const slide = track?.children[i] as HTMLElement | undefined;
    if (!track || !slide) return;
    const left = slide.offsetLeft + slide.offsetWidth / 2 - track.clientWidth / 2;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    track.scrollTo({ left, behavior: reduce ? "auto" : "smooth" });
  }, []);

  // Descobre qual figurinha está no centro enquanto rola
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const center = track.scrollLeft + track.clientWidth / 2;
        let best = 0;
        let bestDist = Infinity;
        Array.from(track.children).forEach((el, i) => {
          const s = el as HTMLElement;
          const d = Math.abs(s.offsetLeft + s.offsetWidth / 2 - center);
          if (d < bestDist) { bestDist = d; best = i; }
        });
        currentRef.current = best;
        setCurrent(best);
      });
    };
    onScroll();
    track.addEventListener("scroll", onScroll, { passive: true });
    return () => { track.removeEventListener("scroll", onScroll); cancelAnimationFrame(frame); };
  }, []);

  // Autoplay: pausa quando a pessoa interage, quando a aba está escondida
  // e não roda para quem pediu menos movimento no sistema
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => {
      if (pausedRef.current || document.hidden) return;
      goTo((currentRef.current + 1) % STORIES.length);
    }, AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [goTo]);

  const pause = () => { clearTimeout(resumeTimer.current); pausedRef.current = true; };
  const resumeLater = (ms = 0) => {
    clearTimeout(resumeTimer.current);
    resumeTimer.current = setTimeout(() => { pausedRef.current = false; }, ms);
  };

  const step = (dir: 1 | -1) => goTo((current + dir + STORIES.length) % STORIES.length);

  return (
    <div
      className="carousel"
      role="region"
      aria-roledescription="carrossel"
      aria-label="Exemplos de figurinhas"
      onPointerEnter={pause}
      onPointerLeave={() => resumeLater()}
      onFocus={pause}
      onBlur={() => resumeLater()}
      onTouchStart={pause}
      onTouchEnd={() => resumeLater(6000)}
    >
      <ul className="carousel__track" ref={trackRef} tabIndex={0} aria-label="Use as setas para rolar">
        {STORIES.map((src, i) => (
          <li
            key={src}
            className={`slide ${i === current ? "is-active" : ""}`}
            onClick={() => goTo(i)}
            aria-label={`Figurinha ${i + 1} de ${STORIES.length}`}
          >
            <ImageSlot src={src} alt={`Exemplo de figurinha ${i + 1}`} label={`figurinha ${i + 1}`} />
          </li>
        ))}
      </ul>

      <div className="carousel__controls">
        <button type="button" className="carousel__arrow" onClick={() => step(-1)} aria-label="Figurinha anterior">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 5l-7 7 7 7" /></svg>
        </button>
        <div className="dots">
          {STORIES.map((_, i) => (
            <button
              type="button"
              key={i}
              aria-label={`Ver figurinha ${i + 1}`}
              aria-current={i === current || undefined}
              onClick={() => goTo(i)}
            />
          ))}
        </div>
        <button type="button" className="carousel__arrow" onClick={() => step(1)} aria-label="Próxima figurinha">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 5l7 7-7 7" /></svg>
        </button>
      </div>
    </div>
  );
}
