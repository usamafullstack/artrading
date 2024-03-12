import React from "react";
import { AboutHero } from "../components/About";
import { AboutSection } from "../components/AboutSection";

const About = () => {
  return (
    <div>
      <AboutHero />
      <div className="w-8 h-2 bg-hover rounded-full mx-auto mt-20"></div>
      <AboutSection />
    </div>
  );
};

export { About };
