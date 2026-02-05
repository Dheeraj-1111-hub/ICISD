// icisd-main/src/components/conference/SubmissionSection.tsx

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FileText,
  Calendar,
  CheckCircle2,
  BookOpen,
  ExternalLink,
  Info,
  AlertTriangle,
  Ban,
  UploadCloud,
  ArrowRight,
  Download,
} from "lucide-react";

// --- Data Configuration ---

const timelineDates = [
  { label: "Paper Submission", date: "5 March 2026", status: "upcoming" },
  { label: "Acceptance", date: "10 March 2026", status: "upcoming" },
  { label: "Early Bird Reg", date: "12 March 2026", status: "upcoming" },
  { label: "Final Manuscript", date: "15 March 2026", status: "upcoming" },
  { label: "Conference Dates", date: "6-7 April 2026", status: "final" },
];

const submissionRules = [
  "All submissions must be original, unpublished research work written in English.",
  "Papers must not be under concurrent consideration for publication in any other journal or conference.",
  "Electronic submissions are accepted in Word document formats (.doc, .docx) only.",
  "Papers are strictly limited to 12 pages (including title, references, figures, and tables).",
  "Manuscript Plagiarism MUST be below 10%.",
  "Simultaneous submission or overlap with published work is strictly prohibited.",
];

const manuscriptPrep = [
  "Manuscripts must be prepared using the specific Journal Template without page numbers or running heads.",
  "Content created through generative AI tools is strictly prohibited and will not be reviewed.",
  "Figures must be high resolution (300 dpi+) and tables must be text-based (not images).",
  "Do not use academic titles (e.g., Dr., Prof.) or positions in author affiliations.",
  "Include full address, affiliation, and email for all authors.",
  "Clearly specify one corresponding author for proofreading.",
  "References must strictly follow the template style (Author, Title, Journal, Volume, Issue, Year).",
];

export const SubmissionSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      id="submission"
      className="py-20 bg-slate-50 relative overflow-hidden"
    >
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-100/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-emerald-100/40 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 relative z-10" ref={ref}>
        {/* --- Header --- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100/50 border border-emerald-200 text-emerald-700 text-sm font-semibold mb-4">
            <UploadCloud className="w-4 h-4" />
            <span>Call for Papers</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
            Submission <span className="text-emerald-600">Guidelines</span>
          </h2>
          <p className="text-slate-600 text-lg">
            Authors are invited to submit original research papers to ICISD’26.
            Please review the requirements below carefully.
          </p>
        </motion.div>

        {/* --- Important Dates Section --- */}
        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            className="text-2xl md:text-3xl font-bold text-slate-900 text-center mb-10"
          >
            Important <span className="text-emerald-600">Dates</span>
          </motion.h3>

          <div className="px-4">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center relative gap-8 md:gap-4">
              {/* Connecting Line (Desktop Only) */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={inView ? { scaleX: 1 } : {}}
                transition={{ duration: 1, delay: 0.2 }}
                className="hidden md:block absolute top-6 left-0 w-full h-0.5 bg-slate-200 -z-10 origin-left"
              />

              {timelineDates.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.15 + 0.3 }}
                  className="relative flex flex-row md:flex-col items-center md:flex-1 w-full md:w-auto group"
                >
                  {/* Dot / Icon */}
                  <div
                    className={`
                    w-12 h-12 rounded-full border-4 border-white shadow-md flex items-center justify-center z-10 transition-transform duration-300 group-hover:scale-110 mr-4 md:mr-0 md:mb-4
                    ${
                      item.status === "final"
                        ? "bg-emerald-600 text-white"
                        : "bg-white text-emerald-600 ring-1 ring-slate-200 group-hover:ring-emerald-400"
                    }
                  `}
                  >
                    {item.status === "final" ? (
                      <Calendar className="w-5 h-5" />
                    ) : (
                      <span className="font-bold text-lg">{index + 1}</span>
                    )}
                  </div>

                  {/* Content */}
                  <div className="text-left md:text-center">
                    <h4
                      className={`font-bold text-md md:text-[15px] mb-0.5 ${
                        item.status === "final"
                          ? "text-emerald-700"
                          : "text-slate-800"
                      }`}
                    >
                      {item.label}
                    </h4>
                    <p className="text-slate-500 text-sm font-medium">
                      {item.date}
                    </p>
                  </div>

                  {/* Mobile Connector Line (Vertical) */}
                  {index !== timelineDates.length - 1 && (
                    <div className="md:hidden absolute left-6 top-12 bottom-[-32px] w-0.5 bg-slate-200 -z-10" />
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* --- Main Content Grid --- */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Left Col: Submission Rules */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="bg-white rounded-3xl p-8 border border-slate-100 shadow-xl shadow-slate-200/50 flex flex-col h-full"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white shadow-lg shadow-blue-500/30">
                <FileText className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">
                Submission Rules
              </h3>
            </div>

            <ul className="space-y-4 mb-8">
              {submissionRules.map((rule, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-600 leading-relaxed text-[15px]">
                    {rule}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-auto p-4 bg-amber-50 border border-amber-100 rounded-xl flex gap-3">
              <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-amber-800 font-medium leading-relaxed">
                <strong className="block mb-1">Plagiarism Policy</strong>
                Manuscripts with Similarity Index (SI) &gt; 10% will be rejected
                immediately.
              </p>
            </div>
          </motion.div>

          {/* Right Col: Manuscript Prep */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="bg-white rounded-3xl p-8 border border-slate-100 shadow-xl shadow-slate-200/50 flex flex-col h-full"
          >
            <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center text-white shadow-lg shadow-emerald-500/30">
                  <BookOpen className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">
                  Manuscript Prep
                </h3>
              </div>

              {/* DOWNLOAD BUTTON */}
              <a
                href="/Template.pdf" // Replace with your actual template link
                className="flex items-center gap-2 px-5 py-3 rounded-lg bg-slate-900 text-white text-sm font-semibold hover:bg-slate-800 transition shadow-lg shadow-slate-900/20"
              >
                <Download className="w-4 h-4" />
                Download Template
              </a>
            </div>

            <ul className="space-y-4 mb-8">
              {manuscriptPrep.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0" />
                  <span className="text-slate-600 leading-relaxed text-[15px]">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-auto p-4 bg-red-50 border border-red-100 rounded-xl flex gap-3">
              <Ban className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-red-800 font-medium leading-relaxed">
                <strong className="block mb-1">Strict AI Policy</strong>
                Content created through generative AI tools is strictly
                prohibited and will not be reviewed.
              </p>
            </div>
          </motion.div>
        </div>

        {/* --- CMT CTA Section --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="relative overflow-hidden rounded-3xl bg-slate-900 text-white p-8 md:p-12 text-center shadow-2xl"
        >
          {/* Background Glow */}
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-emerald-900/40 to-blue-900/40 z-0" />

          <div className="relative z-10 flex flex-col items-center">
            <div className="mb-6 p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 shadow-inner">
              <ExternalLink className="w-8 h-8 text-emerald-400" />
            </div>

            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Submit?
            </h3>
            <p className="text-slate-300 max-w-2xl mx-auto mb-8 text-lg">
              All manuscripts must be submitted through the official Microsoft
              CMT portal. First-time users must create an account.
            </p>

            <a
              href="https://cmt3.research.microsoft.com/ICISDT2026/Submission/Manage"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-xl font-bold text-lg hover:from-emerald-400 hover:to-emerald-500 transition-all shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 transform hover:-translate-y-1"
            >
              <span>Submit via Microsoft CMT</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>

            <div className="mt-6 flex items-center gap-2 text-sm text-slate-400">
              <Info className="w-4 h-4" />
              <span>
                Ensure you have selected the correct track during submission
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
