import React from "react";

const ImageCard = ({ image, name, designation }) => {
  return (
    <div className="flex flex-col justify-center items-center my-10 w-96 p-8 text-white rounded-3xl bg-tertiary">
      <div className="bg-gradient-to-r from-gradient1 to-gradient2 w-fit rounded-full overflow-hidden">
        <img
          src={require(`../../assets/png/professionals/0${image}.png`)}
          width={150}
        />
      </div>
      <div className="">
        <h1 className="text-center text-3xl">{name}</h1>
        <p className="text-center text-secondary">{designation}</p>
      </div>
    </div>
  );
};

export { ImageCard };
