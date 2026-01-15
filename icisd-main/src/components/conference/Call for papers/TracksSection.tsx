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
} from "lucide-react";


const colorMap: any = {
  emerald: {
    bg: "bg-emerald-50",
    text: "text-emerald-600",
    ring: "ring-emerald-500/30",
    wash: "bg-emerald-500/5",
  },
  blue: {
    bg: "bg-blue-50",
    text: "text-blue-600",
    ring: "ring-blue-500/30",
    wash: "bg-blue-500/5",
  },
  violet: {
    bg: "bg-violet-50",
    text: "text-violet-600",
    ring: "ring-violet-500/30",
    wash: "bg-violet-500/5",
  },
  cyan: {
    bg: "bg-cyan-50",
    text: "text-cyan-600",
    ring: "ring-cyan-500/30",
    wash: "bg-cyan-500/5",
  },
  amber: {
    bg: "bg-amber-50",
    text: "text-amber-600",
    ring: "ring-amber-500/30",
    wash: "bg-amber-500/5",
  },
  sky: {
    bg: "bg-sky-50",
    text: "text-sky-600",
    ring: "ring-sky-500/30",
    wash: "bg-sky-500/5",
  },
  indigo: {
    bg: "bg-indigo-50",
    text: "text-indigo-600",
    ring: "ring-indigo-500/30",
    wash: "bg-indigo-500/5",
  },
  green: {
    bg: "bg-green-50",
    text: "text-green-600",
    ring: "ring-green-500/30",
    wash: "bg-green-500/5",
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
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="bg-white w-full max-w-lg rounded-2xl p-6 shadow-2xl relative"
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-slate-500 hover:text-slate-900"
          >
            <X />
          </button>

          <div
            className={`w-14 h-14 rounded-full ${c.bg} flex items-center justify-center mb-4`}
          >
            <track.icon className={`w-7 h-7 ${c.text}`} />
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
export const TracksSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });
  const [selectedTrack, setSelectedTrack] = useState<any>(null);

  return (
    <>
      <section id="tracks" className="py-16 md:py-20 bg-slate-50">
        <div className="container-conference" ref={ref}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-14"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
              Conference <span className="text-emerald-600">Themes</span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Original research contributions across specialized domains.
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {tracks.map((track, index) => {
              const c = colorMap[track.color];

              return (
                <motion.div
                  key={track.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: index * 0.07 }}
                >
                  <motion.button
                    onClick={() => setSelectedTrack(track)}
                    whileHover={{ y: -10 }}
                    transition={{ type: "spring", stiffness: 260, damping: 18 }}
                    className="group relative w-full h-full rounded-2xl bg-white border border-slate-200 p-7 text-center shadow-sm hover:shadow-xl transition"
                  >
                    <span
                      className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition ${c.wash}`}
                    />
                    <span
                      className={`absolute inset-0 rounded-2xl ring-1 ring-transparent group-hover:${c.ring} transition`}
                    />
                    <span
                      className={`absolute top-4 right-4 text-sm font-semibold ${c.text}`}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <div
                      className={`w-16 h-16 mx-auto mb-5 rounded-full ${c.bg} flex items-center justify-center transition-all group-hover:scale-110`}
                    >
                      <track.icon className={`w-8 h-8 ${c.text}`} />
                    </div>

                    <h3 className="text-base font-semibold text-slate-900 mb-3">
                      {track.title}
                    </h3>

                    <span
                      className={`text-sm font-medium ${c.text} opacity-80 group-hover:opacity-100`}
                    >
                      View Topics →
                    </span>
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