import React from "react";
import { ServicesHero } from "../components/Services";
import { ManpowerContent } from "../components/Manpower";
import { Banner, NextSteps } from "../components";

const Manpower = () => {
  return (
    <div>
      <ServicesHero bannerText={`Manpower`} />
      <Banner bannerText="We lead in all kinds of skilled and unskilled manpower across multiple continents, all over Europe and Middle East." />
      <ManpowerContent />
      <NextSteps />
    </div>
  );
};

export { Manpower };
