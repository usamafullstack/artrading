import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { Button } from "../Button";
import { ROUTING_OPTIONS } from "../../const/data";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [dropdown, showDropdown] = useState(false);
  return (
    <nav className="flex items-center justify-between px-10 mt-5 bg-primary relative">
      <img
        alt="Lint Fix"
        className="cursor-pointer"
        src={require("../../assets/png/logo.jpeg")}
        width={100}
        height={100}
        onClick={() => navigate("/")}
      />
      <div className="flex gap-20 ">
        {ROUTING_OPTIONS.map((option) => {
          return (
            <li
              key={option.route}
              className={`text-xl hover:text-secondary cursor-pointer list-none ${
                location.pathname === option.route
                  ? "text-secondary"
                  : "text-white"
              } ${dropdown && "text-secondary"}`}
              onMouseOver={() =>
                option.name === "Products" && showDropdown(true)
              }
              onMouseOut={() =>
                option.name === "Products" && showDropdown(false)
              }
              onClick={() =>
                option.name !== "Products" && navigate(`${option.route}`)
              }>
              {option.name}
            </li>
          );
        })}
      </div>
      {dropdown && (
        <section
          className="bg-white text-black h-32 w-48 absolute right-[435px] top-16 flex flex-col justify-evenly p-2 rounded-3xl"
          onMouseOver={() => showDropdown(true)}
          onMouseOut={() => showDropdown(false)}>
          <a
            className="rounded-full hover:text-hover hover:font-bold w-full h-full text-center pt-5"
            // href={`${window.location.protocol}//${window.location.host}/fooditems`}
            onClick={() => navigate("fooditems", { replace: true })}>
            Food Items
          </a>
          <a
            className="rounded-full hover:text-hover hover:font-bold w-full h-full text-center pt-5"
            // href={`${window.location.protocol}//${window.location.host}/nonfooditems`}
            onClick={() => navigate("nonfooditems", { replace: true })}>
            Non-Food Items
          </a>
        </section>
      )}
      <Button
        text={"Contact Us"}
        navigateTo={"contact"}
      />
    </nav>
  );
};

export { Navbar };
