import { Youtube } from "lucide-react";

const FloatingButtons = () => {
  return (
    <>
      {/* Video Tutorial - Bottom Left */}
      <a
        href="#"
        className="fixed bottom-6 left-6 z-50 flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2.5 rounded-full text-sm font-medium hover:opacity-90 transition-opacity"
      >
        <Youtube size={16} />
        Video Tutorial
      </a>

      {/* Right Side Buttons */}
      <div className="fixed right-6 bottom-6 z-50 flex flex-col gap-2 items-end">
        <a
          href="#"
          className="bg-primary text-primary-foreground px-5 py-2.5 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity"
        >
          Use Template for Free
        </a>
        <a
          href="#"
          className="bg-foreground text-background px-5 py-2.5 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity"
        >
          More Templates
        </a>
        <a
          href="#"
          className="bg-foreground text-background px-5 py-2.5 rounded-full text-sm font-medium hover:opacity-90 transition-opacity flex items-center gap-2"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm4.441 16.892c-2.102.144-6.784.144-8.883 0C5.282 16.736 5.017 15.622 5 12c.017-3.629.285-4.736 2.558-4.892 2.099-.144 6.782-.144 8.883 0C18.718 7.264 18.982 8.378 19 12c-.018 3.629-.285 4.736-2.559 4.892zM10 9.658l4.917 2.338L10 14.342V9.658z"/>
          </svg>
          Made in Framer
        </a>
      </div>
    </>
  );
};

export default FloatingButtons;
