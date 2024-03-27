import React from "react";
import { Card } from "./Card";
import { HOME_CARDS } from "../const/data";
import { Button } from "./Button";

const Cards = ({ isHomePage }) => {
  return (
    <section className="bg-primary py-10">
      <div className="text-center">
        <div className="flex items-center gap-1 justify-center">
          <img
            src={require("../assets/png/pointer.png")}
            height={20}
            width={20}
          />
          <p className="text-white font-bold">
            {isHomePage ? "Industries" : "Our Services"}
          </p>
        </div>
        <p className="text-white font-bold text-6xl mt-6">
          These Are The <span className="text-secondary">Services</span> <br />{" "}
          We Serve To You
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 my-10 mx-20">
        {HOME_CARDS.map((cardData) => (
          <Card
            text={cardData.text}
            icon={cardData.icon}
            classname={"my-5"}
          />
        ))}
      </div>
      {isHomePage && (
        <div className="flex justify-center ">
          <Button
            text="See all services we provide"
            classname={"w-fit font-bold text-base"}
            navigateTo={"services"}
          />
        </div>
      )}
    </section>
  );
};

export { Cards };
