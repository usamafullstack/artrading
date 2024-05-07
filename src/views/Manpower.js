import React from "react";
import { ServicesHero } from "../components/Services";
import { ManpowerContent } from "../components/Manpower";
import { Banner, NextSteps } from "../components";

const Manpower = () => {
  return (
    <div>
      <ServicesHero bannerText={`Manpower`} />
      <Banner bannerText="We deal in all skills placement across multiple continents like Europe and Middle East" />
      <ManpowerContent />
      <NextSteps />
    </div>
  );
};

export { Manpower };
