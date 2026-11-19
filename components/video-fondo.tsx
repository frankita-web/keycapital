"use client";

import { useEffect, useRef, useState } from "react";

/** Segundos que dura el fundido a azul al empezar y antes de repetirse. */
const FUNDIDO = 1.2;

/**
 * Video de fondo de la portada (Santiago al amanecer, teñido de azul con CSS).
 * Aparece suave desde el azul de la marca y vuelve a fundirse antes de repetirse.
 * Con "reducir movimiento" o sin reproducción automática queda la imagen fija.
 */
export function VideoFondo({ src, poster }: { src: string; poster: string }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    // Con "reducir movimiento" no se reproduce: el CSS deja visible la imagen fija.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const alAvanzar = () => {
      if (video.duration && video.currentTime > video.duration - FUNDIDO) setVisible(false);
    };
    const alTerminar = () => {
      video.currentTime = 0;
      video.play().catch(() => setVisible(true));
    };
    const alReproducir = () => setVisible(true);

    video.addEventListener("timeupdate", alAvanzar);
    video.addEventListener("ended", alTerminar);
    video.addEventListener("playing", alReproducir);
    video.muted = true;
    video.play().catch(() => setVisible(true));

    return () => {
      video.removeEventListener("timeupdate", alAvanzar);
      video.removeEventListener("ended", alTerminar);
      video.removeEventListener("playing", alReproducir);
    };
  }, []);

  return (
    <video
      ref={ref}
      src={src}
      poster={poster}
      muted
      playsInline
      preload="auto"
      aria-hidden="true"
      tabIndex={-1}
      className={`video-fondo ${visible ? "is-visible" : ""}`}
    />
  );
}
