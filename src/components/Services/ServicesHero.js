import React from "react";

const ServicesHero = ({ bannerText }) => {
  return (
    <section className="flex items-center">
      {bannerText && bannerText > "" ? (
        <div className="text-white basis-full">
          <h2 className="text-6xl uppercase tracking-wide font-semibold">
            <span className="text-secondary">{bannerText.split(" ")[0]}</span>{" "}
            {bannerText.split(" ")[1]}
          </h2>
        </div>
      ) : (
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
          <h2 className="text-5xl">
            We Make Sure People <br /> Will Remember It.
          </h2>
          <p className="text-grey text-xl">
            One thing remains constant in today’s dynamic global business
            market.
          </p>
        </div>
      )}
      <div className="ml-40 basis-full">
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
