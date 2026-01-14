// icisd-main/src/components/conference/Paper Submission/SubmissionSection.tsx

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FileText,
  Calendar,
  CheckCircle2,
  BookOpen,
  ExternalLink,
  Info,
} from "lucide-react";

const guidelines = [
  {
    icon: FileText,
    title: "Paper Submission",
    items: [
      "Original research contributions only",
      "Manuscript must be prepared in DOC format",
      "Submissions must be made electronically",
      "Papers should align with the conference tracks",
    ],
  },
  {
    icon: BookOpen,
    title: "Publication Details",
    items: [
      "All accepted papers will be published in conference proceedings",
      "Proceedings will be Scopus-indexed",
      "Each paper will be assigned a DOI",
      "Publication will follow publisher norms",
    ],
  },
  {
    icon: Calendar,
    title: "Important Dates",
    items: [
      "Paper Submission Deadline: 5 March 2026",
      "Acceptance Notification: 10 March 2026",
      "Early Bird Registration: 12 March 2026",
      "Final Manuscript & Late Registration: 15 March 2026",
      "Conference Dates: 6 & 7 April 2026",
    ],
  },
  {
    icon: CheckCircle2,
    title: "Submission Platform",
    items: [
      "All submissions must be made through Microsoft CMT",
      "Authors must create an account on CMT before submission",
      "Follow the instructions provided on the CMT portal",
      "Multiple submissions by the same author are permitted",
    ],
  },
];

export const SubmissionSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="submission" className="py-16 md:py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <span className="inline-block px-3 py-1 rounded-md bg-emerald-50 text-emerald-600 text-sm font-semibold mb-4">
            Author Information
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Paper Submission Guidelines
          </h2>

          <p className="text-slate-600 text-sm sm:text-base">
            Authors are invited to submit original research papers to the
            International Conference on Intelligent Systems and Digital
            Transformation (ICISD’26).
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {guidelines.map((guide, index) => (
            <motion.div
              key={guide.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:shadow-lg transition-all"
            >
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-emerald-50 flex items-center justify-center">
                  <guide.icon className="w-6 h-6 text-emerald-600" />
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3">
                    {guide.title}
                  </h3>

                  <ul className="space-y-2">
                    {guide.items.map((item, i) => (
                      <li key={i} className="flex gap-2 text-sm text-slate-600">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.4 }}
          className="bg-emerald-50 border border-emerald-200 rounded-xl p-6 max-w-4xl mx-auto mb-10"
        >
          <div className="flex gap-3">
            <Info className="w-5 h-5 text-emerald-600 mt-0.5" />
            <p className="text-sm text-slate-700">
              Authors must log in using their registered email ID on Microsoft
              CMT. First-time users are required to create an account before
              submitting their paper.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="bg-white border border-slate-200 rounded-xl p-8 text-center shadow-sm max-w-3xl mx-auto"
        >
          <h3 className="text-xl font-bold text-slate-900 mb-3">
            Submit Your Paper via Microsoft CMT
          </h3>

          <p className="text-slate-600 mb-6 text-sm sm:text-base">
            All manuscripts must be submitted through the official Microsoft CMT
            portal.
          </p>

          <a
            href="https://cmt3.research.microsoft.com/ICISDT2026/Submission/Manage"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-emerald-600 text-white font-semibold hover:bg-emerald-500 transition-colors"
          >
            Submit Paper on CMT
            <ExternalLink className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
