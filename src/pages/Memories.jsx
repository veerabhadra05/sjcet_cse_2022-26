import Reveal from "../components/Reveal";
import Footer from "../components/Footer";
import { useEffect } from "react";


const media = [
  // 🔹 Images
  { type: "image", src: "/memories/1.jpeg" },
  { type: "image", src: "/memories/01.jpeg" },
  { type: "image", src: "/memories/2.jpeg" },
  { type: "image", src: "/memories/63.jpeg" },
  { type: "image", src: "/memories/3.jpeg" },
  { type: "image", src: "/memories/57.jpeg" },
  { type: "image", src: "/memories/4.jpeg" },
  { type: "image", src: "/memories/5.jpeg" },
  { type: "image", src: "/memories/6.jpeg" },
  { type: "image", src: "/memories/7.jpeg" },
  { type: "image", src: "/memories/53.jpeg" },
  { type: "image", src: "/memories/8.jpeg" },
  { type: "image", src: "/memories/9.jpeg" },
  { type: "image", src: "/memories/10.jpeg" },
  { type: "image", src: "/memories/11.jpeg" },
  { type: "image", src: "/memories/52.jpeg" },
  { type: "image", src: "/memories/12.jpeg" },
  { type: "image", src: "/memories/13.jpeg" },
  { type: "image", src: "/memories/14.jpeg" },
  { type: "video", src: "/memories/video2.mp4" },
  { type: "image", src: "/memories/15.jpeg" },
  { type: "image", src: "/memories/16.jpeg" },
  { type: "video", src: "/memories/video14.mp4" },
  { type: "image", src: "/memories/17.jpeg" },
  { type: "video", src: "/memories/video11.mp4" },
  { type: "image", src: "/memories/18.jpeg" },
  { type: "image", src: "/memories/19.jpeg" },
  { type: "image", src: "/memories/64.jpeg" },
  { type: "image", src: "/memories/65.jpeg" },
  { type: "image", src: "/memories/20.jpeg" },
  { type: "image", src: "/memories/22.jpeg" },
  { type: "image", src: "/memories/23.jpeg" },
  { type: "video", src: "/memories/video15.mp4" },
  { type: "image", src: "/memories/24.jpeg" },
  { type: "image", src: "/memories/25.jpeg" },
  { type: "image", src: "/memories/61.jpeg" },
  { type: "image", src: "/memories/gprec.jpeg" },
  { type: "image", src: "/memories/59.jpeg" },
  { type: "video", src: "/memories/video10.mp4" },
  { type: "image", src: "/memories/66.jpeg" },
  { type: "image", src: "/memories/26.jpeg" },
  { type: "video", src: "/memories/video5.mp4" },
  { type: "image", src: "/memories/27.jpeg" },
  { type: "image", src: "/memories/28.jpeg" },
  { type: "image", src: "/memories/rgm.jpeg" },
  { type: "video", src: "/memories/video12.mp4" },
  { type: "image", src: "/memories/62.jpeg" },
  { type: "video", src: "/memories/video13.mp4" },
  { type: "image", src: "/memories/29.jpeg" },
  { type: "video", src: "/memories/video6.mp4" },
  { type: "image", src: "/memories/30.jpeg" },
  { type: "image", src: "/memories/31.jpeg" },
  { type: "image", src: "/memories/32.jpeg" },
  { type: "video", src: "/memories/video3.mp4" },
  { type: "image", src: "/memories/33.jpeg" },
  { type: "image", src: "/memories/34.jpeg" },
  { type: "image", src: "/memories/67.jpeg" },
  { type: "image", src: "/memories/35.jpeg" },
  { type: "image", src: "/memories/71.jpeg" },
  { type: "video", src: "/memories/video8.mp4" },
  { type: "image", src: "/memories/73.jpeg" },
  { type: "image", src: "/memories/36.jpeg" },
  { type: "image", src: "/memories/37.jpeg" },
  { type: "image", src: "/memories/38.jpeg" },
  { type: "video", src: "/memories/video4.mp4" },
  { type: "image", src: "/memories/39.jpeg" },
  { type: "image", src: "/memories/40.jpeg" },
  { type: "image", src: "/memories/41.jpeg" },
  { type: "image", src: "/memories/72.jpeg" },
  { type: "video", src: "/memories/video1.mp4" },
  { type: "image", src: "/memories/42.jpeg" },
  { type: "image", src: "/memories/44.jpeg" },
  { type: "video", src: "/memories/video9.mp4" },
  { type: "image", src: "/memories/45.jpeg" },
  { type: "video", src: "/memories/video7.mp4" },
  { type: "image", src: "/memories/46.jpeg" },
  { type: "image", src: "/memories/47.jpeg" },
  { type: "image", src: "/memories/50.jpeg" },
  { type: "image", src: "/memories/54.jpeg" },
  { type: "image", src: "/memories/74.jpeg" },
  { type: "image", src: "/memories/55.jpeg" },
  { type: "image", src: "/memories/56.jpeg" },
  { type: "video", src: "/memories/video16.mp4" },
  { type: "image", src: "/memories/60.jpeg" },
  { type: "image", src: "/memories/68.jpeg" },
  { type: "image", src: "/memories/69.jpeg" },
  { type: "image", src: "/memories/70.jpeg" },
  { type: "image", src: "/memories/80.jpeg" },
  { type: "image", src: "/memories/88.jpeg" },
  { type: "image", src: "/memories/75.jpeg" },
  { type: "video", src: "/memories/video17.mp4" },

  { type: "image", src: "/memories/100.jpeg" },
];
console.log(media.length)

export default function Memories() {

  // Page title
  useEffect(() => {
    document.title = "Memories | End of an Era";
  }, []);

  return (
    <section className="min-h-screen px-6 py-24">
      <div className="max-w-6xl mx-auto">
        
        <Reveal>
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-display uppercase tracking-widest">
              Memories
            </h1>
            <p className="mt-4 text-white/60 italic">
              Moments we lived, memories we carry forever.
            </p>
          </div>
        </Reveal>

        {/* 🔥 Gallery */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {media.map((item, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-xl group"
            >
              {/* IMAGE */}
              {item.type === "image" ? (
                <img
                  src={item.src}
                  alt="memory"
                  className="w-full h-[250px] object-contain group-hover:scale-105 transition duration-300"
                />
              ) : (
                <>
                  {/* VIDEO */}
                  <video
                    src={item.src}
                    className="w-full h-[250px] object-contain"
                    muted
                    loop
                    autoPlay
                    controls
                  />

                  {/* ▶ Overlay icon */}
                  {/* <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <span className="text-white text-3xl bg-black/50 rounded-full px-3 py-1">
                      ▶
                    </span>
                  </div> */}
                </>
              )}
            </div>
          ))}
        </div>

      </div>

      <Footer />
    </section>
  );
}