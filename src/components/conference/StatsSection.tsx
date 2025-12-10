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
    <section className="relative py-16 md:py-20 bg-navy overflow-hidden">
      {/* subtle background details */}
      <div className="pointer-events-none absolute inset-0 opacity-20">
        <div className="absolute -top-24 -left-10 h-52 w-52 rounded-full bg-accent/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-56 w-56 rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute inset-0 opacity-40">
          <div className="h-full w-full bg-[linear-gradient(to_right,rgba(148,163,184,0.18)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.18)_1px,transparent_1px)] bg-[size:80px_80px]" />
        </div>
      </div>

      <div className="container-conference relative z-10" ref={ref}>
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-[11px] sm:text-xs uppercase tracking-[0.3em] text-white/60 mb-2">
            Highlights
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Conference at a <span className="text-accent">Glance</span>
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto text-sm sm:text-base">
            Join thousands of researchers, practitioners and innovators
            contributing to the next wave of{" "}
            <span className="font-semibold text-accent">
              sustainable development
            </span>
            .
          </p>
        </motion.div>

        {/* Stats grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="group relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 
                         backdrop-blur-md p-6 sm:p-7 text-center shadow-[0_18px_45px_rgba(15,23,42,0.55)] 
                         hover:border-accent/60 hover:bg-white/8 transition-all duration-200"
            >
              {/* subtle top border accent */}
              <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-transparent via-accent/70 to-transparent opacity-80" />

              {/* Icon */}
              <div className="w-14 h-14 mx-auto rounded-2xl bg-accent/10 flex items-center justify-center mb-4 
                              ring-1 ring-accent/30 group-hover:ring-accent/70 transition-all duration-200">
                <stat.icon className="w-7 h-7 text-accent" />
              </div>

              {/* Number */}
              <div className="text-4xl md:text-5xl font-bold text-white mb-1 leading-tight">
                <AnimatedCounter
                  value={stat.value}
                  suffix={stat.suffix}
                  inView={inView}
                />
              </div>

              {/* Label */}
              <p className="text-white/70 font-medium text-sm sm:text-base">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
