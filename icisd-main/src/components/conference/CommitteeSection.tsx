import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Crown, Award, Users, Shield } from "lucide-react";

const committees = {
  patron: {
    title: "Chief Patron",
    icon: Crown,
    members: [
      { name: "Dr. Richard Wellington", title: "Vice Chancellor", org: "Global University of Technology" },
    ],
  },
  organizing: {
    title: "Organizing Committee",
    icon: Award,
    members: [
      { name: "Prof. Sarah Mitchell", title: "Conference Chair", org: "Department of Environmental Sciences" },
      { name: "Dr. Raj Patel", title: "Co-Chair", org: "School of Engineering" },
      { name: "Dr. Lisa Chen", title: "Secretary", org: "Research Administration" },
      { name: "Prof. David Thompson", title: "Treasurer", org: "Finance Department" },
    ],
  },
  advisory: {
    title: "Advisory Committee",
    icon: Shield,
    members: [
      { name: "Prof. Hans Mueller", title: "Technical University of Munich" },
      { name: "Dr. Yuki Tanaka", title: "Kyoto University" },
      { name: "Prof. Emma Rodriguez", title: "Stanford University" },
      { name: "Dr. Ahmed Hassan", title: "Cairo University" },
      { name: "Prof. Marie Dubois", title: "Sorbonne University" },
      { name: "Dr. John Smith", title: "Oxford University" },
    ],
  },
  technical: {
    title: "Technical Program Committee",
    icon: Users,
    members: [
      { name: "Dr. Kevin O'Brien", title: "AI & Machine Learning" },
      { name: "Prof. Nina Petrov", title: "Renewable Energy" },
      { name: "Dr. Carlos Mendez", title: "Smart Cities" },
      { name: "Prof. Anna Kowalski", title: "Environmental Science" },
      { name: "Dr. James Wilson", title: "Data Science" },
      { name: "Prof. Fatima Al-Rashid", title: "Biotechnology" },
      { name: "Dr. Thomas Andersson", title: "Circular Economy" },
      { name: "Prof. Grace Kim", title: "Green Finance" },
    ],
  },
};

export const CommitteeSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="committee" className="section-padding bg-background">
      <div className="container-conference" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="inline-block px-3 py-1 rounded-md bg-primary/10 text-primary text-sm font-semibold mb-4">
            Leadership
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Conference Committees
          </h2>
          <p className="text-muted-foreground">
            Meet the distinguished academics and industry leaders guiding ICISD 2025 
            to deliver an exceptional conference experience.
          </p>
        </motion.div>

        <div className="space-y-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <committees.patron.icon className="w-5 h-5 text-accent" />
              <h3 className="text-xl font-bold text-foreground">{committees.patron.title}</h3>
            </div>
            <div className="flex justify-center">
              {committees.patron.members.map((member) => (
                <div key={member.name} className="card-conference text-center max-w-sm bg-accent/5 border-accent/20">
                  <div className="w-16 h-16 mx-auto rounded-full bg-accent flex items-center justify-center mb-3">
                    <Crown className="w-8 h-8 text-accent-foreground" />
                  </div>
                  <h4 className="text-lg font-bold text-foreground">{member.name}</h4>
                  <p className="text-primary font-semibold text-sm">{member.title}</p>
                  <p className="text-sm text-muted-foreground">{member.org}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <committees.organizing.icon className="w-5 h-5 text-primary" />
              <h3 className="text-xl font-bold text-foreground">{committees.organizing.title}</h3>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {committees.organizing.members.map((member) => (
                <div key={member.name} className="card-conference text-center">
                  <h4 className="font-bold text-foreground">{member.name}</h4>
                  <p className="text-sm text-primary font-semibold">{member.title}</p>
                  <p className="text-xs text-muted-foreground">{member.org}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <committees.advisory.icon className="w-5 h-5 text-primary" />
              <h3 className="text-xl font-bold text-foreground">{committees.advisory.title}</h3>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {committees.advisory.members.map((member) => (
                <div key={member.name} className="card-conference flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold text-sm">{member.name.split(' ').map(n => n[0]).join('')}</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground text-sm">{member.name}</h4>
                    <p className="text-xs text-muted-foreground">{member.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.4 }}
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <committees.technical.icon className="w-5 h-5 text-primary" />
              <h3 className="text-xl font-bold text-foreground">{committees.technical.title}</h3>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {committees.technical.members.map((member) => (
                <div key={member.name} className="card-conference text-center py-3">
                  <h4 className="font-semibold text-foreground text-sm">{member.name}</h4>
                  <p className="text-xs text-primary">{member.title}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};