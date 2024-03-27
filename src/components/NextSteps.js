import React from "react";
import { Button } from "./Button";
import { Icon } from "./Icon";

const NextSteps = () => {
  return (
    <section className="grid grid-flow-col gap-16 px-16 my-20 grid-cols-10">
      <div className="flex flex-col gap-5 col-span-3 ">
        <Icon
          name="star"
          size={90}
          className={"transform rotate-6 ml-8 mb-4"}
        />
        <p className="text-white font-bold text-6xl mt-6">
          Next <span className="text-secondary">Steps</span>
        </p>
        <p className="text-white text-xl">
          We are the foremost company having a detailed background as
          Manufacturers and Emergency Relief Suppliers all over the world.
        </p>
        <Button
          text={"Contact Us Now"}
          classname={"font-bold text-base px-5 w-fit"}
          navigateTo={"contact"}
        />
      </div>
      <div className="col-span-7 mt-16">
        <img
          alt="Lint Fix"
          src={require("../assets/png/next-steps.png")}
          width={900}
          height={600}
        />
      </div>
    </section>
  );
};

export { NextSteps };
