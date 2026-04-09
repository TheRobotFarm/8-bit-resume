import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export default function PixelNav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 py-3 flex justify-between items-center",
      scrolled ? "bg-[#0d1117]/90 backdrop-blur-md border-b-2 border-[#4ecdc4]/20" : "bg-transparent"
    )}>
      <div className="text-[#ffd700] text-xs font-bold" style={{ fontFamily: "'Press Start 2P', monospace" }}>
        JP_
      </div>
      <div className="hidden md:flex gap-6">
        {[
          { id: "about", label: "about" },
          { id: "experience", label: "experience" },
          { id: "skills", label: "quest objectives" },
          { id: "gallery", label: "gallery" },
          { id: "contact", label: "contact" }
        ].map(item => (
          <a key={item.id} href={`#${item.id}`} className="text-[#4ecdc4] text-[8px] uppercase hover:text-[#ffd700] transition-colors" style={{ fontFamily: "'Press Start 2P', monospace" }}>
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
