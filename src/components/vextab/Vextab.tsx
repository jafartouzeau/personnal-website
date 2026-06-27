/*
source: https://github.com/0xfe/vextab
*/

'use client';

import { useEffect, useRef } from 'react';
import styles from './vextab.module.css';

type VextabProps = {
  data: string;
  scale: number;
}

export default function Vextab({data, scale}:VextabProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let cancelled = false;
    import('vextab').then(({ VexTab, Artist, Vex }) => {
      if (cancelled) return;  
      el.innerHTML = '';  
      const Renderer = Vex.Flow.Renderer;
      const renderer = new Renderer(el, Renderer.Backends.SVG);
      const artist = new Artist(10, 10, 600, { scale: scale });
      const tab = new VexTab(artist);
      try {
        tab.parse(data);
        artist.render(renderer);
      } catch (e) {
        console.error(e);
      }
    });

    //cleanup
    return () => { cancelled = true;  };  
  }, []);

  return (
    <div className={styles.vexbox}>
      <div ref={ref} />
    </div>
  );
}