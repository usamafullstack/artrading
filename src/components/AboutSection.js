import React from "react";
import { Button } from "./Button";

const AboutSection = ({ isHome, button, classname }) => {
  return (
    <section className={`grid grid-flow-col gap-16 px-16 my-28 ${classname}`}>
      <div className="w-full h-full">
        <img
          src={require("../assets/about-image.png")}
          height={500}
          width={500}
        />
      </div>
      <div className="w-full h-full mt-8 flex flex-col gap-4">
        <div className="flex items-center gap-1">
          <img
            src={require("../assets/pointer.png")}
            height={20}
            width={20}
          />
          <p className="text-white font-bold">Who we are</p>
        </div>
        <p className="font-bold text-white text-6xl">
          <span className="text-secondary">A&R Trading</span> mission is to
          provide best services
        </p>
        <p className="text-grey text-xl">
          A&R Trading (Pvt) Ltd incorporated in 2019 is one of the best
          manufacturers in Pakistan and has an integrated supply line of various
          non-food and food items and all kinds of emergency relief goods having
          good experience in export & import services.
        </p>
        {button && (
          <Button
            text="Know More"
            classname="w-fit font-bold text-base"
            navigateTo={"about"}
          />
        )}
      </div>
    </section>
  );
};

export { AboutSection };
