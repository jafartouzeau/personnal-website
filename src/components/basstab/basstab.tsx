"use client";

import { useEffect, useRef } from "react";
import { useResolvedTheme } from "@/hooks/useResolveTheme";

const HEADER = `\\tuning G2 D2 A1 E1
\\clef F4
\\instrument 33
.
`;

const EXEMPLE = `
:8 0.3 r 5.4 2.3 r 0.3 3.3 0.3 |
:8 0.2 r 0.2 2.2 r 0.2 3.2 0.2 |
:8 0.4 r 0.4 3.4 r 0.3 0.3 0.4 |
`;

const LIGHT = "#000000";
const DARK = "#f2f2f2";



export default function BassTab({ tab = EXEMPLE, id = "", title = "", artist = "", bpm = 0 }: {
  tab?: string;
  id?: string;
  title?: string;
  artist?: string;
  bpm?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { isDark, mounted } = useResolvedTheme();

  useEffect(() => {
    if (!mounted) return; // on attend de connaître le vrai thème

    let api: any;
    let cancelled = false;
    const color = isDark ? DARK : LIGHT;

    import("@coderline/alphatab").then((alphaTab) => {
      if (cancelled || !ref.current) return;
      api = new alphaTab.AlphaTabApi(ref.current, {
        core: { fontDirectory: "/font/", useWorkers: false },
        display: {
          staveProfile: "ScoreTab",
          resources: {
            mainGlyphColor: color,       // notes, clé, chiffres de la tab
            secondaryGlyphColor: color,  // symboles secondaires
            staffLineColor: color,       // lignes de portée
            barSeparatorColor: color,    // barres de mesure
            barNumberColor: color,       // numéros de mesure
            scoreInfoColor: color,       // textes (titre, etc.)
          },
        },
        notation: {
          elements: new Map([
            [alphaTab.NotationElement.GuitarTuning, false],
            [alphaTab.NotationElement.TrackNames, false],
            [alphaTab.NotationElement.EffectDynamics, false],
          ])
        },
        player: { enablePlayer: false },
      });
      api.tex(HEADER + tab.trim());
    });

    return () => {
      cancelled = true;
      api?.destroy();
    };
  }, [tab, isDark, mounted]);


  return (
    <div id={id} style={{ marginBottom: "64px" }}>
      <p style={{ fontWeight: "600" }}>{title}</p>
      <p style={{ opacity: ".7" }}>{artist}</p>
      <p>{bpm}bpm</p>
      <div ref={ref} />
    </div>
  );
}