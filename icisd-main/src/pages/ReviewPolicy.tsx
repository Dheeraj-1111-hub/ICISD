// icisd-main/src/pages/ReviewPolicy.tsx
import { Navbar } from "@/components/common/Navbar";
import { PageHero } from "@/components/common/PageHero";
import { motion } from "framer-motion";
import {
  FileSearch,
  Users,
  CheckCircle,
  ShieldCheck,
} from "lucide-react";

const reviewProcess = [
  {
    step: "01",
    icon: FileSearch,
    title: "Preliminary Editorial Screening",
    description:
      "Each submitted manuscript is reviewed by the editorial committee to verify thematic relevance, originality, formatting compliance, and adherence to ICISD’26 submission guidelines.",
  },
  {
    step: "02",
    icon: Users,
    title: "Double-Blind Peer Review",
    description:
      "Manuscripts passing the initial screening undergo a strict double-blind peer-review process conducted by independent subject experts to ensure impartial evaluation.",
  },
  {
    step: "03",
    icon: CheckCircle,
    title: "Technical & Academic Assessment",
    description:
      "Reviewers evaluate originality, technical depth, methodological rigor, clarity of presentation, and contribution to the domain of intelligent systems and digital transformation.",
  },
  {
    step: "04",
    icon: ShieldCheck,
    title: "Final Editorial Decision",
    description:
      "The editorial board makes the final acceptance decision based on reviewer reports, ensuring publication quality, ethical compliance, and academic integrity.",
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
        <div className="container-conference max-w-5xl space-y-28">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block mb-4 px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-700 text-sm font-semibold">
              Peer Review Framework
            </span>

            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
              Commitment to Scholarly Excellence
            </h2>

            <p className="text-slate-600 leading-relaxed text-base">
              ICISD’26 follows a structured and ethically grounded peer-review
              process to uphold the highest standards of academic rigor,
              fairness, transparency, and publication integrity.
            </p>
          </motion.div>

  
          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-px bg-slate-300 hidden md:block" />
            <div className="space-y-20">
              {reviewProcess.map((step, index) => {
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
                    <div className="absolute left-0 top-1 flex items-center gap-4">
                      <div className="w-14 h-14 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-lg shadow-md">
                        {step.step}
                      </div>
                    </div>

                    {/* Revew Card */}
                    <div className="
                      bg-white
                      border border-slate-200
                      rounded-2xl
                      p-9
                      shadow-sm
                      hover:shadow-lg
                      transition-all
                    ">
                      <div className="flex items-center gap-4 mb-5">
                        <div className="p-3 rounded-lg bg-emerald-50 text-emerald-600">
                          <Icon className="w-5 h-5" />
                        </div>
                        <h3 className="text-lg md:text-xl font-semibold text-slate-900">
                          {step.title}
                        </h3>
                      </div>

                      <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="
              bg-emerald-50
              border border-emerald-200
              rounded-2xl
              p-12
            "
          >
            <h3 className="text-xl md:text-2xl font-semibold text-emerald-800 mb-6">
              Ethical Standards & Publication Integrity
            </h3>

            <ul className="space-y-4 text-emerald-800 text-sm md:text-base leading-relaxed">
              <li>• Plagiarism, duplicate submissions, and data fabrication are strictly prohibited.</li>
              <li>• All manuscripts are screened using standard plagiarism detection tools.</li>
              <li>• Any violation of publication ethics results in immediate rejection.</li>
              <li>• Authors must satisfactorily address reviewer comments prior to final acceptance.</li>
            </ul>
          </motion.div>


          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="
              bg-white
              border border-slate-200
              rounded-2xl
              p-12
              shadow-sm
            "
          >
            <h3 className="text-xl md:text-2xl font-semibold text-slate-900 mb-4">
              Confidentiality & Transparency
            </h3>

            <p className="text-slate-600 leading-relaxed text-sm md:text-base">
              Reviewer identities remain strictly confidential throughout the
              evaluation process. Author identities are not disclosed to
              reviewers, ensuring unbiased assessment and maintaining academic
              fairness in all editorial decisions.
            </p>
          </motion.div>

        </div>
      </section>
    </main>
  );
};

export default ReviewPolicy;
