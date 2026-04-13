import { motion } from "framer-motion";
import { Dribbble, Twitter, Instagram, Youtube } from "lucide-react";

const ProfileCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="relative"
    >
      {/* Dashed border decoration */}
      <div className="absolute -top-4 -left-4 w-[calc(100%+2rem)] h-[calc(100%+2rem)] border-2 border-dashed border-primary/40 rounded-3xl" />

      <div className="relative bg-foreground rounded-2xl p-6 pb-8 w-[300px] flex flex-col items-center">
        {/* Portrait */}
        <div className="w-[180px] h-[220px] rounded-xl overflow-hidden mb-4 relative">
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
        <p className="text-background/60 text-center text-sm leading-relaxed max-w-[240px]">
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
    </motion.div>
  );
};

export default ProfileCard;
