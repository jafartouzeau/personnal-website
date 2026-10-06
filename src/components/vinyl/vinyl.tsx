"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import styles from "./vinyl.module.css";

export default function Vinyl({
  audioFile,
  imageFile,
  title
}: {
  audioFile: string;
  imageFile: string;
  title: string
}) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const fullAudioFilePath = `static/vinyls/music/${audioFile}`
    const audio = new Audio(fullAudioFilePath);
    audioRef.current = audio;

    const onEnded = () => setIsPlaying(false);
    audio.addEventListener("ended", onEnded);

    return () => {
      audio.removeEventListener("ended", onEnded);
      audio.pause();
      audioRef.current = null;
    };
  }, [audioFile]);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      audio.currentTime = 0;
      setIsPlaying(false);
    } else {
      audio.play();
      setIsPlaying(true);
    }
  };

  return (
        <div className={styles.container}>
        <div
            className={`${styles.imageContainer} ${isPlaying ? styles.play : ""}`}
            onClick={toggle}
        >
            <Image
            className={styles.image}
            src={`static/vinyls/image/${imageFile}`}
            alt="Vinyl"
            fill
            title={title}
            />
        </div>
        </div>
  );
}