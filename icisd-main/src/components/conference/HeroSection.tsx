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
      openSignIn({
        redirectUrl: "/register",
      });
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
    // 🔹 Set your conference start date & time here
    const targetDate = new Date("2026-02-15T00:00:00"); // local time

    const updateTime = () => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance <= 0) {
        // Conference started or over
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

      const pad = (n) => String(n).padStart(2, "0");

      setTimeLeft({
        days: pad(days),
        hours: pad(hours),
        minutes: pad(minutes),
        seconds: pad(seconds),
      });
    };

    updateTime(); // run once immediately
    const timer = setInterval(updateTime, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-navy overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      />

      {/* Dark overlay so text is readable */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/85" />

      {/* Content */}
      <div className="container-conference relative z-10 text-center py-20 pt-32">
        {/* Small badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-white/10 border border-white/20 mb-4 backdrop-blur-sm"
        >
          <span className="w-2 h-2 rounded-full bg-accent" />
          <span className="text-white/90 text-sm font-medium">
            Early Bird Registration Open
          </span>
        </motion.div>

        {/* University / campus line */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="text-xs sm:text-sm tracking-[0.18em] uppercase text-white/70 mb-3 drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)]"
        >
          SRM Institute of Science & Technology, Vadapalani Campus
        </motion.p>

        {/* Main title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 drop-shadow-[0_3px_10px_rgba(0,0,0,0.9)]"
        >
          ICISD <span className="text-accent">2026</span>
        </motion.h1>

        {/* Full form */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-base sm:text-lg md:text-xl text-white/80 mb-6 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]"
        >
          International Conference on{" "}
          <span className="text-accent font-semibold">Innovations</span> in{" "}
          <span className="text-accent font-semibold">
            Sustainable Development
          </span>
        </motion.p>

        {/* Organised by */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.18 }}
          className="text-xs sm:text-sm text-white/75 mb-8 max-w-2xl mx-auto drop-shadow-[0_1px_6px_rgba(0,0,0,0.9)]"
        >
          Organised by the{" "}
          <span className="font-medium">
            Department of Computer Science and Engineering
          </span>
          , SRM IST, Vadapalani.
        </motion.p>

        {/* Date & location */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 text-white/80 mb-6 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]"
        >
          <div className="flex items-center gap-2">
            <Calendar className="w-5 h-5 text-accent" />
            <span className="font-medium">15 – 17 February 2026</span>
          </div>
          <div className="hidden sm:block w-1.5 h-1.5 rounded-full bg-accent" />
          <div className="flex items-center gap-2">
            <MapPin className="w-5 h-5 text-accent" />
            <span className="font-medium">
              SRM IST, Vadapalani · Hybrid Mode
            </span>
          </div>
        </motion.div>

        {/* Countdown title + timer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.28 }}
          className="mb-10 flex flex-col items-center gap-3"
        >
          <p className="text-[11px] sm:text-xs uppercase tracking-[0.22em] text-white/70">
            Conference begins in
          </p>

          <div className="inline-flex items-center gap-3 sm:gap-4 rounded-2xl bg-black/45 border border-white/15 px-4 sm:px-6 py-3 sm:py-4 backdrop-blur-md">
            {[
              { label: "Days", value: timeLeft.days },
              { label: "Hours", value: timeLeft.hours },
              { label: "Minutes", value: timeLeft.minutes },
              { label: "Seconds", value: timeLeft.seconds },
            ].map((unit, idx) => (
              <div key={unit.label} className="flex items-center gap-2">
                <div className="flex flex-col items-center justify-center min-w-[3.5rem] sm:min-w-[4rem]">
                  <span className="text-2xl sm:text-3xl font-semibold text-accent leading-none">
                    {unit.value}
                  </span>
                  <span className="mt-1 text-[10px] sm:text-[11px] uppercase tracking-[0.16em] text-white/70">
                    {unit.label}
                  </span>
                </div>
                {idx !== 3 && (
                  <span className="text-accent/70 text-xl sm:text-2xl font-semibold -mt-1">
                    :
                  </span>
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA → only one button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex items-center justify-center"
        >
          <button
            onClick={handleApplyNow}
            className="btn-accent flex items-center gap-2 px-8 py-3 text-lg font-semibold"
          >
            Apply Now
            <ArrowRight className="w-5 h-5" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};
