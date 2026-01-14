// icisd-main/src/pages/CallForPapers.tsx
import { Navbar } from "@/components/common/Navbar";
import { PageHero } from "@/components/common/PageHero";
import { TracksSection } from "@/components/conference/Call for papers/TracksSection";
import { ImpDatesTimeline } from "@/components/conference/Call for papers/ImpDatesTimeline";
import { Footer } from "@/components/common/Footer";
import { motion } from "framer-motion";
import { SubmissionSection } from "@/components/conference/Paper Submission/SubmissionSection";

const CallForPapers = () => {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <PageHero
        title="Call for Papers"
        subtitle="Inviting original research contributions to ICISD’26"
      />
      <section className="py-16 md:py-20 bg-slate-50">
        <div className="container-conference max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <span className="inline-block px-3 py-1 rounded-md bg-emerald-50 text-emerald-600 text-sm font-semibold mb-4">
              ICISD’26
            </span>

            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              Call for Original Research Papers
            </h2>

            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
              The International Conference on Intelligent Systems and Digital
              Transformation (ICISD’26) invites researchers, academicians,
              industry professionals, and practitioners to submit original,
              unpublished research papers. Submissions should present novel
              ideas, methodologies, and applications aligned with the conference
              themes.
            </p>
          </motion.div>
        </div>
      </section>
      <TracksSection />
       <SubmissionSection />
      <ImpDatesTimeline />
      <Footer />
    </main>
  );
};

export default CallForPapers;
