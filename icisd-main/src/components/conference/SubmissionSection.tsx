import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FileText, Calendar, CheckCircle2, BookOpen } from "lucide-react";

/* ---------------- GUIDELINES DATA ---------------- */

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
      "Publication as per publisher norms",
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
      "Instructions for submission are available on the conference website",
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
      <div className="container-conference" ref={ref}>
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12"
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
            Transformation (ICISD’26) in accordance with the guidelines below.
          </p>
        </motion.div>

        {/* Guidelines Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {guidelines.map((guide, index) => (
            <motion.div
              key={guide.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="
                bg-white
                border border-slate-200
                rounded-xl
                p-6
                shadow-sm
                hover:shadow-lg
                hover:border-emerald-500
                transition-all duration-200
              "
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-emerald-50 flex items-center justify-center flex-shrink-0">
                  <guide.icon className="w-6 h-6 text-emerald-600" />
                </div>

                <div className="flex-1">
                  <h3 className="text-lg font-bold text-slate-900 mb-3">
                    {guide.title}
                  </h3>

                  <ul className="space-y-2">
                    {guide.items.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm text-slate-600"
                      >
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Microsoft CMT Acknowledgement */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.4 }}
          className="text-center text-xs text-slate-500 max-w-4xl mx-auto mb-10"
        >
          The Microsoft CMT service was used for managing the peer-reviewing
          process for this conference. This service was provided for free by
          Microsoft, and they bore all expenses, including costs for Azure cloud
          services as well as for software development and support.
        </motion.p>

        {/* Submission CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="
            bg-white
            border border-slate-200
            rounded-xl
            p-8
            text-center
            shadow-sm
          "
        >
          <h3 className="text-xl font-bold text-slate-900 mb-3">
            Submit Your Paper via CMT
          </h3>

          <p className="text-slate-600 mb-6 text-sm sm:text-base">
            All papers must be submitted through the Microsoft CMT submission
            portal. Please ensure that your manuscript complies with the
            conference requirements before submission.
          </p>

          <a
            href="https://cmt3.research.microsoft.com/User/Login?ReturnUrl=%2FICAICS2026"
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex items-center gap-2
              px-6 py-3
              rounded-md
              bg-emerald-600
              text-white
              font-semibold
              hover:bg-emerald-500
              transition-colors
            "
          >
            Submit Paper on CMT
          </a>
        </motion.div>
      </div>
    </section>
  );
};
