import { motion } from "framer-motion";

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
    <section id="experience" className="py-20">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-black mb-12 tracking-tight"
        >
          12 YEARS OF <span className="text-muted-foreground italic font-light">EXPERIENCE</span>
        </motion.h2>

        <div className="flex flex-col gap-4">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-card rounded-2xl p-6 md:p-8 border border-border hover:border-primary/20 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="flex-1">
                  <h3 className="font-bold text-xl mb-2">{exp.company}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed max-w-xl">
                    {exp.description}
                  </p>
                </div>
                <span className="text-muted-foreground text-sm whitespace-nowrap">{exp.period}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
