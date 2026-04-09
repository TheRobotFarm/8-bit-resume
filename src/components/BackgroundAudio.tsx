import { useEffect, useRef } from "react";

export default function BackgroundAudio() {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.6;
      
      const playAudio = () => {
        if (audioRef.current) {
          audioRef.current.play().catch(() => {
            // Browser blocked autoplay; it will play on next interaction due to the event listener below
          });
        }
      };
      
      // Attempt to play immediately
      playAudio();
      
      // Fallback for browsers that require user interaction
      document.body.addEventListener('click', playAudio, { once: true });
      document.body.addEventListener('touchstart', playAudio, { once: true });
      
      return () => {
        document.body.removeEventListener('click', playAudio);
        document.body.removeEventListener('touchstart', playAudio);
      };
    }
  }, []);

  return (
    <audio 
      ref={audioRef} 
      src="/artifacts/Ronnie Guitar Line (Cover).mp3" 
      loop 
    />
  );
}
