import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const INITIAL_COUNT = 3;

const projects = [
  {
    title: "Dev Tools Hub",
    subtitle:
      "A scalable web application offering essential developer utilities with an intuitive and engaging user experience, built through a highly creative and iterative development approach.",
    image: "/projectImages/dev-tools-hub-2Gepd3KP.png",
    link: "https://tools-dev-five.vercel.app/",
    tools: [
      "MERN Stack",
      "Typescript",
      "Generative AI",
      "Claude",
      "Google Gemini",
    ],
  },
  {
    title: "AI based QA Bugs assistant",
    subtitle:
      "A web application that streamlines quality assurance and bug tracking with a robust backend and an intuitive, user-focused interface built through a creative and iterative development approach.",
    image: "/projectImages/bugs-qa-DYyEOI7H.png",
    link: "https://bugs-qa.vercel.app/",
    tools: [
      "MERN Stack",
      "Typescript",
      "Generative AI",
      "Claude",
      "Google Gemini",
    ],
  },
  {
    title: "AI Code Assistant",
    subtitle:
      "A full-stack AI-powered assistant with real-time communication and secure authentication, delivering an interactive and efficient user experience.",
    image: "/projectImages/ai-chatbot-Do1GcecY.webp",
    link: "",
    tools: [
      "ReactJS",
      "Node.js",
      "MongoDB",
      "Express.js",
      "Sockets",
      "Google Gemini",
    ],
  },
  {
    title: "Weather App",
    subtitle:
      "Built a responsive weather application that provides real-time city-based forecasts with a seamless user experience and efficient data handling.",
    image: "/projectImages/weather-app-85VGrteI.png",
    link: "",
    tools: ["ReactJS", "Node.js", "TailwindCSS", "Express.js", "APIs"],
  },
  {
    title: "Contact Management System (CRM)",
    subtitle:
      "Developed a full-stack contact management system with secure authentication and core CRUD functionalities for efficient and protected data management.",
    image: "/projectImages/cms-h2J-wjDr.webp",
    link: "",
    tools: ["ReactJS", "Node.js", "TailwindCSS", "Express.js", "MongoDB"],
  },
  {
    title: "Netflix Clone",
    subtitle:
      "Built a Netflix-style streaming platform with genre-based content delivery, enhancing user engagement through a dynamic and personalized viewing experience.",
    image: "/projectImages/netflix-clone-C4TYXNUh.jpg",
    link: "",
    tools: ["MERN Stack", "Redux Toolkit", "Firebase", "Axios"],
  },
  {
    title: "Deep Fake Detection",
    subtitle:
      "Led development as the primary contributor for a HacktoberFest project, driving core functionality and delivering the majority of the codebase.",
    image: "/projectImages/deep-fake-using-python-DuyYfaWg.webp",
    link: "https://github.com/shaikabdulkhadar1/Deepfake-Detection-with-Python",
    tools: ["Python", "TensorFlow", "OpenCV", "Keras"],
  },
  {
    title: "ML-based Cloud Service Provider",
    subtitle:
      "Built an ML-based smart cloud storage system that optimizes resource usage and reduces costs through intelligent analysis, significantly improving efficiency and performance.",
    image: "/projectImages/cloud-service-provider-Ct7sqvHQ.jpeg",
    link: "",
    tools: ["Python", "TensorFlow", "OpenCV", "Keras"],
  },
  {
    title: "Encrypted File Storage System",
    subtitle:
      "Developed a secure file storage system using hybrid cryptography to protect sensitive data, achieving enhanced security and improved decryption performance.",
    image: "/projectImages/encrypted-fs-R88gQZyM.png",
    link: "",
    tools: ["Python", "RSA", "Blowfish", "DES", "Hybrid Cryptography"],
  },
  {
    title: "J.A.R.V.I.S - An AI Virtual Assistant",
    subtitle:
      "Led the development of an AI-based virtual voice assistant that processes voice commands efficiently, delivering improved performance, scalability, and streamlined code complexity.",
    image: "/projectImages/jarvis-CNJvL1Ro.jpg",
    link: "",
    tools: ["Python", "TensorFlow", "Keras", "NLTK"],
  },
];

const ProjectsSection = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? projects : projects.slice(0, INITIAL_COUNT);

  return (
    <section id="projects" className="py-20 pr-8 pl-0 lg:pr-10">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-6xl md:text-8xl lg:text-[6.5rem] font-black leading-[0.95] tracking-tighter"
      >
        RECENT
      </motion.h2>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-6xl md:text-7xl lg:text-[100px] font-black leading-[0.95] tracking-tighter mb-14"
        style={{ color: "rgba(182, 180, 189, 0.2)" }}
      >
        PROJECTS
      </motion.h2>

      <div className="flex flex-col gap-1">
        <AnimatePresence initial={false}>
          {visibleProjects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group cursor-pointer"
            >
              <div className="rounded-2xl px-6 py-7 md:px-8 md:py-8 transition-colors duration-300 ease-out hover:bg-card-hover">
                <div className="flex items-center gap-6">
                  <div className="w-[120px] h-[90px] rounded-xl overflow-hidden shrink-0 bg-card">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-xl">{project.title}</h3>
                    <p className="text-muted-foreground text-sm mt-1">
                      {project.subtitle}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {project.tools.map((tool) => (
                        <span
                          key={tool}
                          className="text-muted-foreground text-sm bg-card rounded-full px-2 py-1"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                  <ArrowUpRight
                    size={20}
                    className="text-muted-foreground shrink-0 transition-colors duration-300 group-hover:text-accent-orange"
                    aria-hidden
                    onClick={() => window.open(project.link, "_blank")}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {projects.length > INITIAL_COUNT && (
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

export default ProjectsSection;
