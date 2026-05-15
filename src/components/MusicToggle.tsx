import { useState, useRef, useEffect } from "react";
import music from "../assets/music/zea.lify.mp3";

export default function MusicToggle() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.loop = true;
      audioRef.current.volume = 0.5;
    }
  }, []);

  const toggleMusic = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    try {
      if (isPlaying) {
        audio.pause();
        setIsPlaying(false);
      } else {
        await audio.play();
        setIsPlaying(true);
      }
    } catch (err) {
      console.error("Audio play failed:", err);
    }
  };

  return (
    <div className="flex items-center">
      <audio ref={audioRef} preload="auto">
        <source src={music} type="audio/mpeg" />
      </audio>

      {/* BUTTON */}
      <button
        onClick={toggleMusic}
        className="
          relative flex items-center
          w-16 h-8 md:w-24 md:h-11
          rounded-full border border-zinc-700
          bg-zinc-900 px-1
          transition-all duration-300
          hover:border-orange-400
        "
      >
        {/* glow */}
        <div
          className={`absolute inset-0 rounded-full transition-all duration-300 ${
            isPlaying ? "bg-orange-500/20" : "bg-transparent"
          }`}
        />

        {/* KNOB */}
        <div
          className={`
            relative flex items-center justify-center
            bg-white rounded-full shadow-md
            w-6 h-6 md:w-9 md:h-9
            transition-transform duration-300
            ${isPlaying ? "translate-x-8 md:translate-x-12" : "translate-x-0"}
          `}
        >
          {isPlaying ? <PauseIcon /> : <PlayIcon />}
        </div>
      </button>
    </div>
  );
}

function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-3 h-3 md:w-4 md:h-4 text-black">
      <polygon points="5,3 19,12 5,21" fill="currentColor" />
    </svg>
  );
}

function PauseIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-3 h-3 md:w-4 md:h-4 text-black">
      <rect x="6" y="4" width="4" height="16" rx="1" fill="currentColor" />
      <rect x="14" y="4" width="4" height="16" rx="1" fill="currentColor" />
    </svg>
  );
}
