import { useEffect, useRef } from "react";

export default function StarField({ count = 50 }: { count?: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas dimensions to absolute fill
    const resizeCtx = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    resizeCtx();
    window.addEventListener("resize", resizeCtx);

    const stars = Array.from({ length: count }).map(() => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 2,
      speed: Math.random() * 0.5 + 0.1
    }));

    let animationFrameId: number;

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
      
      stars.forEach((star) => {
        ctx.fillRect(star.x, star.y, star.size, star.size);
        star.y -= star.speed;
        
        if (star.y < 0) {
          star.y = canvas.height;
          star.x = Math.random() * canvas.width;
        }
      });
      animationFrameId = window.requestAnimationFrame(render);
    };

    render();

    return () => {
      window.cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resizeCtx);
    };
  }, [count]);

  return <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none opacity-50 block" />;
}
