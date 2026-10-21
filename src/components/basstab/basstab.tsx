"use client";

import { useEffect, useRef } from "react";
import abcjs from "abcjs";

const EXEMPLE = "X:1\nK:D\nDD AA|BBA2|\n";

export default function BassTab({ abc = EXEMPLE, options = {} }) {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;
    // renderAbc accepte un élément DOM (ou un id) et une chaîne ABC
    abcjs.renderAbc(ref.current, abc, { responsive: "resize", ...options });
  }, [abc, options]);

  return <div ref={ref} style={{ width: "100%" }} />;
}