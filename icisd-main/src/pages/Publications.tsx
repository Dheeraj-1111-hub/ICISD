// icisd-main/src/pages/CallForPapers.tsx

import { Navbar } from "@/components/common/Navbar";
import { PageHero } from "@/components/common/PageHero";
import { Footer } from "@/components/common/Footer";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowRight, BookOpen, CheckCircle2 } from "lucide-react";

const CallForPapers = () => {
  const navigate = useNavigate();

  return (
    <main className="overflow-x-hidden">
      <Navbar />

      <PageHero
        title="Publication"
        subtitle="Advancing research visibility through quality publications at ICISD’26"
      />

      <section className="pb-20 relative">
        <div className="container mx-auto px-4 mt-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="max-w-5xl mx-auto bg-white rounded-3xl shadow-2xl shadow-slate-200/50 overflow-hidden border border-slate-100 grid md:grid-cols-5"
          >
            {/* Image Section (2/5 width) */}
            <div className="md:col-span-2 relative bg-gradient-to-br from-slate-50 to-slate-100 p-8 flex items-center justify-center min-h-[250px] md:min-h-full border-b md:border-b-0 md:border-r border-slate-100">
              {/* Decorative background circle */}
              <div className="absolute w-40 h-40 bg-white rounded-full shadow-sm opacity-50 blur-xl" />

              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="relative z-10 w-full h-full flex items-center justify-center"
              >
                {/* Changed object-cover to object-contain so the logo isn't cut off */}
                <img
                  src="/brill.png"
                  alt="De Gruyter Brill Logo"
                  className="max-w-[80%] max-h-[160px] object-contain drop-shadow-sm"
                />
              </motion.div>
            </div>

            {/* Content Section (3/5 width) */}
            <div className="md:col-span-3 p-8 md:p-10 flex flex-col justify-center">
              {/* Eyebrow Label */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="flex items-center gap-2 text-blue-600 font-semibold text-sm uppercase tracking-wider mb-3"
              >
                <BookOpen className="w-4 h-4" />
                <span>Publication Partner</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="text-3xl md:text-4xl font-bold text-slate-900 mb-4"
              >
                WILEY
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="text-slate-600 text-lg leading-relaxed mb-6"
              >
                All registered and accepted papers will be considered for
                publication in the upcoming Conference Book Proceedings.
              </motion.p>

              {/* Scopus Badge Area */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex flex-wrap items-center gap-4 mb-8"
              >
                <div className="flex items-center gap-2 px-4 py-2 bg-emerald-50 border border-emerald-100 rounded-lg">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                  <span className="font-semibold text-emerald-800 text-sm">
                    Scopus Indexed
                  </span>
                </div>
                <span className="text-slate-400 text-sm">
                  High-impact publication opportunity
                </span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <button
                  onClick={() => navigate("/call-for-papers")}
                  className="group relative inline-flex items-center gap-2 px-8 py-3.5 bg-blue-600 text-white rounded-xl font-semibold shadow-lg shadow-blue-600/20 hover:bg-blue-700 hover:shadow-blue-600/30 hover:-translate-y-0.5 transition-all duration-300"
                >
                  <span>Submit Paper</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default CallForPapers;
