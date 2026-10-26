"use client";

import { useEffect, useRef } from "react";
import abcjs from "abcjs"; //https://docs.abcjs.net/visual/tablature

const EXEMPLE = "X:1\nK:D\nDD AA|BBA2|\n";

export default function BassTab({ abc = EXEMPLE, options = {}, id="", title="", artist="", bpm=0 }) {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;
    // renderAbc accepte un élément DOM (ou un id) et une chaîne ABC
    abcjs.renderAbc(ref.current, abc, { responsive: "resize", tablature: [{instrument: 'violin'}], ...options });
  }, [abc, options]);

  return <div id={id}>
  <p>{artist} - {title} - {bpm}bpm</p>
  <div ref={ref} style={{ width: "100%" }} />
  </div>;
}