import React from "react";
import { Button } from "../Button";

const HomeHero = () => {
  return (
    <div className="flex items-center lg:flex-row flex-col justify-around pt-16">
      <div className="flex flex-col gap-4">
        <p className="text-white font-bold text-[4.5rem]">
          Foremost <br /> Export / Import & <br /> Relief Suppliers
        </p>
        <div className="w-full my-5 flex lg:block justify-center">
          <Button
            text={"Learn More"}
            classname="w-fit"
            navigateTo={"about"}
          />
        </div>
      </div>
      <img
        className="hidden lg:block"
        src={require("../../assets/png/home-hero.png")}
        alt="Home Hero"
      />
    </div>
  );
};

export { HomeHero };
