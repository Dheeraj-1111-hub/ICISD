import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const collaborators = [
  { name: "MIT", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/MIT_logo.svg/2560px-MIT_logo.svg.png" },
  { name: "Stanford University", logo: "https://identity.stanford.edu/wp-content/uploads/sites/3/2020/07/stanford-university-stacked.png" },
  { name: "Oxford University", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Oxford-University-Circlet.svg/1200px-Oxford-University-Circlet.svg.png" },
  { name: "Cambridge University", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Coat_of_Arms_of_the_University_of_Cambridge.svg/1200px-Coat_of_Arms_of_the_University_of_Cambridge.svg.png" },
  { name: "ETH Zurich", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/ETH_Z%C3%BCrich_Logo_black.svg/2560px-ETH_Z%C3%BCrich_Logo_black.svg.png" },
  { name: "National University of Singapore", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/b/b9/NUS_coat_of_arms.svg/1200px-NUS_coat_of_arms.svg.png" },
];

const digitalPartners = [
  { name: "IEEE", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/IEEE_logo.svg/2560px-IEEE_logo.svg.png" },
  { name: "Springer", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Springer_Nature_Logo.svg/2560px-Springer_Nature_Logo.svg.png" },
  { name: "Elsevier", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Elsevier.svg/2560px-Elsevier.svg.png" },
  { name: "Scopus", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Scopus_logo.svg/2560px-Scopus_logo.svg.png" },
  { name: "Web of Science", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Web_of_Science_Logo.svg/2560px-Web_of_Science_Logo.svg.png" },
];

export const CollaboratorsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="section-padding bg-background" ref={ref}>
      <div className="container-conference">
        {/* Esteemed Collaborators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-3 py-1 rounded-md bg-accent/20 text-accent-foreground text-sm font-semibold mb-4">
            Our Partners
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Esteemed Collaborators
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We are proud to collaborate with leading academic institutions from around the world.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16">
          {collaborators.map((collaborator, index) => (
            <motion.div
              key={collaborator.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="card-conference flex items-center justify-center p-6 h-32"
            >
              <img
                src={collaborator.logo}
                alt={collaborator.name}
                className="max-h-16 max-w-full object-contain"
              />
            </motion.div>
          ))}
        </div>

        {/* Digital Partners */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Digital Partners
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our publications and indexing partners ensuring global visibility for your research.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {digitalPartners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
              className="card-conference flex items-center justify-center p-6 h-28"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="max-h-12 max-w-full object-contain"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
