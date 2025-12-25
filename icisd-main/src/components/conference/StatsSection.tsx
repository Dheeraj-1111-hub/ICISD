import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Users, Mic2, Layers, BookOpen } from "lucide-react";

const stats = [
  { icon: Mic2, value: 50, suffix: "+", label: "Expert Speakers" },
  { icon: Users, value: 2500, suffix: "+", label: "Expected Participants" },
  { icon: Layers, value: 10, suffix: "", label: "Research Tracks" },
  { icon: BookOpen, value: 25, suffix: "+", label: "Workshops & Sessions" },
];

const AnimatedCounter = ({
  value,
  suffix,
  inView,
}: {
  value: number;
  suffix: string;
  inView: boolean;
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;

    const duration = 1500;
    const steps = 40;
    const increment = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [value, inView]);

  return (
    <span className="tabular-nums">
      {count.toLocaleString()}
      {suffix}
    </span>
  );
};

export const StatsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <section className="py-16 md:py-20 bg-navy">
      <div className="container-conference" ref={ref}>
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-[11px] sm:text-xs uppercase tracking-[0.25em] text-white/60 mb-2">
            Highlights
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Conference at a <span className="text-accent">Glance</span>
          </h2>
          <p className="text-white/75 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Discover the scale and impact of ICISD 2026 as we bring together
            global experts, researchers and practitioners in{" "}
            <span className="font-semibold text-accent">
              sustainable development
            </span>
            .
          </p>
        </motion.div>

        {/* Stats grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="flex flex-col items-center text-center rounded-xl bg-white/[0.06] border border-white/15 
                         p-6 sm:p-7 shadow-[0_12px_30px_rgba(15,23,42,0.5)] 
                         hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(15,23,42,0.7)] 
                         hover:border-accent/60 transition-all duration-200"
            >
              {/* Icon */}
              <div className="mb-4 flex items-center justify-center w-12 h-12 rounded-full bg-accent/15">
                <stat.icon className="w-6 h-6 text-accent" />
              </div>

              {/* Number */}
              <div className="text-3xl md:text-4xl font-bold text-white mb-1 leading-tight">
                <AnimatedCounter
                  value={stat.value}
                  suffix={stat.suffix}
                  inView={inView}
                />
              </div>

              {/* Divider line */}
              <div className="w-10 h-px bg-white/20 my-2" />

              {/* Label */}
              <p className="text-white/75 font-medium text-sm sm:text-base">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
