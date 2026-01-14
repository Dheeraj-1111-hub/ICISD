// icisd-main/src/pages/CallForPapers.tsx
import { Navbar } from "@/components/common/Navbar";
import { PageHero } from "@/components/common/PageHero";
import { TracksSection } from "@/components/conference/Call for papers/TracksSection";
import { ImpDatesTimeline } from "@/components/conference/Call for papers/ImpDatesTimeline";
import { Footer } from "@/components/common/Footer";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const CallForPapers = () => {
const navigate = useNavigate();

  return (
    <main className="overflow-x-hidden">
      <Navbar />

      <PageHero
        title="Publications"
        subtitle="Advancing research visibility through quality publications at ICISD’26"
      />

      {/* Must INsert contentt */}
<<<<<<< HEAD
      <section className="py-16 md:py-20 bg-slate-50">
        <div className="container-conference max-w-4xl mx-auto">
            Will be updated soon...
=======
      <section className="py-10 bg-slate-50">
        <div className="max-h-50 -mt-25 bg-gray-100 flex justify-center p-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-4xl bg-white rounded-2xl shadow-lg grid grid-cols-1 md:grid-cols-2 overflow-hidden"
          >
            {/* Image Section */}
            <motion.div
              initial={{ scale: 1.1, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="h-64 md:h-80 flex justify-center items-center overflow-hidden"
            >
              <img
                src="/brill.png"
                alt="Team working together"
                className="h-full object-cover py-3"
              />
            </motion.div>

            {/* Text Section */}
            <div className="p-8 flex flex-col justify-center">
              <motion.h1
                initial={{ x: 30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="text-3xl font-bold text-gray-800 mb-4"
              >
                Degruter's Brill
              </motion.h1>

              <motion.p
                initial={{ x: 30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.35, duration: 0.5 }}
                className="text-gray-600 mb-6 leading-relaxed"
              >
                All the accepted papers will be conference book chapter
                proceedings ( Scopus Indexed )
              </motion.p>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={()=>navigate("/call-for-papers")}
                className="self-start px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
              >
                Submit Paper
              </motion.button>
            </div>
          </motion.div>
>>>>>>> 4ca51edc22540d275dab3ac3bc635e3f01aa84c7
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default CallForPapers;
