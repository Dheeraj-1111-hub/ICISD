import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

/* ---------------- POSTER-ALIGNED DATA ---------------- */

const associationPartners = [
  {
    name: "Cardiff Metropolitan University",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj9YZ_1n0St46De5p7ozlk9JjCd4NlfAju7Q&s",
  },
];

const publishingPartners = [
  {
    name: "De Gruyter Brill",
    logo: "https://www.designtagebuch.de/wp-content/uploads/mediathek//2024/10/degruyter-brill-logo.jpg",
  },
];

const indexingPartners = [
  {
    name: "Scopus",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Scopus_logo.svg/2560px-Scopus_logo.svg.png",
  },
];

/* ---------------- SECTION ---------------- */

export const CollaboratorsSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <section className="py-16 md:py-20 bg-slate-50">
      <div className="container-conference" ref={ref}>

        {/* Association Partner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <p className="text-xs uppercase tracking-[0.25em] text-slate-500 mb-2">
            In Association With
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
            International{" "}
            <span className="text-emerald-600">Academic Partner</span>
          </h2>

          <p className="text-slate-600 text-sm sm:text-base">
            ICISD’26 is organized in association with an internationally
            recognized academic institution to promote global research
            collaboration.
          </p>
        </motion.div>

        <div className="flex justify-center mb-20">
          {associationPartners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="
                bg-white
                border border-slate-200
                rounded-2xl
                h-32 w-80
                flex items-center justify-center
                p-6
                shadow-sm
                hover:shadow-xl
                hover:border-emerald-500
                transition-all duration-300
              "
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="max-h-16 object-contain"
              />
            </motion.div>
          ))}
        </div>

        {/* Publishing Partner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
            Publishing{" "}
            <span className="text-emerald-600">Partner</span>
          </h2>

          <p className="text-slate-600 text-sm sm:text-base">
            All accepted papers will be published as per publisher norms with
            international visibility.
          </p>
        </motion.div>

        <div className="flex justify-center mb-20">
          {publishingPartners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
              className="
                bg-white
                border border-slate-200
                rounded-2xl
                h-28 w-72
                flex items-center justify-center
                p-6
                shadow-sm
                hover:shadow-xl
                hover:border-emerald-500
                transition-all duration-300
              "
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="max-h-16 scale-110 max-w-full object-contain object-fit"
              />
            </motion.div>
          ))}
        </div>

        {/* Indexing */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center max-w-3xl mx-auto mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
            Indexing &{" "}
            <span className="text-emerald-600">Abstracting</span>
          </h2>

          <p className="text-slate-600 text-sm sm:text-base">
            The conference proceedings will be indexed to ensure academic reach
            and citation impact.
          </p>
        </motion.div>

        <div className="flex justify-center">
          {indexingPartners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.35 + index * 0.1 }}
              className="
                bg-white
                border border-slate-200
                rounded-2xl
                h-24 w-60
                flex items-center justify-center
                p-6
                shadow-sm
                hover:shadow-xl
                hover:border-emerald-500
                transition-all duration-300
              "
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="max-h-10 object-contain"
              />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
