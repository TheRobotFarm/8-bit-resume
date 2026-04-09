import { motion } from "framer-motion";

export default function PixelCard({ 
  title, 
  subtitle, 
  date, 
  bullets 
}: { 
  title: string; 
  subtitle: string; 
  date: string; 
  bullets: string[] 
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      whileHover={{ scale: 1.02 }}
      className="pixel-dialog mb-6 w-full"
    >
      <div className="flex flex-col md:flex-row justify-between mb-4 pb-2 border-b-2 border-white/10 gap-2">
        <div>
          <h3 className="text-[#ffd700] text-sm sm:text-base font-bold" style={{ fontFamily: "'Press Start 2P', monospace", lineHeight: "1.5" }}>
            {title}
          </h3>
          <p className="text-[#4ecdc4] text-xs mt-1" style={{ fontFamily: "'JetBrains Mono', monospace" }}>{subtitle}</p>
        </div>
        <div className="text-[#e8e8e8]/60 text-[10px] md:text-xs shrink-0" style={{ fontFamily: "'Press Start 2P', monospace" }}>
          {date}
        </div>
      </div>
      <ul className="list-none space-y-2">
        {bullets.map((bullet, idx) => (
          <li key={idx} className="text-[#e8e8e8]/90 text-sm pl-4 relative" style={{ fontFamily: "'Outfit', sans-serif" }}>
            <span className="absolute left-0 top-[6px] w-[5px] h-[5px] bg-[#ffd700]" />
            {bullet}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
