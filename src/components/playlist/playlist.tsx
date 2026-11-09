"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import styles from "./playlist.module.css";

export type Track = {
  title: string;
  artist: string;
  image: string; 
  mp3: string;   
  couleur?: string;
};

const RADIUS = 48;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

export default function Playlist({ tracks }: { tracks: Track[] }) {
  const [index, setIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0); // 0 → 1
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const track = tracks[index];

  // À chaque changement de piste : remise à zéro, et lecture auto si on était en lecture
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    setProgress(0);
    if (isPlaying) {
      audio.play().catch(() => setIsPlaying(false));
    }
    // volontairement uniquement sur index
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);

  if (!track) return null;

  const next = () => setIndex((i) => (i + 1) % tracks.length);
  const previous = () => setIndex((i) => (i - 1 + tracks.length) % tracks.length);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play().then(() => setIsPlaying(true)).catch(() => {});
    }
  };

  const handleEnded = () => {
    if (tracks.length === 1) {
      // une seule piste : on relance depuis le début
      const audio = audioRef.current;
      if (audio) {
        audio.currentTime = 0;
        audio.play();
      }
      return;
    }
    next(); // isPlaying reste à true → l'effet lance la piste suivante
  };

  const handleTimeUpdate = () => {
    const audio = audioRef.current;
    if (!audio || !audio.duration) return;
    setProgress(audio.currentTime / audio.duration);
  };

  return (
      <div className={styles.root}>

        <div className={styles.player} style={{ backgroundColor: track.couleur }}>
        <audio
            ref={audioRef}
            src={`/static/vinyls/music/${track.mp3}`}
            onTimeUpdate={handleTimeUpdate}
            onEnded={handleEnded}
            preload="metadata"
        />

        <div className={styles.cover}>
            <svg className={styles.ring} viewBox="0 0 100 100" aria-hidden>
            <circle className={styles.ringTrack} cx="50" cy="50" r={RADIUS} />
            <circle
                className={styles.ringProgress}
                cx="50"
                cy="50"
                r={RADIUS}
                strokeDasharray={CIRCUMFERENCE}
                strokeDashoffset={CIRCUMFERENCE * (1 - progress)}
            />
            </svg>

            <div className={`${styles.imageWrapper} ${isPlaying ? styles.spin : ""}`}>
            <Image
                src={`/static/vinyls/image/${track.image}`}
                alt={track.title}
                fill
                sizes="256px"
                className={styles.image}
            />
            </div>
        </div>

        <div className={styles.info}>
            <p className={styles.title}>{track.title}</p>
            <p className={styles.artist}>{track.artist}</p>
        </div>

        <div className={styles.controls}>
            <button onClick={previous} aria-label="Précédent" className={styles.sideButton}>
            ⏮
            </button>
            <button
            onClick={toggle}
            aria-label={isPlaying ? "Pause" : "Lecture"}
            className={styles.mainButton}
            >
            {isPlaying ? "❚❚" : "▶"}
            </button>
            <button onClick={next} aria-label="Suivant" className={styles.sideButton}>
            ⏭
            </button>
        </div>
        </div>

    </div>
  );
}