import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { Button } from "./Button";
import { ROUTING_OPTIONS } from "../const/data";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <nav className="flex items-center justify-between px-10 mt-5 bg-primary">
      <img
        src={require("../assets/logo.jpeg")}
        width={100}
        height={100}
      />
      <div className="flex gap-20 ">
        {ROUTING_OPTIONS.map((option) => {
          return (
            <li
              className={`text-xl hover:text-secondary cursor-pointer list-none ${
                location.pathname === option.route
                  ? "text-secondary"
                  : "text-white"
              }`}
              onClick={() => navigate(`${option.route}`)}>
              {option.name}asdf
            </li>
          );
        })}
      </div>
      <Button text={"Contact Us"} />
    </nav>
  );
};

export { Navbar };
