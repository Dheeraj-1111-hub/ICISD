// icisd-main/src/pages/PaperSubmission.tsx
import { Navbar } from "@/components/common/Navbar";
import { PageHero } from "@/components/common/PageHero";
import { SubmissionSection } from "@/components/conference/Paper Submission/SubmissionSection";

const PaperSubmission = () => {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <PageHero
        title="Paper Submission"
        subtitle="Guidelines and procedures for submitting manuscripts to ICISD’26"
      />
      <SubmissionSection />
    </main>
  );
};

export default PaperSubmission;
