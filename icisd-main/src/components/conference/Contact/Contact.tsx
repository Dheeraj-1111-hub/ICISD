// icisd-main/src/pages/Contact.tsx
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="contact" className="py-16 md:py-20 bg-slate-50">
      <div className="container-conference" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="inline-block px-3 py-1 rounded-md bg-emerald-50 text-emerald-600 text-sm font-semibold mb-4">
            Contact
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Get in Touch
          </h2>

          <p className="text-slate-600 text-sm sm:text-base">
            Reach out to the ICISD’26 organizing committee for any
            conference-related queries.
          </p>
        </motion.div>


        <div className="grid lg:grid-cols-2 gap-10 items-stretch">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="space-y-4 max-w-xl mx-auto lg:mx-0"
          >
            <div
              className="
                bg-white
                border border-slate-200
                rounded-xl
                p-5
                flex gap-4
                shadow-sm
                hover:shadow-lg
                transition-all duration-200
              "
            >
              <Mail className="w-5 h-5 text-emerald-600 mt-0.5" />
              <div>
                <p className="text-sm font-semibold text-slate-700">
                  Email
                </p>
                <p className="text-slate-900 font-medium">
                  icisd.2026@gmail.com
                </p>
              </div>
            </div>
            <div
              className="
                bg-white
                border border-slate-200
                rounded-xl
                p-5
                flex gap-4
                shadow-sm
                hover:shadow-lg
                transition-all duration-200
              "
            >
              <Phone className="w-5 h-5 text-emerald-600 mt-0.5" />
              <div>
                <p className="text-sm font-semibold text-slate-700">
                  Contact
                </p>
                <p className="text-slate-900 font-medium">
                  Conference Secretary – +91 80561 25082
                </p>
              </div>
            </div>

       
            <div
              className="
                bg-white
                border border-slate-200
                rounded-xl
                p-5
                flex gap-4
                shadow-sm
                hover:shadow-lg
                transition-all duration-200
              "
            >
              <MapPin className="w-5 h-5 text-emerald-600 mt-0.5" />
              <div>
                <p className="text-sm font-semibold text-slate-700">
                  Location
                </p>
                <p className="text-slate-900 font-medium leading-relaxed">
                  SRM Institute of Science & Technology <br />
                  Vadapalani Campus, Chennai – 600026
                </p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT – MAP */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="
              bg-white
              border border-slate-200
              rounded-xl
              overflow-hidden
              shadow-sm
              hover:shadow-lg
              transition-all duration-200
            "
          >
            <iframe
              title="SRMIST Vadapalani Campus Map"
              src="https://www.google.com/maps?q=SRM%20Institute%20of%20Science%20and%20Technology%20Vadapalani&output=embed"
              className="w-full h-full min-h-[420px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
