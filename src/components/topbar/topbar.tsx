'use client';

import { useLayoutEffect, useRef, useState } from 'react';
import styles from './topbar.module.css';
import Link from "next/link";

const LOGO_UNIT = "J∀F∀R∀";

export default function TopBar() {
  const containerRef = useRef<HTMLDivElement>(null);
  const aRef = useRef<HTMLSpanElement>(null);
  const bRef = useRef<HTMLSpanElement>(null);
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
    document.body.appendChild(measure);
    const unitWidth = measure.offsetWidth || 1;
    document.body.removeChild(measure);

    const containerWidth = container.offsetWidth;
    const repeats = Math.ceil(containerWidth / unitWidth) + 1;
    setRepeatedText(LOGO_UNIT.repeat(repeats));
  }, []);

  useLayoutEffect(() => {
    const a = aRef.current;
    const b = bRef.current;
    const speed = 0.5;
    if (!a || !b) return;

    const w = a.offsetWidth;
    if (w === 0) return;

    let x = 0;
    a.style.left = "0px";
    b.style.left = `${w}px`;

    let raf: number;
    function tick() {
      x = (x + speed) % w;
      a!.style.left = `${-x}px`;
      b!.style.left = `${w - x}px`;
      raf = requestAnimationFrame(tick);
    }
    raf = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(raf);
  }, [repeatedText]);

  return (
    <nav className={styles.topbar}>
      <Link href={"/"} className={styles.link}>
        <div ref={containerRef} className={styles.container}>
          <span ref={aRef} className={styles.w}>{repeatedText}</span>
          <span ref={bRef} className={styles.w}>{repeatedText}</span>
        </div>
      </Link>
    </nav>
  );
}

/**
 * 
 * <ol className={styles.ol}>
        <Link href={"/strudelrepl"}>
          Strudel REPL
        </Link>
      </ol>
      <ol className={styles.ol}>
        <Link href={"/kiwis"}>
          Kiwis
        </Link>
      </ol> 
 * 
 * 
 */