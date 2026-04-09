import { motion } from "framer-motion";

export default function SkillBar({ label, percentage, color = "#ffb347" }: { label: string; percentage: number; color?: string }) {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1" style={{ fontFamily: "'Press Start 2P', monospace" }}>
        <span className="text-[8px] text-[#e8e8e8]">{label}</span>
        <span className="text-[8px] text-[#e8e8e8]/50">{percentage}%</span>
      </div>
      <div className="h-4 bg-[#0d1117] border-2 border-white/10 w-full p-0.5 flex">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${percentage}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="h-full"
          style={{ backgroundColor: color }}
        />
      </div>
    </div>
  );
}
