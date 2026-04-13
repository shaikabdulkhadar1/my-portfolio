import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ToolsSection from "@/components/ToolsSection";
import ThoughtsSection from "@/components/ThoughtsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ProfileCard from "@/components/ProfileCard";
import FloatingButtons from "@/components/FloatingButtons";

const Index = () => {
  return (
    <div className="h-screen bg-background text-foreground flex overflow-hidden relative">
      {/* Left Pane - Fixed Profile Card */}
      <div className="hidden lg:flex w-[420px] shrink-0 h-screen items-center justify-center p-8">
        <ProfileCard />
      </div>

      {/* Right Pane - Scrollable Content */}
      <div className="flex-1 h-screen overflow-y-auto scroll-smooth" id="scroll-container">
        <Navbar />
        <HeroSection />
        <ProjectsSection />
        <ExperienceSection />
        <ToolsSection />
        <ThoughtsSection />
        <ContactSection />
        <Footer />
      </div>

      {/* Floating Buttons */}
      <FloatingButtons />
    </div>
  );
};

export default Index;
