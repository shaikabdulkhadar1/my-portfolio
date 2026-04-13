import { motion } from "framer-motion";
import { useState } from "react";

const budgetOptions = ["<$3k", "$3k - $5k", "$5k - $10k", ">$10k"];

const ContactSection = () => {
  const [budget, setBudget] = useState("");

  return (
    <section id="contact" className="py-20">
      <div className="container max-w-2xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-black mb-12 tracking-tight text-center"
        >
          LET'S WORK <span className="text-muted-foreground italic font-light">TOGETHER</span>
        </motion.h2>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-col gap-5"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="text"
            placeholder="Name"
            className="w-full bg-card border border-border rounded-xl px-5 py-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/40 transition-colors"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full bg-card border border-border rounded-xl px-5 py-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/40 transition-colors"
          />
          <select
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            className="w-full bg-card border border-border rounded-xl px-5 py-4 text-foreground appearance-none focus:outline-none focus:border-primary/40 transition-colors"
          >
            <option value="" disabled className="text-muted-foreground">Budget</option>
            {budgetOptions.map((opt) => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </select>
          <textarea
            placeholder="Message"
            rows={5}
            className="w-full bg-card border border-border rounded-xl px-5 py-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/40 transition-colors resize-none"
          />
          <button
            type="submit"
            className="w-full bg-primary text-primary-foreground font-semibold py-4 rounded-xl hover:opacity-90 transition-opacity"
          >
            Submit
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactSection;
