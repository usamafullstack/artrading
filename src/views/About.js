import React from "react";
import { AboutHero, BusinessProfessionals } from "../components/About";
import { AboutSection } from "../components/AboutSection";
import { NextSteps } from "../components/NextSteps";

const About = () => {
  return (
    <div>
      <AboutHero />
      <div className="w-8 h-2 bg-hover rounded-full mx-auto mt-20"></div>
      <AboutSection isHome />
      <BusinessProfessionals />
      <NextSteps />
    </div>
  );
};

export { About };
