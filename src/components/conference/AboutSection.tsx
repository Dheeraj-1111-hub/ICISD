import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Target, Users, Lightbulb, Award, Leaf } from "lucide-react";

const highlights = [
  {
    icon: Target,
    title: "Mission-Driven",
    description: "Advancing sustainable solutions through interdisciplinary research collaboration",
  },
  {
    icon: Lightbulb,
    title: "Innovation Focus",
    description: "Showcasing cutting-edge technologies driving environmental transformation",
  },
  {
    icon: Users,
    title: "Global Reach",
    description: "Connecting researchers, innovators, and policymakers from 50+ countries",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "Peer-reviewed publications in high-impact indexed journals",
  },
];

export const AboutSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="section-padding bg-background">
      <div className="container-conference" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-3 py-1 rounded-md bg-primary/10 text-primary text-sm font-semibold mb-4">
              About the Conference
            </span>

            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight">
              Shaping Tomorrow's Sustainable World
            </h2>

            <p className="text-muted-foreground leading-relaxed mb-4">
              ICISD 2025 brings together visionary researchers, industry leaders, and policymakers 
              to explore groundbreaking solutions for our planet's most pressing challenges. This 
              premier international forum serves as a catalyst for transformative ideas in sustainable 
              development.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-6">
              Through rigorous academic discourse and hands-on workshops, participants will 
              engage with pioneering research spanning renewable energy, artificial intelligence, 
              circular economy models, and smart city innovations.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-2 text-primary">
                <Leaf className="w-5 h-5" />
                <span className="font-semibold text-sm">Carbon Neutral Event</span>
              </div>
              <div className="flex items-center gap-2 text-primary">
                <Users className="w-5 h-5" />
                <span className="font-semibold text-sm">Open Access Research</span>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Highlights Grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="card-conference"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};