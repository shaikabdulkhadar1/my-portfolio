import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const INITIAL_COUNT = 3;

const experiences = [
  {
    company: "Perfect Solutions Group Inc",
    title: "AI / ML Engineer",
    description:
      "Led end-to-end ML system architecture processing 100M+ records, building high-performance models that improved accuracy by 30%+ and reduced latency through optimization. Designed scalable MLOps pipelines and distributed workflows, cutting deployment time by 35%, accelerating experimentation by 50%, and reducing compute costs by 18%.",
    period: "Jun 2025 - Present",
  },
  {
    company: "The Catholic University of America",
    title: "Student Assistant",
    description:
      "Assisted in the development and deployment of the Public Goods Game to support behavioral economics research Collaborated on designing experiments for student engagement, including a rollout in Ghana. Co-curated a graduate-level syllabus on Blockchain and Public Policy, integrating emerging tech into education.",
    period: "Nov 2023 - Dec 2024",
  },
  {
    company: "Events and Conference Services @ CUA",
    title: "Operations Assistant",
    description:
      "Coordinated logistics for 20+ campus events including conferences and workshops. Used tools like When2Work, 25Live, and Trello to streamline scheduling and communication. Ensured smooth event setup and breakdown while managing operational deliverables effectively.",
    period: "Sep 2023 - Oct 2024",
  },
  {
    company: "Indian Student Association @ CUA",
    title: "Treasurer / Public Relations Director",
    description:
      "Managed financial planning and budgeting for 10+ cultural and community events. Represented ISA at university-level meetings to foster collaboration and visibility. Led digital engagement strategy and improved online presence through UX improvements.",
    period: "Sep 2023 - Apr 2024",
  },
  {
    company: "KC Overseas Education Pvt. Ltd.",
    title: "IT Consultant",
    description:
      "Led a team in developing scalable web applications using React and Node.js for student services. Collaborated with cross-functional departments to automate workflows and enhance digital platforms. Provided technical consultation for system upgrades, integrations, and process improvements.",
    period: "Oct 2021 - Jun 2023",
  },
  {
    company: "IIT Bombay",
    title: "Intern Campus Ambassador",
    description:
      "Acted as a liaison between IIT Bombay and local institutions to promote technical events and workshops. Drove student participation by conducting outreach, presentations, and promotional campaigns. Enhanced event visibility through social media and on-campus engagement initiatives.",
    period: "Jul 2020 - Jul 2020",
  },
  {
    company: "HouseItt & WeSettle",
    title: "Intern Business Development Associate",
    description:
      "Assisted in lead generation and client acquisition strategies for housing and relocation services. Engaged with customers to understand needs and recommend tailored solutions. Supported market research efforts and pitched service offerings to potential partners.",
    period: "Oct 2020 - Nov 2020",
  },
];

const ExperienceSection = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleExperiences = showAll
    ? experiences
    : experiences.slice(0, INITIAL_COUNT);

  return (
    <section id="experience" className="py-20 pr-8 pl-0 lg:pr-10">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-6xl md:text-8xl lg:text-[6.5rem] font-black leading-[0.95] tracking-tighter"
      >
        5 YEARS OF
      </motion.h2>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-6xl md:text-7xl lg:text-[100px] font-black leading-[0.95] tracking-tighter mb-14"
        style={{ color: "rgba(182, 180, 189, 0.2)" }}
      >
        EXPERIENCE
      </motion.h2>

      <div className="flex flex-col gap-1">
        <AnimatePresence initial={false}>
          {visibleExperiences.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group cursor-pointer"
            >
              <div className="rounded-2xl px-6 py-7 md:px-8 md:py-8 transition-colors duration-300 ease-out hover:bg-card-hover">
                <div className="flex justify-between items-start gap-6">
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-xl mb-3">{exp.title}</h3>
                    <h4 className="font-bold text-md mb-3 text-muted-foreground italic">
                      {exp.company}
                    </h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {exp.description}
                    </p>
                    <span className="text-muted-foreground text-sm mt-4 block">
                      {exp.period}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {experiences.length > INITIAL_COUNT && (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-6 flex justify-center"
        >
          <button
            onClick={() => setShowAll((prev) => !prev)}
            className="px-6 py-3 rounded-full border border-muted-foreground/20 text-sm font-semibold uppercase tracking-wider text-muted-foreground hover:text-foreground hover:border-foreground/40 transition-colors duration-300"
          >
            {showAll ? "Show Less" : "Show More"}
          </button>
        </motion.div>
      )}
    </section>
  );
};

export default ExperienceSection;
