import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { id: "about", label: "about" },
  { id: "experience", label: "experience" },
  { id: "skills", label: "quest objectives" },
  { id: "gallery", label: "gallery" },
  { id: "contact", label: "contact" },
];

export default function PixelNav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <>
      <nav className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-3 flex justify-between items-center",
        scrolled || menuOpen
          ? "bg-[#0d1117]/95 backdrop-blur-md border-b-2 border-[#4ecdc4]/20"
          : "bg-[#0d1117]/70 backdrop-blur-sm border-b border-[#4ecdc4]/10"
      )}>
        {/* Logo */}
        <div className="text-[#ffd700] text-[20px] font-bold" style={{ fontFamily: "'Press Start 2P', monospace" }}>
          JP_
        </div>

        {/* Desktop links */}
        <div className="hidden md:flex gap-6">
          {NAV_ITEMS.map(item => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="text-[#4ecdc4] text-[14px] uppercase hover:text-[#ffd700] transition-colors"
              style={{ fontFamily: "'Press Start 2P', monospace" }}
              onClick={(e) => { e.preventDefault(); handleNavClick(item.id); }}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Hamburger — mobile only */}
        <button
          className="md:hidden flex flex-col gap-[5px] cursor-pointer p-1"
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Toggle menu"
        >
          <span className={cn("block w-6 h-[3px] bg-[#4ecdc4] transition-all duration-200", menuOpen && "rotate-45 translate-y-2")} />
          <span className={cn("block w-6 h-[3px] bg-[#4ecdc4] transition-all duration-200", menuOpen && "opacity-0")} />
          <span className={cn("block w-6 h-[3px] bg-[#4ecdc4] transition-all duration-200", menuOpen && "-rotate-45 -translate-y-2")} />
        </button>
      </nav>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div
          className="fixed top-[48px] left-0 right-0 z-40 bg-[#0d1117]/95 backdrop-blur-md border-b-2 border-[#4ecdc4]/20 flex flex-col items-center py-6 gap-6"
          style={{ fontFamily: "'Press Start 2P', monospace" }}
        >
          {NAV_ITEMS.map(item => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className="text-[#4ecdc4] text-[14px] uppercase hover:text-[#ffd700] transition-colors"
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </>
  );
}
