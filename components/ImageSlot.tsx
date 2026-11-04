"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  src: string;
  alt: string;
  label: string; // texto exibido enquanto a imagem não existir
  className?: string;
  onClick?: () => void;
};

/**
 * Mostra a imagem de /public. Se o arquivo ainda não existir,
 * exibe um placeholder com o nome do arquivo esperado.
 */
export default function ImageSlot({ src, alt, label, className = "", onClick }: Props) {
  const [failed, setFailed] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  // O HTML vem pronto do servidor: a imagem pode falhar ANTES do React
  // "hidratar" a página, e aí o onError nunca dispara. Por isso checamos aqui também.
  useEffect(() => {
    const img = imgRef.current;
    if (img && img.complete && img.naturalWidth === 0) setFailed(true);
  }, []);

  return (
    <div className={`img-slot ${className}`} data-label={`${label}\n${src}`} onClick={onClick}>
      {!failed && (
        // eslint-disable-next-line @next/next/no-img-element
        <img ref={imgRef} src={src} alt={alt} onError={() => setFailed(true)} />
      )}
    </div>
  );
}
