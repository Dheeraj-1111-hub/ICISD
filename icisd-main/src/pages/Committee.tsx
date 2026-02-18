import { Navbar } from "@/components/common/Navbar";
import { PageHero } from "@/components/common/PageHero";
import { CommitteeSectionBlock } from "@/components/conference/Committee/CommitteeSectionBlock";
import { committeeData } from "@/components/conference/Committee/CommitteeData";
import { Footer } from "@/components/common/Footer";

export default function CommitteePage() {
  return (
    <main className="bg-slate-50 overflow-x-hidden">
      <Navbar />

      <PageHero
        title="Conference Committee"
        subtitle="Academic leadership and organizational framework of ICISD’26"
      />

      <CommitteeSectionBlock
        badge="Leadership"
        title="Chief Patrons"
        columns="lg:grid-cols-2"
        members={committeeData.chiefPatrons}
      />

      <CommitteeSectionBlock
        badge="Guidance"
        title="Patrons"
        members={committeeData.patrons}
      />

      <CommitteeSectionBlock
        badge="Coordination"
        title="Convener & Program Chair"
        columns="lg:grid-cols-1"
        members={committeeData.convener}
      />

      {/* ✅ NEW SPLIT SECTIONS */}

      <CommitteeSectionBlock
        badge="Leadership"
        title="Chief Guest"
        columns="lg:grid-cols-1"
        members={committeeData.chiefGuest}
      />

      <CommitteeSectionBlock
        badge="Honorary"
        title="Guest of Honour"
        columns="lg:grid-cols-1"
        members={committeeData.guestOfHonour}
      />

      <CommitteeSectionBlock
        badge="Leadership"
        title="Keynote Speakers"
        columns="lg:grid-cols-2"
        members={committeeData.keynote}
      />

      <CommitteeSectionBlock
        badge="Operations"
        title="Organising Secretaries"
        members={committeeData.organisingSecretaries}
      />

      <CommitteeSectionBlock
        badge="Strategic Direction"
        title="Steering Committee"
        columns="lg:grid-cols-3"
        members={committeeData.steeringCommittee}
      />

      <CommitteeSectionBlock
        badge="Technical Review"
        title="Program Committee"
        columns="lg:grid-cols-4"
        members={committeeData.programCommittee}
      />

      <CommitteeSectionBlock
        badge="Execution"
        title="Organising Committee"
        columns="lg:grid-cols-4"
        members={committeeData.organisingCommittee}
      />

      

      <Footer />
    </main>
  );
}
