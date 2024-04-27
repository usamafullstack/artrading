import React from "react";
import { HomeHero, PartnersSection } from "../components/Home";
import { NextSteps, AboutSection, Cards } from "../components";

const Home = () => {
  return (
    <div>
      <HomeHero />
      <div className="w-8 h-2 bg-hover rounded-full mx-auto mt-20"></div>
      <AboutSection button={true} />
      <Cards isHomePage={true} />
      <PartnersSection />
      <div className="hidden lg:block w-8 h-2 bg-hover rounded-full mx-auto mt-28"></div>
      <NextSteps />
    </div>
  );
};

export { Home };
