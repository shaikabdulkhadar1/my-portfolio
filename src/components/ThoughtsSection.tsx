import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const INITIAL_COUNT = 2;

const articles = [
  {
    title: "The Catholic University of America",
    subtitle: "MS in Computer Science",
    excerpt:
      "Completed my Master’s focusing on full-stack development, AI, and blockchain applications in public policy and automation.",
    date: "2025",
    read: "3.8 GPA",
  },
  {
    title: "Lords Institute of Engineering and Technology, JNTUH",
    subtitle: "B.Tech in Computer Science and Engineering",
    excerpt:
      "Completed a comprehensive undergraduate program in Computer Science, gaining foundational knowledge in programming, algorithms, and system design.",
    date: "2021",
    read: "7.72 GPA",
  },
  {
    title: "OSM Junior College",
    subtitle: "Intermediate",
    excerpt: "Specialized in Maths, Physics, and Chemistry",
    date: "2017",
    read: "7.7 GPA",
  },
  {
    title: "Hyderabad Islamic School",
    subtitle: "Secondary School Certificate",
    excerpt:
      "Completed my high school with a strong foundation in English, Maths, and Science",
    date: "2015",
    read: "8.8 GPA",
  },
];

const ThoughtsSection = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleArticles = showAll ? articles : articles.slice(0, INITIAL_COUNT);

  return (
    <section id="thoughts" className="py-20 pr-8 pl-0 lg:pr-10">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-6xl md:text-8xl lg:text-[6.5rem] font-black leading-[0.95] tracking-tighter"
      >
        EDUCATION
      </motion.h2>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-6xl md:text-7xl lg:text-[100px] font-black leading-[0.95] tracking-tighter mb-14"
        style={{ color: "rgba(182, 180, 189, 0.2)" }}
      >
        BACKGROUND
      </motion.h2>

      <div className="flex flex-col gap-1">
        <AnimatePresence initial={false}>
        {visibleArticles.map((article, i) => (
          <motion.div
            key={article.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12, duration: 0.5 }}
            className="group cursor-pointer"
          >
            <div className="rounded-2xl px-6 py-7 md:px-8 md:py-8 transition-colors duration-300 ease-out hover:bg-card-hover">
              <h3 className="font-bold text-lg mb-3 leading-snug">
                {article.title}
              </h3>
              <h4 className="font-bold text-md mb-3 text-muted-foreground italic">
                {article.subtitle}
              </h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {article.excerpt}
              </p>
              <div className="flex items-center gap-3 mt-4 text-xs text-muted-foreground">
                <span>{article.date}</span>
                <span>·</span>
                <span>{article.read}</span>
              </div>
            </div>
          </motion.div>
        ))}
        </AnimatePresence>
      </div>

      {articles.length > INITIAL_COUNT && (
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

export default ThoughtsSection;
