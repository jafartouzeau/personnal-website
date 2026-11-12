"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import styles from "./heartbeat.module.css";

export type HeartbeatDay = [date: string, commits: number];

export interface HeartbeatProject {
  name: string;
  days: HeartbeatDay[];
}

export interface HeartbeatData {
  generated?: string;
  projects: HeartbeatProject[];
}

export interface ProjectHeartbeatProps {
  /** URL du JSON généré par scripts/generate-heartbeat.mjs */
  src?: string;
  /** Données déjà chargées (désactive le fetch) */
  data?: HeartbeatData;
  /** Largeur visée (px) pour un jour. Détermine le nombre de jours par ligne. */
  dayWidth?: number;
}

const formatDate = (iso: string): string =>
  new Date(`${iso}T00:00:00Z`).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });

/**
 * Découpe les jours en lignes toutes complètes et de même longueur.
 * On retire quelques jours parmi les plus anciens (moins d'un par ligne)
 * pour qu'aucune ligne ne s'arrête au milieu.
 */
function wrapDays(days: HeartbeatDay[], perRowMax: number): HeartbeatDay[][] {
  const n = days.length;
  const rows = Math.max(1, Math.ceil(n / perRowMax));
  const per = Math.floor(n / rows);
  const tail = days.slice(n - rows * per);
  return Array.from({ length: rows }, (_, r) => tail.slice(r * per, (r + 1) * per));
}

function Row({ days, max }: { days: HeartbeatDay[]; max: number }) {
  const n = days.length;
  const y = (count: number) => 96 - (count / max) * 92; // 4..96 pour ne pas rogner le trait
  // Premier point à x=0, dernier à x=n-1 : la ligne va bord à bord
  const points = days.map(([, c], i) => `${i},${y(c)}`).join(" ");

  return (
    <div className={styles.row}>
      <svg
        className={styles.line}
        viewBox={`0 0 ${Math.max(1, n - 1)} 100`}
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <polyline points={points} />
      </svg>
      <div className={styles.days}>
        {days.map(([date, count]) => (
          <span
            key={date}
            className={styles.day}
            style={{ "--y": `${y(count)}%` } as CSSProperties}
            data-date={formatDate(date)}
          />
        ))}
      </div>
    </div>
  );
}

/**
 * <ProjectHeartbeat src="/heartbeat.json" dayWidth={4} />
 */
export default function Heartbeat({
  src = "/heartbeat.json",
  data: initial,
  dayWidth = 4,
}: ProjectHeartbeatProps) {
  const [data, setData] = useState<HeartbeatData | null>(initial ?? null);
  const [width, setWidth] = useState(0);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (initial) return;
    fetch(src, { cache: "no-cache" })
      .then((r) => r.json() as Promise<HeartbeatData>)
      .then(setData)
      .catch(() => setData({ projects: [] }));
  }, [src, initial]);

  // Suit la largeur du conteneur
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const ro = new ResizeObserver(([entry]) => setWidth(Math.floor(entry.contentRect.width)));
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const perRowMax = Math.max(2, Math.floor(width / dayWidth));
  // Échelle commune : tous les projets sont comparables
  const max = data
    ? Math.max(1, ...data.projects.flatMap((p) => p.days.map(([, c]) => c)))
    : 1;

  return (
    <section className={styles.root} ref={ref}>
      {data &&
        width > 0 &&
        data.projects.map((p) => (
          <div className={styles.project} key={p.name} role="img" aria-label={`Activité de ${p.name}`}>
            {wrapDays(p.days, perRowMax).map((rowDays) => (
              <Row key={rowDays[0][0]} days={rowDays} max={max} />
            ))}
          </div>
        ))}
    </section>
  );
}