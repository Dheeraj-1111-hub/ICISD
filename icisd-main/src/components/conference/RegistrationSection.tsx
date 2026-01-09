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
    title: "Author",
    subtitle: "Foreign Participants",
    earlyBird: 350,
    lateFee: 400,
    currency: "$",
    features: [
      "Paper Presentation",
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
    <section id="registration" className="py-16 md:py-20 bg-slate-50">
      <div className="container-conference" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="inline-block px-3 py-1 rounded-md bg-emerald-50 text-emerald-600 text-sm font-semibold mb-4">
            Registration Fees
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Conference Registration
          </h2>

          <p className="text-slate-600 text-sm sm:text-base">
            Early bird pricing is available for a limited period.  
            Fees are applicable as per category and shown in INR / USD.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {registrationCategories.map((category, index) => (
            <motion.div
              key={category.title + index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="
                bg-white
                border border-slate-200
                rounded-xl
                p-6
                flex flex-col
                shadow-sm
                hover:shadow-lg
                hover:border-emerald-500
                transition-all duration-200
              "
            >
              {/* Title */}
              <div className="text-center mb-5">
                <h3 className="text-lg font-bold text-slate-900 mb-1">
                  {category.title}
                </h3>
                <p className="text-sm text-slate-500">
                  {category.subtitle}
                </p>
              </div>

              {/* Pricing */}
              <div className="text-center mb-5 pb-4 border-b border-slate-200">
                <div className="text-4xl font-bold text-emerald-600">
                  {category.currency}
                  {category.earlyBird.toLocaleString(
                    category.currency === "₹" ? "en-IN" : "en-US"
                  )}
                </div>

                <div className="flex justify-center gap-2 mt-2">
                  <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-xs font-semibold">
                    Early Bird
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 text-xs font-semibold">
                    Late Fee
                  </span>
                </div>

                <p className="text-sm text-slate-600 mt-2">
                  Late:&nbsp;
                  <span className="font-semibold text-slate-900">
                    {category.currency}
                    {category.lateFee.toLocaleString(
                      category.currency === "₹" ? "en-IN" : "en-US"
                    )}
                  </span>
                </p>
              </div>

              {/* Features */}
              <ul className="space-y-2 flex-1 mb-6">
                {category.features.map((feature, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-sm text-slate-600"
                  >
                    <Check className="w-4 h-4 text-emerald-600 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Button */}
              <button
                className="
                  mt-auto
                  w-full
                  py-3
                  rounded-md
                  bg-emerald-600
                  text-white
                  font-semibold
                  hover:bg-emerald-500
                  transition-colors
                  flex items-center justify-center gap-2
                "
              >
                Register Now
                <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          ))}
        </div>

        {/* Footer Note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="text-center text-sm text-slate-500 mt-8"
        >
          Secure payment via UPI, Credit/Debit Card, Net Banking, or Bank Transfer.  
          Group discounts available for 5 or more participants.
        </motion.p>
      </div>
    </section>
  );
};
