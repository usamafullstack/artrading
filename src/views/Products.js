import React, { useMemo } from "react";
import { useLocation } from "react-router";

import { ITEMS } from "../const/data";
import { NextSteps, ImageSwiper } from "../components";
import { ServicesHero } from "../components/Services";

const Products = () => {
  const location = useLocation();
  const itemType = useMemo(
    () => location.pathname.split("/")[2].split("-")[0],
    [location]
  );
  return (
    <div>
      <ServicesHero bannerText={`${itemType} Items`} />
      <div className="w-8 h-2 bg-hover rounded-full mx-auto mt-40"></div>
      {ITEMS[itemType].map((item) => (
        <section className="my-14 mx-20 flex flex-col items-center">
          <h1 className="uppercase text-7xl text-secondary">{item.header}</h1>
          <div className="bg-grey w-16 h-[1px]" />
          <p className="text-xl w-5/6 text-center my-6 text-white">
            {item.subHeader}
          </p>
          <ImageSwiper images={item.images} />
        </section>
      ))}
      <NextSteps />
    </div>
  );
};

export { Products };
