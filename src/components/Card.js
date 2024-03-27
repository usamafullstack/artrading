import React from "react";
import { Icon } from "./Icon";
const Card = ({ text, icon, classname }) => {
  return (
    <div>
      <div
        className={`flex flex-col justify-center gap-3 w-96 py-8 px-10 text-white rounded-3xl bg-tertiary h-48 max-h-48 min-h-48 ${classname}`}>
        <Icon
          name={icon}
          size={40}
          className="ml-2"
        />
        <p className="text-3xl">{text}</p>
      </div>
    </div>
  );
};

export { Card };
