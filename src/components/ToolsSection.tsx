import { motion } from "framer-motion";
import { Globe, Palette, CreditCard, Bot, BookOpen, Code2 } from "lucide-react";

const tools = [
  { name: "Framer", desc: "Website Builder", icon: Globe },
  { name: "Figma", desc: "Design Tool", icon: Palette },
  { name: "Lemon Squeezy", desc: "Payments Provider", icon: CreditCard },
  { name: "ChatGPT", desc: "AI Assistant", icon: Bot },
  { name: "Notion", desc: "Productivity Tool", icon: BookOpen },
  { name: "Next.js", desc: "React framework", icon: Code2 },
];

const ToolsSection = () => {
  return (
    <section id="tools" className="py-20">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-black mb-12 tracking-tight"
        >
          PREMIUM <span className="text-muted-foreground italic font-light">TOOLS</span>
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {tools.map((tool, i) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              whileHover={{ y: -4, transition: { duration: 0.25 } }}
              className="bg-card rounded-2xl p-6 border border-border hover:border-primary/20 transition-all duration-300 cursor-pointer"
            >
              <tool.icon className="text-primary mb-4" size={28} />
              <h3 className="font-bold text-base">{tool.name}</h3>
              <p className="text-muted-foreground text-sm mt-1">{tool.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;
