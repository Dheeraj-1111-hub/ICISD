import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Target, Users, Lightbulb, Award, Cpu } from "lucide-react";

const highlights = [
  {
    icon: Target,
    title: "Research Excellence",
    description:
      "A global platform for presenting high-quality research in intelligent and digitally enabled systems",
  },
  {
    icon: Lightbulb,
    title: "Emerging Technologies",
    description:
      "Focused discussions on AI, data-driven intelligence, automation, IoT, cloud, and cyber-physical systems",
  },
  {
    icon: Users,
    title: "Global Collaboration",
    description:
      "Bringing together researchers, academicians, and industry professionals from around the world",
  },
  {
    icon: Award,
    title: "Indexed Publications",
    description:
      "Accepted papers published in Scopus-indexed conference proceedings with DOI",
  },
];

export const AboutSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="py-16 md:py-20 bg-slate-50">
      <div className="container-conference" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-3 py-1 rounded-md bg-emerald-50 text-emerald-600 text-sm font-semibold mb-4">
              About the Conference
            </span>

            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
              Intelligent Systems &{" "}
              <span className="text-emerald-600">
                Digital Transformation
              </span>
            </h2>

            <p className="text-slate-600 leading-relaxed mb-4 text-sm sm:text-base">
              The International Conference on Intelligent Systems and Digital
              Transformation (ICISD’26) provides a premier global forum for
              researchers, academicians, and industry experts to present and
              exchange innovative ideas shaping intelligent and digitally
              enabled systems.
            </p>

            <p className="text-slate-600 leading-relaxed mb-6 text-sm sm:text-base">
              ICISD’26 focuses on cutting-edge advancements in artificial
              intelligence, data analytics, automation, Internet of Things,
              cloud computing, cybersecurity, and emerging digital technologies
              that are transforming industries and society.
            </p>

            {/* Key Points */}
            <div className="flex flex-wrap items-center gap-6">
              <div className="flex items-center gap-2 text-emerald-600">
                <Cpu className="w-5 h-5" />
                <span className="font-semibold text-sm">
                  Interdisciplinary Research
                </span>
              </div>

              <div className="flex items-center gap-2 text-emerald-600">
                <Users className="w-5 h-5" />
                <span className="font-semibold text-sm">
                  Academia–Industry Interaction
                </span>
              </div>
            </div>
          </motion.div>

          {/* Highlights Cards */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="
                  bg-white
                  border border-slate-200
                  rounded-xl
                  p-5
                  shadow-sm
                  hover:shadow-lg
                  hover:border-emerald-500
                  transition-all duration-200
                "
              >
                <div className="w-12 h-12 rounded-lg bg-emerald-50 flex items-center justify-center mb-3">
                  <item.icon className="w-6 h-6 text-emerald-600" />
                </div>

                <h3 className="text-base font-bold text-slate-900 mb-2">
                  {item.title}
                </h3>

                <p className="text-slate-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
