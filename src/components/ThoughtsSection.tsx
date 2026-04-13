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
    excerpt: "Whether you work in marketing, sales, or product design, you understand the importance of a quality landing page. Landing pages are standalone websites used to generate leads or sales.",
    date: "Mar 15, 2022",
    read: "6min read",
  },
  {
    title: "How Can Designers Prepare for the Future?",
    excerpt: "Whether you work in marketing, sales, or product design, you understand the importance of a quality landing page. Landing pages are standalone websites used to generate leads or sales.",
    date: "Feb 28, 2022",
    read: "6min read",
  },
];

const ThoughtsSection = () => {
  return (
    <section id="thoughts" className="py-20">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-black mb-12 tracking-tight"
        >
          DESIGN <span className="text-muted-foreground italic font-light">THOUGHTS</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((article, i) => (
            <motion.div
              key={article.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="bg-card rounded-2xl p-6 border border-border hover:border-primary/20 transition-all duration-300 cursor-pointer flex flex-col"
            >
              <h3 className="font-bold text-lg mb-3 leading-snug">{article.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed flex-1">{article.excerpt}</p>
              <div className="flex items-center gap-3 mt-5 text-xs text-muted-foreground">
                <span>{article.date}</span>
                <span>·</span>
                <span>{article.read}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ThoughtsSection;
