import React, { useState } from "react";
import { Card } from "./Card";
import { BasicModal } from "./BasicModal";
import { HOME_CARDS } from "../const/data";
import { Button } from "./Button";

const Cards = ({ isHomePage }) => {
  return (
    <section className="bg-primary py-10 mx-10">
      <div className="text-center">
        <div className="flex items-center gap-1 justify-center">
          <img
            alt="Lint Fix"
            src={require("../assets/png/pointer.png")}
            height={20}
            width={20}
          />
          <p className="text-white font-bold">
            {isHomePage ? "Industries" : "Our Services"}
          </p>
        </div>
        <p className="text-white font-bold text-5xl mt-6">
          These Are The <span className="text-secondary">Services</span> <br />{" "}
          We Serve To You
        </p>
      </div>
      <div className="my-10 flex flex-col items-center">
        {HOME_CARDS.map((cardData, i) => (
          <Card
            order={i}
            text={cardData.text}
            subText={cardData.subText}
            image={cardData.image}
            page={cardData.page}
            classname={"my-5 cursor-pointer"}
            // open={open}
            // modalOpen={() => setOpen(true)}
            // modalClose={() => setOpen(false)}
          />
        ))}
      </div>
      {isHomePage && (
        <div className="flex justify-center ">
          <Button
            text="See all services we provide"
            classname={"w-fit font-bold text-base"}
            navigateTo={"/services"}
          />
        </div>
      )}
    </section>
  );
};

export { Cards };
