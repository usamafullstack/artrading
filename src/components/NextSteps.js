import React from "react";
import { Button } from "./Button";
import { Icon } from "./Icon";

const NextSteps = () => {
  return (
    <section className="flex flex-col lg:flex-row lg:gap-16 px-16 my-20">
      <Icon
        name="star"
        size={90}
        className={"transform rotate-6 ml-8 mb-4"}
      />
      <div className="flex flex-col gap-5 ">
        <p className="text-white font-bold text-5xl mt-6">
          Next <span className="text-secondary">Steps</span>
        </p>
        <p className="text-white">
          We are the foremost company having a detailed background as
          Manufacturers and Emergency Relief Suppliers all over the world.
        </p>
        <Button
          text={"Contact Us Now"}
          classname={"font-bold text-base px-5 w-fit"}
          navigateTo={"contact"}
        />
      </div>
      <div className="mt-16 lg:mt-0">
        <img
          alt="Lint Fix"
          src={require("../assets/png/next-steps.png")}
          width={900}
          className="w-full"
          height={600}
        />
      </div>
    </section>
  );
};

export { NextSteps };
