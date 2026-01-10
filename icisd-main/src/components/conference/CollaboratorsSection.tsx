import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const associationPartners = [
  {
    name: "Cardiff Metropolitan University",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj9YZ_1n0St46De5p7ozlk9JjCd4NlfAju7Q&s",
  },
];

const publishingPartners = [
  {
    name: "De Gruyter Brill",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkX4PZCidtsaSEzrtGThJVftxRAuGuXHyEuw&s",
  },
];

const indexingPartners = [
  {
    name: "Scopus",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Scopus_logo.svg/2560px-Scopus_logo.svg.png",
  },
];


export const CollaboratorsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.15,
  });

  const cardHover = "hover:scale-[1.08] hover:-translate-y-2 hover:shadow-2xl";

  return (
    <section className="py-20 bg-slate-50">
      <div className="container-conference" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-slate-500 mb-2">
            In Association With
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            International{" "}
            <span className="text-emerald-600">Academic Partner</span>
          </h2>

          <p className="text-slate-600 text-sm sm:text-base">
            ICISD’26 collaborates with globally recognized academic institutions
            to foster international research excellence.
          </p>
        </motion.div>

        <div className="flex justify-center mb-24">
          {associationPartners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className={`
                relative
                bg-white
                border border-slate-200
                rounded-3xl
                h-44 w-[28rem]
                flex items-center justify-center
                p-8
                shadow-lg
                ${cardHover}
                transition-all duration-300
              `}
            >
              <div className="absolute inset-0 rounded-3xl bg-emerald-400/10 blur-2xl -z-10" />

              <img
                src={partner.logo}
                alt={partner.name}
                className="max-h-[85%] max-w-[95%] object-contain"
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Publishing <span className="text-emerald-600">Partner</span>
          </h2>

          <p className="text-slate-600 text-sm sm:text-base">
            Accepted papers will be published with international visibility
            through our official publishing partner.
          </p>
        </motion.div>

        <div className="flex justify-center mb-24">
          {publishingPartners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
              className={`
                relative
                bg-white
                border border-slate-200
                rounded-3xl
                h-40 w-[26rem]
                flex items-center justify-center
                p-8
                shadow-lg
                ${cardHover}
                transition-all duration-300
              `}
            >
              <div className="absolute inset-0 rounded-3xl bg-emerald-400/10 blur-2xl -z-10" />

              <img
                src={partner.logo}
                alt={partner.name}
                className="max-h-[90%] max-w-[95%] object-contain"
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Indexing & <span className="text-emerald-600">Abstracting</span>
          </h2>

          <p className="text-slate-600 text-sm sm:text-base">
            Conference proceedings are indexed to maximize citation impact and
            academic reach.
          </p>
        </motion.div>

        <div className="flex justify-center">
          {indexingPartners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.35 + index * 0.1 }}
              className={`
                relative
                bg-white
                border border-slate-200
                rounded-3xl
                h-36 w-[22rem]
                flex items-center justify-center
                p-8
                shadow-lg
                ${cardHover}
                transition-all duration-300
              `}
            >
              <div className="absolute inset-0 rounded-3xl bg-emerald-400/10 blur-2xl -z-10" />

              <img
                src={partner.logo}
                alt={partner.name}
                className="max-h-[85%] max-w-[90%] object-contain"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};