import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, ArrowRight } from "lucide-react";
import heroImage from "../../../public/hero.jpg";
import { useUser, useClerk } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";

export const HeroSection = () => {
  const { isSignedIn } = useUser();
  const { openSignIn } = useClerk();
  const navigate = useNavigate();

  const handleApplyNow = () => {
    if (!isSignedIn) {
      openSignIn({ redirectUrl: "/register" });
    } else {
      navigate("/register");
    }
  };

  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const targetDate = new Date("2026-04-06T00:00:00");

    const updateTime = () => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance <= 0) {
        setTimeLeft({
          days: "00",
          hours: "00",
          minutes: "00",
          seconds: "00",
        });
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      const pad = (n: number) => String(n).padStart(2, "0");

      setTimeLeft({
        days: pad(days),
        hours: pad(hours),
        minutes: pad(minutes),
        seconds: pad(seconds),
      });
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-slate-900 overflow-hidden"
    >
{/* Background Gradient */}
<div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950" />

{/* Subtle Abstract Glow */}
<div className="absolute inset-0">
  <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px]" />
  <div className="absolute top-1/3 -right-40 w-[600px] h-[600px] bg-emerald-400/10 rounded-full blur-[140px]" />
</div>

{/* Subtle Grid Pattern */}
<div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] bg-[size:80px_80px]" />


      <div className="container-conference relative z-10 text-center py-20 pt-32">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-white/10 border border-white/20 mb-4 backdrop-blur-sm"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-500" />
          <span className="text-white/90 text-sm font-medium">
            International Conference · ICISD’26
          </span>
        </motion.div>

        {/* Location */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="text-xs sm:text-sm tracking-[0.18em] uppercase text-white/70 mb-3"
        >
          SRM Institute of Science and Technology · Vadapalani Campus · Chennai
        </motion.p>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4"
        >
          ICISD{" "}
          <span className="text-emerald-500">2026</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-base sm:text-lg md:text-xl text-white/85 mb-6"
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

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.18 }}
          className="text-xs sm:text-sm text-white/75 mb-8 max-w-3xl mx-auto"
        >
          Organised by the{" "}
          <span className="font-medium">
            Department of Computer Science & Engineering
          </span>
          , Faculty of Engineering and Technology, SRM IST, in association with{" "}
          <span className="font-medium">
            Cardiff Metropolitan University
          </span>
          .
        </motion.p>

        {/* Date & Mode */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 text-white/80 mb-6"
        >
          <div className="flex items-center gap-2">
            <Calendar className="w-5 h-5 text-emerald-400" />
            <span className="font-medium">6th – 7th April 2026</span>
          </div>

          <div className="hidden sm:block w-1.5 h-1.5 rounded-full bg-emerald-400" />

          <div className="flex items-center gap-2">
            <MapPin className="w-5 h-5 text-emerald-400" />
            <span className="font-medium">
              Vadapalani Campus · Hybrid Mode
            </span>
          </div>
        </motion.div>

        {/* Countdown */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.28 }}
          className="mb-10 flex flex-col items-center gap-3"
        >
          <p className="text-[11px] sm:text-xs uppercase tracking-[0.22em] text-white/70">
            Conference begins in
          </p>

          <div className="inline-flex items-center gap-4 rounded-2xl bg-black/45 border border-white/15 px-6 py-4 backdrop-blur-md">
            {[
              { label: "Days", value: timeLeft.days },
              { label: "Hours", value: timeLeft.hours },
              { label: "Minutes", value: timeLeft.minutes },
              { label: "Seconds", value: timeLeft.seconds },
            ].map((unit, idx) => (
              <div key={unit.label} className="flex items-center gap-3">
                <div className="flex flex-col items-center min-w-[4rem]">
                  <span className="text-3xl font-semibold text-emerald-400">
                    {unit.value}
                  </span>
                  <span className="mt-1 text-[11px] uppercase tracking-[0.16em] text-white/70">
                    {unit.label}
                  </span>
                </div>
                {idx !== 3 && (
                  <span className="text-emerald-400/70 text-2xl font-semibold">
                    :
                  </span>
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
    // onClick={handleApplyNow} // 🚫 Disabled for now
    onClick={() => {
      const section = document.getElementById("registration");
      section?.scrollIntoView({ behavior: "smooth", block: "start" });
    }}
    className="
      flex items-center gap-2
      px-8 py-3
      text-lg font-semibold
      rounded-md
      bg-emerald-600
      text-white
      hover:bg-emerald-500
      transition-colors
      focus:outline-none focus:ring-2 focus:ring-emerald-400
    "
  >
    Apply Now
    <ArrowRight className="w-5 h-5" />
  </button>
</motion.div>



      </div>
    </section>
  );
};
