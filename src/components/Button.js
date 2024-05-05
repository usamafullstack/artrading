import React from "react";
import { useNavigate } from "react-router";

const Button = ({ text, classname, navigateTo }) => {
  const navigate = useNavigate();
  return (
      // href={`${window.location.protocol}//${window.location.host}/${navigateTo}`
      <button
      onClick={()=>navigate(navigateTo, {replace: true})}
        className={`text-white uppercase px-8 py-3 rounded-full text-lg bg-gradient-to-r from-gradient1 to-gradient2 hover:from-hover hover:to-hover ${classname}`}>
        {text}
      </button>

  );
};

export { Button };
