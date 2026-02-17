import { CommitteeCard } from "./CommitteeCard";
import { motion } from "framer-motion";

// Types for better structure
interface Speaker {
  name: string;
  role: string;
  organisation?: string;
  clgName?: string;
  country?: string;
}

const keynote: Speaker[] = [
  {
    name: "Gang Li",
    role: "Professor",
    organisation: "Deakin Cyber Research and Innovation Centre",
  },
];

const section1: Speaker[] = [
  {
    name: "John Doe",
    role: "Lead Researcher",
    organisation: "Global Tech Institute",
  },
];

function Guest() {
  return (
    <section className="py-16 md:py-20 bg-slate-50">
      <div className="container-conference">
        {/* Container for the two side-by-side columns */}
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          
          {/* Keynote Column */}
          <div className="flex-1 w-full">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 border-b-2 border-slate-200 pb-2">
                Keynote Speaker
              </h2>
            </motion.div>

            <div className="grid gap-6">
              {keynote.map((member, index) => (
                <CommitteeCard
                  key={`keynote-${index}`}
                  name={member.name}
                  role={member.role}
                  organization={member.organisation || member.clgName}
                />
              ))}
            </div>
          </div>

          {/* Section 1 Column */}
          <div className="flex-1 w-full">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 border-b-2 border-slate-200 pb-2">
                Section 1
              </h2>
            </motion.div>

            <div className="grid gap-6">
              {section1.map((member, index) => (
                <CommitteeCard
                  key={`section1-${index}`}
                  name={member.name}
                  role={member.role}
                  organization={member.organisation || member.clgName}
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Guest;