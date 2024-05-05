import React from "react";
import { ITEMS } from "../const/data";
import { NextSteps, ImageSwiper, Banner } from "../components";
import { ServicesHero } from "../components/Services";

const Food = () => {
  return (
    <div>
      <ServicesHero bannerText={`Food Items`} />
      <Banner
        bannerText="Packaging of the product can be as per your needs. Contact us for
          further details."
      />
      {ITEMS["food"].map((item) => (
        <section className="my-14 mx-20 flex flex-col items-center">
          <h1 className="uppercase text-7xl text-secondary">{item.header}</h1>
          <div className="bg-grey w-16 h-[1px]" />
          <p className="text-xl w-5/6 text-center my-6 text-white">
            {item.subHeader}
          </p>
          <ImageSwiper images={item.images} />
        </section>
      ))}
      <div className="w-8 h-2 bg-hover rounded-full mx-auto mt-20"></div>
      <NextSteps />
    </div>
  );
};

export { Food };
