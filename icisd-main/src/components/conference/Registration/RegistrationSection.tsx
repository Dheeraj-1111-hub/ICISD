import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const RegistrationSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="registration" className="py-16 md:py-20 bg-slate-50">
      <div ref={ref} className="container-conference max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
            Conference Registration
          </h2>

          <p className="text-slate-600 text-sm sm:text-base">
            Registration fees are applicable as per category. Early bird pricing
            is available until March 5th, 2026
          </p>
        </motion.div>

        {/* Table */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="overflow-x-auto"
        >
          <table className="w-full bg-white border border-slate-300 rounded-xl overflow-hidden shadow-lg">
            <thead className="bg-emerald-600 text-white">
              <tr>
                <th className="px-8 py-5 text-left text-base font-bold border-r border-emerald-500">
                  Registration Category
                </th>
                <th className="px-8 py-5 text-center text-base font-bold border-r border-emerald-500">
                  Early Bird Fee
                </th>
                <th className="px-8 py-5 text-center text-base font-bold">
                  Late Fee
                </th>
              </tr>
            </thead>

            <tbody className="text-slate-800 text-base">
              {/* Row 1 */}
              <tr className="border-t border-slate-200 hover:bg-emerald-50/40 transition">
                <td className="px-8 py-6 border-r border-slate-200">
                  <div className="font-semibold text-slate-900">Author</div>
                  <div className="text-sm text-slate-500 mt-1">
                    UG / PG / Research Scholar (Indian)
                  </div>
                </td>
                <td className="px-8 py-6 text-center border-r border-slate-200 font-semibold text-lg">
                  ₹ 9,500
                </td>
                <td className="px-8 py-6 text-center font-semibold text-lg">
                  ₹ 11,000
                </td>
              </tr>

              {/* Row 2 */}
              <tr className="border-t border-slate-200 bg-slate-50 hover:bg-emerald-50/40 transition">
                <td className="px-8 py-6 border-r border-slate-200">
                  <div className="font-semibold text-slate-900">Author</div>
                  <div className="text-sm text-slate-500 mt-1">
                    Foreign Participants
                  </div>
                </td>
                <td className="px-8 py-6 text-center border-r border-slate-200 font-semibold text-lg">
                  $ 350
                </td>
                <td className="px-8 py-6 text-center font-semibold text-lg">
                  $ 400
                </td>
              </tr>

              {/* Row 3 */}
              <tr className="border-t border-slate-200 hover:bg-emerald-50/40 transition">
                <td className="px-8 py-6 border-r border-slate-200">
                  <div className="font-semibold text-slate-900">
                    Industry Delegate
                  </div>
                  <div className="text-sm text-slate-500 mt-1">
                    Industry Professionals
                  </div>
                </td>
                <td className="px-8 py-6 text-center border-r border-slate-200 font-semibold text-lg">
                  ₹ 11,000
                </td>
                <td className="px-8 py-6 text-center font-semibold text-lg">
                  ₹ 12,000
                </td>
              </tr>
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  );
};
