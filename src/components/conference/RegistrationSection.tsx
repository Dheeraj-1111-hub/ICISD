import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Check, Star, ArrowRight } from "lucide-react";

const registrationCategories = [
  {
    title: "Student",
    subtitle: "Student Delegates",
    earlyBird: 1500,
    regular: 2000,
    features: [
      "Conference Access",
      "Digital Proceedings",
      "Certificate",
      "Lunch & Refreshments",
    ],
    popular: false,
  },
  {
    title: "Research Scholar",
    subtitle: "PhD & Postdoctoral",
    earlyBird: 2000,
    regular: 2500,
    features: [
      "Conference Access",
      "Digital Proceedings",
      "Certificate",
      "Lunch & Refreshments",
      "Workshop Access",
    ],
    popular: false,
  },
  {
    title: "Faculty",
    subtitle: "Academic Professionals",
    earlyBird: 3000,
    regular: 4000,
    features: [
      "Conference Access",
      "Digital Proceedings",
      "Certificate",
      "Lunch & Refreshments",
      "Workshop Access",
      "Networking Dinner",
    ],
    popular: false,
  },
  {
    title: "Industry Delegate",
    subtitle: "Industry Delegates",
    earlyBird: 4500,
    regular: 6000,
    features: [
      "Conference Access",
      "Digital Proceedings",
      "Certificate",
      "Lunch & Refreshments",
      "Workshop Access",
      "Networking Dinner",
      "Exhibition Access",
    ],
    popular: false,
  },
  {
    title: "International",
    subtitle: "Outside Host Country",
    earlyBird: 7000,
    regular: 9000,
    features: [
      "Virtual + Onsite Access",
      "Digital Proceedings",
      "Certificate",
      "Lunch & Refreshments",
      "Workshop Access",
      "Networking Dinner",
    ],
    popular: false,
  },
];

export const RegistrationSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="registration" className="section-padding bg-secondary">
      <div className="container-conference" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="inline-block px-3 py-1 rounded-md bg-accent/20 text-accent-foreground text-sm font-semibold mb-4">
            Secure Your Spot
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Registration Fees
          </h2>
          <p className="text-muted-foreground">
            Early bird pricing available until February 1, 2025. All fees are in
            INR and include applicable taxes.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 md:gap-5">
          {registrationCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className={`relative card-conference flex flex-col p-5 md:p-6 rounded-lg overflow-hidden group transition-all duration-300 hover:shadow-lg ${
                category.popular
                  ? "ring-2 ring-accent shadow-md"
                  : "hover:shadow-md"
              }`}
            >
              {/* Background gradient effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />

              <div className="text-center mb-4">
                <h3 className="text-lg md:text-xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors duration-300">
                  {category.title}
                </h3>
                <p className="text-xs md:text-sm text-muted-foreground">
                  {category.subtitle}
                </p>
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.1 + index * 0.05 }}
                className="text-center mb-4 pb-3 border-b border-border/50 flex flex-col justify-center min-h-[72px] md:min-h-[88px]"
              >
                <div className="flex items-baseline justify-center gap-1 mb-1 flex-wrap">
                  <span className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    ₹{category.earlyBird.toLocaleString("en-IN")}
                  </span>
                </div>
                <div className="flex items-center justify-center gap-2 mb-2">
                  <span className="px-2 py-0.5 rounded-full bg-accent/20 text-accent-foreground text-xs font-semibold">
                    Early Bird
                  </span>
                </div>
                <p className="text-xs md:text-sm text-muted-foreground">
                  Regular:{" "}
                  <span className="line-through text-muted-foreground/60">
                    ₹{category.regular.toLocaleString("en-IN")}
                  </span>
                </p>
              </motion.div>

              <ul className="space-y-2 flex-1 mb-4">
                {category.features.map((feature, featureIndex) => (
                  <motion.li
                    key={feature}
                    initial={{ opacity: 0, x: -10 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{
                      duration: 0.2,
                      delay: 0.15 + index * 0.05 + featureIndex * 0.04,
                    }}
                    className="flex items-start gap-2 text-xs md:text-sm text-muted-foreground"
                  >
                    <motion.div
                      className="flex-shrink-0 mt-0.5"
                      whileHover={{ scale: 1.15, rotate: 10 }}
                    >
                      <Check className="w-4 h-4 text-accent" />
                    </motion.div>
                    <span className="group-hover:text-foreground transition-colors duration-300">
                      {feature}
                    </span>
                  </motion.li>
                ))}
              </ul>

              <motion.button
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.95 }}
                className={`w-full py-2.5 md:py-3 px-3 rounded-md font-semibold text-sm md:text-base transition-all duration-300 flex items-center justify-center gap-1.5 group/btn relative overflow-hidden ${
                  category.popular
                    ? "bg-gradient-to-r from-accent to-accent-dark text-accent-foreground shadow-md hover:shadow-lg hover:from-accent-dark hover:to-accent"
                    : "bg-primary text-primary-foreground hover:bg-primary-dark shadow-sm hover:shadow-md"
                }`}
              >
                <span className="relative z-10 flex items-center gap-1.5">
                  Register
                  <motion.span className="group-hover/btn:translate-x-0.5 transition-transform">
                    <ArrowRight className="w-4 h-4" />
                  </motion.span>
                </span>
              </motion.button>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="text-center text-sm text-muted-foreground mt-6"
        >
          Secure payment via UPI, Credit/Debit Card, Net Banking, or Bank
          Transfer. Group discounts available for 5+ participants.
        </motion.p>
      </div>
    </section>
  );
};
