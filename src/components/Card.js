import React from "react";
const Card = ({ text, icon }) => {
  return (
    <div>
      <div className="w-72 py-24 text-white rounded-3xl bg-tertiary my-8 ">
        {text} {icon}
      </div>
    </div>
  );
};

export { Card };
