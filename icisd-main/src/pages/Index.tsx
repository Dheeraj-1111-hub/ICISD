// icisd-main/src/pages/Index.tsx
import { Navbar } from "@/components/common/Navbar";
import { HeroSection } from "@/components/conference/Home/HeroSection";
import { AboutSection } from "@/components/conference/Home/AboutSection";
import { TracksSection } from "@/components/conference/Call for papers/TracksSection";
import { StatsSection } from "@/components/conference/Home/StatsSection";
import { SubmissionSection } from "@/components/conference/Paper Submission/SubmissionSection";
import { ScheduleSection } from "@/components/conference/Home/ScheduleSection";
import { RegistrationSection } from "@/components/conference/Registration/RegistrationSection";
import { PatronsSection } from "@/components/conference/Committee/PatronsSection";
import { ConferenceChairsSection } from "@/components/conference/Committee/ConferenceChairsSection";
import { CollaboratorsSection } from "@/components/conference/Home/CollaboratorsSection";
import { Footer } from "@/components/common/Footer";
import { ImpDatesTimeline } from "@/components/conference/Call for papers/ImpDatesTimeline";
import Contact from "@/components/conference/Contact/Contact";
import { GallerySection } from "@/components/conference/Home/GallerySection";
import  Genesis  from "@/components/conference/Home/Genesis";

const Index = () => {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <Genesis />
      <TracksSection />
      <StatsSection />
      <ScheduleSection />
      <RegistrationSection />
      <GallerySection />
      <CollaboratorsSection />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
