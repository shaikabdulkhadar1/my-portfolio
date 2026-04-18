import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ToolsSection from "@/components/ToolsSection";
import ThoughtsSection from "@/components/ThoughtsSection";
import ContactSection from "@/components/ContactSection";
import ProfileCard from "@/components/ProfileCard";
import FloatingButtons from "@/components/FloatingButtons";

const Index = () => {
  return (
    <div className="h-screen bg-background text-foreground flex overflow-hidden relative">
      {/* Navbar - Fixed center of full page */}
      <Navbar />

      {/* Left Pane - Fixed Profile Card */}
      <div className="hidden lg:flex w-[40%] shrink-0 h-screen items-center justify-center p-4">
        <ProfileCard />
      </div>

      {/* Right Pane - Scrollable Content */}
      <div
        className="flex-1 pr-12 h-screen overflow-y-auto scroll-smooth"
        id="scroll-container"
      >
        <HeroSection />
        <ProjectsSection />
        <ExperienceSection />
        <ToolsSection />
        <ThoughtsSection />
        <ContactSection />
      </div>

      {/* Floating Buttons */}
      {/* <FloatingButtons /> */}
    </div>
  );
};

export default Index;
