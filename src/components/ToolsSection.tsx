import { motion } from "framer-motion";

const rows = [
  [
    { name: "React", icon: "https://cdn.simpleicons.org/react" },
    { name: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs/ffffff" },
    { name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript" },
    { name: "Tailwind", icon: "https://cdn.simpleicons.org/tailwindcss" },
    { name: "Figma", icon: "https://cdn.simpleicons.org/figma" },
    { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs" },
    { name: "Framer", icon: "https://cdn.simpleicons.org/framer/ffffff" },
    { name: "Vite", icon: "https://cdn.simpleicons.org/vite" },
  ],
  [
    { name: "Python", icon: "https://cdn.simpleicons.org/python" },
    { name: "Docker", icon: "https://cdn.simpleicons.org/docker" },
    { name: "PostgreSQL", icon: "https://cdn.simpleicons.org/postgresql" },
    { name: "MongoDB", icon: "https://cdn.simpleicons.org/mongodb" },
    { name: "Redis", icon: "https://cdn.simpleicons.org/redis" },
    { name: "GraphQL", icon: "https://cdn.simpleicons.org/graphql" },
    { name: "Firebase", icon: "https://cdn.simpleicons.org/firebase" },
    {
      name: "AWS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg",
    },
  ],
  [
    { name: "Git", icon: "https://cdn.simpleicons.org/git" },
    { name: "GitHub", icon: "https://cdn.simpleicons.org/github/ffffff" },
    {
      name: "VS Code",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg",
    },
    {
      name: "Google Cloud",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg",
    },
    { name: "Notion", icon: "https://cdn.simpleicons.org/notion/ffffff" },
    { name: "Vercel", icon: "https://cdn.simpleicons.org/vercel/ffffff" },
    { name: "Linux", icon: "https://cdn.simpleicons.org/linux/ffffff" },
    { name: "Prisma", icon: "https://cdn.simpleicons.org/prisma/ffffff" },
  ],
];

const getIconOpacity = (index: number, total: number) => {
  const center = (total - 1) / 2;
  const distFromCenter = Math.abs(index - center);
  const innerEdge = 1.5;
  if (distFromCenter <= innerEdge) return 1;
  const outerEdge = center;
  const t = (distFromCenter - innerEdge) / (outerEdge - innerEdge);
  return Math.max(0.1, 1 - t * 0.85);
};

const ToolsSection = () => {
  return (
    <section id="tools" className="py-20 pr-8 pl-0 lg:pr-10">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-6xl md:text-8xl lg:text-[6.5rem] font-black leading-[0.95] tracking-tighter"
      >
        TOOLS
      </motion.h2>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-6xl md:text-7xl lg:text-[100px] font-black leading-[0.95] tracking-tighter mb-14"
        style={{ color: "rgba(182, 180, 189, 0.2)" }}
      >
        I'VE USED
      </motion.h2>

      <div className="flex flex-col gap-5">
        {rows.map((row, rowIdx) => (
          <motion.div
            key={rowIdx}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: rowIdx * 0.15 }}
            className="flex items-center justify-center gap-8 md:gap-12"
          >
            {row.map((tool, colIdx) => (
              <div
                key={tool.name}
                className="flex items-center justify-center shrink-0 transition-all duration-300 hover:scale-125"
                title={tool.name}
                style={{ opacity: getIconOpacity(colIdx, row.length) }}
              >
                <img
                  src={tool.icon}
                  alt={tool.name}
                  className="w-8 h-8 md:w-10 md:h-10"
                />
              </div>
            ))}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ToolsSection;
