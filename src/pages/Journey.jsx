import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Reveal from "../components/Reveal.jsx";
import Footer from "../components/Footer.jsx";
import { journeyTimeline } from "../data/timelines.js";

/* ───────────── TRAIL IMAGES ───────────── */
const TRAIL_IMAGES = [
  "/students/22G31A0537.jpeg",
"/students/22G31A0509.jpeg",
"/students/22G31A0554.jpeg",
"/students/22G31A0521.jpeg",
"/students/22G31A0543.jpeg",
"/students/22G31A0516.jpeg",
"/students/22G31A0560.jpeg",
"/students/22G31A0532.jpeg",
"/students/22G31A0502.jpeg",
"/students/22G31A0558.jpeg",
"/students/22G31A0528.jpeg",
"/students/22G31A0549.jpeg",
"/students/22G31A0511.jpeg",
"/students/22G31A0539.jpeg",
"/students/22G31A0506.jpeg",
"/students/22G31A0524.jpeg",
"/students/22G31A0551.jpeg",
"/students/22G31A0530.jpeg",
"/students/22G31A0546.jpeg",
"/students/22G31A0519.jpeg",
"/students/22G31A0526.jpeg",
"/students/22G31A0556.jpeg",
"/students/22G31A0504.jpeg",
"/students/22G31A0535.jpeg",
"/students/22G31A0562.jpeg",
"/students/22G31A0513.jpeg",
"/students/22G31A0541.jpeg",
"/students/22G31A0520.jpeg",
"/students/22G31A0501.jpeg",
"/students/22G31A0559.jpeg",
"/students/22G31A0533.jpeg",
"/students/22G31A0544.jpeg",
"/students/22G31A0527.jpeg",
"/students/22G31A0518.jpeg",
"/students/22G31A0553.jpeg",
"/students/22G31A0538.jpeg",
"/students/22G31A0507.jpeg",
"/students/22G31A0548.jpeg",
"/students/22G31A0523.jpeg",
"/students/22G31A0561.jpeg",
"/students/22G31A0510.jpeg",
"/students/22G31A0531.jpeg",
"/students/23G35A0501.jpeg",
"/students/22G31A0505.jpeg",
"/students/22G31A0550.jpeg",
"/students/22G31A0522.jpeg",
"/students/22G31A0536.jpeg",
"/students/22G31A0512.jpeg",
"/students/22G31A0542.jpeg",
"/students/22G31A0552.jpeg",
"/students/22G31A0503.jpeg",
"/students/22G31A0534.jpeg",
"/students/22G31A0517.jpeg",
"/students/22G31A0555.jpeg",
"/students/22G31A0529.jpeg",
"/students/23G35A0502.jpeg",
"/students/22G31A0508.jpeg",
"/students/22G31A0545.jpeg",
"/students/22G31A0525.jpeg",
"/students/22G31A0557.jpeg",
"/students/22G31A0514.jpeg",
"/students/22G31A0515.jpeg",
];

/* ───────────── TRAIL CURSOR ───────────── */
function TrailCursor() {
  const [trails, setTrails] = useState([]);
  const idRef = useRef(0);
  const indexRef = useRef(0);
  const lastPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e) => {
      // Calculate distance moved since last image
      const distance = Math.hypot(
        e.clientX - lastPos.current.x,
        e.clientY - lastPos.current.y
      );

      // Only spawn an image if mouse moved more than 90 pixels
      // This is what prevents the "too fast" feeling
      if (distance > 90) {
        lastPos.current = { x: e.clientX, y: e.clientY };
        
        const newId = idRef.current++;
        const imgIndex = indexRef.current % TRAIL_IMAGES.length;
        indexRef.current++;

        const src = TRAIL_IMAGES[imgIndex];

        setTrails((prev) => [
          ...prev.slice(-15), // Reduced buffer for better performance
          {
            id: newId,
            x: e.clientX,
            y: e.clientY,
            src,
            rotate: (Math.random() - 0.5) * 40,
            scale: 0.6 + Math.random() * 0.4,
          },
        ]);

        setTimeout(() => {
          setTrails((prev) => prev.filter((t) => t.id !== newId));
        }, 1000);
      }
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <div style={{ pointerEvents: "none", position: "fixed", inset: 0, zIndex: 9000 }}>
      <AnimatePresence mode="popLayout">
        {trails.map((trail) => (
          <motion.div
            key={trail.id}
            initial={{ opacity: 0, scale: 0.5, rotate: trail.rotate - 10 }}
            animate={{ opacity: 1, scale: trail.scale, rotate: trail.rotate }}
            exit={{ opacity: 0, scale: 0.2, filter: "blur(10px)" }}
            transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
            style={{
              position: "fixed",
              left: trail.x - 60,
              top: trail.y - 80,
              width: 130,
              height: 160,
              borderRadius: 12,
              overflow: "hidden",
              border: "1px solid rgba(255,255,255,0.2)",
              boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
              willChange: "transform, opacity",
            }}
          >
            <img
              src={trail.src}
              alt=""
              style={{ width: "100%", height: "100%", objectFit: "contain" }}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}

/* ───────────── PAGE ───────────── */
export default function Journey() {
  const [typed, setTyped] = useState("");
  const message =
    "A batch that began as strangers turned into a family of dreamers, builders, and believers.";

  useEffect(() => {
    let i = 0;
    const iv = setInterval(() => {
      i++;
      setTyped(message.slice(0, i));
      if (i >= message.length) clearInterval(iv);
    }, 50); // Slightly slower typing for a smoother feel
    return () => clearInterval(iv);
  }, []);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    // Smoother ScrollTrigger setup
    gsap.utils.toArray(".journey-card").forEach((el, i) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "expo.out",
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
            toggleActions: "play none none none",
          },
        }
      );
    });
    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  useEffect(() => {
    document.title = "Journey | CSE | 2022-2026";
  }, []);

  return (
    <div style={{ position: "relative", cursor: "none", scrollBehavior: "smooth" }}>
      <TrailCursor />

      <section className="px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <h1 className="font-display uppercase text-4xl tracking-[0.2em]">
              Our Journey 🕰️
            </h1>
            <p className="mt-6 text-white/70 text-lg leading-relaxed">{typed}</p>
          </Reveal>

          <div className="mt-20 flex flex-col gap-10">
            {journeyTimeline.map((item) => (
              <div
                key={item.year}
                className="journey-card rounded-2xl border border-white/5 p-8 bg-white/[0.03] backdrop-blur-sm hover:bg-white/[0.06] transition-colors duration-500"
              >
                <span className="text-purple-400 font-mono text-sm tracking-widest">{item.year}</span>
                <h3 className="text-2xl mt-2 font-medium">{item.title}</h3>
                <p className="text-white/50 text-base mt-4 leading-relaxed max-w-2xl">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <Footer />
      </section>
    </div>
  );
}