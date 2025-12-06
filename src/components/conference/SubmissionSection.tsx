import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FileText, Calendar, CheckCircle2, BookOpen } from "lucide-react";

const guidelines = [
  {
    icon: FileText,
    title: "Abstract Requirements",
    items: [
      "250-300 words maximum length",
      "Clear statement of objectives and methodology",
      "Key findings and conclusions summary",
      "5-6 relevant keywords",
    ],
  },
  {
    icon: BookOpen,
    title: "Full Paper Format",
    items: [
      "6,000-8,000 words including references",
      "IEEE double-column format template",
      "Times New Roman, 10pt font",
      "Minimum 15 recent references (post-2020)",
    ],
  },
  {
    icon: Calendar,
    title: "Important Deadlines",
    items: [
      "Abstract Submission: December 15, 2024",
      "Full Paper Deadline: January 31, 2025",
      "Notification of Acceptance: February 20, 2025",
      "Camera-Ready Version: March 1, 2025",
    ],
  },
  {
    icon: CheckCircle2,
    title: "Review Process",
    items: [
      "Double-blind peer review system",
      "Minimum two expert reviewers per paper",
      "15-20 day review turnaround",
      "Detailed feedback and revision guidelines",
    ],
  },
];


export const SubmissionSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="submission" className="section-padding bg-secondary">
      <div className="container-conference" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="inline-block px-3 py-1 rounded-md bg-accent/20 text-accent-foreground text-sm font-semibold mb-4">
            Author Guidelines
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Submission Guidelines
          </h2>
          <p className="text-muted-foreground">
            Follow these comprehensive guidelines to ensure your research contribution 
            meets our rigorous academic standards.
          </p>
        </motion.div>

        {/* Guidelines Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {guidelines.map((guide, index) => (
            <motion.div
              key={guide.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="card-conference"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <guide.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-foreground mb-3">{guide.title}</h3>
                  <ul className="space-y-2">
                    {guide.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Conference Video */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="card-conference"
        >
          <div className="text-center mb-6">
            <h3 className="text-xl font-bold text-foreground mb-2">Conference Overview</h3>
            <p className="text-muted-foreground">
              Watch our introductory video to learn more about ICISD 2025
            </p>
          </div>
          <div className="aspect-video w-full max-w-4xl mx-auto rounded-lg overflow-hidden">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="ICISD 2025 Conference Overview"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};