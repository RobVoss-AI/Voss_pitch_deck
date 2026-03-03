import { useState, useEffect, useRef, useCallback } from "react";
import Hls from "hls.js";
import {
  BookOpen, Target, Brain, Users, Mic,
  Briefcase, GraduationCap, Calculator, Award,
  Phone, Mail, MapPin,
  ChevronLeft, ChevronRight, Maximize, Minimize,
} from "lucide-react";

const H = "Playfair Display, serif";
const B = "Space Grotesk, sans-serif";

/* ───────── HLS Video Background ───────── */
function VideoBackground({ src }) {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !src) return;
    let hls = null;

    if (Hls.isSupported()) {
      hls = new Hls({ enableWorker: true });
      hls.loadSource(src);
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED, () => video.play().catch(() => {}));
    } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = src;
      video.addEventListener("loadedmetadata", () => video.play().catch(() => {}));
    }

    return () => { if (hls) hls.destroy(); };
  }, [src]);

  return (
    <video
      ref={videoRef}
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
      autoPlay loop muted playsInline
    />
  );
}

/* ───────── Logo SVG ───────── */
function Logo() {
  return (
    <svg width="140" height="40" viewBox="0 0 140 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="8" width="24" height="24" rx="6" stroke="white" strokeWidth="2" fill="none" />
      <path d="M10 24 L14 16 L18 24" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="14" cy="15" r="2" fill="white" />
      <text x="34" y="26" fill="white" fontFamily="Playfair Display, serif" fontWeight="700" fontSize="16" letterSpacing="-0.02em">VOSS AI</text>
    </svg>
  );
}

/* ───────── Liquid Glass Card ───────── */
function GlassCard({ children }) {
  return (
    <div
      style={{
        background: "linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.03) 100%)",
        backdropFilter: "blur(24px) saturate(1.4)",
        WebkitBackdropFilter: "blur(24px) saturate(1.4)",
        border: "1px solid rgba(255,255,255,0.12)",
        borderRadius: "clamp(12px, 1.2vw, 24px)",
        position: "relative",
        overflow: "hidden",
        flex: 1,
      }}
    >
      <div style={{ position: "absolute", top: 0, left: 0, width: "50%", height: "50%", background: "radial-gradient(ellipse at top left, rgba(255,255,255,0.06) 0%, transparent 70%)", pointerEvents: "none" }} />
      {children}
    </div>
  );
}

/* ───────── Social Icons ───────── */
function InstagramIcon({ size = 24 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="17.5" cy="6.5" r="1.5" fill="white" stroke="none" />
    </svg>
  );
}

function FacebookIcon({ size = 24 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
    </svg>
  );
}

function LinkedInIcon({ size = 24 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

/* ═══════════════════════════════════════
   SLIDE 1 — Cover
   ═══════════════════════════════════════ */
function CoverSlide() {
  return (
    <div style={{ position: "relative", width: "100%", height: "100%", background: "#000", overflow: "hidden" }}>
      <VideoBackground src="https://stream.mux.com/JNJEOYI6B3EffB9f5ZhpGbuxzc6gSyJcXaCBbCgZKRg.m3u8" />
      <div style={{ position: "relative", zIndex: 10, width: "100%", height: "100%", display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "clamp(16px, 2.5%, 40px) clamp(24px, 5.2%, 80px)" }}>
          <Logo />
          <span style={{ color: "white", opacity: 0.8, fontSize: "clamp(12px, 1.05vw, 20px)", fontFamily: B }}>Pitch Deck</span>
        </div>
        <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center", marginTop: "-3%", padding: "0 clamp(24px, 5%, 80px)" }}>
          <h1 style={{ color: "white", fontSize: "clamp(36px, 5.5vw, 96px)", fontFamily: H, fontWeight: 900, letterSpacing: "-0.02em", lineHeight: 1.05, margin: 0 }}>
            Voss AI Consulting
          </h1>
          <p style={{ color: "white", opacity: 0.9, fontSize: "clamp(16px, 2vw, 36px)", fontFamily: B, fontWeight: 500, marginTop: "1.5%", marginBottom: 0, maxWidth: "75%" }}>
            Research-Backed AI Solutions for Business, Education &amp; Accounting
          </p>
          <p style={{ color: "white", opacity: 0.6, fontSize: "clamp(13px, 1.2vw, 22px)", fontFamily: B, fontWeight: 400, marginTop: "2.5%", marginBottom: 0, letterSpacing: "0.05em" }}>
            Dr. Robert Voss &nbsp;&middot;&nbsp; OpenAI Academy Faculty &nbsp;&middot;&nbsp; Fractional CTO
          </p>
        </div>
        <div style={{ textAlign: "center", padding: "clamp(16px, 2%, 40px) 0" }}>
          <span style={{ color: "white", opacity: 0.5, fontSize: "clamp(12px, 1.05vw, 20px)", fontFamily: B }}>2026</span>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════
   SLIDE 2 — Credentials
   ═══════════════════════════════════════ */
function CredentialsSlide() {
  const credentials = [
    { Icon: Award, title: "OpenAI Academy Faculty", desc: "Research-backed AI methodologies with proven academic frameworks and evidence-based strategies." },
    { Icon: BookOpen, title: "PhD Digital Humanities", desc: "University of Nebraska-Lincoln. 10+ years developing AI research frameworks and curricula." },
    { Icon: GraduationCap, title: "Applied AI Minor Creator", desc: "Pioneered the first interdisciplinary AI program of its kind in the region at Northwest Missouri State." },
    { Icon: Users, title: "Fractional CTO", desc: "Strategic technology leadership combining academic rigor with business acumen for AI initiatives." },
  ];

  return (
    <div style={{ position: "relative", width: "100%", height: "100%", background: "#000", overflow: "hidden" }}>
      <VideoBackground src="https://stream.mux.com/Kec29dVyJgiPdtWaQtPuEiiGHkJIYQAVUJcNiIHUYeo.m3u8" />
      <div style={{ position: "relative", zIndex: 10, width: "100%", height: "100%", display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "clamp(16px, 2.5%, 40px) clamp(24px, 5.2%, 80px)" }}>
          <Logo />
          <span style={{ color: "white", opacity: 0.8, fontSize: "clamp(12px, 1.05vw, 20px)", fontFamily: B }}>Pitch Deck</span>
          <span style={{ color: "white", opacity: 0.8, fontSize: "clamp(12px, 1.05vw, 20px)", fontFamily: B }}>Page 001</span>
        </div>
        <div style={{ textAlign: "center", padding: "0 clamp(24px, 5.2%, 80px)" }}>
          <p style={{ color: "white", opacity: 0.7, fontSize: "clamp(13px, 1.1vw, 20px)", fontFamily: B, fontWeight: 500, margin: "0 0 clamp(4px, 0.5%, 12px) 0", letterSpacing: "0.08em", textTransform: "uppercase" }}>
            Your AI Partner
          </p>
          <h2 style={{ color: "white", fontSize: "clamp(28px, 3.8vw, 64px)", fontFamily: H, fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.05, margin: 0 }}>
            Dr. Robert Voss
          </h2>
        </div>
        <div style={{ flex: 1, display: "flex", padding: "clamp(16px, 2.5%, 40px) clamp(24px, 5.2%, 80px)", gap: "clamp(10px, 1.5vw, 27px)", minHeight: 0 }}>
          {credentials.map((cred, i) => (
            <GlassCard key={i}>
              <div style={{ display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: "clamp(20px, 2.5vw, 48px)", height: "100%", position: "relative", zIndex: 1 }}>
                <cred.Icon color="white" strokeWidth={1.5} style={{ marginBottom: "clamp(10px, 1.2vw, 20px)", width: "clamp(28px, 2.5vw, 44px)", height: "clamp(28px, 2.5vw, 44px)" }} />
                <h3 style={{ color: "white", fontSize: "clamp(16px, 1.8vw, 32px)", fontFamily: H, fontWeight: 700, margin: "0 0 clamp(6px, 0.6vw, 12px) 0" }}>{cred.title}</h3>
                <p style={{ color: "white", opacity: 0.8, fontSize: "clamp(12px, 1vw, 18px)", fontFamily: B, margin: 0, lineHeight: 1.5 }}>{cred.desc}</p>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════
   SLIDE 3 — Services
   ═══════════════════════════════════════ */
function ServicesSlide() {
  const cards = [
    { Icon: BookOpen, title: "AI Education & Coaching", desc: "Comprehensive AI training tailored to your organization's learning objectives and industry context." },
    { Icon: Mic, title: "Presentations & Workshops", desc: "Engaging sessions that demystify AI and inspire strategic adoption across your sector." },
    { Icon: Target, title: "Training & Gap Analysis", desc: "Evidence-based learning paths designed for lasting AI competency and measurable results." },
    { Icon: Brain, title: "Strategic AI Implementation", desc: "Evaluate tools, develop roadmaps, and build implementation plans aligned with your objectives." },
    { Icon: Users, title: "Fractional CTO Services", desc: "Ongoing strategic guidance and technical leadership combining academic rigor with business acumen." },
  ];

  return (
    <div style={{ position: "relative", width: "100%", height: "100%", background: "#000", overflow: "hidden" }}>
      <VideoBackground src="https://stream.mux.com/fHfa8VIbBdqZelLGg5thjsypZ101M01dbyIMLNDWQwlLA.m3u8" />
      <div style={{ position: "relative", zIndex: 10, width: "100%", height: "100%", display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "clamp(16px, 2.5%, 40px) clamp(24px, 5.2%, 80px)" }}>
          <Logo />
          <span style={{ color: "white", opacity: 0.8, fontSize: "clamp(12px, 1.05vw, 20px)", fontFamily: B }}>Pitch Deck</span>
          <span style={{ color: "white", opacity: 0.8, fontSize: "clamp(12px, 1.05vw, 20px)", fontFamily: B }}>Page 002</span>
        </div>
        <div style={{ textAlign: "center", padding: "0 clamp(24px, 5.2%, 80px)" }}>
          <p style={{ color: "white", opacity: 0.7, fontSize: "clamp(13px, 1.1vw, 20px)", fontFamily: B, fontWeight: 500, margin: "0 0 clamp(4px, 0.5%, 12px) 0", letterSpacing: "0.08em", textTransform: "uppercase" }}>
            Evidence-Based AI Solutions
          </p>
          <h2 style={{ color: "white", fontSize: "clamp(28px, 3.8vw, 64px)", fontFamily: H, fontWeight: 700, margin: 0 }}>
            Our Services
          </h2>
        </div>
        <div style={{ flex: 1, display: "flex", flexDirection: "column", padding: "clamp(16px, 2%, 32px) clamp(24px, 5.2%, 80px)", gap: "clamp(10px, 1.2vw, 25px)", minHeight: 0 }}>
          <div style={{ display: "flex", gap: "clamp(10px, 1.5vw, 27px)", flex: 1, minHeight: 0 }}>
            {cards.slice(0, 3).map((card, i) => (
              <GlassCard key={i}>
                <div style={{ display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: "clamp(20px, 2.5vw, 48px)", height: "100%", position: "relative", zIndex: 1 }}>
                  <card.Icon color="white" strokeWidth={1.5} style={{ marginBottom: "clamp(10px, 1.2vw, 20px)", width: "clamp(32px, 3vw, 48px)", height: "clamp(32px, 3vw, 48px)" }} />
                  <h3 style={{ color: "white", fontSize: "clamp(16px, 1.8vw, 32px)", fontFamily: H, fontWeight: 700, margin: "0 0 clamp(6px, 0.6vw, 12px) 0" }}>{card.title}</h3>
                  <p style={{ color: "white", opacity: 0.8, fontSize: "clamp(12px, 1.05vw, 20px)", fontFamily: B, margin: 0, lineHeight: 1.5 }}>{card.desc}</p>
                </div>
              </GlassCard>
            ))}
          </div>
          <div style={{ display: "flex", gap: "clamp(10px, 1.3vw, 25px)", flex: 1, minHeight: 0 }}>
            {cards.slice(3).map((card, i) => (
              <GlassCard key={i + 3}>
                <div style={{ display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: "clamp(20px, 2.5vw, 48px)", height: "100%", position: "relative", zIndex: 1 }}>
                  <card.Icon color="white" strokeWidth={1.5} style={{ marginBottom: "clamp(10px, 1.2vw, 20px)", width: "clamp(32px, 3vw, 48px)", height: "clamp(32px, 3vw, 48px)" }} />
                  <h3 style={{ color: "white", fontSize: "clamp(16px, 1.8vw, 32px)", fontFamily: H, fontWeight: 700, margin: "0 0 clamp(6px, 0.6vw, 12px) 0" }}>{card.title}</h3>
                  <p style={{ color: "white", opacity: 0.8, fontSize: "clamp(12px, 1.05vw, 20px)", fontFamily: B, margin: 0, lineHeight: 1.5 }}>{card.desc}</p>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════
   SLIDE 4 — Sectors
   ═══════════════════════════════════════ */
function SectorsSlide() {
  const sectors = [
    { Icon: Briefcase, title: "Business Coaching", desc: "Helping coaches and consultants integrate AI to enhance client outcomes, optimize workflows, and scale their practice with evidence-based strategies." },
    { Icon: GraduationCap, title: "Educational Institutions", desc: "Developing AI curricula, faculty training programs, and institutional AI strategies grounded in peer-reviewed research and academic best practices." },
    { Icon: Calculator, title: "Accounting & CPA Firms", desc: "AI-powered solutions for financial services — from workflow automation and intelligent data analysis to strategic technology adoption roadmaps." },
  ];

  return (
    <div style={{ position: "relative", width: "100%", height: "100%", background: "#000", overflow: "hidden" }}>
      <VideoBackground src="https://stream.mux.com/4IMYGcL01xjs7ek5ANO17JC4VQVUTsojZlnw4fXzwSxc.m3u8" />
      <div style={{ position: "relative", zIndex: 10, width: "100%", height: "100%", display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "clamp(16px, 2.5%, 40px) clamp(24px, 5.2%, 80px)" }}>
          <Logo />
          <span style={{ color: "white", opacity: 0.8, fontSize: "clamp(12px, 1.05vw, 20px)", fontFamily: B }}>Pitch Deck</span>
          <span style={{ color: "white", opacity: 0.8, fontSize: "clamp(12px, 1.05vw, 20px)", fontFamily: B }}>Page 003</span>
        </div>
        <div style={{ textAlign: "center", padding: "0 clamp(24px, 5.2%, 80px)" }}>
          <p style={{ color: "white", opacity: 0.7, fontSize: "clamp(13px, 1.1vw, 20px)", fontFamily: B, fontWeight: 500, margin: "0 0 clamp(4px, 0.5%, 12px) 0", letterSpacing: "0.08em", textTransform: "uppercase" }}>
            Industries We Serve
          </p>
          <h2 style={{ color: "white", fontSize: "clamp(28px, 3.8vw, 64px)", fontFamily: H, fontWeight: 700, margin: 0 }}>
            Three Core Verticals
          </h2>
        </div>
        <div style={{ flex: 1, display: "flex", padding: "clamp(16px, 2.5%, 40px) clamp(24px, 5.2%, 80px)", gap: "clamp(10px, 1.5vw, 27px)", minHeight: 0 }}>
          {sectors.map((sector, i) => (
            <GlassCard key={i}>
              <div style={{ display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: "clamp(24px, 3vw, 56px)", height: "100%", position: "relative", zIndex: 1 }}>
                <sector.Icon color="white" strokeWidth={1.5} style={{ marginBottom: "clamp(12px, 1.5vw, 24px)", width: "clamp(36px, 3.5vw, 56px)", height: "clamp(36px, 3.5vw, 56px)" }} />
                <h3 style={{ color: "white", fontSize: "clamp(20px, 2.2vw, 40px)", fontFamily: H, fontWeight: 700, margin: "0 0 clamp(8px, 0.8vw, 16px) 0" }}>{sector.title}</h3>
                <p style={{ color: "white", opacity: 0.8, fontSize: "clamp(13px, 1.1vw, 20px)", fontFamily: B, margin: 0, lineHeight: 1.6 }}>{sector.desc}</p>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════
   SLIDE 5 — Quote
   ═══════════════════════════════════════ */
function QuoteSlide() {
  return (
    <div style={{ position: "relative", width: "100%", height: "100%", background: "#000", overflow: "hidden" }}>
      <VideoBackground src="https://stream.mux.com/Kec29dVyJgiPdtWaQtPuEiiGHkJIYQAVUJcNiIHUYeo.m3u8" />
      <div style={{ position: "relative", zIndex: 10, width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
        <div style={{ maxWidth: "70%", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: 12 }}>
          <span style={{ color: "white", opacity: 0.9, fontSize: "clamp(14px, 1.2vw, 20px)", fontFamily: B, fontWeight: 500 }}>
            Andrew Ng
          </span>
          <h2 style={{ color: "white", fontSize: "clamp(28px, 3.8vw, 64px)", fontFamily: H, fontWeight: 700, fontStyle: "italic", letterSpacing: "-0.02em", lineHeight: 1.15, margin: 0 }}>
            &ldquo;Artificial Intelligence is the new electricity.&rdquo;
          </h2>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════
   SLIDE 6 — Contact
   ═══════════════════════════════════════ */
function ContactSlide() {
  const contacts = [
    { icon: <Phone size={24} color="white" strokeWidth={1.5} />, text: "+1 (660) 215-1313" },
    { icon: <Mail size={24} color="white" strokeWidth={1.5} />, text: "robvoss@vossaiconsulting.com" },
    { icon: <MapPin size={24} color="white" strokeWidth={1.5} />, text: "Headquarters: Maryville, MO, USA" },
    { icon: <LinkedInIcon size={24} />, text: "linkedin.com/in/ai-robvoss" },
    { icon: <InstagramIcon size={24} />, text: "instagram.com/vossaiconsulting" },
    { icon: <FacebookIcon size={24} />, text: "facebook.com/profile.php?id=61573896842340" },
  ];

  return (
    <div style={{ position: "relative", width: "100%", height: "100%", background: "#000", overflow: "hidden" }}>
      <VideoBackground src="https://stream.mux.com/00qQnfNo7sSpn3pB1hYKkyeSDvxs01NxiQ3sr29uL3e028.m3u8" />
      <div style={{ position: "relative", zIndex: 10, width: "100%", height: "100%", display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "clamp(16px, 2.5%, 40px) clamp(24px, 5.2%, 80px)" }}>
          <Logo />
          <span style={{ color: "white", opacity: 0.8, fontSize: "clamp(12px, 1.05vw, 20px)", fontFamily: B }}>Pitch Deck</span>
          <span style={{ color: "white", opacity: 0.8, fontSize: "clamp(12px, 1.05vw, 20px)", fontFamily: B }}>Page 004</span>
        </div>
        <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", padding: "0 clamp(24px, 5.2%, 80px)" }}>
          <p style={{ color: "white", opacity: 0.7, fontSize: "clamp(13px, 1.1vw, 20px)", fontFamily: B, fontWeight: 500, margin: "0 0 clamp(4px, 0.5%, 12px) 0", letterSpacing: "0.08em", textTransform: "uppercase" }}>
            Get Started
          </p>
          <h2 style={{ color: "white", fontSize: "clamp(28px, 3.8vw, 64px)", fontFamily: H, fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.05, margin: 0 }}>
            Let&rsquo;s Transform Your<br /><span style={{ opacity: 0.9 }}>Organization with AI</span>
          </h2>
          <p style={{ color: "white", opacity: 0.85, fontSize: "clamp(13px, 1.05vw, 20px)", fontFamily: B, lineHeight: 1.6, maxWidth: "42%", marginTop: "2.5%", marginBottom: 0 }}>
            Whether you&rsquo;re a business leader, educator, or accounting professional, we bring research-backed AI solutions tailored to your industry. Let&rsquo;s connect and explore how evidence-based AI implementation can drive measurable results for your organization.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "clamp(12px, 1.2vw, 19px)", marginTop: "3%" }}>
            {contacts.map((c, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: "clamp(10px, 1vw, 18px)" }}>
                <span style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 24, height: 24, flexShrink: 0 }}>{c.icon}</span>
                <span style={{ color: "white", fontSize: "clamp(13px, 1.05vw, 20px)", fontFamily: B }}>{c.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════
   PRESENTATION ENGINE
   ═══════════════════════════════════════ */
function Presentation({ slides }) {
  const [current, setCurrent] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [controlsVisible, setControlsVisible] = useState(true);
  const [transitioning, setTransitioning] = useState(false);
  const [direction, setDirection] = useState(0);
  const timeoutRef = useRef(null);
  const containerRef = useRef(null);
  const total = slides.length;

  const resetHideTimer = useCallback(() => {
    setControlsVisible(true);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setControlsVisible(false), 3000);
  }, []);

  const goTo = useCallback((idx, dir) => {
    if (idx < 0 || idx >= total || transitioning) return;
    setDirection(dir);
    setTransitioning(true);
    setTimeout(() => {
      setCurrent(idx);
      setTimeout(() => setTransitioning(false), 50);
    }, 250);
  }, [total, transitioning]);

  const next = useCallback(() => goTo(current + 1, 1), [current, goTo]);
  const prev = useCallback(() => goTo(current - 1, -1), [current, goTo]);

  const toggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      containerRef.current?.requestFullscreen?.();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen?.();
      setIsFullscreen(false);
    }
  }, []);

  useEffect(() => {
    const handler = (e) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown" || e.key === " ") { e.preventDefault(); next(); }
      else if (e.key === "ArrowLeft" || e.key === "ArrowUp") { e.preventDefault(); prev(); }
      else if (e.key === "f" || e.key === "F") { e.preventDefault(); toggleFullscreen(); }
      else if (e.key === "Escape" && document.fullscreenElement) { document.exitFullscreen?.(); setIsFullscreen(false); }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [next, prev, toggleFullscreen]);

  useEffect(() => {
    const handler = () => resetHideTimer();
    window.addEventListener("mousemove", handler);
    resetHideTimer();
    return () => window.removeEventListener("mousemove", handler);
  }, [resetHideTimer]);

  useEffect(() => {
    const handler = () => setIsFullscreen(!!document.fullscreenElement);
    document.addEventListener("fullscreenchange", handler);
    return () => document.removeEventListener("fullscreenchange", handler);
  }, []);

  return (
    <div ref={containerRef} style={{ width: "100vw", height: "100vh", background: "#000", position: "relative", overflow: "hidden", fontFamily: B }} onMouseMove={resetHideTimer}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,700;0,900;1,400;1,700&family=Space+Grotesk:wght@300;400;500;600;700&display=swap'); * { margin: 0; padding: 0; box-sizing: border-box; } body { margin: 0; overflow: hidden; background: #000; }`}</style>

      {slides.map((SlideComponent, i) => {
        const isCurrent = i === current;
        let opacity = 0, scale = 1;
        if (isCurrent && !transitioning) { opacity = 1; scale = 1; }
        else if (isCurrent && transitioning) { opacity = 0; scale = direction === 1 ? 1.05 : 0.95; }
        else if (i < current) { opacity = 0; scale = 0.95; }
        else { opacity = 0; scale = 1.05; }

        return (
          <div key={i} style={{ position: "absolute", inset: 0, opacity, transform: `scale(${scale})`, transition: "opacity 500ms ease-in-out, transform 500ms ease-in-out", pointerEvents: isCurrent ? "auto" : "none", zIndex: isCurrent ? 1 : 0 }}>
            {SlideComponent}
          </div>
        );
      })}

      {/* Controls */}
      <div style={{ position: "absolute", inset: 0, zIndex: 100, pointerEvents: "none", opacity: controlsVisible ? 1 : 0, transition: "opacity 300ms ease" }}>
        <div style={{ position: "absolute", top: "clamp(12px, 1.5%, 24px)", right: "clamp(16px, 2%, 32px)", color: "rgba(255,255,255,0.4)", fontSize: 11, fontFamily: B }}>
          &larr; &rarr; Navigate &middot; F Fullscreen
        </div>
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "clamp(12px, 1.5%, 24px) clamp(24px, 3%, 48px)", pointerEvents: "auto" }}>
          <span style={{ color: "rgba(255,255,255,0.5)", fontSize: 13, fontVariantNumeric: "tabular-nums", fontFamily: B, minWidth: 60 }}>
            {current + 1} / {total}
          </span>
          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
            {slides.map((_, i) => (
              <button key={i} onClick={() => goTo(i, i > current ? 1 : -1)} style={{ width: i === current ? 24 : 6, height: 6, borderRadius: 3, background: i === current ? "rgba(255,255,255,0.9)" : "rgba(255,255,255,0.3)", border: "none", cursor: "pointer", transition: "all 300ms ease", padding: 0 }} />
            ))}
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 4, minWidth: 60, justifyContent: "flex-end" }}>
            <button onClick={prev} style={{ background: "transparent", border: "none", cursor: current > 0 ? "pointer" : "default", color: "rgba(255,255,255,0.5)", padding: "6px 8px", borderRadius: 6, display: "flex", alignItems: "center", transition: "all 200ms", opacity: current > 0 ? 1 : 0.3 }}
              onMouseEnter={(e) => { if (current > 0) { e.currentTarget.style.color = "rgba(255,255,255,0.9)"; e.currentTarget.style.background = "rgba(255,255,255,0.1)"; }}}
              onMouseLeave={(e) => { e.currentTarget.style.color = "rgba(255,255,255,0.5)"; e.currentTarget.style.background = "transparent"; }}>
              <ChevronLeft size={18} />
            </button>
            <button onClick={next} style={{ background: "transparent", border: "none", cursor: current < total - 1 ? "pointer" : "default", color: "rgba(255,255,255,0.5)", padding: "6px 8px", borderRadius: 6, display: "flex", alignItems: "center", transition: "all 200ms", opacity: current < total - 1 ? 1 : 0.3 }}
              onMouseEnter={(e) => { if (current < total - 1) { e.currentTarget.style.color = "rgba(255,255,255,0.9)"; e.currentTarget.style.background = "rgba(255,255,255,0.1)"; }}}
              onMouseLeave={(e) => { e.currentTarget.style.color = "rgba(255,255,255,0.5)"; e.currentTarget.style.background = "transparent"; }}>
              <ChevronRight size={18} />
            </button>
            <div style={{ width: 1, height: 18, background: "rgba(255,255,255,0.2)", margin: "0 4px" }} />
            <button onClick={toggleFullscreen} style={{ background: "transparent", border: "none", cursor: "pointer", color: "rgba(255,255,255,0.5)", padding: "6px 8px", borderRadius: 6, display: "flex", alignItems: "center", transition: "all 200ms" }}
              onMouseEnter={(e) => { e.currentTarget.style.color = "rgba(255,255,255,0.9)"; e.currentTarget.style.background = "rgba(255,255,255,0.1)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = "rgba(255,255,255,0.5)"; e.currentTarget.style.background = "transparent"; }}>
              {isFullscreen ? <Minimize size={16} /> : <Maximize size={16} />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════
   APP
   ═══════════════════════════════════════ */
export default function App() {
  return (
    <Presentation
      slides={[
        <CoverSlide />,
        <CredentialsSlide />,
        <ServicesSlide />,
        <SectorsSlide />,
        <QuoteSlide />,
        <ContactSlide />,
      ]}
    />
  );
}
