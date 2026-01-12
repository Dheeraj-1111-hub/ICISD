import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Crown, Award, Shield, Users } from "lucide-react";
import { CommitteeCard } from "./CommitteeCard";

const committees = [
  {
    badge: "Leadership",
    title: "Chief Patron",
    icon: Crown,
    columns: "lg:grid-cols-1",
    members: [
      {
        name: "Dr. Richard Wellington",
        role: "Vice Chancellor",
        organization: "Global University of Technology",
      },
    ],
  },
  {
    badge: "Administration",
    title: "Organizing Committee",
    icon: Award,
    columns: "lg:grid-cols-4",
    members: [
      {
        name: "Prof. Sarah Mitchell",
        role: "Conference Chair",
        organization: "Department of Environmental Sciences",
      },
      {
        name: "Dr. Raj Patel",
        role: "Co-Chair",
        organization: "School of Engineering",
      },
      {
        name: "Dr. Lisa Chen",
        role: "Secretary",
        organization: "Research Administration",
      },
      {
        name: "Prof. David Thompson",
        role: "Treasurer",
        organization: "Finance Department",
      },
    ],
  },
  {
    badge: "Advisory",
    title: "Advisory Committee",
    icon: Shield,
    columns: "lg:grid-cols-3",
    members: [
      { name: "Prof. Hans Mueller", role: "Advisor", organization: "Technical University of Munich" },
      { name: "Dr. Yuki Tanaka", role: "Advisor", organization: "Kyoto University" },
      { name: "Prof. Emma Rodriguez", role: "Advisor", organization: "Stanford University" },
      { name: "Dr. Ahmed Hassan", role: "Advisor", organization: "Cairo University" },
      { name: "Prof. Marie Dubois", role: "Advisor", organization: "Sorbonne University" },
      { name: "Dr. John Smith", role: "Advisor", organization: "Oxford University" },
    ],
  },
  {
    badge: "Technical Review",
    title: "Technical Program Committee",
    icon: Users,
    columns: "lg:grid-cols-4",
    members: [
      { name: "Dr. Kevin O'Brien", role: "AI & Machine Learning", organization: "—" },
      { name: "Prof. Nina Petrov", role: "Renewable Energy", organization: "—" },
      { name: "Dr. Carlos Mendez", role: "Smart Cities", organization: "—" },
      { name: "Prof. Anna Kowalski", role: "Environmental Science", organization: "—" },
      { name: "Dr. James Wilson", role: "Data Science", organization: "—" },
      { name: "Prof. Fatima Al-Rashid", role: "Biotechnology", organization: "—" },
      { name: "Dr. Thomas Andersson", role: "Circular Economy", organization: "—" },
      { name: "Prof. Grace Kim", role: "Green Finance", organization: "—" },
    ],
  },
];

export const CommitteeSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="committee" className="py-20 md:py-28 bg-slate-50">
      <div className="container-conference" ref={ref}>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-700 text-sm font-semibold mb-4">
            Leadership & Governance
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Conference Committees
          </h2>

          <p className="text-slate-600 leading-relaxed">
            Distinguished academicians and professionals guiding ICISD 2025
            with expertise, integrity, and global perspective.
          </p>
        </motion.div>

        <div className="space-y-24">
          {committees.map((section, index) => {
            const Icon = section.icon;

            return (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                
                <div className="text-center mb-12">
                  <div className="flex items-center justify-center gap-3 mb-3">
                    <Icon className="w-5 h-5 text-emerald-600" />
                    <span className="text-sm font-semibold text-emerald-600">
                      {section.badge}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900">
                    {section.title}
                  </h3>

                  <div className="w-14 h-[2px] bg-emerald-600 mx-auto mt-4 rounded-full" />
                </div>
                <div className={`grid sm:grid-cols-2 ${section.columns} gap-6`}>
                  {section.members.map((member, i) => (
                    <CommitteeCard
                      key={i}
                      name={member.name}
                      role={member.role}
                      organization={member.organization}
                    />
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
