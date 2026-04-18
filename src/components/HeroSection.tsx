import { motion } from "framer-motion";
import CountUp from "@/components/CountUp/CountUp";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1] as const,
    },
  }),
};

const stats = [
  { number: 12, label: "YEARS OF\nEXPERIENCE" },
  { number: 46, label: "PROJECTS\nCOMPLETED" },
  { number: 20, label: "WORLDWIDE\nCLIENTS" },
];

const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen pt-28 pb-16 pr-8 pl-0 lg:pr-10 flex flex-col justify-center"
    >
      <motion.h1
        custom={0}
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        className="text-6xl md:text-7xl lg:text-[100px] font-black leading-[0.9] tracking-tight"
      >
        SOFTWARE
        <br />
        <span
          className="text-6xl md:text-7xl lg:text-[100px] font-black leading-[0.95] tracking-tighter mb-14"
          style={{ color: "rgba(182, 180, 189, 0.2)" }}
        >
          ENGINEER
        </span>
      </motion.h1>

      <motion.p
        custom={1}
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        className="text-muted-foreground mt-8 max-w-xl text-base leading-relaxed"
      >
        Passionate about creating intuitive and engaging user experiences.
        Specialize in building scalable, real-world applications using the MERN
        stack, AWS/Azure, and modern AI frameworks like TensorFlow and Docker
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
            <span className="text-5xl md:text-6xl font-black">
              +
              <CountUp
                to={stat.number}
                from={0}
                duration={2.5}
                className="text-5xl md:text-6xl font-black"
              />
            </span>
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
        className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10"
      >
        <div className="bg-primary rounded-xl p-4 relative overflow-hidden group cursor-pointer min-h-[140px] flex flex-col justify-between">
          <div className="absolute inset-0 opacity-20">
            <svg className="w-full h-full" viewBox="0 0 200 200">
              <circle
                cx="40"
                cy="40"
                r="30"
                stroke="currentColor"
                strokeWidth="0.5"
                fill="none"
                opacity="0.3"
              />
              <circle
                cx="100"
                cy="80"
                r="50"
                stroke="currentColor"
                strokeWidth="0.5"
                fill="none"
                opacity="0.3"
              />
            </svg>
          </div>
          <div className="relative z-10">
            <div className="w-10 h-10 mb-8">
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="text-primary-foreground"
              >
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.866-.013-1.7-2.782.605-3.369-1.344-3.369-1.344-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.091-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.748-1.026 2.748-1.026.546 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.481A10.019 10.019 0 0 0 22 12.017C22 6.484 17.523 2 12 2Z" />
              </svg>
            </div>
          </div>
          <div
            className="relative z-10 flex items-end justify-between"
            onClick={() =>
              window.open("https://github.com/shaikabdulkhadar1", "_blank")
            }
          >
            <h3 className="text-primary-foreground font-bold text-sm uppercase tracking-wider leading-snug">
              SHAKABDULKHADAR1
            </h3>
            <div className="w-10 h-10 rounded-full bg-primary-foreground/20 flex items-center justify-center shrink-0 ml-4">
              <span className="text-primary-foreground text-lg">→</span>
            </div>
          </div>
        </div>

        <a
          href="/ABDUL_KHADAR_SHAIK.pdf"
          download="ABDUL_KHADAR_SHAIK.pdf"
          className="bg-accent-lime rounded-2xl p-6 relative overflow-hidden group cursor-pointer min-h-[200px] flex flex-col justify-between no-underline"
        >
          <div className="absolute inset-0 opacity-30">
            <svg className="w-full h-full" viewBox="0 0 200 200">
              <line
                x1="0"
                y1="0"
                x2="200"
                y2="200"
                stroke="currentColor"
                strokeWidth="0.5"
                opacity="0.4"
              />
              <line
                x1="40"
                y1="0"
                x2="200"
                y2="160"
                stroke="currentColor"
                strokeWidth="0.5"
                opacity="0.4"
              />
              <line
                x1="0"
                y1="40"
                x2="160"
                y2="200"
                stroke="currentColor"
                strokeWidth="0.5"
                opacity="0.4"
              />
              <line
                x1="80"
                y1="0"
                x2="200"
                y2="120"
                stroke="currentColor"
                strokeWidth="0.5"
                opacity="0.4"
              />
              <line
                x1="0"
                y1="80"
                x2="120"
                y2="200"
                stroke="currentColor"
                strokeWidth="0.5"
                opacity="0.4"
              />
              <line
                x1="120"
                y1="0"
                x2="200"
                y2="80"
                stroke="currentColor"
                strokeWidth="0.5"
                opacity="0.4"
              />
              <line
                x1="0"
                y1="120"
                x2="80"
                y2="200"
                stroke="currentColor"
                strokeWidth="0.5"
                opacity="0.4"
              />
            </svg>
          </div>
          <div className="relative z-10">
            <div className="w-10 h-10 mb-8">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="text-background"
              >
                <path d="M6 3h9l5 5v13a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z" />
                <path d="M14 3v5h5" />
                <line x1="8" y1="13" x2="16" y2="13" />
                <line x1="8" y1="17" x2="16" y2="17" />
              </svg>
            </div>
          </div>
          <div className="relative z-10 flex items-end justify-between">
            <h3 className="text-background font-bold text-sm uppercase tracking-wider leading-snug">
              MY RESUME
            </h3>
            <div className="w-10 h-10 rounded-full bg-background/20 flex items-center justify-center shrink-0 ml-4">
              <span className="text-background text-lg">→</span>
            </div>
          </div>
        </a>
      </motion.div>
    </section>
  );
};

export default HeroSection;
