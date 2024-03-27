import React from "react";
import { ServicesHero } from "../components/Services";
import { Cards, NextSteps } from "../components";

const Services = () => {
  return (
    <div className="px-7 mt-20">
      <ServicesHero />
      <div className="w-8 h-2 bg-hover rounded-full mx-auto my-20"></div>
      <Cards />
      <NextSteps />
    </div>
  );
};

export { Services };
