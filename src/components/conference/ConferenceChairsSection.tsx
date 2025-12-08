import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const chairs = [
  {
    name: "Prof. Vikram Patel",
    role: "Conference Chair",
    designation: "Dean, School of Engineering",
    organization: "SRM University",
  },
  {
    name: "Dr. Lakshmi Narayanan",
    role: "Conference Co-Chair",
    designation: "Head, Department of CSE",
    organization: "SRM University",
  },
  {
    name: "Prof. Arun Krishnan",
    role: "Technical Chair",
    designation: "Professor of AI & ML",
    organization: "SRM University",
  },
  {
    name: "Dr. Meera Sundaram",
    role: "Organizing Chair",
    designation: "Associate Professor",
    organization: "SRM University",
  },
];

// Neutral abstract avatar (no human face)
const defaultAvatar =
  "https://api.iconify.design/ph:user-circle-duotone.svg?color=%23b3b3b3&width=200";

export const ConferenceChairsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="chairs" className="section-padding bg-background">
      <div className="container-conference" ref={ref}>
        
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="inline-block px-3 py-1 rounded-md bg-primary/10 text-primary text-sm font-semibold mb-4">
            Organizing Team
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Conference Chairs
          </h2>

          <p className="text-muted-foreground">
            Meet the dedicated team leading the organization and execution of ICISD 2025.
          </p>
        </motion.div>

        {/* Chair Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {chairs.map((chair, index) => (
            <motion.div
              key={chair.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className="card-conference text-center">
                
                {/* Default Avatar */}
                <div className="w-28 h-28 mx-auto mb-4 rounded-full overflow-hidden border-4 border-primary/20 bg-white">
                  <img
                    src={defaultAvatar}
                    alt="Default Avatar"
                    className="w-full h-full object-contain p-2"
                  />
                </div>

                {/* Role Badge */}
                <span className="inline-block px-3 py-1 rounded-md bg-primary/10 text-primary text-xs font-semibold mb-3">
                  {chair.role}
                </span>

                {/* Details */}
                <h3 className="text-lg font-bold text-foreground mb-1">{chair.name}</h3>

                <p className="text-sm text-primary font-medium mb-1">
                  {chair.designation}
                </p>

                <p className="text-sm text-muted-foreground">
                  {chair.organization}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
