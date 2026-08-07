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