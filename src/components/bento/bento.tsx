import type { CSSProperties, ReactNode } from "react";
import styles from "./bento.module.css";

export function Bento({
  cols,
  rows,
  children,
}: {
  cols: number;
  rows: number;
  children: ReactNode;
}) {
  return (
    <div
      className={styles.bento}
      style={{ "--cols": cols, "--rows": rows } as CSSProperties}
    >
      {children}
    </div>
  );
}

export function BentoItem({
  col,
  row,
  w = 1,
  h = 1,
  children,
}: {
  col: number; // colonne de départ (1 = première)
  row: number; // ligne de départ (1 = première)
  w?: number;  // largeur en cases
  h?: number;  // hauteur en cases
  children: ReactNode;
}) {
  return (
    <div
      className={styles.item}
      style={{
        gridColumn: `${col} / span ${w}`,
        gridRow: `${row} / span ${h}`,
      }}
    >
      {children}
    </div>
  );
}