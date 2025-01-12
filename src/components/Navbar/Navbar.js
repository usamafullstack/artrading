import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { Button } from "../Button";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [dropdown, showDropdown] = useState(false);
  return (
    <nav className="flex items-center justify-between px-10 mt-5 bg-primary">
      <img
        alt="Lint Fix"
        className="cursor-pointer"
        src={require("../../assets/png/logo.jpeg")}
        width={100}
        height={100}
        onClick={() => navigate("/")}
      />
      <div className="flex gap-20 ">
        <li
          className={`text-xl hover:text-secondary cursor-pointer list-none ${
            location.pathname === "/" ? "text-secondary" : "text-white"
          } ${dropdown && "text-secondary"}`}
          onClick={() => navigate("/")}
        >
          Home
        </li>
        <li
          className={`text-xl hover:text-secondary cursor-pointer list-none ${
            location.pathname === "/about" ? "text-secondary" : "text-white"
          } ${dropdown && "text-secondary"}`}
          onClick={() => navigate("/about")}
        >
          About
        </li>
        <li
          className={`text-xl hover:text-secondary cursor-pointer list-none ${
            location.pathname === "/services" ? "text-secondary" : "text-white"
          } ${dropdown && "text-secondary"}`}
          onClick={() => navigate("/services")}
        >
          Services
        </li>
        <li
          className={`text-xl relative hover:text-secondary cursor-pointer list-none ${
            location.pathname === "/fooditems" ||
            location.pathname === "/nonfooditems"
              ? "text-secondary"
              : "text-white"
          } ${dropdown && "text-secondary"}`}
          onMouseOver={() => showDropdown(true)}
          onMouseOut={() => showDropdown(false)}
        >
          Products
          <section
            className={`${
              dropdown ? "block" : "hidden"
            } bg-white text-black h-48 w-48 absolute top-7 -left-12 flex flex-col justify-evenly p-2 rounded-3xl`}
            onMouseOver={() => showDropdown(true)}
            onMouseOut={() => showDropdown(false)}
          >
            <a
              className="rounded-full hover:text-hover hover:font-bold w-full h-full text-center pt-5"
              onClick={() => navigate("/fooditems", { replace: true })}
            >
              Food Items
            </a>
            <a
              className="rounded-full hover:text-hover hover:font-bold w-full h-full text-center pt-5"
              onClick={() => navigate("/nonfooditems", { replace: true })}
            >
              Non-Food Items
            </a>
            <a
              className="rounded-full hover:text-hover hover:font-bold w-full h-full text-center pt-5"
              onClick={() => navigate("/manpower", { replace: true })}
            >
              Manpower
            </a>
          </section>
        </li>
      </div>
      <Button
        text="Contact Us"
        classname="w-fit font-bold text-base"
        navigateTo="/contact"
      />
    </nav>
  );
};

export { Navbar };
