import { motion } from "framer-motion";

const articles = [
  {
    title: "Starting and Growing a Career in Web Design",
    excerpt: "As the internet continues to develop and grow exponentially, jobs related to the industry do too, particularly those that relate to web design and development.",
    date: "Apr 8, 2022",
    read: "6min read",
  },
  {
    title: "Create a Landing Page That Performs Great",
    excerpt: "Whether you work in marketing, sales, or product design, you understand the importance of a quality landing page.",
    date: "Mar 15, 2022",
    read: "6min read",
  },
  {
    title: "How Can Designers Prepare for the Future?",
    excerpt: "Whether you work in marketing, sales, or product design, you understand the importance of a quality landing page.",
    date: "Feb 28, 2022",
    read: "6min read",
  },
];

const ThoughtsSection = () => {
  return (
    <section id="thoughts" className="py-20 px-8 lg:px-12">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-5xl md:text-7xl font-black mb-4 tracking-tight"
      >
        DESIGN
      </motion.h2>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-5xl md:text-7xl font-light italic text-muted-foreground mb-14 tracking-tight"
      >
        THOUGHTS
      </motion.h2>

      <div className="flex flex-col gap-5">
        {articles.map((article, i) => (
          <motion.div
            key={article.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12, duration: 0.5 }}
            className="bg-card rounded-2xl p-6 border border-border hover:border-primary/20 transition-all duration-300 cursor-pointer"
          >
            <h3 className="font-bold text-lg mb-3 leading-snug">{article.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{article.excerpt}</p>
            <div className="flex items-center gap-3 mt-4 text-xs text-muted-foreground">
              <span>{article.date}</span>
              <span>·</span>
              <span>{article.read}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ThoughtsSection;
