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
      <div className="absolute -top-4 -left-4 w-[calc(100%+2rem)] h-[calc(100%+2rem)] border-2 border-dashed border-primary/50 rounded-3xl" />

      <div className="relative bg-foreground rounded-2xl p-6 pb-8 w-[280px] flex flex-col items-center">
        {/* Portrait with orange/red gradient background */}
        <div className="w-full h-[280px] rounded-xl overflow-hidden mb-5 relative bg-primary">
          <img
            src="https://framerusercontent.com/images/w2hyXovpoCcfHZkjR4Hmr53RA5o.jpg?width=3456&height=5184"
            alt="Aaabad Ahmed"
            className="w-full h-full object-cover object-top mix-blend-multiply"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/60 via-primary/30 to-primary/80" />
          <img
            src="https://framerusercontent.com/images/w2hyXovpoCcfHZkjR4Hmr53RA5o.jpg?width=3456&height=5184"
            alt=""
            className="absolute inset-0 w-full h-full object-cover object-top"
            style={{ mixBlendMode: "luminosity", opacity: 0.9 }}
          />
        </div>

        {/* Name */}
        <h2 className="text-2xl font-black text-background mb-3 tracking-tight">Aaabad Ahmed</h2>

        {/* Fire icon */}
        <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center mb-4">
          <span className="text-base">🔥</span>
        </div>

        {/* Dashed curve decoration */}
        <div className="w-[120px] h-[40px] border-2 border-dashed border-primary/40 rounded-full mb-3 border-t-0" />

        {/* Tagline */}
        <p className="text-background/60 text-center text-sm leading-relaxed max-w-[220px]">
          A Software Engineer who has developed countless innovative solutions.
        </p>

        {/* Social icons */}
        <div className="flex items-center gap-5 mt-6 text-background/40">
          <Dribbble size={20} className="hover:text-primary transition-colors cursor-pointer" />
          <Twitter size={20} className="hover:text-primary transition-colors cursor-pointer" />
          <Instagram size={20} className="hover:text-primary transition-colors cursor-pointer" />
          <Youtube size={20} className="hover:text-primary transition-colors cursor-pointer" />
        </div>
      </div>
    </motion.div>
  );
};

export default ProfileCard;
