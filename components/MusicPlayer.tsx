"use client";

import { useEffect, useRef, useState } from "react";
import { Music2, Pause } from "lucide-react";

export default function MusicPlayer({
  playing,
}: {
  playing: boolean;
}) {
  const audioRef =
    useRef<HTMLAudioElement>(null);

  const [isPlaying, setIsPlaying] =
    useState(false);

  useEffect(() => {
    if (
      playing &&
      audioRef.current
    ) {
      audioRef.current.play();
      setIsPlaying(true);
    }
  }, [playing]);

  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        loop
        src="/music/wedding.mp3"
      />

      <button
        onClick={toggleMusic}
        className="
          fixed
          bottom-24
          right-4
          z-[999]
          flex
          h-14
          w-14
          items-center
          justify-center
          rounded-full
          bg-black
          text-white
          shadow-lg
        "
      >
        {isPlaying ? (
          <Pause size={22} />
        ) : (
          <Music2 size={22} />
        )}
      </button>
    </>
  );
}