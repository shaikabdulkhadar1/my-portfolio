import { motion } from "framer-motion";

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
    <section id="projects" className="py-20">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-black mb-12 tracking-tight"
        >
          RECENT <span className="text-muted-foreground italic font-light">PROJECTS</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/30 transition-all duration-300 cursor-pointer"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <h3 className="font-bold text-lg">{project.title}</h3>
                <p className="text-muted-foreground text-sm mt-1">{project.subtitle}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
