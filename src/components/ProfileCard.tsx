import { motion } from "framer-motion";
import {
  Dribbble,
  Twitter,
  Link2,
  Youtube,
  Flame,
  Linkedin,
  Mail,
} from "lucide-react";

const ProfileCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="relative w-[400px]"
    >
      <div className="relative bg-card border border-border rounded-3xl px-0 pt-10 pb-10 flex flex-col items-center overflow-hidden">
        {/* Dashed orange arc — SVG curve from top-left across the photo and down */}
        <svg
          className="absolute top-0 left-0 w-full h-full pointer-events-none"
          viewBox="0 0 300 620"
          fill="none"
          preserveAspectRatio="none"
        >
          <path
            d="M-20 -30 Q 160 80, 240 180 Q 300 260, 200 360 Q 80 480, -10 540"
            stroke="hsl(18 100% 39%)"
            strokeWidth="2.5"
            strokeDasharray="12 10"
            fill="none"
          />
        </svg>

        {/* Portrait photo with orange background */}
        <div className="relative w-[300px] h-[300px] rounded-2xl overflow-hidden mb-6 z-10">
          <div className="absolute inset-0 bg-[hsl(18,78%,57%)]" />
          <img
            src="/photo.png"
            alt="Profile Picture"
            className="relative w-full h-full object-cover object-top"
            style={{ mixBlendMode: "multiply" }}
          />
        </div>

        {/* Name */}
        <h2 className="text-[1.75rem] font-black text-white tracking-tight text-center leading-tight mb-1 z-10">
          Shaik Abdul Khadar
        </h2>

        {/* Fire icon */}
        <div className="w-10 h-10 rounded-full bg-[hsl(18,78%,57%)] flex items-center justify-center my-4 z-10">
          <Flame size={20} className="text-white" />
        </div>

        {/* Tagline */}
        <p className="text-gray-400 text-center text-[0.9rem] leading-relaxed max-w-[230px] mb-6 z-10">
          The best transition in life is the transition from non-working state
          to working state.
        </p>

        {/* Social icons */}
        <div className="flex items-center gap-6 z-10">
          <Linkedin
            size={22}
            className="text-[hsl(18,78%,57%)] hover:text-[hsl(18,78%,57%)] hover:scale-110 transition-colors cursor-pointer"
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/shaikabdulkhadar1/",
                "_blank",
              )
            }
          />
          <Twitter
            size={22}
            className="text-[hsl(18,78%,57%)] hover:text-[hsl(18,78%,57%)] hover:scale-110 transition-colors cursor-pointer"
            onClick={() => window.open("https://x.com/S_A_Khadar", "_blank")}
          />
          <Link2
            size={22}
            className="text-[hsl(18,78%,57%)] hover:text-[hsl(18,78%,57%)] hover:scale-110 transition-colors cursor-pointer"
            onClick={() =>
              window.open("https://linktr.ee/shaikabdulkhadar", "_blank")
            }
          />
          <Mail
            size={22}
            className="text-[hsl(18,78%,57%)] hover:text-[hsl(18,78%,57%)] hover:scale-110 transition-colors cursor-pointer"
            onClick={() =>
              window.open("mailto:shaikabdulkhadar1.shaik@gmail.com", "_blank")
            }
          />
        </div>
      </div>
    </motion.div>
  );
};

export default ProfileCard;
