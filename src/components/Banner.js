import React from "react";

const Banner = ({ bannerText }) => {
  return (
    <div className="marquee-container mt-10 h-10 bg-hover w-full font-roboto text-2xl flex items-center justify-center">
      <div className="marquee-content max-width2 mx-auto flex items-center justify-between gap-12 w-full text-nowrap">
        <p className="text-primary font-bold ">{bannerText}</p>
      </div>
    </div>
  );
};

export { Banner };
