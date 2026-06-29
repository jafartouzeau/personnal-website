'use client';

import { useEffect, useRef } from 'react';
import styles from './topbar.module.css';
import Link from "next/link";

export default function TopBar() {
  const containerRef = useRef<HTMLDivElement>(null);
  const aRef = useRef<HTMLSpanElement>(null);
  const bRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const c = containerRef.current;
    const a = aRef.current;
    const b = bRef.current;
    const speed = 0.5;
    if (!c || !a || !b) return;

    const w = a.offsetWidth;
    c.style.width = w + 'px';
    c.style.height = a.offsetHeight + 'px';

    let x = 0;
    let raf: number;
    function tick() {
      x = (x + speed) % w;
      a!.style.left = (-x) + 'px';
      b!.style.left = (w - x) + 'px';
      raf = requestAnimationFrame(tick);
    }
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <nav className={styles.topbar}>
      <ol className={styles.ol}>
        <Link href={"/"}>
          <div ref={containerRef} id="container" className={styles.container}>
            <span ref={aRef} className={styles.w} id="a">J∀F∀R∀</span>
            <span ref={bRef} className={styles.w} id="b">J∀F∀R∀</span>
          </div>
        </Link>
      </ol>
      <ol className={styles.ol}>
        <Link href={"/strudelrepl"}>
          Strudel REPL
        </Link>
      </ol>
      <ol className={styles.ol}>
        <Link href={"/kiwis"}>
          Kiwis
        </Link>
      </ol>
    </nav>
  );
}