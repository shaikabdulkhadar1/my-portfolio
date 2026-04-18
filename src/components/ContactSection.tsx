import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "shaikabdulkhadar1.shaik@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+1 (571) 561 - 4356 / +91 99491 62209",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Fairfax, Virginia, USA 22031",
  },
];

const MapEmbed = () => {
  const [active, setActive] = useState(false);
  const [showHint, setShowHint] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="relative w-full h-[200px] rounded-2xl overflow-hidden border border-border"
      onWheel={(e) => {
        if (!e.ctrlKey && !e.metaKey) {
          setShowHint(true);
          setTimeout(() => setShowHint(false), 1500);
        }
      }}
    >
      <iframe
        title="Location"
        src="https://www.openstreetmap.org/export/embed.html?bbox=-77.41,38.80,-77.20,38.90&layer=mapnik&marker=38.8460,-77.3053"
        className="w-full h-full border-0 grayscale opacity-80"
        loading="lazy"
      />
      {!active && (
        <div
          className="absolute inset-0 z-10 cursor-default"
          onWheel={(e) => {
            if (e.ctrlKey || e.metaKey) setActive(true);
          }}
          onClick={() => setActive(true)}
        />
      )}
      {active && (
        <div
          className="absolute inset-0 z-20"
          onMouseLeave={() => setActive(false)}
          style={{ pointerEvents: "none" }}
        />
      )}
      <div
        className={`absolute inset-0 z-30 flex items-center justify-center bg-black/50 backdrop-blur-sm transition-opacity duration-300 pointer-events-none ${showHint ? "opacity-100" : "opacity-0"}`}
      >
        <p className="text-white text-sm font-medium px-4 py-2 bg-black/60 rounded-lg">
          Hold Ctrl + scroll to zoom
        </p>
      </div>
    </motion.div>
  );
};

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 pr-8 pl-0 lg:pr-10">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-6xl md:text-8xl lg:text-[6.5rem] font-black leading-[0.95] tracking-tighter"
      >
        LET'S WORK
      </motion.h2>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-6xl md:text-7xl lg:text-[100px] font-black leading-[0.95] tracking-tighter mb-14"
        style={{ color: "rgba(182, 180, 189, 0.2)" }}
      >
        TOGETHER
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="flex flex-col gap-6"
      >
        <div className="flex flex-col gap-4">
          {contactInfo.map((item, i) => {
            const Content = (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                className="flex items-center gap-4 bg-card border border-border rounded-2xl px-5 py-4 group hover:border-primary/30 transition-colors"
              >
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <item.icon size={20} className="text-primary" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-0.5">
                    {item.label}
                  </p>
                  <p className="text-foreground font-medium text-sm truncate">
                    {item.value}
                  </p>
                </div>
              </motion.div>
            );

            return Content;
          })}
        </div>

        <MapEmbed />

        <motion.a
          href="mailto:shaikabdulkhadar1.shaik@gmail.com"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex items-center justify-center gap-3 w-full bg-primary text-primary-foreground font-semibold py-4 rounded-xl hover:opacity-90 transition-opacity no-underline"
        >
          <Mail size={18} />
          Write me
        </motion.a>
      </motion.div>
    </section>
  );
};

export default ContactSection;
