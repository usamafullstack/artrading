import React from "react";
import { Icon } from "../Icon";

const PartnersSection = () => {
  return (
    <section className="grid lg:grid-flow-col gap-16 px-16 my-28">
      <div>
        <Icon
          name="star"
          size={50}
          className={"transform rotate-6 ml-8 mb-10"}
        />
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-1">
            <img
              alt="Lint Fix"
              src={require("../../assets/png/pointer.png")}
              height={20}
              width={20}
            />
            <p className="text-white font-bold">Partners</p>
          </div>
          <p className="text-white font-bold text-5xl lg:text-4xl mt-6">
            Our Valuable <span className="text-secondary">Customers</span>
          </p>
          <p className="text-grey text-xl">
            We feel proud to introduce our company as the one working side by
            side with the most respectable UN agencies INGOs helping the
            helpless and the needy, all over the world. We have generous and
            cordial working relationships with some of the NGOs as here under:
          </p>
          <img
            alt="Lint Fix"
            src={require("../../assets/png/companies.png")}
            width={500}
            height={500}
          />
        </div>
      </div>
      <div>
        <img
          alt="Lint Fix"
          className="w-full"
          src={require("../../assets/png/partners-section.png")}
          width={300}
          height={300}
        />
      </div>
    </section>
  );
};

export { PartnersSection };
