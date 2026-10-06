"use client";

import { useState, useEffect } from "react";
import Image from "next/image"
import type { ArtworkType } from "artwork"

function Artwork({ imageSrc, imageAlt, imageRatio, imageTitle }: ArtworkType) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  return (
    <>
      {/* Miniature */}
      <div
        onClick={() => setOpen(true)}
        style={{
          position: "relative",
          aspectRatio: `${imageRatio}`,
          display: "flex",
          flex: "1 1 300px",
          cursor: "pointer",
        }}
      >
        <Image alt={imageAlt} src={imageSrc} fill sizes="(max-width: 768px) 100vw, 33vw" />
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
            style={{
              position: "relative",
              aspectRatio: `${imageRatio}`,
              // L'image prend le maximum de place sans dépasser l'écran, en gardant son ratio
              width: `min(100%, calc((100vh - 4rem) * ${imageRatio}))`,
              cursor: "default",
            }}
          >
            <Image
              alt={imageAlt}
              src={imageSrc}
              fill
              sizes="100vw"
              style={{ objectFit: "contain" }}
            />
          </div>
        </div>
      )}
    </>
  );
}


export default function Gallery({artworks}:{artworks: ArtworkType[]}) {

    
    return (<>
        <div 
            style={{
                display:"flex", 
                flexDirection:"row", 
                flexWrap: "wrap",
                width:"100%", 
                gap:"13px", 
                padding:"13px"
            }
        }>
            {artworks.map((artwork) => (
                <Artwork key={artwork.imageSrc} {...artwork} />
            ))}
        </div>
    
    
    </>)
}