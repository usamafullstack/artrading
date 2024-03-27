import React, { useMemo } from "react";
import { useLocation } from "react-router";
import { ITEMS } from "../const/data";

import { NextSteps } from "../components/NextSteps";

const Products = () => {
  const location = useLocation();
  const itemType = useMemo(
    () => location.pathname.split("/")[2].split("-")[0],
    [location]
  );
  console.log("itemType", itemType);
  return (
    <div>
      {ITEMS[itemType].map((item) => (
        <section className="my-14 mx-20 flex flex-col items-center">
          <h1 className="uppercase text-7xl text-secondary">{item.header}</h1>
          <div className="bg-grey w-16 h-[1px]" />
          <p className="text-xl w-5/6 text-center my-6 text-white">
            {item.subHeader}
          </p>
          <div className="flex gap-10">
            <img
              alt="Lint Fix"
              src={item.images[0]}
            />
            <img
              alt="Lint Fix"
              src={item.images[1]}
            />
            <img
              alt="Lint Fix"
              src={item.images[2]}
            />
          </div>
        </section>
      ))}
      <NextSteps />
    </div>
  );
};

export { Products };
