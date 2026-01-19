// icisd-main/src/components/conference/CommitteeSectionBlock.tsx
import { motion } from "framer-motion";
import { CommitteeCard } from "./CommitteeCard";

interface Member {
  name: string;
  role?: string;
  organization: string;
  img?:string;
}

interface CommitteeSectionBlockProps {
  badge: string;
  title: string;
  members: Member[];
  columns?: string;
}

export const CommitteeSectionBlock = ({
  badge,
  title,
  members,
  columns = "lg:grid-cols-3",
}: CommitteeSectionBlockProps) => {
  return (
    <section className="py-16 md:py-20 bg-slate-50">
      <div className="container-conference">
       
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >

          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            {title}
          </h2>
        </motion.div>

     
        <div className={`grid sm:grid-cols-2 ${columns} gap-6`}>
          {members.map((member, index) => (
            <CommitteeCard
              key={index}
              name={member.name}
              role={member.role}
              organization={member.organization}
              img={member.img}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
