import React from "react";
import { Button } from "./Button";

const AboutSection = ({ isHome, button, classname }) => {
  return (
    <section
      className={`grid lg:grid-flow-col gap-16 px-16 my-28 ${classname}`}>
      <div className={`w-full h-full ${isHome && "lg:order-2"} order-first`}>
        <img
          alt="Lint Fix"
          src={require(!isHome
            ? "../assets/png/about-image.png"
            : "../assets/png/about-image-2.png")}
          height={900}
          width={900}
        />
      </div>
      <div className="w-full h-full mt-8 flex flex-col gap-8">
        <div className="flex items-center gap-1">
          <img
            alt="Lint Fix"
            src={require("../assets/png/pointer.png")}
            height={20}
            width={20}
          />
          <p className="text-white font-bold">Who we are</p>
        </div>
        <p className="font-bold text-white text-5xl lg:text-6xl">
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
            navigateTo={"/about"}
          />
        )}
      </div>
    </section>
  );
};

export { AboutSection };
