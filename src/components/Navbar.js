import React from "react";
import { Button } from "./Button";

const Navbar = () => {
  const OPTIONS = ["Home", "About", "Services", "Products", "Contact"];
  const path = window.location.pathname;
  console.log("path", path);
  return (
    <nav className="flex items-center justify-between px-10 mt-5 bg-primary">
      <div className="w-[80px] h-[80px] bg-teal-500"></div>
      <div className="flex gap-20 ">
        {OPTIONS.map((option) => {
          return (
            <a
              className={`text-white text-xl hover:text-secondary cursor-pointer ${
                path === "/"
              }`}>
              {option}
            </a>
          );
        })}
      </div>
      <Button text={"Contact Us"} />
    </nav>
  );
};

export { Navbar };
