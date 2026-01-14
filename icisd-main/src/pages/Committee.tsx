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
      {/* <CommitteeSectionBlock
        badge="Leadership"
        title="Chief Patrons"
        columns="lg:grid-cols-2"
        members={committeeData.chiefPatrons}
      />
      <CommitteeSectionBlock
        badge="Guidance"
        title="Patrons"
        members={committeeData.patrons}
      /> */}
      <CommitteeSectionBlock
        badge="Coordination"
        title="Convener"
        columns="lg:grid-cols-1"
        members={committeeData.convener}
      />
      {/* <CommitteeSectionBlock
        badge="Academic Oversight"
        title="Program Chair & Program Co-Chair"
        columns="lg:grid-cols-2"
        members={committeeData.programChairs}
      /> */}
      <CommitteeSectionBlock
        badge="Operations"
        title="Organising Secretaries"
        members={committeeData.organisingSecretaries}
      />
      {/* <CommitteeSectionBlock
        badge="Strategic Direction"
        title="Steering Committee"
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
      /> */}


      <Footer />
    </main>
  );
}
