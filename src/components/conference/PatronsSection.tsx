import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const patrons = [
  {
    name: "Dr. Rajesh Kumar",
    title: "Chief Patron",
    designation: "Vice Chancellor",
    organization: "SRM University",
  },
  {
    name: "Prof. Anita Sharma",
    title: "Patron",
    designation: "Pro Vice Chancellor",
    organization: "SRM University",
  },
  {
    name: "Dr. Suresh Menon",
    title: "Patron",
    designation: "Registrar",
    organization: "SRM University",
  },
];

// Default abstract avatar (no human face)
const defaultAvatar =
  "https://api.iconify.design/ph:user-circle-duotone.svg?color=%23b3b3b3&width=200";

export const PatronsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="patrons" className="section-padding bg-muted/30">
      <div className="container-conference" ref={ref}>
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="inline-block px-3 py-1 rounded-md bg-primary/10 text-primary text-sm font-semibold mb-4">
            Leadership
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Patrons
          </h2>

          <p className="text-muted-foreground">
            Distinguished leaders guiding the vision and success of ICISD 2025.
          </p>
        </motion.div>

        {/* Patron Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {patrons.map((patron, index) => (
            <motion.div
              key={patron.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className="card-conference text-center">
                
                {/* Placeholder Avatar */}
                <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-primary/20 bg-white">
                  <img
                    src={defaultAvatar}
                    alt="Default Avatar"
                    className="w-full h-full object-contain p-2"
                  />
                </div>

                {/* Title Badge */}
                <span className="inline-block px-3 py-1 rounded-md bg-gold/20 text-gold text-xs font-semibold mb-3">
                  {patron.title}
                </span>

                {/* Details */}
                <h3 className="text-lg font-bold text-foreground mb-1">
                  {patron.name}
                </h3>
                <p className="text-sm text-primary font-medium mb-1">
                  {patron.designation}
                </p>
                <p className="text-sm text-muted-foreground">
                  {patron.organization}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
