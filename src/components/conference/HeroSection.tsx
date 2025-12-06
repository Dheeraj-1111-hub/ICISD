import { motion } from "framer-motion";
import { Calendar, MapPin, ArrowRight, FileText } from "lucide-react";

export const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center bg-navy">
      {/* Content */}
      <div className="container-conference relative z-10 text-center py-20 pt-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-white/10 border border-white/20 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-accent" />
          <span className="text-white/90 text-sm font-medium">
            Early Bird Registration Open
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6"
        >
          ICISD <span className="text-accent">2025</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl sm:text-2xl md:text-3xl text-white/90 font-serif max-w-4xl mx-auto mb-8 leading-relaxed"
        >
          International Conference on{" "}
          <span className="text-accent font-semibold">Innovations</span> in{" "}
          <span className="text-accent font-semibold">Sustainable Development</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 text-white/80 mb-12"
        >
          <div className="flex items-center gap-2">
            <Calendar className="w-5 h-5 text-accent" />
            <span className="font-medium">March 15-17, 2025</span>
          </div>
          <div className="hidden sm:block w-1.5 h-1.5 rounded-full bg-accent" />
          <div className="flex items-center gap-2">
            <MapPin className="w-5 h-5 text-accent" />
            <span className="font-medium">Hybrid Event • Global Access</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a href="#registration" className="btn-accent flex items-center gap-2">
            Register Now
            <ArrowRight className="w-5 h-5" />
          </a>
          <a href="#submission" className="btn-outline flex items-center gap-2">
            <FileText className="w-5 h-5" />
            Submit Paper
          </a>
        </motion.div>
      </div>
    </section>
  );
};