import { useState } from "react";
import { motion } from "framer-motion";
import PixelNav from "@/components/PixelNav";
import TypewriterText from "@/components/TypewriterText";
import SkillBar from "@/components/SkillBar";
import PixelCard from "@/components/PixelCard";
import GallerySection from "@/components/GallerySection";
import SectionReveal from "@/components/SectionReveal";
import StarField from "@/components/StarField";
import PixelLoadingScreen from "@/components/PixelLoadingScreen";
import BackgroundAudio from "@/components/BackgroundAudio";
import { Mail, Phone, Globe, MapPin } from "lucide-react";

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663505283859/4VNkzVY3BFqDH4j4kiK9Fr/hero-pixel-cityscape-DWNMHd36GDwjMJfrDyC9GA.webp";
const EXPERIENCE_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663505283859/4VNkzVY3BFqDH4j4kiK9Fr/experience-pixel-scene-Cc2SrWmgFhQDfkUkPCJLtj.webp";
const GALLERY_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663505283859/4VNkzVY3BFqDH4j4kiK9Fr/gallery-pixel-scene-TKU86tHAmLRJUY3G6eJwM3.webp";
const SKILLS_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663505283859/4VNkzVY3BFqDH4j4kiK9Fr/skills-pixel-scene-BXTVsXhT5XrBZAtVNvEjrK.webp";
const AVATAR = "/avatar.png";

const experiences = [
  {
    title: "Founder & Creative Director",
    subtitle: "The Robot Farm | Asheville, NC",
    date: "2025 – Present",
    bullets: [
      "Designing and building systems that allow business owners to focus on what they love, minimizing the time spent doing the things that they don't.",
      "Founded an AI-powered brand agency delivering scalable creative systems and digital marketing services for small businesses.",
      "Tailoring end-to-end AI workflows: combining prompt engineering, bespoke web apps, custom GPTs, and generative media tools to accelerate client content production.",
    ],
  },
  {
    title: "Brand & Creative Strategist",
    subtitle: "TOVA Beverly Hills | Remote-Beverly Hills, CA",
    date: "2022 – 2025",
    bullets: [
      "Shopify Administration and optimization.",
      "Inventory coordination, vendor coordination, and supplier relations.",
      "Engineered, implemented and tracked a comprehensive email marketing strategy that increased annual revenue by 1,150% in a single year.",
      "Drove a 30%+ year-over-year increase in overall brand growth through revitalized digital strategy and creative direction.",
      "Directed integrated visual campaigns that modernized a luxury legacy brand by combining traditional photography with AI-generated assets.",
      "Executed social media narratives that effectively connected the brand's heritage with new audience segments.",
    ],
  },
  {
    title: "Creative Dir. & Project Manager",
    subtitle: "Terrence Howard Projects | Remote-Los Angeles, CA",
    date: "2020 – Present",
    bullets: [
      "Managed end-to-end project lifecycle for the Lynchpin Drone Competition.",
      "Designed, launched, and maintained terryslynchpins.com as the central digital hub.",
      "Engineered a custom GPT AI assistant tailored to support the client's complex research.",
      "Led brand coordination for appearances on Joe Rogan, Patrick Bet-David, etc.",
    ],
  },
  {
    title: "Creative Marketing Lead",
    subtitle: "FPVCrate | Remote-Sarasota, FL",
    date: "2020 – 2022",
    bullets: [
      "Directed digital marketing campaigns and produced engaging content targeting the FPV drone community.",
      "Managed brand identity visuals and designed multimedia marketing assets aligned with fast-paced drone culture.",
      "Managed Shopify store, Recharge subscription platform and Refersion affiliate platform.",
    ],
  },
  {
    title: "Camera, Assistant Editor, Brand Visuals",
    subtitle: "Rotor Riot | Remote/On Site-Orlando, FL",
    date: "2018 – 2020",
    bullets: [
      "Executed rapid-response shoots; notably driving overnight to film a 6 AM building demolition.",
      "Managed end-to-end video production for a global YouTube audience exceeding 225,000 subscribers.",
      "Produced product and pilot photography and hero imagery for marketing & e-commerce.",
    ],
  },
  {
    title: "Freelance Creative Director",
    subtitle: "Independent Ventures",
    date: "2013 – Present",
    bullets: [
      "Food & Beverage: Produced high-quality photography for Smoky Park Supper Club and other restaurants and businesses.",
      "Live Event: Captured thousands of high-energy photos and video of live bands and concerts all over the greater US.",
      "Merchandise & Print Design: Designed logos, apparel, packaging, and event posters for bands, FPV pilots, businesses and actors.",
    ],
  },
];



export default function App() {
  const [loading, setLoading] = useState(true);
  return (
    <div className="bg-[#0d1117] min-h-screen text-[#e8e8e8] font-sans selection:bg-[#ffb347] selection:text-[#0d1117]">
      <PixelLoadingScreen onComplete={() => setLoading(false)} />
      <PixelNav />

      {/* ═══════════════════════════════════════════════
          HERO SECTION — Pixel Cityscape
      ═══════════════════════════════════════════════ */}
      <section
        id="hero"
        className="relative min-h-screen flex flex-col overflow-hidden"
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${HERO_BG})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d1117]/80 via-[#0d1117]/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d1117] via-transparent to-transparent" />
        <StarField count={40} />

        {/* "Player 1 Ready" — below nav, above video */}
        <div className="relative z-10 pt-20 pb-4 flex justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={!loading ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p
              className="text-[#4ecdc4] text-[13px] sm:text-[15px] tracking-widest uppercase animate-[pulse_2.5s_cubic-bezier(0.4,0,0.6,1)_infinite]"
              style={{ fontFamily: "'Press Start 2P', monospace" }}
            >
              &gt; Player 1 Ready
            </p>
          </motion.div>
        </div>

        {/* Full-width title screen video */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={!loading ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative z-10 w-full flex-shrink-0 pointer-events-none"
        >
          <video
            src="/artifacts/title_screen.mp4"
            autoPlay
            loop
            muted
            playsInline
            disablePictureInPicture
            className="w-full object-contain mix-blend-lighten"
            style={{ pointerEvents: 'none', WebkitUserSelect: 'none' }}
          />
          {/* 8-bit pixel top fade */}
          <div
            className="absolute top-0 left-0 right-0 pointer-events-none"
            style={{
              height: '64px',
              background: 'linear-gradient(to bottom, #0d1117 0px, #0d1117 8px, rgba(13,17,23,0.875) 8px, rgba(13,17,23,0.875) 16px, rgba(13,17,23,0.75) 16px, rgba(13,17,23,0.75) 24px, rgba(13,17,23,0.625) 24px, rgba(13,17,23,0.625) 32px, rgba(13,17,23,0.5) 32px, rgba(13,17,23,0.5) 40px, rgba(13,17,23,0.375) 40px, rgba(13,17,23,0.375) 48px, rgba(13,17,23,0.25) 48px, rgba(13,17,23,0.25) 56px, rgba(13,17,23,0.125) 56px, rgba(13,17,23,0.125) 64px, transparent 64px)',
            }}
          />
          {/* 8-bit pixel bottom fade */}
          <div
            className="absolute bottom-0 left-0 right-0 pointer-events-none"
            style={{
              height: '64px',
              background: 'linear-gradient(to top, #0d1117 0px, #0d1117 8px, rgba(13,17,23,0.875) 8px, rgba(13,17,23,0.875) 16px, rgba(13,17,23,0.75) 16px, rgba(13,17,23,0.75) 24px, rgba(13,17,23,0.625) 24px, rgba(13,17,23,0.625) 32px, rgba(13,17,23,0.5) 32px, rgba(13,17,23,0.5) 40px, rgba(13,17,23,0.375) 40px, rgba(13,17,23,0.375) 48px, rgba(13,17,23,0.25) 48px, rgba(13,17,23,0.25) 56px, rgba(13,17,23,0.125) 56px, rgba(13,17,23,0.125) 64px, transparent 64px)',
            }}
          />
        </motion.div>

        {/* Hero content */}
        <div className="relative z-10 flex-grow flex flex-col items-center justify-center container py-10 px-8 mx-auto text-center w-full">
          <div className="max-w-5xl flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={!loading ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col items-center gap-6"
              style={{ fontFamily: "'Press Start 2P', monospace" }}
            >
              <a
                href="#about"
                className="group relative text-[#ffd700] text-sm md:text-base hover:text-white transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                <span className="absolute -left-6 top-[2px] opacity-0 group-hover:opacity-100 transition-opacity">&gt;</span>
                <span className="animate-pulse flex">PUSH START</span>
              </a>
              <a
                href="#contact"
                className="group relative text-[#ffd700] text-sm md:text-base hover:text-white transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                <span className="absolute -left-6 top-[2px] opacity-0 group-hover:opacity-100 transition-opacity">&gt;</span>
                <span className="animate-pulse flex">CONTACT</span>
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={!loading ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="flex items-center gap-4 mt-8 text-[#e8e8e8]/50 text-xs"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              <span className="flex items-center gap-1.5">
                <MapPin size={14} className="text-[#4ecdc4]" />
                Asheville, NC
              </span>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="flex flex-col items-center gap-2">
            <span
              className="text-[#4ecdc4]/60 text-[7px]"
              style={{ fontFamily: "'Press Start 2P', monospace" }}
            >
              SCROLL
            </span>
            <div className="w-4 h-6 border-2 border-[#4ecdc4]/40 flex justify-center pt-1">
              <div className="w-1 h-1.5 bg-[#4ecdc4]" />
            </div>
          </div>
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════════
          ABOUT SECTION
      ═══════════════════════════════════════════════ */}
      <section id="about" className="relative py-20 lg:py-28 bg-[#0d1117]">
        <div className="container px-8 mx-auto">
          <div className="grid lg:grid-cols-[280px_1fr] gap-10 lg:gap-16 items-start">
            {/* Avatar */}
            <SectionReveal>
              <div className="flex flex-col items-center lg:items-start">
                <div className="w-48 h-48 sm:w-56 sm:h-56 border-4 border-[#4ecdc4] overflow-hidden mb-4 shadow-[0_0_20px_rgba(78,205,196,0.2)]">
                  <img
                    src={AVATAR}
                    alt="James Pellegrini pixel avatar"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="pixel-dialog text-center lg:text-left w-full mt-2">
                  <p
                    className="text-[#ffd700] text-[8px] mb-2"
                    style={{ fontFamily: "'Press Start 2P', monospace" }}
                  >
                    CLASS: Creative Director
                  </p>
                  <p
                    className="text-[#4ecdc4] text-[7px]"
                    style={{ fontFamily: "'Press Start 2P', monospace" }}
                  >
                    GUILD: The Robot Farm
                  </p>
                </div>
              </div>
            </SectionReveal>

            {/* Bio */}
            <div>
              <SectionReveal>
                <h2
                  className="text-[#ffd700] text-sm sm:text-base md:text-lg mb-6"
                  style={{ fontFamily: "'Press Start 2P', monospace" }}
                >
                  <TypewriterText text="About Me" speed={100} />
                </h2>
              </SectionReveal>

              <SectionReveal delay={0.15}>
                <div className="pixel-dialog mb-6">
                  <p className="text-[#e8e8e8]/90 text-sm sm:text-base leading-relaxed mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>
                    Ambitious Content Manager and Creative Producer with a proven track record of driving brand engagement through high-quality videography, photography, and social media strategy. Deeply embedded in the Asheville community with hands-on experience in the local food, beverage, and live music scenes. Specializes in a scrappy, DIY production mentality—utilizing Sony mirrorless systems, Adobe Creative Suite (Premiere Pro, Photoshop, Lightroom), and advanced AI tools to manage fast-paced, multi-channel marketing campaigns and visual storytelling.
                  </p>
                  <p className="text-[#e8e8e8]/90 text-sm sm:text-base leading-relaxed mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>
                    I bring hands-on experience across the full e-commerce stack — from building and optimizing Shopify storefronts to running paid ad campaigns and automated email sequences that drive revenue. On the Shopify side, I'm comfortable with theme customization, app integrations, conversion rate optimization, and store architecture. My paid media work spans Meta and Google Ads, with a focus on creative testing, audience segmentation, and ROAS-driven scaling. I pair that with email marketing through platforms like Klaviyo — building flows, segmenting lists, and writing copy that actually converts — turning one-time buyers into repeat customers.
                  </p>
                  <p className="text-[#e8e8e8]/90 text-sm sm:text-base leading-relaxed mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>
                    Outside of work, you’ll usually find me outdoors with my dogs, cats, pigs, and goats — which, oddly enough, reinforces the same values: patience, responsibility, consistency, and showing up every day whether it’s glamorous or not.
                  </p>
                  <p className="text-[#e8e8e8]/90 text-sm sm:text-base leading-relaxed" style={{ fontFamily: "'Outfit', sans-serif" }}>
                    I’m drawn to teams that value curiosity, accountability, and thoughtful execution. If that sounds aligned, I’d welcome the opportunity to contribute. Whether in code, brand, or wood and screws, I tend to leave things stronger than I found them.
                  </p>
                </div>
              </SectionReveal>

              {/* Quick stats */}
              <SectionReveal delay={0.3}>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {[
                    { label: "Years XP", value: "12+", icon: "⚔" },
                    { label: "Revenue Up", value: "1,150%", icon: "📈" },
                    { label: "Brand Growth", value: "30%+", icon: "🚀" },
                    { label: "YT Subs", value: "225K+", icon: "🎬" },
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      className="border-2 border-[#4ecdc4]/30 bg-[#0d1117]/80 p-3 text-center hover:border-[#ffd700] transition-colors"
                    >
                      <span className="text-xl mb-1 block">{stat.icon}</span>
                      <p
                        className="text-[#ffd700] text-xs sm:text-sm mb-0.5"
                        style={{ fontFamily: "'Press Start 2P', monospace" }}
                      >
                        {stat.value}
                      </p>
                      <p
                        className="text-[#e8e8e8]/50 text-[7px]"
                        style={{ fontFamily: "'Press Start 2P', monospace" }}
                      >
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </SectionReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          EXPERIENCE SECTION — Workspace Scene
      ═══════════════════════════════════════════════ */}
      <section
        id="experience"
        className="relative py-20 lg:py-28 section-bg"
        style={{ backgroundImage: `url(${EXPERIENCE_BG})` }}
      >
        <div className="container px-8 mx-auto relative z-10">
          <SectionReveal>
            <h2
              className="text-[#ffd700] text-sm sm:text-base md:text-lg mb-2"
              style={{ fontFamily: "'Press Start 2P', monospace" }}
            >
              <TypewriterText text="Quest Log" speed={100} />
            </h2>
            <p
              className="text-[#4ecdc4] text-[8px] mb-10"
              style={{ fontFamily: "'Press Start 2P', monospace" }}
            >
              Professional Experience
            </p>
          </SectionReveal>

          <div className="max-w-3xl border-l-2 border-[#4ecdc4]/30 ml-4 pl-6 relative">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                <div className="absolute w-3 h-3 bg-[#ffd700] rounded-none -left-[31px] top-4 shadow-[0_0_10px_#ffd700]" />
                <PixelCard {...exp} />
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* ═══════════════════════════════════════════════
          SKILLS SECTION — Equipment
      ═══════════════════════════════════════════════ */}
      <section
        id="skills"
        className="relative py-20 lg:py-28 section-bg"
        style={{ backgroundImage: `url(${SKILLS_BG})` }}
      >
        <div className="container px-8 mx-auto relative z-10">
          <SectionReveal>
            <h2
              className="text-[#ffd700] text-sm sm:text-base md:text-lg mb-10"
              style={{ fontFamily: "'Press Start 2P', monospace" }}
            >
              <TypewriterText text="Quest Objectives" speed={100} />
            </h2>
          </SectionReveal>

          <div className="grid md:grid-cols-2 gap-10">
            <SectionReveal delay={0.2}>
              <div className="pixel-dialog w-full">
                <h3 className="text-[#ffb347] text-xs mb-6 border-b-2 border-white/10 pb-2" style={{ fontFamily: "'Press Start 2P', monospace" }}>Creative & Tech</h3>
                <SkillBar label="Adobe Creative Suite" percentage={95} />
                <SkillBar label="Shopify Dev" percentage={85} />
                <SkillBar label="Video Editing" percentage={90} />
                <SkillBar label="Photography" percentage={95} />
                <SkillBar label="AI Tools (GPT, Midjourney)" percentage={80} />
              </div>
            </SectionReveal>

            <SectionReveal delay={0.4}>
              <div className="pixel-dialog w-full">
                <h3 className="text-[#ffb347] text-xs mb-6 border-b-2 border-white/10 pb-2" style={{ fontFamily: "'Press Start 2P', monospace" }}>Marketing & Strategy</h3>
                <SkillBar label="Email Marketing" percentage={90} color="#4ecdc4" />
                <SkillBar label="Paid Ads (Google/Meta)" percentage={75} color="#4ecdc4" />
                <SkillBar label="Brand Coordination" percentage={85} color="#4ecdc4" />
                <SkillBar label="Copywriting" percentage={85} color="#4ecdc4" />
                <SkillBar label="Project Management" percentage={70} color="#4ecdc4" />
              </div>
            </SectionReveal>
          </div>

          <SectionReveal delay={0.6}>
            <div className="mt-16 text-center">
              <p className="text-[#ffd700] text-[10px] sm:text-xs leading-loose" style={{ fontFamily: "'Press Start 2P', monospace" }}>
                {["Sony Mirrorless", "Premiere Pro", "Photoshop", "Lightroom", "Shopify", "Klaviyo", "Meta Ads", "Google Ads", "Midjourney", "ChatGPT", "Claude Code/Cowork", "Google AI Suite"].map((tool, idx, arr) => (
                  <span key={tool}>
                    {tool}
                    {idx < arr.length - 1 && (
                      <span className="text-[#4ecdc4] mx-3">★</span>
                    )}
                  </span>
                ))}
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          GALLERY SECTION
      ═══════════════════════════════════════════════ */}
      <section
        id="gallery"
        className="relative py-20 lg:py-28 section-bg"
        style={{ backgroundImage: `url(${GALLERY_BG})` }}
      >
        <div className="container px-8 mx-auto relative z-10">
          <SectionReveal>
            <h2
              className="text-[#ffd700] text-sm sm:text-base md:text-lg mb-2"
              style={{ fontFamily: "'Press Start 2P', monospace" }}
            >
              <TypewriterText text="Artifacts" speed={100} />
            </h2>
            <p
              className="text-[#4ecdc4] text-[8px] mb-10"
              style={{ fontFamily: "'Press Start 2P', monospace" }}
            >
              Visual Gallery
            </p>
          </SectionReveal>

          <GallerySection />
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          CONTACT SECTION
      ═══════════════════════════════════════════════ */}
      <section
        id="contact"
        className="relative py-20 lg:py-28 bg-[#0d1117] border-t-2 border-white/5"
      >
        <div className="container px-8 mx-auto relative z-10 text-center">
          <SectionReveal>
            <h2
              className="text-[#ffd700] text-sm sm:text-base md:text-lg mb-2 inline-block"
              style={{ fontFamily: "'Press Start 2P', monospace" }}
            >
              <TypewriterText text="Multiplayer" speed={100} />
            </h2>
            <p
              className="text-[#4ecdc4] text-[8px] mb-12"
              style={{ fontFamily: "'Press Start 2P', monospace" }}
            >
              Connect & Collaborate
            </p>
          </SectionReveal>

          <SectionReveal delay={0.2}>
            <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto">
              {[
                { icon: <MapPin size={20} />, label: "Location", value: "Asheville, NC", href: "https://maps.google.com/?q=Asheville,+NC" },
                { icon: <Phone size={20} />, label: "Phone", value: "828.222.9720", href: "tel:8282229720" },
                { icon: <Mail size={20} />, label: "Email", value: "howdy@therobotfarm.tech", href: "mailto:howdy@therobotfarm.tech" },
                { icon: <Globe size={20} />, label: "Web", value: "www.therobotfarm.tech", href: "https://www.therobotfarm.tech" },
              ].map((contact, idx) => (
                <a
                  key={idx}
                  href={contact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pixel-dialog flex items-center justify-center gap-3 w-full sm:w-auto hover:border-[#ffd700] transition-colors group cursor-pointer"
                >
                  <span className="text-[#4ecdc4] group-hover:text-[#ffd700] transition-colors">{contact.icon}</span>
                  <div className="text-left">
                    <p className="text-[#e8e8e8]/50 text-[7px]" style={{ fontFamily: "'Press Start 2P', monospace" }}>{contact.label}</p>
                    <p className="text-[#e8e8e8] text-xs font-bold" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                      {contact.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-[#0d1117] border-t border-white/5 text-center">
        <p className="text-[#e8e8e8]/30 text-[8px]" style={{ fontFamily: "'Press Start 2P', monospace" }}>
          © {new Date().getFullYear()} James Pellegrini // All rights reserved
        </p>
      </footer>

      {/* BGM Player — pinned to bottom of page */}
      <div className="bg-[#0d1117] pb-10 flex justify-center">
        <BackgroundAudio />
      </div>
    </div>
  );
}
