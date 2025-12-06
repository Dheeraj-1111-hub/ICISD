import { Navbar } from "@/components/conference/Navbar";
import { HeroSection } from "@/components/conference/HeroSection";
import { AboutSection } from "@/components/conference/AboutSection";
import { TracksSection } from "@/components/conference/TracksSection";
import { StatsSection } from "@/components/conference/StatsSection";
import { SubmissionSection } from "@/components/conference/SubmissionSection";
import { ScheduleSection } from "@/components/conference/ScheduleSection";
import { RegistrationSection } from "@/components/conference/RegistrationSection";
import { PatronsSection } from "@/components/conference/PatronsSection";
import { ConferenceChairsSection } from "@/components/conference/ConferenceChairsSection";
import { CollaboratorsSection } from "@/components/conference/CollaboratorsSection";
import { Footer } from "@/components/conference/Footer";

const Index = () => {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <TracksSection />
      <StatsSection />
      <SubmissionSection />
      <ScheduleSection />
      <RegistrationSection />
      <PatronsSection />
      <ConferenceChairsSection />
      <CollaboratorsSection />
      <Footer />
    </main>
  );
};

export default Index;
