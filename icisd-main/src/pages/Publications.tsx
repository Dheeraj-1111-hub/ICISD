// icisd-main/src/pages/CallForPapers.tsx
import { Navbar } from "@/components/common/Navbar";
import { PageHero } from "@/components/common/PageHero";
import { TracksSection } from "@/components/conference/Call for papers/TracksSection";
import { ImpDatesTimeline } from "@/components/conference/Call for papers/ImpDatesTimeline";
import { Footer } from "@/components/common/Footer";
import { motion } from "framer-motion";

const CallForPapers = () => {
  return (
    <main className="overflow-x-hidden">
      <Navbar />

      <PageHero
        title="Publications"
        subtitle="Advancing research visibility through quality publications at ICISD’26"
      />

      {/* Must INsert contentt */}
      <section className="py-16 md:py-20 bg-slate-50">
        <div className="container-conference max-w-4xl mx-auto">
            Will be updated soon...
        </div>
      </section>
      
      <Footer />
    </main>
  );
};

export default CallForPapers;
