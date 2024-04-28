import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ROUTING_OPTIONS } from "../../const/data";
import { Icon } from "../Icon";

const MobileNav = ({ closeNav }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [dropdown, showDropdown] = useState(false);
  const navigateToScreen = (screenName) => {
    navigate(screenName);
    closeNav();
  };
  return (
    <section className="mt-10 mx-4">
      <div className="flex flex-col gap-20 ">
        {ROUTING_OPTIONS.map((option) => {
          return (
            <li
              key={option.route}
              className={`text-xl hover:text-secondary cursor-pointer list-none ${
                location.pathname.split("/")[2] === "/" + option.route
                  ? "text-secondary"
                  : "text-white"
              }`}
              onClick={() =>
                option.name !== "Products"
                  ? navigateToScreen(option.route)
                  : showDropdown(!dropdown)
              }>
              {option.name !== "Products" ? (
                <p className={``}>{option.name}</p>
              ) : (
                <>
                  <div className="flex items-center justify-between">
                    <p>{option.name}</p>
                    <Icon
                      name="chevronDown"
                      color="white"
                    />
                  </div>
                  {dropdown && (
                    <div className="flex flex-col mx-10 pt-6 gap-5 -mb-10">
                      <a
                        className={`${
                          location.pathname === "/fooditems"
                            ? "text-secondary"
                            : "text-white"
                        }`}
                        href={`${window.location.protocol}//${window.location.host}/fooditems`}>
                        Food Items
                      </a>
                      <a
                        className={`${
                          location.pathname === "/nonfooditems"
                            ? "text-secondary"
                            : "text-white"
                        }`}
                        href={`${window.location.protocol}//${window.location.host}/nonfooditems`}>
                        Non-Food Items
                      </a>
                    </div>
                  )}
                </>
              )}
            </li>
          );
        })}
      </div>
    </section>
  );
};

export { MobileNav };
