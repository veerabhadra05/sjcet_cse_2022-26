import Reveal from "../components/Reveal.jsx";
import Footer from "../components/Footer.jsx";
import { useEffect } from "react";

const MAP_LINK =
  "https://maps.app.goo.gl/G5Q7UGZgfKesYv8s9"
export default function MapPage() {
  useEffect(() => {
      document.title = "SJCET | LOCATION";
    }, []);
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        
        <Reveal>
          <h1 className="text-4xl font-display uppercase tracking-[0.2em]">
            Our Place 📍
          </h1>
          <p className="mt-4 text-white/70">
            Tap to explore our college location.
          </p>
        </Reveal>

        {/* 🔥 MAP CARD */}
        <div className="mt-10">
          <a
            href={MAP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="group block overflow-hidden rounded-3xl border border-white/10"
          >
            <div className="relative h-[400px] w-full">
              
              {/* Static Map Image */}
              <img
                src="gallery/college.png"
                alt="College Location"
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition" />

              {/* Text */}
              <div className="absolute bottom-4 left-4">
                <p className="text-lg font-semibold">
                 St.Johns College of Engineering & Technology 🏫
                </p>
                <p className="text-sm text-white/70">
                  Click to open in Google Maps
                </p>
              </div>

            </div>
          </a>
        </div>

      </div>

      <Footer />
    </section>
  );
}