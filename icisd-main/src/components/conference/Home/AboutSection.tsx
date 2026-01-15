import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Users, Cpu } from "lucide-react";
import { useState } from "react";

export const AboutSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [pos, setPos] = useState({ x: 50, y: 50 });
  const [showMagnifier, setShowMagnifier] = useState(false);
  const [locked, setLocked] = useState(false);

  const clamp = (value, min, max) =>
    Math.min(Math.max(value, min), max);

  const handleMouseMove = (e) => {
    if (locked) return;

    const rect = e.currentTarget.getBoundingClientRect();
    let x = ((e.clientX - rect.left) / rect.width) * 100;
    let y = ((e.clientY - rect.top) / rect.height) * 100;

    // Allow full edge movement
    x = clamp(x, 0, 100);
    y = clamp(y, 0, 100);

    setPos({ x, y });
  };

  const toggleLock = () => setLocked((prev) => !prev);

  // Zoom level (must match backgroundSize)
  const zoom = 3;

  return (
    <section id="about" className="py-16 md:py-20 bg-slate-50">
      <div className="container-conference" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="relative z-10"
          >
            <span className="inline-block px-3 py-1 rounded-md bg-emerald-50 text-emerald-600 text-sm font-semibold mb-4">
              About the Conference
            </span>

            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
              Intelligent Systems &{" "}
              <span className="text-emerald-600">
                Digital Transformation
              </span>
            </h2>

            <p className="text-slate-600 leading-relaxed mb-4 text-sm sm:text-base">
              The International Conference on Intelligent Systems and Digital
              Transformation (ICISD’26) provides a premier global forum for
              researchers, academicians, and industry experts to present and
              exchange innovative ideas shaping intelligent and digitally
              enabled systems.
            </p>

            <p className="text-slate-600 leading-relaxed mb-6 text-sm sm:text-base">
              ICISD’26 focuses on cutting-edge advancements in Artificial
              Intelligence, Data Analytics, Automation, Internet of Things,
              Cloud Computing, Cybersecurity, and emerging digital technologies
              that are transforming industries and society.
            </p>

            <div className="flex flex-wrap items-center gap-6">
              <div className="flex items-center gap-2 text-emerald-600">
                <Cpu className="w-5 h-5" />
                <span className="font-semibold text-sm">
                  Interdisciplinary Research
                </span>
              </div>

              <div className="flex items-center gap-2 text-emerald-600">
                <Users className="w-5 h-5" />
                <span className="font-semibold text-sm">
                  Academia–Industry Interaction
                </span>
              </div>
            </div>
          </motion.div>

          {/* RIGHT IMAGE WITH MAGNIFIER */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="flex justify-center lg:justify-end"
          >
            <div
              className="relative w-full max-w-xs sm:max-w-sm aspect-[283/400] rounded-lg border shadow-lg overflow-hidden cursor-zoom-in"
              onMouseEnter={() => setShowMagnifier(true)}
              onMouseLeave={() => {
                if (!locked) setShowMagnifier(false);
              }}
              onMouseMove={handleMouseMove}
              onClick={toggleLock}
            >
              <img
                src="/main_poster.jpg"
                alt="ICISD 2026 Poster"
                className="w-full h-full object-contain"
              />

              <span className="absolute top-2 right-2 text-[10px] px-2 py-1 bg-black/70 text-white rounded z-20">
                {locked ? "Click to unlock" : "Hover / Click to zoom"}
              </span>

              {(showMagnifier || locked) && (
                <div
                  className="absolute pointer-events-none rounded-full border-2 border-white shadow-2xl z-30"
                  style={{
                    width: "160px",
                    height: "160px",
                    top: `calc(${pos.y}% - 80px)`,
                    left: `calc(${pos.x}% - 80px)`,
                    backgroundImage: "url('/main_poster.jpg')",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: `${zoom * 100}%`,
                    backgroundPosition: `${pos.x * zoom - 50}% ${pos.y * zoom - 50}%`,
                    transition: "background-position 0.05s linear",
                  }}
                />
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
