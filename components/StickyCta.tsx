"use client";

import { useEffect, useState } from "react";

/**
 * Barra de compra fixa no rodapé (só no celular, via CSS).
 * Aparece depois que o botão do topo sai da tela e some quando os planos estão visíveis.
 */
export default function StickyCta({ price }: { price: string }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const heroCta = document.getElementById("hero-cta");
    const plans = document.getElementById("planos");
    const finalCta = document.getElementById("cta-final");
    if (!heroCta || !plans) return;

    const state = { heroVisible: true, plansVisible: false, finalVisible: false };
    const io = new IntersectionObserver((entries) => {
      for (const e of entries) {
        if (e.target === heroCta) state.heroVisible = e.isIntersecting;
        if (e.target === plans) state.plansVisible = e.isIntersecting;
        if (e.target === finalCta) state.finalVisible = e.isIntersecting;
      }
      setShow(!state.heroVisible && !state.plansVisible && !state.finalVisible);
    });
    io.observe(heroCta);
    io.observe(plans);
    if (finalCta) io.observe(finalCta);
    return () => io.disconnect();
  }, []);

  return (
    <div className={`sticky-cta ${show ? "is-visible" : ""}`} aria-hidden={!show}>
      <p>
        <strong>Pack completo</strong>
        <span>por {price}, pagamento único</span>
      </p>
      <a href="#planos" className="btn btn--sm" tabIndex={show ? 0 : -1}>Ver planos</a>
    </div>
  );
}
