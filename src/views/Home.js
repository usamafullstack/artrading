import React from "react";
import { Cards, HomeHero } from "../components/Home";
import { AboutSection } from "../components/AboutSection";

const Home = () => {
  return (
    <div>
      <HomeHero />
      <div className="w-8 h-2 bg-hover rounded-full mx-auto mt-20"></div>
      <AboutSection button={true} />
      <Cards isHomePage={true} />
    </div>
  );
};

export { Home };
