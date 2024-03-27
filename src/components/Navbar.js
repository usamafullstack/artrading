import React from "react";
import { Button } from "./Button";

const Navbar = () => {
  const OPTIONS = ["Home", "About", "Services", "Products", "Contact"];
  return (
<<<<<<< Updated upstream
    <nav className="flex items-center justify-between px-10 mt-5 bg-primary">
      <div className="w-[80px] h-[80px] bg-teal-500"></div>
=======
    <nav className="flex items-center justify-between px-10 mt-5 bg-primary relative">
      <img
        alt="Lint Fix"
        src={require("../assets/png/logo.jpeg")}
        width={100}
        height={100}
      />
>>>>>>> Stashed changes
      <div className="flex gap-20 ">
        {OPTIONS.map((option) => {
          return (
            <a className="text-white text-xl hover:text-secondary cursor-pointer">
              {option}
            </a>
          );
        })}
      </div>
      <Button />
    </nav>
  );
};

export { Navbar };
