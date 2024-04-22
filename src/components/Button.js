import React from "react";

const Button = ({ text, classname, navigateTo }) => {
  return (
    <a
      href={`${window.location.protocol}//${window.location.host}/${navigateTo}`}>
      <button
        className={`text-white uppercase px-8 py-3 rounded-full text-lg bg-gradient-to-r from-gradient1 to-gradient2 hover:from-hover hover:to-hover ${classname}`}>
        {text}
      </button>
    </a>
  );
};

export { Button };
