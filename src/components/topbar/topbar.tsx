'use client';

import { useLayoutEffect, useRef, useState } from 'react';
import styles from './topbar.module.css';
import Link from "next/link";

const LOGO_UNIT = "J∀F∀R∀";

export default function TopBar() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);
  const unitWidthRef = useRef<number>(0);
  const [repeatedText, setRepeatedText] = useState(LOGO_UNIT);

  // 1. Mesure la largeur d'une unité et calcule assez de répétitions
  //    pour couvrir 2x le container (marge pour le défilement)
  useLayoutEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const measure = document.createElement('span');
    measure.style.visibility = 'hidden';
    measure.style.position = 'absolute';
    measure.style.whiteSpace = 'nowrap';
    measure.className = styles.w;
    measure.textContent = LOGO_UNIT;
    container.appendChild(measure);
    const unitWidth = measure.offsetWidth || 1;
    container.removeChild(measure);

    unitWidthRef.current = unitWidth;

    const containerWidth = container.offsetWidth;
    // assez de répétitions pour couvrir 2x la largeur du container
    const repeats = Math.ceil((containerWidth * 2) / unitWidth) + 1;
    setRepeatedText(LOGO_UNIT.repeat(repeats));
  }, []);

  // 2. Anime un seul span, en le faisant boucler sur la largeur d'UNE unité
  useLayoutEffect(() => {
    const text = textRef.current;
    const speed = 0.5;
    if (!text) return;

    const unitWidth = unitWidthRef.current;
    if (unitWidth === 0) return;

    let x = 0;
    let raf: number;
    function tick() {
      x = (x + speed) % unitWidth;
      text!.style.transform = `translateX(${-x}px)`;
      raf = requestAnimationFrame(tick);
    }
    raf = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(raf);
  }, [repeatedText]);

  return (
    <nav className={styles.topbar}>
      <Link href={"/"} className={styles.link}>
        <div ref={containerRef} className={styles.container}>
          <span ref={textRef} className={styles.w}>{repeatedText}</span>
        </div>
      </Link>
    </nav>
  );
}