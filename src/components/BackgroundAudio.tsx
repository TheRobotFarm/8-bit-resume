import { useEffect, useRef, useState } from "react";
import { Play, Pause, Music } from "lucide-react";

export default function BackgroundAudio() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    if (audioRef.current && videoRef.current) {
      audioRef.current.volume = 0.6;
      
      const tryAutoplay = async () => {
        try {
          await audioRef.current?.play();
          videoRef.current?.play();
          setIsPlaying(true);
          setHasInteracted(true);
        } catch (err) {
          // Autoplay blocked
          console.warn("Autoplay prevented, awaiting user interaction");
        }
      };
      
      tryAutoplay();
      
      const handleFirstClick = () => {
        if (!hasInteracted) {
          tryAutoplay();
        }
      };

      document.body.addEventListener('click', handleFirstClick, { once: true });
      document.body.addEventListener('touchstart', handleFirstClick, { once: true });
      
      return () => {
        document.body.removeEventListener('click', handleFirstClick);
        document.body.removeEventListener('touchstart', handleFirstClick);
      };
    }
  }, [hasInteracted]);

  const togglePlay = () => {
    if (audioRef.current && videoRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play();
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-[90vw] sm:w-[25vw] sm:min-w-[260px]">
      <audio
        ref={audioRef}
        src="/artifacts/Ronnie Guitar Line (Cover).mp3"
        loop
      />

      {/* Theme-based Retro Boombox Frame around Video */}
      <div className="relative pixel-dialog border-4 border-[#ffd700] p-4 bg-[#0d1117]/80 flex flex-col items-center gap-4 w-full shadow-[0_0_20px_rgba(255,215,0,0.15)]">

        {/* CRT Screen Wrapper — full width of container */}
        <div className="relative w-full aspect-square border-4 border-[#4ecdc4]/40 bg-black overflow-hidden" style={{ boxShadow: "inset 0 0 10px rgba(0,0,0,0.8)" }}>
          <video
            ref={videoRef}
            src="/artifacts/music_player.mp4"
            autoPlay
            loop
            muted
            playsInline
            className={`w-full h-full object-cover mix-blend-lighten filter contrast-125 saturate-150 transition-opacity duration-300 ${isPlaying ? 'opacity-100' : 'opacity-40 grayscale'}`}
          />
          {/* Scanline overlay */}
          <div className="absolute inset-0 z-10 pointer-events-none opacity-20" style={{ backgroundImage: 'linear-gradient(transparent 50%, rgba(0,0,0,0.8) 50%)', backgroundSize: '100% 4px' }} />
        </div>

        {/* Console Controls */}
        <div className="flex flex-col items-center justify-center gap-3 w-full">
          <div className="flex items-center gap-2">
            <Music size={12} className="text-[#ffb347] animate-pulse" />
            <h3 className="text-[#ffd700] text-[10px]" style={{ fontFamily: "'Press Start 2P', monospace" }}>
              BGM.TRACK
            </h3>
          </div>

          <button
            onClick={togglePlay}
            className="flex items-center justify-center gap-3 px-4 py-3 w-full bg-[#0d1117] hover:bg-[#4ecdc4]/20 border-2 border-[#4ecdc4] text-[#4ecdc4] hover:text-[#ffd700] hover:border-[#ffd700] transition-colors cursor-pointer active:scale-95"
            style={{ fontFamily: "'Press Start 2P', monospace" }}
          >
            {isPlaying ? (
              <>
                <Pause size={14} className="fill-current" />
                <span className="text-[8px] sm:text-[10px] leading-none pt-1">PAUSE</span>
              </>
            ) : (
              <>
                <Play size={14} className="fill-current" />
                <span className="text-[8px] sm:text-[10px] leading-none pt-1">PLAY</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
