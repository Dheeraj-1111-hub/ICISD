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
      "Machine learning, deep learning, and reinforcement learning",
      "Intelligent decision support systems and XAI",
      "AI in healthcare, education, agriculture and industry",
      "Computer Vision and Image Analysis",
    ],
  },
  {
    icon: Database,
    title: "Data Science and Big Data Analytics",
    topics: [
      "Data Mining",
      "Data Visualization and Feature Engineering",
      "Data Governance and Quality",
      "Predictive analytics and visualization",
    ],
  },
  {
    icon: MessageSquare,
    title: "Natural Language Processing & Speech Technologies",
    topics: [
      "Text Mining and Sentiment Analysis",
      "Multilingual Models / LLMs",
      "Speech Recognition",
      "Chatbots and Conversational AI",
    ],
  },
  {
    icon: Wifi,
    title: "Internet of Things (IoT) and Cyber-Physical Systems",
    topics: [
      "IoT architectures and protocols",
      "Cyber physical systems design and applications",
      "Embedded and Real-Time Computing",
      "Digital Twins and Bio IoT",
    ],
  },
  {
    icon: Shield,
    title: "Cybersecurity and Blockchain",
    topics: [
      "Network Security and Cryptography",
      "Ethical Hacking and Forensics",
      "Smart Contracts & Zero-Trust Architecture",
    ],
  },
  {
    icon: Cloud,
    title: "Cloud Computing & Distributed Systems",
    topics: [
      "Serverless & Microservice Architectures",
      "Cloud Security & Cloud-Native Systems",
      "Distributed Storage and Computing Frameworks (Hadoop, Spark)",
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
      "Hardware & Hybrid Architectures",
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

const TrackModal = ({ track, onClose }) => {
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
            className="absolute top-4 right-4 text-muted-foreground hover:text-foreground"
          >
            <X />
          </button>

          <div className="w-14 h-14 rounded-xl bg-[#1a472a]/10 flex items-center justify-center mb-4">
            <track.icon className="w-7 h-7 text-[#1a472a]" />
          </div>

          <h3 className="text-2xl font-bold mb-4">{track.title}</h3>

          <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
            {track.topics.map((topic) => (
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
      <section
        id="tracks"
        className="section-padding bg-secondary/40 backdrop-blur-sm"
      >
        <div className="container-conference" ref={ref}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-14"
          >
            <span className="inline-block px-4 py-1.5 rounded-md bg-[#1a472a]/15 text-[#1a472a] text-sm font-semibold mb-4">
              Research Domains
            </span>

            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
              Conference Tracks
            </h2>

            <p className="text-muted-foreground text-lg">
              The conference invites original research contributions across the
              following tracks.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {tracks.map((track, index) => (
              <motion.div
                key={track.title}
                initial={{ opacity: 0, y: 25 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <motion.button
                  onClick={() => setSelectedTrack(track)}
                  whileHover={{ scale: 1.04, y: -6 }}
                  className="w-full h-full p-6 rounded-xl bg-white/80 backdrop-blur border border-gray-200 shadow-md hover:shadow-xl text-center"
                >
                  <div className="w-14 h-14 mx-auto rounded-xl bg-[#1a472a]/10 flex items-center justify-center mb-4">
                    <track.icon className="w-7 h-7 text-[#1a472a]" />
                  </div>

                  <h3 className="text-lg font-bold">{track.title}</h3>
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
