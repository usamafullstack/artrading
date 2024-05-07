import React from "react";

const ManpowerContent = () => {
  return (
    <div className="flex flex-col gap-10 mt-10">
      <figure className="flex items-center flex-col">
        <img
          src="/manpower-license.png"
          className="w-4/6"
        />
        <figcaption className="text-white italic">
          Government-issued license
        </figcaption>
      </figure>
      <p className="text-white text-lg font-semibold">
        We are a licensed and government recognized manpower provider all around
        the globe, having an extensive track record of providing manpower all
        over Europe and Middle East broadening our horizons to the rest of the
        World.
      </p>
      <h3 className="text-white tracking-wide text-xl">
        Get in touch with us today to meet your human resources needs!
      </h3>
    </div>
  );
};

export { ManpowerContent };
