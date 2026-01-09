import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Calendar,
  FileText,
  CheckCircle,
  Clock,
  Presentation,
} from "lucide-react";

/* ---------------- IMPORTANT DATES DATA ---------------- */

const timeline = [
  {
    date: "5 March 2026",
    title: "Paper Submission Deadline",
    description:
      "Last date for submitting original research papers through Microsoft CMT.",
    icon: FileText,
    status: "upcoming",
  },
  {
    date: "10 March 2026",
    title: "Acceptance Notification",
    description:
      "Authors will be notified about the acceptance of their submitted papers.",
    icon: CheckCircle,
    status: "upcoming",
  },
  {
    date: "12 March 2026",
    title: "Early Bird Registration",
    description:
      "Deadline for early bird registration at a discounted fee.",
    icon: Clock,
    status: "upcoming",
  },
  {
    date: "15 March 2026",
    title: "Final Manuscript Submission",
    description:
      "Camera-ready paper submission and late registration deadline.",
    icon: FileText,
    status: "upcoming",
  },
  {
    date: "6–7 April 2026",
    title: "Conference Dates",
    description:
      "International Conference on Intelligent Systems and Digital Transformation (ICISD’26).",
    icon: Presentation,
    status: "highlight",
  },
];

/* ---------------- COMPONENT ---------------- */

export const ImpDatesTimeline = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.15,
  });

  return (
    <section id="dates" className="py-16 md:py-20 bg-slate-50">
      <div className="container-conference" ref={ref}>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-3 py-1 rounded-md bg-emerald-50 text-emerald-600 text-sm font-semibold mb-4">
            Mark Your Calendar
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Important Dates Timeline
          </h2>

          <p className="text-slate-600 text-sm sm:text-base">
            Stay on track with key milestones and deadlines for ICISD’26.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">

          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 h-full w-px bg-emerald-200 md:-translate-x-1/2" />

          <div className="space-y-12">
            {timeline.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={`
                  relative flex flex-col md:flex-row gap-6
                  ${index % 2 === 0 ? "md:flex-row-reverse" : ""}
                `}
              >
                {/* Icon */}
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2">
                  <div
                    className={`
                      w-10 h-10 rounded-full flex items-center justify-center
                      ${
                        item.status === "highlight"
                          ? "bg-emerald-600 text-white"
                          : "bg-emerald-100 text-emerald-600"
                      }
                    `}
                  >
                    <item.icon className="w-5 h-5" />
                  </div>
                </div>

                {/* Content Card */}
                <div
                  className={`
                    ml-12 md:ml-0 md:w-1/2
                    bg-white border border-slate-200 rounded-xl p-6 shadow-sm
                    hover:shadow-lg transition
                  `}
                >
                  <span className="text-xs font-semibold text-emerald-600 uppercase">
                    {item.date}
                  </span>

                  <h3 className="text-lg font-bold text-slate-900 mt-2 mb-2">
                    {item.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
