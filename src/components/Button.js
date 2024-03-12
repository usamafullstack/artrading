import React from "react";
import { useNavigate } from "react-router";

const Button = ({ text, classname, navigateTo }) => {
  const navigate = useNavigate();
  return (
    <button
      className={`text-white uppercase px-8 py-3 rounded-full text-lg bg-gradient-to-r from-gradient1 to-gradient2 hover:from-hover hover:to-hover ${classname}`}
      onClick={() => navigate(`/${navigateTo}`)}
      onMouseOver={() => console.log("AYA THAAA")}>
      {text}
    </button>
  );
};

export { Button };
