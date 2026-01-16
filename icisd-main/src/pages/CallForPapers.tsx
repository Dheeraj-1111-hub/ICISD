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
      <TracksSection />
       <SubmissionSection />
      {/* <ImpDatesTimeline /> */}
      <Footer />
    </main>
  );
};

export default CallForPapers;
