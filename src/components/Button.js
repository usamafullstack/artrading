import React from "react";

const Button = ({ text }) => {
  return (
    <button className="text-white uppercase px-8 py-3 rounded-full text-lg bg-gradient-to-r from-gradient1 to-gradient2 hover:from-hover hover:to-hover">
      {text}
    </button>
  );
};

export { Button };
