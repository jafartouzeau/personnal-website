'use client';
import { useEffect, useRef } from 'react';
//import dynamic from 'next/dynamic';

export default function StrudelRepl({code}:{code:string}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let cancelled = false;

    import('@strudel/embed').then(() => {
        if (cancelled) return;
        el.innerHTML = '';
        const repl = document.createElement('strudel-repl');
        repl.setAttribute('code', code);
        el.appendChild(repl);

        // Attendre que l'iframe soit montée
        setTimeout(() => {
          const iframe = repl.querySelector('iframe');
          if (iframe) {
            iframe.style.width = 'min(800px, 100%)';
            iframe.removeAttribute('width');
            iframe.style.height = 'min(100vh, 600px)';
            iframe.removeAttribute('height');
          }
        }, 200);
    });

    //return () => { el.innerHTML = ''; };
    return () => { cancelled = true; };
  }, []);

  return <div ref={ref}/>;
}

//export default dynamic(() => Promise.resolve(StrudelRepl), { ssr: false });