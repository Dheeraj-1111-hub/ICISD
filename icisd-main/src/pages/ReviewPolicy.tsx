// icisd-main/src/pages/ReviewPolicy.tsx
import { Navbar } from "@/components/common/Navbar";
import { PageHero } from "@/components/common/PageHero";
import { motion } from "framer-motion";
import {
  FileSearch,
  Users,
  CheckCircle2,
  Scale,
  EyeOff,
  MessageSquare,
  FileCheck,
  ShieldAlert,
} from "lucide-react";
import { Footer } from "@/components/common/Footer";

const reviewSteps = [
  {
    step: "01",
    icon: FileSearch,
    title: "Submission and Initial Screening",
    description:
      "Once a submission is received, it undergoes an initial screening for completeness and adherence to submission guidelines. Papers that do not meet the formatting or submission criteria will be rejected at this stage.",
  },
  {
    step: "02",
    icon: Users,
    title: "Peer Review",
    description:
      "After passing the initial screening, submissions are assigned to multiple independent reviewers with expertise in the subject matter. Each paper is reviewed based on the following criteria:",
    listItems: [
      "Relevance to the conference theme",
      "Originality and contribution to the field",
      "Clarity and quality of writing",
      "Methodological rigor (for empirical work)",
      "Appropriateness of references and citations",
    ],
  },
  {
    step: "03",
    icon: EyeOff,
    title: "Double-Blind Review",
    description:
      "To ensure fairness and objectivity, the review process is double-blind, meaning both authors and reviewers remain anonymous to each other. This process helps eliminate any potential bias based on the authors' identities or affiliations.",
  },
  {
    step: "04",
    icon: Scale,
    title: "Decision Process",
    description:
      "After the reviews are completed, the program committee evaluates the feedback and makes the final decision on each submission. Possible decisions include:",
    decisions: [
      {
        type: "Accepted",
        desc: "The paper is accepted for presentation at the conference.",
      },
      {
        type: "Conditionally Accepted",
        desc: "Accepted with revisions. Authors must submit a revised version by a deadline.",
      },
      {
        type: "Rejected",
        desc: "The paper does not meet the required standards for acceptance.",
      },
    ],
  },
  {
    step: "05",
    icon: MessageSquare,
    title: "Feedback",
    description:
      "All authors will receive feedback from the reviewers. Even for rejected papers, we strive to provide valuable comments that can help authors improve their work for future submissions.",
  },
  {
    step: "06",
    icon: FileCheck,
    title: "Final Paper Submission",
    description:
      "Authors of accepted papers will be asked to submit the final version of their work, incorporating any necessary revisions. Final submissions must be in the required format for publication in the conference proceedings.",
  },
];

const ReviewPolicy = () => {
  return (
    <main className="overflow-x-hidden bg-slate-50">
      <Navbar />
      <PageHero
        title="Review Policy"
        subtitle="A transparent, ethical, and rigorous peer-review framework at ICISD’26"
      />

      <section className="py-20 md:py-28">
        <div className="container-conference max-w-5xl space-y-24">
          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block mb-4 px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-700 text-sm font-semibold border border-emerald-200">
              Peer Review Framework
            </span>

            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Commitment to Scholarly Excellence
            </h2>

            <p className="text-slate-600 leading-relaxed text-lg">
              The review process for ICISD'26 is designed to ensure that all
              submissions are rigorously evaluated by qualified experts in the
              field. Our goal is to maintain a high standard of academic
              integrity, transparency, and fairness.
            </p>
          </motion.div>

          {/* Process Timeline */}
          <div className="relative">
            {/* Connecting Line (Desktop) */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-slate-200 via-slate-300 to-slate-200 hidden md:block" />

            <div className="space-y-16">
              {reviewSteps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="relative md:pl-24"
                  >
                    {/* Step Number Bubble */}
                    <div className="absolute left-0 top-0 flex items-center gap-4 hidden md:flex">
                      <div className="w-12 h-12 rounded-2xl bg-white border-2 border-emerald-500 text-emerald-700 flex items-center justify-center font-bold text-lg shadow-sm z-10">
                        {step.step}
                      </div>
                    </div>

                    {/* Mobile Step Number */}
                    <div className="md:hidden flex items-center gap-3 mb-4">
                      <span className="text-emerald-600 font-bold text-xl">
                        {step.step}
                      </span>
                      <div className="h-px bg-slate-200 flex-1" />
                    </div>

                    {/* Review Card */}
                    <div
                      className="
                      bg-white
                      border border-slate-100
                      rounded-3xl
                      p-8 md:p-10
                      shadow-sm
                      hover:shadow-xl
                      hover:border-emerald-100
                      transition-all
                      duration-300
                    "
                    >
                      <div className="flex items-start gap-5 mb-6">
                        <div className="p-3.5 rounded-xl bg-gradient-to-br from-emerald-50 to-emerald-100/50 text-emerald-600 shadow-sm">
                          <Icon className="w-6 h-6" />
                        </div>
                        <div>
                          <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-2">
                            {step.title}
                          </h3>
                        </div>
                      </div>

                      <p className="text-slate-600 text-base leading-relaxed mb-6">
                        {step.description}
                      </p>

                      {/* Conditional Render: Criteria List */}
                      {step.listItems && (
                        <ul className="grid gap-3 pl-2 md:pl-4 border-l-2 border-emerald-100">
                          {step.listItems.map((item, i) => (
                            <li
                              key={i}
                              className="flex items-start gap-3 text-slate-700 text-sm md:text-base"
                            >
                              <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-1 flex-shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      )}

                      {/* Conditional Render: Decision Types */}
                      {step.decisions && (
                        <div className="grid md:grid-cols-3 gap-4 mt-6">
                          {step.decisions.map((d, i) => (
                            <div
                              key={i}
                              className={`
                              p-4 rounded-xl border text-sm
                              ${
                                d.type === "Accepted"
                                  ? "bg-emerald-50 border-emerald-200 text-emerald-800"
                                  : d.type === "Rejected"
                                  ? "bg-rose-50 border-rose-200 text-rose-800"
                                  : "bg-amber-50 border-amber-200 text-amber-800"
                              }
                            `}
                            >
                              <strong className="block mb-1 font-bold">
                                {d.type}
                              </strong>
                              <span className="opacity-90">{d.desc}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Ethical Guidelines Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="
              bg-white
              rounded-3xl
              overflow-hidden
              shadow-lg
              shadow-slate-200/50
              border border-slate-100
            "
          >
            <div className="bg-slate-900 p-8 md:p-10 text-white">
              <div className="flex items-center gap-4 mb-4">
                <ShieldAlert className="w-8 h-8 text-emerald-400" />
                <h3 className="text-2xl md:text-3xl font-bold">
                  Ethical Guidelines
                </h3>
              </div>
              <p className="text-slate-300 text-lg max-w-3xl">
                We expect authors and reviewers to adhere to the highest ethical
                standards to ensure the integrity of the scientific record.
              </p>
            </div>

            <div className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="flex-1">
                  <p className="text-slate-600 leading-relaxed text-lg mb-6">
                    Plagiarism, self-plagiarism, and other forms of academic
                    dishonesty will lead to{" "}
                    <strong className="text-rose-600">
                      immediate rejection
                    </strong>{" "}
                    of the paper.
                  </p>
                  <p className="text-slate-600 leading-relaxed">
                    ICISD'26 employs strict similarity checks on all
                    submissions. Any manuscript found to violate these ethical
                    standards will not be considered for review, and repeated
                    offenses may lead to a ban on future submissions.
                  </p>
                </div>
                <div className="md:w-1/3 bg-slate-50 p-6 rounded-2xl border border-slate-100">
                  <h4 className="font-bold text-slate-900 mb-3">
                    Zero Tolerance Policy
                  </h4>
                  <ul className="space-y-3 text-sm text-slate-600">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-rose-500" />{" "}
                      Plagiarism
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-rose-500" />{" "}
                      Data Fabrication
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-rose-500" />{" "}
                      AI-Generated Content
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default ReviewPolicy;
