import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionReveal from "./SectionReveal";

// Placeholders for Gallery images
const galleryItems = [
  { id: 1, src: "/artifacts/MUD05049.jpg", alt: "Artifact MUD05049" },
  { id: 2, src: "/artifacts/burger5 (1 of 1).jpg", alt: "Artifact burger5" },
  { id: 3, src: "/artifacts/camino1 (1 of 1) copy.jpg", alt: "Artifact camino1" },
  { id: 4, src: "/artifacts/DSC04217.jpg", alt: "Artifact DSC04217" },
  { id: 5, src: "/artifacts/DSC05215_2.png", alt: "Artifact DSC05215_2" },
  { id: 6, src: "/artifacts/DSC05604.jpg", alt: "Artifact DSC05604" },
  { id: 7, src: "/artifacts/DSC05744.jpg", alt: "Artifact DSC05744" },
  { id: 8, src: "/artifacts/DSC05973.jpg", alt: "Artifact DSC05973" },
  { id: 9, src: "/artifacts/DSC07122.jpg", alt: "Artifact DSC07122" },
  { id: 10, src: "/artifacts/DSC07434.jpg", alt: "Artifact DSC07434" },
  { id: 11, src: "/artifacts/DSC08480.JPG", alt: "Artifact DSC08480" },
  { id: 12, src: "/artifacts/DSC09140.jpg", alt: "Artifact DSC09140" },
  { id: 13, src: "/artifacts/heirloomsalad5 (1 of 1).jpg", alt: "Artifact heirloomsalad5" },
  { id: 14, src: "/artifacts/img1.jpg", alt: "Artifact img1" },
  { id: 15, src: "/artifacts/img2.jpg", alt: "Artifact img2" },
  { id: 16, src: "/artifacts/img3.jpg", alt: "Artifact img3" },
  { id: 17, src: "/artifacts/img4.jpg", alt: "Artifact img4" },
  { id: 18, src: "/artifacts/img5.jpg", alt: "Artifact img5" },
  { id: 19, src: "/artifacts/meanmug2 (1 of 1).jpg", alt: "Artifact meanmug2" },
];

export default function GallerySection() {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const selectedItem = galleryItems.find((i) => i.id === selectedId);

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
        {galleryItems.map((item, index) => (
          <SectionReveal key={item.id} delay={index * 0.1}>
            <motion.div
              className="group relative aspect-square overflow-hidden cursor-pointer border-2 border-transparent hover:border-[#ffd700] transition-colors"
              onClick={() => setSelectedId(item.id)}
              whileHover={{ scale: 1.05 }}
            >
              {/* Image with extreme retro 8-bit style filtering */}
              <img 
                src={item.src} 
                alt={item.alt} 
                className="w-full h-full object-cover transition-all duration-300 contrast-125 sepia saturate-200 hue-rotate-[180deg] brightness-75 group-hover:contrast-100 group-hover:sepia-0 group-hover:saturate-100 group-hover:hue-rotate-0 group-hover:brightness-100" 
              />
              
              {/* Pseudo-pixel/scanline CRT grid overlay */}
              <div 
                className="absolute inset-0 z-10 pointer-events-none opacity-60 group-hover:opacity-0 transition-opacity"
                style={{ 
                  backgroundImage: 'linear-gradient(transparent 50%, rgba(13, 17, 23, 0.8) 50%), linear-gradient(90deg, transparent 50%, rgba(13, 17, 23, 0.8) 50%)', 
                  backgroundSize: '6px 6px' 
                }} 
              />

              {/* Cyan color cast overlay to match the theme further */}
              <div className="absolute inset-0 bg-[#4ecdc4]/20 group-hover:bg-transparent transition-colors z-20 pointer-events-none mix-blend-color" />
            </motion.div>
          </SectionReveal>
        ))}
      </div>

      <AnimatePresence>
        {selectedId && selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedId(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-[#0d1117]/95"
          >
            <motion.div 
              layoutId={selectedId.toString()}
              className="relative max-w-4xl max-h-[90vh] w-full border-4 border-[#ffd700]"
              onClick={(e) => e.stopPropagation()}
            >
              <img src={selectedItem.src} alt={selectedItem.alt} className="w-full h-full object-contain" />
              <button 
                className="absolute top-4 right-4 text-white text-xl hover:text-[#ffd700] transition-colors"
                style={{ fontFamily: "'Press Start 2P', monospace" }}
                onClick={() => setSelectedId(null)}
              >
                X
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
