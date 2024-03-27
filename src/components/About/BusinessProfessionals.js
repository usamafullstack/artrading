import React from "react";
import { ImageCard } from "./ImageCard";

const BusinessProfessionals = () => {
  const PROFESSIONALS = [
    { name: "Mehtab Rahman", designation: "Chief Executive" },
    { name: "Rabia Iqbal", designation: "Managing Director" },
    { name: "Dr. Ilyas", designation: "Regional Head" },
    { name: "Khalil", designation: "Director Production" },
    { name: "Shahrukh", designation: "Operations Manager" },
    { name: "Qasim Khattak", designation: "Operations Manager" },
    { name: "Wahab Khattak", designation: "Director Finance" },
  ];
  return (
    <section>
      <div className="flex flex-col items-center text-center">
        <div className="flex items-center gap-1">
          <img
            src={require("../../assets/png/pointer.png")}
            height={20}
            width={20}
          />
          <p className="text-white font-bold">Our Professionals</p>
        </div>
        <h2 className="text-7xl text-white">
          Meet Our Business{" "}
          <span className="text-secondary block">Professionals</span>
        </h2>
        <p className="text-grey text-2xl w-5/12">
          This team will help you to make your dream come true and will guide
          you from the very beginning
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 my-10 mx-20">
        {[1, 2, 3, 4, 5, 6, 7].map((x, i) => (
          <ImageCard
            image={x}
            name={PROFESSIONALS[i].name}
            designation={PROFESSIONALS[i].designation}
          />
        ))}
      </div>
    </section>
  );
};

export { BusinessProfessionals };
