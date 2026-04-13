import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "NajmAI",
    subtitle: "SaaS Framer Template",
    image: "https://framerusercontent.com/images/4mYEXU91rLBNKIW9k6hZh16l7Q.jpeg?width=2400&height=1800",
  },
  {
    title: "Damas",
    subtitle: "Free Framer Template",
    image: "https://framerusercontent.com/images/5Ra4AFZmEJOkMGLAEjkRXt2oqF4.png?width=2400&height=1800",
  },
  {
    title: "Faseelh",
    subtitle: "Free Framer Template",
    image: "https://framerusercontent.com/images/GyxvLZ0U5MeFKnTaiObmffY.png?width=2400&height=1800",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 px-8 lg:px-12">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-5xl md:text-7xl font-black mb-4 tracking-tight"
      >
        RECENT
      </motion.h2>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-5xl md:text-7xl font-light italic text-muted-foreground mb-14 tracking-tight"
      >
        PROJECTS
      </motion.h2>

      <div className="flex flex-col">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="flex items-center gap-6 py-6 border-b border-border group cursor-pointer hover:opacity-80 transition-opacity"
          >
            <div className="w-[120px] h-[90px] rounded-xl overflow-hidden shrink-0 bg-card">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-xl">{project.title}</h3>
              <p className="text-muted-foreground text-sm mt-1">{project.subtitle}</p>
            </div>
            <ArrowUpRight size={20} className="text-muted-foreground group-hover:text-foreground transition-colors shrink-0" />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
