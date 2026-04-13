import { motion } from "framer-motion";

const tools = [
  { name: "Framer", desc: "Website Builder", icon: "https://cdn.simpleicons.org/framer/000000" },
  { name: "Figma", desc: "Design Tool", icon: "https://cdn.simpleicons.org/figma" },
  { name: "Lemon Squeezy", desc: "Payments Provider", icon: "https://cdn.simpleicons.org/lemonsqueezy" },
  { name: "ChatGPT", desc: "AI Assistant", icon: "https://cdn.simpleicons.org/openai/000000" },
  { name: "Notion", desc: "Productivity Tool", icon: "https://cdn.simpleicons.org/notion/000000" },
  { name: "Nextjs", desc: "React framework", icon: "https://cdn.simpleicons.org/nextdotjs/000000" },
];

const ToolsSection = () => {
  return (
    <section id="tools" className="py-20 px-8 lg:px-12">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-5xl md:text-7xl font-black italic mb-4 tracking-tight"
      >
        PREMIUM
      </motion.h2>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-5xl md:text-7xl font-light italic text-muted-foreground mb-14 tracking-tight"
      >
        TOOLS
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {tools.map((tool, i) => (
          <motion.div
            key={tool.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.5 }}
            className="bg-foreground rounded-2xl p-5 flex items-center gap-4 cursor-pointer hover:opacity-90 transition-opacity"
          >
            <div className="w-12 h-12 rounded-xl bg-background/10 flex items-center justify-center shrink-0 overflow-hidden">
              <img src={tool.icon} alt={tool.name} className="w-7 h-7" />
            </div>
            <div>
              <h3 className="font-bold text-base text-background">{tool.name}</h3>
              <p className="text-background/50 text-sm">{tool.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ToolsSection;
