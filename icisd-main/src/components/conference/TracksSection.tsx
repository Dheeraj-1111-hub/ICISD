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
} from "lucide-react";

/* ---------------- TRACK DATA ---------------- */

const tracks = [
  {
    icon: Cpu,
    title: "Artificial Intelligence and Intelligent Systems",
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
    topics: [
      "Network Security and Cryptography",
      "Ethical Hacking and Digital Forensics",
      "Smart Contracts & Zero-Trust Architecture",
    ],
  },
  {
    icon: Cloud,
    title: "Cloud Computing & Distributed Systems",
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
    topics: [
      "Green Computing",
      "Intelligent Transport Systems",
      "AI for Climate and Society",
      "Smart Grid and Smart Governance",
    ],
  },
];

/* ---------------- MODAL ---------------- */

const TrackModal = ({ track, onClose }: any) => {
  if (!track) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          onClick={(e) => e.stopPropagation()}
          initial={{ scale: 0.9, opacity: 0, y: 40 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 40 }}
          transition={{ type: "spring", stiffness: 180, damping: 20 }}
          className="bg-white w-full max-w-lg rounded-2xl p-6 shadow-2xl relative"
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-slate-500 hover:text-slate-900"
          >
            <X />
          </button>

          <div className="w-14 h-14 rounded-full bg-emerald-50 flex items-center justify-center mb-4">
            <track.icon className="w-7 h-7 text-emerald-600" />
          </div>

          <h3 className="text-2xl font-bold mb-4 text-slate-900">
            {track.title}
          </h3>

          <ul className="list-disc list-inside space-y-2 text-sm text-slate-600">
            {track.topics.map((topic: string) => (
              <li key={topic}>{topic}</li>
            ))}
          </ul>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

/* ---------------- MAIN SECTION ---------------- */

export const TracksSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });
  const [selectedTrack, setSelectedTrack] = useState(null);

  return (
    <>
      <section id="tracks" className="py-16 md:py-20 bg-slate-50">
        <div className="container-conference" ref={ref}>
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-14"
          >
            <p className="text-xs uppercase tracking-[0.25em] text-slate-500 mb-2">
              Research Domains
            </p>

            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
              Conference{" "}
              <span className="text-emerald-600">Tracks</span>
            </h2>

            <p className="text-slate-600 text-sm sm:text-base">
              The conference invites original research contributions across the
              following specialized domains.
            </p>
          </motion.div>

          {/* Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {tracks.map((track, index) => (
              <motion.div
                key={track.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: index * 0.07 }}
              >
                <motion.button
                  onClick={() => setSelectedTrack(track)}
                  whileHover={{ y: -8 }}
                  className="
                    group relative w-full h-full
                    rounded-2xl bg-white
                    border border-slate-200
                    p-7 text-center
                    shadow-sm hover:shadow-xl
                    transition-all duration-300
                  "
                >
                  {/* Gradient ring */}
                  <span className="absolute inset-0 rounded-2xl ring-1 ring-transparent group-hover:ring-emerald-500/30 transition" />

                  {/* Track number */}
                  <span className="absolute top-4 right-4 text-sm font-semibold text-emerald-600">
  {String(index + 1).padStart(2, "0")}
</span>

                  {/* Icon */}
                  <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-emerald-50 flex items-center justify-center 
                                  group-hover:scale-110 group-hover:shadow-[0_0_0_8px_rgba(16,185,129,0.08)]
                                  transition-all">
                    <track.icon className="w-8 h-8 text-emerald-600" />
                  </div>

                  <h3 className="text-base font-semibold text-slate-900 mb-3 leading-snug">
  {track.title}
</h3>

                  <span className="text-sm font-medium text-emerald-600 opacity-80 group-hover:opacity-100">
  View Topics →
</span>
                </motion.button>
              </motion.div>
            ))}
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
