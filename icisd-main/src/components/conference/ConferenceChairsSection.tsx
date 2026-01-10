import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const chairs = [
  {
    name: "Name 1",
    role: "Conference Chair",
    designation: "Professor",
    organization: "SRM University",
  },
  {
    name: "Name 2",
    role: "Co-Chair",
    designation: "Associate Professor",
    organization: "SRM University",
  },
  {
    name: "Name 3",
    role: "Organizing Chair",
    designation: "Assistant Professor",
    organization: "SRM University",
  },
  {
    name: "Name 4",
    role: "Technical Chair",
    designation: "Professor",
    organization: "SRM University",
  },
];

const defaultAvatar =
  "https://api.iconify.design/ph:user-circle-duotone.svg?color=%23b3b3b3&width=200";

export const ConferenceChairsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="chairs" className="py-16 md:py-20 bg-slate-50">
      <div className="container-conference" ref={ref}>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <span className="inline-block px-3 py-1 rounded-md bg-emerald-50 text-emerald-600 text-sm font-semibold mb-4">
            Organizing Team
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Conference Chairs
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Meet the dedicated team leading the organization and execution of
            ICISD 2025.
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
            
              <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden bg-emerald-50 flex items-center justify-center">
                <img
                  src={defaultAvatar}
                  alt="Default Avatar"
                  className="w-16 h-16 object-contain"
                />
              </div>

              <span className="inline-block px-3 py-1 rounded-md bg-emerald-50 text-emerald-600 text-xs font-semibold mb-3">
                {chair.role}
              </span>

     
              <h3 className="text-base font-bold text-slate-900 mb-1">
                {chair.name}
              </h3>

              <p className="text-sm text-emerald-600 font-medium mb-1">
                {chair.designation}
              </p>

   
              <p className="text-sm text-slate-500">
                {chair.organization}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
