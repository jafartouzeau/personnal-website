"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import type { ArtworkType } from "artwork";

const SWIPE_THRESHOLD = 50; // px nécessaires pour changer d'image

function Arrow({
  direction,
  onClick,
}: {
  direction: "left" | "right";
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
      aria-label={direction === "left" ? "Image précédente" : "Image suivante"}
      style={{
        position: "absolute",
        top: "50%",
        [direction]: "0.75rem",
        transform: "translateY(-50%)",
        zIndex: 2,
        width: "2.75rem",
        height: "2.75rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        border: "none",
        borderRadius: "50%",
        color: "#fff",
        backgroundColor: "rgba(0, 0, 0, 0.45)",
        backdropFilter: "blur(4px)",
        WebkitBackdropFilter: "blur(4px)",
        cursor: "pointer",
      }}
    >
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        {direction === "left" ? (
          <polyline points="15 18 9 12 15 6" />
        ) : (
          <polyline points="9 18 15 12 9 6" />
        )}
      </svg>
    </button>
  );
}

function Artwork({ imageSrc, imageAlt, imageRatio, imageTitle }: ArtworkType) {
  const images = Array.isArray(imageSrc) ? imageSrc : [imageSrc];
  const count = images.length;
  const hasMany = count > 1;

  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  // Swipe
  const [dragX, setDragX] = useState(0);
  const [dragging, setDragging] = useState(false);
  const startX = useRef<number | null>(null);
  const startY = useRef<number | null>(null);
  const isHorizontal = useRef<boolean | null>(null);

  const canGoPrev = index > 0;
  const canGoNext = index < count - 1;

  const goPrev = useCallback(() => setIndex((i) => Math.max(0, i - 1)), []);
  const goNext = useCallback(
    () => setIndex((i) => Math.min(count - 1, i + 1)),
    [count]
  );

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };
    document.addEventListener("keydown", onKeyDown);

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [open, goPrev, goNext]);

  const openModal = () => {
    setIndex(0);
    setOpen(true);
  };

  const onTouchStart = (e: React.TouchEvent) => {
    if (!hasMany) return;
    startX.current = e.touches[0].clientX;
    startY.current = e.touches[0].clientY;
    isHorizontal.current = null;
    setDragging(true);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    if (startX.current === null || startY.current === null) return;
    const dx = e.touches[0].clientX - startX.current;
    const dy = e.touches[0].clientY - startY.current;

    // On détermine la direction du geste une seule fois
    if (isHorizontal.current === null && (Math.abs(dx) > 6 || Math.abs(dy) > 6)) {
      isHorizontal.current = Math.abs(dx) > Math.abs(dy);
    }
    if (!isHorizontal.current) return;

    // Résistance aux extrémités
    const blocked = (dx > 0 && !canGoPrev) || (dx < 0 && !canGoNext);
    setDragX(blocked ? dx * 0.25 : dx);
  };

  const onTouchEnd = () => {
    if (startX.current === null) return;
    if (dragX <= -SWIPE_THRESHOLD && canGoNext) goNext();
    else if (dragX >= SWIPE_THRESHOLD && canGoPrev) goPrev();

    startX.current = null;
    startY.current = null;
    isHorizontal.current = null;
    setDragX(0);
    setDragging(false);
  };

  return (
    <>
      {/* Miniature */}
      <div
        onClick={openModal}
        style={{
          position: "relative",
          aspectRatio: `${imageRatio}`,
          display: "flex",
          flex: "1 1 300px",
          cursor: "pointer",
        }}
      >
        <Image
          alt={imageAlt}
          src={images[0]}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        {hasMany && (
          <span
            style={{
              position: "absolute",
              right: "0.5rem",
              bottom: "0.5rem",
              padding: "0.15rem 0.55rem",
              borderRadius: "999px",
              fontSize: "0.8rem",
              color: "#fff",
              backgroundColor: "rgba(0, 0, 0, 0.55)",
            }}
          >
            {count} images
          </span>
        )}
      </div>

      {/* Modal */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label={imageTitle ?? imageAlt}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 1000,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "2rem",
            backgroundColor: "rgba(0, 0, 0, 0.75)",
            backdropFilter: "blur(8px)",
            WebkitBackdropFilter: "blur(8px)",
            cursor: "pointer",
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
            onTouchCancel={onTouchEnd}
            style={{
              position: "relative",
              aspectRatio: `${imageRatio}`,
              // L'image prend le maximum de place sans dépasser l'écran, en gardant son ratio
              width: `min(100%, calc((100vh - 4rem) * ${imageRatio}))`,
              cursor: "default",
              overflow: hasMany ? "hidden" : "visible",
              touchAction: hasMany ? "pan-y" : "auto",
            }}
          >
            {/* Piste horizontale : une "case" par image */}
            <div
              style={{
                display: "flex",
                width: "100%",
                height: "100%",
                transform: `translateX(calc(${-index * 100}% + ${dragX}px))`,
                transition: dragging ? "none" : "transform 0.3s ease",
              }}
            >
              {images.map((src, i) => (
                <div
                  key={src}
                  style={{ position: "relative", flex: "0 0 100%", height: "100%" }}
                  aria-hidden={i !== index}
                >
                  <Image
                    alt={hasMany ? `${imageAlt} (${i + 1}/${count})` : imageAlt}
                    src={src}
                    fill
                    sizes="100vw"
                    style={{ objectFit: "contain" }}
                    draggable={false}
                  />
                </div>
              ))}
            </div>

            {hasMany && canGoPrev && <Arrow direction="left" onClick={goPrev} />}
            {hasMany && canGoNext && <Arrow direction="right" onClick={goNext} />}

            {hasMany && (
              <span
                style={{
                  position: "absolute",
                  left: "50%",
                  bottom: "0.75rem",
                  transform: "translateX(-50%)",
                  padding: "0.15rem 0.65rem",
                  borderRadius: "999px",
                  fontSize: "0.85rem",
                  color: "#fff",
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                  pointerEvents: "none",
                }}
              >
                {index + 1} / {count}
              </span>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default function Gallery({ artworks }: { artworks: ArtworkType[] }) {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          width: "100%",
          gap: "13px",
          padding: "13px",
        }}
      >
        {artworks.map((artwork) => (
          <Artwork
            key={Array.isArray(artwork.imageSrc) ? artwork.imageSrc[0] : artwork.imageSrc}
            {...artwork}
          />
        ))}
      </div>
    </>
  );
}