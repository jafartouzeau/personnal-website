'use client';
import { useEffect, useRef } from 'react';
import styles from './vextab.module.css';

type VextabProps = {
  data: string;
}

export default function Vextab({data}:VextabProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.innerHTML = '';

    import('vextab').then(({ VexTab, Artist, Vex }) => {
      const Renderer = (Vex as any).Flow.Renderer;
      const renderer = new Renderer(el, Renderer.Backends.SVG);
      const artist = new Artist(10, 10, 600, { scale: 0.8 });
      const tab = new VexTab(artist);
      try {
        tab.parse(data);
        artist.render(renderer);
      } catch (e) {
        console.error(e);
      }
    });
  }, []);

  return (
    <div className={styles.vexbox}>
      <div ref={ref} />
    </div>
  );
}