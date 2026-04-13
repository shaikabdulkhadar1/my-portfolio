import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Home, Monitor, BarChart3, Wrench, PenTool } from "lucide-react";

const navItems = [
  { icon: Home, label: "Home", href: "#home" },
  { icon: Monitor, label: "Projects", href: "#projects" },
  { icon: BarChart3, label: "Experience", href: "#experience" },
  { icon: Wrench, label: "Tools", href: "#tools" },
  { icon: PenTool, label: "Thoughts", href: "#thoughts" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const container = document.getElementById("scroll-container");
    if (!container) return;
    const handleScroll = () => setScrolled(container.scrollTop > 50);
    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`sticky top-6 z-50 flex items-center gap-1 px-2 py-2 rounded-full border border-border transition-all duration-300 w-fit mx-auto ${
        scrolled ? "bg-card/90 backdrop-blur-xl" : "bg-card/70 backdrop-blur-md"
      }`}
    >
      {navItems.map((item) => (
        <a
          key={item.label}
          href={item.href}
          className="p-3 rounded-full text-muted-foreground hover:text-foreground hover:bg-secondary transition-all duration-200"
          title={item.label}
        >
          <item.icon size={18} />
        </a>
      ))}
    </motion.nav>
  );
};

export default Navbar;
