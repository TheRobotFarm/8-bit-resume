import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function PixelLoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + Math.floor(Math.random() * 20);
      });
    }, 200);
    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div 
      initial={{ opacity: 1 }}
      animate={{ opacity: progress === 100 ? 0 : 1 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      style={{ pointerEvents: progress === 100 ? "none" : "auto" }}
      className="fixed inset-0 z-[100] bg-[#0d1117] flex flex-col items-center justify-center pointer-events-auto"
    >
      <div className="text-center w-64">
        <h2 className="text-[#ffd700] text-xl mb-8" style={{ fontFamily: "'Press Start 2P', monospace" }}>LOADING...</h2>
        <div className="h-4 bg-[#0d1117] border-2 border-[#4ecdc4]/40 p-0.5 w-full">
          <div className="h-full bg-[#4ecdc4] transition-all duration-200" style={{ width: `${Math.min(progress, 100)}%` }} />
        </div>
        <p className="text-[#4ecdc4] mt-4 text-[10px]" style={{ fontFamily: "'Press Start 2P', monospace" }}>
          {Math.min(progress, 100)}%
        </p>
      </div>
    </motion.div>
  );
}
