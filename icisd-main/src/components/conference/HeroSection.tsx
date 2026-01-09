import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, ArrowRight } from "lucide-react";
import { useUser, useClerk } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";

export const HeroSection = () => {
  const { isSignedIn } = useUser();
  const { openSignIn } = useClerk();
  const navigate = useNavigate();

  // 🚫 Disabled for now (kept for future use)
  /*
  const handleApplyNow = () => {
    if (!isSignedIn) {
      openSignIn({ redirectUrl: "/register" });
    } else {
      navigate("/register");
    }
  };
  */

  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const targetDate = new Date("2026-04-06T00:00:00");

    const pad = (n) => String(n).padStart(2, "0");

    const updateTime = () => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      // ✅ MATCHES SECOND CODE BEHAVIOR
      if (distance <= 0) return;

      setTimeLeft({
        days: pad(Math.floor(distance / (1000 * 60 * 60 * 24))),
        hours: pad(
          Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        ),
        minutes: pad(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))),
        seconds: pad(Math.floor((distance % (1000 * 60)) / 1000)),
      });
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950" />

      {/* Abstract Glow */}
      <div className="absolute inset-0">
        <div className="absolute -top-32 -left-32 w-[400px] sm:w-[500px] h-[400px] sm:h-[500px] bg-emerald-500/10 rounded-full blur-[120px]" />
        <div className="absolute top-1/3 -right-40 w-[450px] sm:w-[600px] h-[450px] sm:h-[600px] bg-emerald-400/10 rounded-full blur-[140px]" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] bg-[size:80px_80px]" />

      {/* Content */}
      <div className="container-conference relative z-10 text-center py-16 sm:py-20 pt-28 sm:pt-32 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-white/10 border border-white/20 mb-4 backdrop-blur-sm"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-500" />
          <span className="text-white/90 text-xs sm:text-sm font-medium">
            International Conference · ICISD’26
          </span>
        </motion.div>

        {/* Location */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="text-[10px] sm:text-sm tracking-[0.18em] uppercase text-white/70 mb-3"
        >
          SRM Institute of Science and Technology · Vadapalani Campus · Chennai
        </motion.p>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 leading-tight"
        >
          ICISD <span className="text-emerald-500">2026</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-sm sm:text-base md:text-lg lg:text-xl text-white/85 mb-6 max-w-4xl mx-auto"
        >
          International Conference on{" "}
          <span className="text-emerald-400 font-semibold">
            Intelligent Systems
          </span>{" "}
          and{" "}
          <span className="text-emerald-400 font-semibold">
            Digital Transformation
          </span>
        </motion.p>

        {/* Organiser + Association */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.18 }}
          className="mb-8 max-w-4xl mx-auto"
        >
          <p className="text-xs sm:text-sm md:text-base text-white/80 leading-relaxed">
            Organised by the{" "}
            <span className="text-emerald-400 font-semibold">
              Department of Computer Science & Engineering
            </span>
          </p>

          <div className="mt-4 flex flex-col items-center gap-2">
            <span className="text-[11px] uppercase tracking-widest text-white/60">
              In association with
            </span>

            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj9YZ_1n0St46De5p7ozlk9JjCd4NlfAju7Q&s"
              alt="Cardiff Metropolitan University"
              className="h-10 sm:h-12 object-contain"
            />
          </div>
        </motion.div>

        {/* Date & Mode */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 text-white/80 mb-6"
        >
          <div className="flex items-center gap-2">
            <Calendar className="w-5 h-5 text-emerald-400" />
            <span className="font-medium">6th – 7th April 2026</span>
          </div>

          <div className="hidden sm:block w-1.5 h-1.5 rounded-full bg-emerald-400" />

          <div className="flex items-center gap-2">
            <MapPin className="w-5 h-5 text-emerald-400" />
            <span className="font-medium">Vadapalani Campus · Hybrid Mode</span>
          </div>
        </motion.div>

        {/* Countdown */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.28 }}
          className="mb-10 flex justify-center"
        >
          <div className="flex gap-4 rounded-2xl bg-black/45 border border-white/15 px-6 py-4 backdrop-blur-md">
            {Object.entries(timeLeft).map(([key, value], idx) => (
              <div key={key} className="flex items-center gap-3">
                <div className="text-center min-w-[3.5rem]">
                  <span className="text-3xl font-semibold text-emerald-400">
                    {value}
                  </span>
                  <div className="text-xs uppercase tracking-widest text-white/70">
                    {key}
                  </div>
                </div>
                {idx < 3 && (
                  <span className="text-emerald-400/70 text-2xl">:</span>
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex justify-center"
        >
          <button
            onClick={() =>
              document
                .getElementById("registration")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="flex items-center gap-2 px-6 sm:px-8 py-3 text-base sm:text-lg font-semibold rounded-md bg-emerald-600 text-white hover:bg-emerald-500 transition"
          >
            Apply Now
            <ArrowRight className="w-5 h-5" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};