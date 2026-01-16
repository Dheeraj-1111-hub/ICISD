// icisd-main/src/components/conference/TracksSection.tsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Cpu,
  Database,
  MessageSquare,
  Wifi,
  Shield,
  Cloud,
  Atom,
  Leaf,
  X,
  ArrowRight,
} from "lucide-react";

// INTENSE COLOR MAP
// Features: Solid icon gradients, stronger borders, rich background tints
const colorMap: any = {
  emerald: {
    // Card styles
    cardBg: "bg-gradient-to-br from-white to-emerald-50",
    borderColor: "border-emerald-200 group-hover:border-emerald-400",
    shadow: "hover:shadow-emerald-500/25",

    // Icon styles (Solid & Vibrant)
    iconBg: "bg-gradient-to-br from-emerald-500 to-emerald-600",
    iconColor: "text-white",
    iconShadow: "shadow-emerald-500/40",

    // Text accents
    titleHover: "group-hover:text-emerald-700",
    accentText: "text-emerald-600",
    pillBg: "bg-emerald-100 text-emerald-700",
  },
  blue: {
    cardBg: "bg-gradient-to-br from-white to-blue-50",
    borderColor: "border-blue-200 group-hover:border-blue-400",
    shadow: "hover:shadow-blue-500/25",
    iconBg: "bg-gradient-to-br from-blue-500 to-blue-600",
    iconColor: "text-white",
    iconShadow: "shadow-blue-500/40",
    titleHover: "group-hover:text-blue-700",
    accentText: "text-blue-600",
    pillBg: "bg-blue-100 text-blue-700",
  },
  violet: {
    cardBg: "bg-gradient-to-br from-white to-violet-50",
    borderColor: "border-violet-200 group-hover:border-violet-400",
    shadow: "hover:shadow-violet-500/25",
    iconBg: "bg-gradient-to-br from-violet-500 to-violet-600",
    iconColor: "text-white",
    iconShadow: "shadow-violet-500/40",
    titleHover: "group-hover:text-violet-700",
    accentText: "text-violet-600",
    pillBg: "bg-violet-100 text-violet-700",
  },
  cyan: {
    cardBg: "bg-gradient-to-br from-white to-cyan-50",
    borderColor: "border-cyan-200 group-hover:border-cyan-400",
    shadow: "hover:shadow-cyan-500/25",
    iconBg: "bg-gradient-to-br from-cyan-500 to-cyan-600",
    iconColor: "text-white",
    iconShadow: "shadow-cyan-500/40",
    titleHover: "group-hover:text-cyan-700",
    accentText: "text-cyan-600",
    pillBg: "bg-cyan-100 text-cyan-700",
  },
  amber: {
    cardBg: "bg-gradient-to-br from-white to-amber-50",
    borderColor: "border-amber-200 group-hover:border-amber-400",
    shadow: "hover:shadow-amber-500/25",
    iconBg: "bg-gradient-to-br from-amber-500 to-amber-600",
    iconColor: "text-white",
    iconShadow: "shadow-amber-500/40",
    titleHover: "group-hover:text-amber-700",
    accentText: "text-amber-600",
    pillBg: "bg-amber-100 text-amber-700",
  },
  sky: {
    cardBg: "bg-gradient-to-br from-white to-sky-50",
    borderColor: "border-sky-200 group-hover:border-sky-400",
    shadow: "hover:shadow-sky-500/25",
    iconBg: "bg-gradient-to-br from-sky-500 to-sky-600",
    iconColor: "text-white",
    iconShadow: "shadow-sky-500/40",
    titleHover: "group-hover:text-sky-700",
    accentText: "text-sky-600",
    pillBg: "bg-sky-100 text-sky-700",
  },
  indigo: {
    cardBg: "bg-gradient-to-br from-white to-indigo-50",
    borderColor: "border-indigo-200 group-hover:border-indigo-400",
    shadow: "hover:shadow-indigo-500/25",
    iconBg: "bg-gradient-to-br from-indigo-500 to-indigo-600",
    iconColor: "text-white",
    iconShadow: "shadow-indigo-500/40",
    titleHover: "group-hover:text-indigo-700",
    accentText: "text-indigo-600",
    pillBg: "bg-indigo-100 text-indigo-700",
  },
  green: {
    cardBg: "bg-gradient-to-br from-white to-green-50",
    borderColor: "border-green-200 group-hover:border-green-400",
    shadow: "hover:shadow-green-500/25",
    iconBg: "bg-gradient-to-br from-green-500 to-green-600",
    iconColor: "text-white",
    iconShadow: "shadow-green-500/40",
    titleHover: "group-hover:text-green-700",
    accentText: "text-green-600",
    pillBg: "bg-green-100 text-green-700",
  },
};

const tracks = [
  {
    icon: Cpu,
    title: "Artificial Intelligence and Intelligent Systems",
    color: "emerald",
    topics: [
      "Machine and Deep Learning",
      "Intelligent Decision Support Systems & XAI",
      "AI in Healthcare, Education, Agriculture & Industry",
      "Computer Vision and Image Analysis",
    ],
  },
  {
    icon: Database,
    title: "Smart Data Platform and AI Analytics",
    color: "blue",
    topics: [
      "AI Driven Analytics",
      "Automated and Augmented Analytics",
      "Data Governance and Quality",
      "Predictive Analytics and Visualization",
    ],
  },
  {
    icon: MessageSquare,
    title: "NLP & Speech Technologies",
    color: "violet",
    topics: [
      "Text Mining and Sentiment Analysis",
      "Multilingual Models & LLMs",
      "Speech Recognition",
      "Chatbots and Conversational AI",
    ],
  },
  {
    icon: Wifi,
    title: "Internet of Things (IoT) and Smart Environments",
    color: "cyan",
    topics: [
      "IoT Architectures and Protocols",
      "IoT Enabled Intelligent Systems",
      "Embedded and Real-Time Computing",
      "Digital Twins and Bio-IoT",
    ],
  },
  {
    icon: Shield,
    title: "Cybersecurity and Blockchain",
    color: "amber",
    topics: [
      "Network Security and Cryptography",
      "Ethical Hacking and Digital Forensics",
      "Smart Contracts & Zero-Trust Architecture",
    ],
  },
  {
    icon: Cloud,
    title: "Cloud Computing & Distributed Systems",
    color: "sky",
    topics: [
      "Serverless & Microservice Architectures",
      "Cloud Security & Cloud-Native Systems",
      "Distributed Storage and Computing Frameworks",
      "Green and Sustainable Computing",
    ],
  },
  {
    icon: Atom,
    title: "Quantum Computing & Future Technologies",
    color: "indigo",
    topics: [
      "Quantum Algorithms",
      "Quantum Cryptography",
      "Quantum Machine Learning",
      "Hybrid & Quantum Hardware Architectures",
    ],
  },
  {
    icon: Leaf,
    title: "Sustainability & Digital Transformation",
    color: "green",
    topics: [
      "Green Computing",
      "Intelligent Transport Systems",
      "AI for Climate and Society",
      "Smart Grid and Smart Governance",
    ],
  },
];

const TrackModal = ({ track, onClose }: any) => {
  if (!track) return null;
  const c = colorMap[track.color];

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-md p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          onClick={(e) => e.stopPropagation()}
          initial={{ scale: 0.95, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 20 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          className={`w-full max-w-lg rounded-3xl shadow-2xl relative overflow-hidden bg-white`}
        >
          {/* Intense Header Splash */}
          <div
            className={`absolute top-0 left-0 w-full h-36 ${c.iconBg} opacity-100`}
          />

          {/* Close Button (White on color header) */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/20 hover:bg-white/40 text-white backdrop-blur-sm transition-colors"
          >
            <X className="w-5 h-5" />

          </button>

          <div className="relative pt-12 px-8 pb-8">
            <div className="flex flex-col items-start relative z-10">
              {/* Floating Icon overlapping header and body */}
              <div
                className={`w-20 h-20 rounded-2xl bg-white flex items-center justify-center mb-5 shadow-lg shadow-black/10`}
              >
                <track.icon className={`w-10 h-10 ${c.accentText}`} />
              </div>

              <h3 className="text-2xl font-bold mb-6 text-slate-900 leading-tight mt-5">
                {track.title}
              </h3>

              <div className="w-full space-y-4">
                <div
                  className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${c.pillBg}`}
                >
                  Focus Areas
                </div>
                <ul className="grid gap-3">
                  {track.topics.map((topic: string) => (
                    <li
                      key={topic}
                      className="flex items-start text-slate-700 group/item"
                    >
                      <ArrowRight
                        className={`w-4 h-4 mt-1 mr-3 flex-shrink-0 ${c.accentText} opacity-50 group-hover/item:opacity-100 transition`}
                      />
                      <span className="text-[15px] font-medium">{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export const TracksSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [selectedTrack, setSelectedTrack] = useState<any>(null);

  return (
    <>
      <section
        id="tracks"
        className="py-24 bg-slate-50 overflow-hidden relative"
      >
        {/* Decorative Blobs */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-emerald-100/40 rounded-full blur-3xl" />
          <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-blue-100/40 rounded-full blur-3xl" />
        </div>

        <div className="container-conference relative z-10" ref={ref}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Conference{" "}
              <span className="text-emerald-600 relative inline-block">
                Themes
              </span>
            </h2>
            <p className="text-slate-600 text-lg md:text-xl max-w-2xl mx-auto">
              Original research contributions across specialized domains.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {tracks.map((track, index) => {
              const c = colorMap[track.color];

              return (
                <motion.div
                  key={track.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="h-full"
                >
                  <motion.button
                    onClick={() => setSelectedTrack(track)}
                    whileHover={{ y: -8 }}
                    whileTap={{ scale: 0.98 }}
                    className={`
                      group relative w-full h-full rounded-3xl p-6 text-left transition-all duration-300
                      ${c.cardBg} border ${c.borderColor}
                      shadow-sm hover:shadow-xl ${c.shadow}
                    `}
                  >
                    <div className="flex flex-col h-full">
                      <div className="flex justify-between items-start mb-6">
                        {/* Solid Vibrant Icon */}
                        <div
                          className={`w-14 h-14 rounded-2xl ${c.iconBg} ${c.iconColor} flex items-center justify-center shadow-lg ${c.iconShadow} group-hover:scale-110 transition-transform duration-300`}
                        >
                          <track.icon className="w-7 h-7" />
                        </div>

                        {/* Index Number */}
                        <span
                          className={`text-2xl font-black ${c.accentText} opacity-10 group-hover:opacity-30 transition-opacity`}
                        >
                          {String(index + 1).padStart(2, "0")}
                        </span>
                      </div>

                      {/* Title */}
                      <h3
                        className={`text-lg font-bold text-slate-900 mb-2 leading-snug transition-colors ${c.titleHover}`}
                      >
                        {track.title}
                      </h3>

                      {/* Divider Line */}
                      <div
                        className={`w-12 h-1 rounded-full ${c.iconBg} opacity-20 mb-4 group-hover:w-full group-hover:opacity-100 transition-all duration-500`}
                      />

                      {/* Action Text */}
                      <div
                        className={`mt-auto flex items-center text-sm font-bold ${c.accentText}`}
                      >
                        <span>View Topics</span>
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </motion.button>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <TrackModal
        track={selectedTrack}
        onClose={() => setSelectedTrack(null)}
      />
    </>
  );
};
