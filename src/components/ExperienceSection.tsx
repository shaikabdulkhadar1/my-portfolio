import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const experiences = [
  {
    company: "PixelForge Studios",
    description: "Led the design team in creating user-centric mobile and web applications, improving the user experience and increasing user engagement.",
    period: "Jan 2020 - Present",
  },
  {
    company: "BlueWave Innovators",
    description: "Developed and implemented design strategies for new product lines, collaborated closely with engineers and product managers.",
    period: "Jun 2017 - Dec 2019",
  },
  {
    company: "TrendCraft Solutions",
    description: "Designed user interfaces for e-commerce platforms, focusing on enhancing usability and visual appeal.",
    period: "Mar 2015 - May 2017",
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 px-8 lg:px-12">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-5xl md:text-7xl font-black mb-4 tracking-tight"
      >
        12 YEARS OF
      </motion.h2>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-5xl md:text-7xl font-light italic text-muted-foreground mb-14 tracking-tight"
      >
        EXPERIENCE
      </motion.h2>

      <div className="flex flex-col">
        {experiences.map((exp, i) => (
          <motion.div
            key={exp.company}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="py-8 border-b border-border group cursor-pointer relative"
          >
            <div className="flex justify-between items-start">
              <div className="flex-1 max-w-xl">
                <h3 className="font-bold text-xl mb-3">{exp.company}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {exp.description}
                </p>
                <span className="text-muted-foreground text-sm mt-4 block">{exp.period}</span>
              </div>
              <ArrowUpRight size={20} className="text-muted-foreground group-hover:text-foreground transition-colors shrink-0 mt-1" />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
