import { useState, useEffect, useRef } from "react";

export function useAudio(path: string) {
  const [isReady, setIsReady] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = new Audio(path);
    audioRef.current = audio;
    setIsReady(false);

    const onCanPlay = () => setIsReady(true);
    audio.addEventListener("canplay", onCanPlay);

    return () => {
      audio.removeEventListener("canplay", onCanPlay);
      audio.pause();
      audioRef.current = null;
    };
  }, [path]);

  return { isReady, audioRef };
}