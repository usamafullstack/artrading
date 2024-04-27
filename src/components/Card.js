import React from "react";

const Card = ({ order, text, subText, image, classname }) => {
  return (
    <>
      <section
        className={`flex lg:hidden flex-col justify-between w-screen mt-16 mb-16 gap-10 px-12 items-center py-10 text-white rounded-3xl bg-tertiary ${classname}`}>
        <div className="basis-full">
          <img
            src={image}
            height={400}
            width={500}
            alt="Lint Fix"
            className="rounded-2xl"
          />
        </div>
        <div className="basis-full">
          <h1 className="text-4xl text-secondary text-left">{text}</h1>
          <p className="text-lg text-left">{subText}</p>
        </div>
      </section>
      <section
        className={`hidden lg:flex justify-between w-5/6 mt-16 mb-16 gap-10 px-12 items-center py-10 text-white rounded-3xl bg-tertiary ${classname}`}>
        {order % 2 !== 0 ? (
          <>
            <div className="basis-full">
              <h1 className="text-4xl text-secondary">{text}</h1>
              <p className="text-lg">{subText}</p>
            </div>
            <div className="basis-full">
              <img
                src={image}
                height={400}
                width={500}
                alt="Lint Fix"
                className="rounded-2xl"
              />
            </div>
          </>
        ) : (
          <>
            <div className="basis-full">
              <img
                src={image}
                height={400}
                width={500}
                alt="Lint Fix"
                className="rounded-2xl"
              />
            </div>
            <div className="basis-full">
              <h1 className="text-4xl text-secondary text-right">{text}</h1>
              <p className="text-lg text-right">{subText}</p>
            </div>
          </>
        )}
      </section>
    </>
  );
};

export { Card };
