import React from "react";

const ServicesHero = () => {
  return (
    <section className="flex items-center my-16">
      <div className="text-white">
        <div className="flex items-center gap-1">
          <img
            alt="Lint Fix"
            src={require("../../assets/png/pointer.png")}
            height={20}
            width={20}
          />
          <p className="font-bold">See What We're Doing from Time to Time</p>
        </div>
        <h2 className="text-6xl">
          We Make Sure People <br /> Will Remember It.
        </h2>
        <p className="text-grey text-xl">
          One thing remains constant in today’s dynamic global business market.
        </p>
        <div className="mt-24 ml-10 opacity-70">
          <img
            alt="Lint Fix"
            src={require("../../assets/png/red-star.png")}
            height={50}
            width={50}
          />
        </div>
      </div>
      <div className="ml-40">
        <img
          alt="Lint Fix"
          src={require("../../assets/png/services-hero.png")}
          height={600}
          width={600}
        />
      </div>
    </section>
  );
};

export { ServicesHero };
