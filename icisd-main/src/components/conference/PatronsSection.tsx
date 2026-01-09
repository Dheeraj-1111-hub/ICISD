import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const patrons = [
  {
    name: "Name 1",
    title: "Title",
    designation: "designation",
    organization: "SRM Institute of Science and Technology",
  },
  {
    name: "Name 2",
    title: "Title",
    designation: "designation",
    organization: "SRM Institute of Science and Technology",
  },
  {
    name: "Name 3",
    title: "Title",
    designation: "designation",
    organization: "SRM Institute of Science and Technology",
  },
];

// Neutral abstract avatar (no real face)
const defaultAvatar =
  "https://api.iconify.design/ph:user-circle-duotone.svg?color=%2394a3b8&width=200";

export const PatronsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="patrons" className="py-16 md:py-20 bg-slate-50">
      <div className="container-conference" ref={ref}>
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="inline-block px-3 py-1 rounded-md bg-emerald-50 text-emerald-600 text-sm font-semibold mb-4">
            Conference Leadership
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Our Patrons
          </h2>

          <p className="text-slate-600 text-sm sm:text-base">
            Esteemed academic leaders providing guidance and vision for
            the successful organization of ICISD’26.
          </p>
        </motion.div>

        {/* Patron Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {patrons.map((patron, index) => (
            <motion.div
              key={patron.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="
                bg-white
                border border-slate-200
                rounded-xl
                p-6
                text-center
                shadow-sm
                hover:shadow-lg
                hover:border-emerald-500
                transition-all duration-200
              "
            >
              {/* Avatar */}
              <div className="w-28 h-28 mx-auto mb-4 rounded-full overflow-hidden border border-slate-200 bg-slate-50 flex items-center justify-center">
                <img
                  src={defaultAvatar}
                  alt="Profile placeholder"
                  className="w-full h-full object-contain p-3"
                />
              </div>

              {/* Role Badge */}
              <span className="inline-block px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-semibold mb-3">
                {patron.title}
              </span>

              {/* Details */}
              <h3 className="text-lg font-bold text-slate-900 mb-1">
                {patron.name}
              </h3>

              <p className="text-sm text-emerald-600 font-medium mb-1">
                {patron.designation}
              </p>

              <p className="text-sm text-slate-500">
                {patron.organization}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
