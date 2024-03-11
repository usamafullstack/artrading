import React from "react";
import { ReactComponent as HomeHeroImage } from "../../assets/home-hero.svg";
import { Button } from "../Button";

const HomeHero = () => {
  return (
    <div className="bg-primary flex items-center justify-around pt-16">
      <div className="flex flex-col gap-4">
        <p className="text-white font-bold text-[4.5rem]">
          Foremost <br /> Export / Import & <br /> Relief Suppliers
        </p>
        <Button
          text={"Learn More"}
          classname="w-fit"
        />
      </div>
      <HomeHeroImage />
    </div>
  );
};

export { HomeHero };
