import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Cpu,
  Leaf,
  Sun,
  Database,
  Recycle,
  TrendingUp,
  Building2,
  Bot,
  Microscope,
  Zap,
} from "lucide-react";

const tracks = [
  {
    icon: Zap,
    title: "Sustainable Engineering",
    description:
      "Innovative green materials, eco-design strategies, and energy-aware engineering workflows.",
  },
  {
    icon: Cpu,
    title: "AI & Smart Technologies",
    description:
      "Machine intelligence for sustainability, predictive analytics, and smart decision systems.",
  },
  {
    icon: Leaf,
    title: "Environmental Science",
    description:
      "Climate resilience, ecological preservation, pollution control, and biodiversity protection.",
  },
  {
    icon: Sun,
    title: "Renewable Energy Systems",
    description:
      "Advanced solar, wind, hybrid energy setups, and high-efficiency storage technologies.",
  },
  {
    icon: Database,
    title: "Data Science & Green Computing",
    description:
      "Low-carbon data pipelines, sustainable computing, and intelligent energy optimization.",
  },
  {
    icon: Recycle,
    title: "Circular Economy Models",
    description:
      "Zero-waste frameworks, regenerative ecosystems, and sustainable industrial processes.",
  },
  {
    icon: TrendingUp,
    title: "Green Finance & ESG",
    description:
      "Eco-investment strategies, responsible governance, and long-term sustainability metrics.",
  },
  {
    icon: Building2,
    title: "Smart Cities & IoT",
    description:
      "Connected urban infrastructure, sustainable mobility systems, and intelligent city planning.",
  },
  {
    icon: Bot,
    title: "Robotics & Automation",
    description:
      "Autonomous robotics for environmental monitoring and next-gen precision agriculture.",
  },
  {
    icon: Microscope,
    title: "Biotechnology for Sustainability",
    description:
      "Biofuels, bioremediation, sustainable food systems, and bio-innovation pipelines.",
  },
];

export const TracksSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.15,
  });

  return (
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
          <motion.span
            initial={{ scale: 0.8, opacity: 0 }}
            animate={inView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.4 }}
            className="inline-block px-4 py-1.5 rounded-md bg-accent/20 text-accent-foreground text-sm font-semibold mb-4 tracking-wide"
          >
            Research Domains
          </motion.span>

          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
            Conference Tracks
          </h2>

          <p className="text-muted-foreground text-lg">
            Discover a comprehensive set of research streams driving sustainable
            innovation and global impact.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {tracks.map((track, index) => (
            <motion.div
              key={track.title}
              initial={{ opacity: 0, y: 25 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.4,
                delay: index * 0.05,
              }}
            >
              <motion.div
                whileHover={{
                  scale: 1.04,
                  y: -6,
                  boxShadow: "0 12px 30px rgba(0, 0, 0, 0.15)",
                }}
                transition={{ type: "spring", stiffness: 200, damping: 12 }}
                className="card-conference h-full p-6 rounded-xl bg-white/80 backdrop-blur border border-gray-200 shadow-md hover:shadow-xl flex flex-col text-center"
              >
                <div className="w-14 h-14 mx-auto rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <track.icon className="w-7 h-7 text-primary" />
                </div>

                <h3 className="text-lg font-bold text-foreground mb-2">
                  {track.title}
                </h3>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  {track.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
