import { motion } from "framer-motion";
import { Dribbble, Twitter, Instagram, Youtube } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};

const stats = [
  { number: "+12", label: "YEARS OF\nEXPERIENCE" },
  { number: "+46", label: "PROJECTS\nCOMPLETED" },
  { number: "+20", label: "WORLDWIDE\nCLIENTS" },
];

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen pt-28 pb-16">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left - Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex justify-center lg:justify-start"
          >
            <div className="relative">
              {/* Dashed border decoration */}
              <div className="absolute -top-4 -left-4 w-[calc(100%+2rem)] h-[calc(100%+2rem)] border-2 border-dashed border-primary/40 rounded-3xl" />
              
              <div className="relative bg-foreground rounded-2xl p-6 pb-8 w-[340px] flex flex-col items-center">
                {/* Portrait */}
                <div className="w-[200px] h-[250px] rounded-xl overflow-hidden mb-4 relative">
                  <img
                    src="https://framerusercontent.com/images/w2hyXovpoCcfHZkjR4Hmr53RA5o.jpg?width=3456&height=5184"
                    alt="Aaabad Ahmed"
                    className="w-full h-full object-cover object-top"
                  />
                </div>

                {/* Name */}
                <h2 className="text-xl font-bold text-background mb-2">Aaabad Ahmed</h2>

                {/* Fire icon */}
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center mb-3">
                  <span className="text-sm">🔥</span>
                </div>

                {/* Tagline */}
                <p className="text-background/60 text-center text-sm leading-relaxed max-w-[260px]">
                  A Software Engineer who has developed countless innovative solutions.
                </p>

                {/* Social icons */}
                <div className="flex items-center gap-4 mt-5 text-background/40">
                  <Dribbble size={18} className="hover:text-primary transition-colors cursor-pointer" />
                  <Twitter size={18} className="hover:text-primary transition-colors cursor-pointer" />
                  <Instagram size={18} className="hover:text-primary transition-colors cursor-pointer" />
                  <Youtube size={18} className="hover:text-primary transition-colors cursor-pointer" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <div className="flex flex-col">
            <motion.h1
              custom={0}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="text-6xl md:text-8xl lg:text-[120px] font-black leading-[0.9] tracking-tight"
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
              className="text-muted-foreground mt-6 max-w-md text-base leading-relaxed"
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
              className="flex gap-10 mt-10"
            >
              {stats.map((stat) => (
                <div key={stat.number}>
                  <span className="text-4xl md:text-5xl font-black">{stat.number}</span>
                  <p className="text-xs text-muted-foreground mt-1 uppercase whitespace-pre-line tracking-wider">
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
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10"
            >
              <div className="bg-primary rounded-2xl p-6 relative overflow-hidden group cursor-pointer">
                <div className="absolute inset-0 opacity-20">
                  <svg className="w-full h-full" viewBox="0 0 200 200">
                    <circle cx="40" cy="40" r="30" stroke="currentColor" strokeWidth="0.5" fill="none" opacity="0.3" />
                    <circle cx="100" cy="80" r="50" stroke="currentColor" strokeWidth="0.5" fill="none" opacity="0.3" />
                  </svg>
                </div>
                <div className="relative z-10">
                  <div className="w-8 h-8 mb-12">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-primary-foreground">
                      <rect x="3" y="3" width="7" height="7" rx="1" />
                      <rect x="14" y="3" width="7" height="7" rx="1" />
                      <rect x="3" y="14" width="7" height="7" rx="1" />
                      <rect x="14" y="14" width="7" height="7" rx="1" />
                    </svg>
                  </div>
                  <h3 className="text-primary-foreground font-bold text-sm uppercase tracking-wider">
                    DYNAMIC ANIMATION,
                    <br />
                    MOTION DESIGN
                  </h3>
                  <div className="absolute bottom-6 right-6 w-8 h-8 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                    <span className="text-primary-foreground">→</span>
                  </div>
                </div>
              </div>

              <div className="bg-accent-lime rounded-2xl p-6 relative overflow-hidden group cursor-pointer">
                <div className="absolute inset-0 opacity-20">
                  <svg className="w-full h-full" viewBox="0 0 200 200">
                    <line x1="0" y1="0" x2="200" y2="200" stroke="currentColor" strokeWidth="0.5" opacity="0.4" />
                    <line x1="40" y1="0" x2="200" y2="160" stroke="currentColor" strokeWidth="0.5" opacity="0.4" />
                    <line x1="0" y1="40" x2="160" y2="200" stroke="currentColor" strokeWidth="0.5" opacity="0.4" />
                  </svg>
                </div>
                <div className="relative z-10">
                  <div className="w-8 h-8 mb-12">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-background">
                      <rect x="3" y="3" width="18" height="18" rx="2" />
                      <line x1="9" y1="3" x2="9" y2="21" />
                      <line x1="15" y1="3" x2="15" y2="21" />
                    </svg>
                  </div>
                  <h3 className="text-background font-bold text-sm uppercase tracking-wider">
                    FRAMER, FIGMA,
                    <br />
                    WORDPRESS, REACTJS
                  </h3>
                  <div className="absolute bottom-6 right-6 w-8 h-8 rounded-full bg-background/20 flex items-center justify-center">
                    <span className="text-background">→</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
