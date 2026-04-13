import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const },
  }),
};

const stats = [
  { number: "+12", label: "YEARS OF\nEXPERIENCE" },
  { number: "+46", label: "PROJECTS\nCOMPLETED" },
  { number: "+20", label: "WORLDWIDE\nCLIENTS" },
];

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen pt-28 pb-16 px-8 lg:px-12 flex flex-col justify-center">
      <motion.h1
        custom={0}
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        className="text-6xl md:text-7xl lg:text-[100px] font-black leading-[0.9] tracking-tight"
      >
        SOFTWARE
        <br />
        <span className="text-muted-foreground italic font-light">ENGINEER</span>
      </motion.h1>

      <motion.p
        custom={1}
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        className="text-muted-foreground mt-8 max-w-md text-base leading-relaxed"
      >
        Passionate about creating intuitive and engaging user experiences.
        Specialize in transforming ideas into beautifully crafted products.
      </motion.p>

      {/* Stats */}
      <motion.div
        custom={2}
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        className="flex gap-12 mt-12"
      >
        {stats.map((stat) => (
          <div key={stat.number}>
            <span className="text-5xl md:text-6xl font-black">{stat.number}</span>
            <p className="text-xs text-muted-foreground mt-2 uppercase whitespace-pre-line tracking-wider">
              {stat.label}
            </p>
          </div>
        ))}
      </motion.div>

      {/* Tag cards */}
      <motion.div
        custom={3}
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-12"
      >
        <div className="bg-primary rounded-2xl p-6 relative overflow-hidden group cursor-pointer min-h-[200px] flex flex-col justify-between">
          <div className="absolute inset-0 opacity-20">
            <svg className="w-full h-full" viewBox="0 0 200 200">
              <circle cx="40" cy="40" r="30" stroke="currentColor" strokeWidth="0.5" fill="none" opacity="0.3" />
              <circle cx="100" cy="80" r="50" stroke="currentColor" strokeWidth="0.5" fill="none" opacity="0.3" />
            </svg>
          </div>
          <div className="relative z-10">
            <div className="w-10 h-10 mb-8">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-primary-foreground">
                <rect x="3" y="3" width="7" height="7" rx="1" />
                <rect x="14" y="3" width="7" height="7" rx="1" />
                <rect x="3" y="14" width="7" height="7" rx="1" />
                <rect x="14" y="14" width="7" height="7" rx="1" />
              </svg>
            </div>
          </div>
          <div className="relative z-10 flex items-end justify-between">
            <h3 className="text-primary-foreground font-bold text-sm uppercase tracking-wider leading-snug">
              DYNAMIC ANIMATION,
              <br />
              MOTION DESIGN
            </h3>
            <div className="w-10 h-10 rounded-full bg-primary-foreground/20 flex items-center justify-center shrink-0 ml-4">
              <span className="text-primary-foreground text-lg">→</span>
            </div>
          </div>
        </div>

        <div className="bg-accent-lime rounded-2xl p-6 relative overflow-hidden group cursor-pointer min-h-[200px] flex flex-col justify-between">
          <div className="absolute inset-0 opacity-30">
            <svg className="w-full h-full" viewBox="0 0 200 200">
              <line x1="0" y1="0" x2="200" y2="200" stroke="currentColor" strokeWidth="0.5" opacity="0.4" />
              <line x1="40" y1="0" x2="200" y2="160" stroke="currentColor" strokeWidth="0.5" opacity="0.4" />
              <line x1="0" y1="40" x2="160" y2="200" stroke="currentColor" strokeWidth="0.5" opacity="0.4" />
              <line x1="80" y1="0" x2="200" y2="120" stroke="currentColor" strokeWidth="0.5" opacity="0.4" />
              <line x1="0" y1="80" x2="120" y2="200" stroke="currentColor" strokeWidth="0.5" opacity="0.4" />
              <line x1="120" y1="0" x2="200" y2="80" stroke="currentColor" strokeWidth="0.5" opacity="0.4" />
              <line x1="0" y1="120" x2="80" y2="200" stroke="currentColor" strokeWidth="0.5" opacity="0.4" />
            </svg>
          </div>
          <div className="relative z-10">
            <div className="w-10 h-10 mb-8">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-background">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <line x1="9" y1="3" x2="9" y2="21" />
                <line x1="15" y1="3" x2="15" y2="21" />
              </svg>
            </div>
          </div>
          <div className="relative z-10 flex items-end justify-between">
            <h3 className="text-background font-bold text-sm uppercase tracking-wider leading-snug">
              FRAMER, FIGMA,
              <br />
              WORDPRESS, REACTJS
            </h3>
            <div className="w-10 h-10 rounded-full bg-background/20 flex items-center justify-center shrink-0 ml-4">
              <span className="text-background text-lg">→</span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
