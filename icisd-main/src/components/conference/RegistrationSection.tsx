import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Check, ArrowRight } from "lucide-react";

const registrationCategories = [
  {
    title: "Author",
    subtitle: "UG / PG / Research Scholar (Indian)",
    earlyBird: 9500,
    lateFee: 11000,
    currency: "₹",
    features: [
      "Paper Presentation",
      "Conference Access",
      "Digital Proceedings",
      "Certificate",
      "Lunch & Refreshments",
    ],
  },
  {
    title: "Attendee",
    subtitle: "Foreign Participants",
    earlyBird: 350,
    lateFee: 400,
    currency: "$",
    features: [
      "Conference Access",
      "Digital Proceedings",
      "Certificate",
      "Lunch & Refreshments",
    ],
  },
  {
    title: "Industry Delegate",
    subtitle: "Industry Professionals",
    earlyBird: 11000,
    lateFee: 12000,
    currency: "₹",
    features: [
      "Conference Access",
      "Digital Proceedings",
      "Certificate",
      "Lunch & Refreshments",
      "Networking Opportunities",
    ],
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
        {/* Header */}
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
            Early bird pricing available for a limited time.  
            Fees are shown in INR and USD where applicable.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {registrationCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ y: -6 }}
              className="relative card-conference flex flex-col p-5 md:p-6 rounded-lg overflow-hidden group transition-all duration-300 hover:shadow-lg"
            >
              {/* Hover Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />

              {/* Title */}
              <div className="text-center mb-4">
                <h3 className="text-lg md:text-xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                  {category.title}
                </h3>
                <p className="text-xs md:text-sm text-muted-foreground">
                  {category.subtitle}
                </p>
              </div>

              {/* Pricing */}
              <div className="text-center mb-4 pb-3 border-b border-border/50 min-h-[96px]">
                <span className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  {category.currency}
                  {category.earlyBird.toLocaleString(
                    category.currency === "₹" ? "en-IN" : "en-US"
                  )}
                </span>

                <div className="flex justify-center gap-2 mt-2">
                  <span className="px-2 py-0.5 rounded-full bg-accent/20 text-accent-foreground text-xs font-semibold">
                    Early Bird
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-muted text-muted-foreground text-xs font-semibold">
                    Late Fee
                  </span>
                </div>

                <p className="text-xs md:text-sm text-muted-foreground mt-2">
                  Late:{" "}
                  <span className="font-semibold text-foreground">
                    {category.currency}
                    {category.lateFee.toLocaleString(
                      category.currency === "₹" ? "en-IN" : "en-US"
                    )}
                  </span>
                </p>
              </div>

              {/* Features */}
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
                    <Check className="w-4 h-4 text-accent mt-0.5" />
                    <span className="group-hover:text-foreground transition-colors">
                      {feature}
                    </span>
                  </motion.li>
                ))}
              </ul>

              {/* Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full py-2.5 md:py-3 rounded-md font-semibold text-sm md:text-base bg-primary text-primary-foreground hover:bg-primary-dark shadow-sm hover:shadow-md flex items-center justify-center gap-1.5"
              >
                Register
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* Footer Note */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="text-center text-sm text-muted-foreground mt-6"
        >
          Secure payment via UPI, Credit/Debit Card, Net Banking, or Bank Transfer.
          Group discounts available for 5+ participants.
        </motion.p>
      </div>
    </section>
  );
};
