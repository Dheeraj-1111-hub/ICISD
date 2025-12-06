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
    description: "Green manufacturing, sustainable materials, and eco-friendly design principles.",
  },
  {
    icon: Cpu,
    title: "AI & Smart Technologies",
    description: "Machine learning for environmental monitoring and resource optimization.",
  },
  {
    icon: Leaf,
    title: "Environmental Science",
    description: "Climate change mitigation, ecosystem restoration, and biodiversity conservation.",
  },
  {
    icon: Sun,
    title: "Renewable Energy Systems",
    description: "Solar, wind, hybrid energy solutions, and energy storage technologies.",
  },
  {
    icon: Database,
    title: "Data Science & Green Computing",
    description: "Energy-efficient algorithms and carbon-aware computing practices.",
  },
  {
    icon: Recycle,
    title: "Circular Economy Models",
    description: "Waste reduction frameworks and regenerative business practices.",
  },
  {
    icon: TrendingUp,
    title: "Green Finance & ESG",
    description: "Sustainable investment strategies and impact measurement frameworks.",
  },
  {
    icon: Building2,
    title: "Smart Cities & IoT",
    description: "Urban sustainability and connected infrastructure systems.",
  },
  {
    icon: Bot,
    title: "Robotics & Automation",
    description: "Autonomous systems for environmental monitoring and precision agriculture.",
  },
  {
    icon: Microscope,
    title: "Biotechnology for Sustainability",
    description: "Biofuels, bioremediation, and sustainable agricultural innovations.",
  },
];

export const TracksSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="tracks" className="section-padding bg-secondary">
      <div className="container-conference" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="inline-block px-3 py-1 rounded-md bg-accent/20 text-accent-foreground text-sm font-semibold mb-4">
            Research Domains
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Conference Tracks
          </h2>
          <p className="text-muted-foreground">
            Explore ten interdisciplinary tracks spanning the spectrum of sustainable development.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {tracks.map((track, index) => (
            <motion.div
              key={track.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.03 }}
            >
              <div className="card-conference h-full flex flex-col text-center">
                <div className="w-12 h-12 mx-auto rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <track.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-base font-bold text-foreground mb-2">
                  {track.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {track.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};