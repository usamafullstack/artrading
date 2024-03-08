import React from "react";
import { Card } from "../Card";
import { HOME_CARDS } from "../../const/data";

const Cards = () => {
  return (
    <div className="bg-primary py-10">
      <div className="grid grid-cols-2 md:grid-cols-3 my-24 mx-20">
        {HOME_CARDS.map((cardData) => (
          <Card
            text={cardData.text}
            icon={cardData.icon}
            classname={"my-5"}
          />
        ))}
      </div>
    </div>
  );
};

export { Cards };
